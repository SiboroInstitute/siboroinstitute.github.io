/* VimeoPlayer - v2.1.14 - 2013-11-05 */
(function(m, u, P) {
	for (var Kb, Lb, Mb, Nb, kb, lb, ia, Ua, $, Va, Ob, Pb = ["webkit", "moz"], mb = 0; mb < Pb.length && !m.requestAnimationFrame; ++mb) {
		var nb = Pb[mb];
		m.requestAnimationFrame = m[nb + "RequestAnimationFrame"];
		m.cancelAnimationFrame = m[nb + "CancelAnimationFrame"] || m[nb + "CancelRequestAnimationFrame"]
	}
	if (/iP(ad|hone|od).*OS 6/.test(m.navigator.userAgent) || !m.requestAnimationFrame || !m.cancelAnimationFrame) m.requestAnimationFrame = function(a) {
		return setTimeout(a, 0)
	}, m.cancelAnimationFrame = clearTimeout;
	!Object.defineProperty && Object.prototype.__defineGetter__ && (Object.defineProperty = function(a, b, c) {
		"get" in c && a.__defineGetter__(b, c.get);
		"set" in c && a.__defineSetter__(b, c.set);
		!c.get && !c.set && (a[b] = c.value)
	});
	!Object.defineProperties && Object.defineProperty && (Object.defineProperties = function(a, b) {
		for (var c in b) try {
			Object.defineProperty(a, c, b[c])
		} catch (d) {
			"'enumerable' attribute on the property descriptor cannot be set to 'true' on this object" === d.message && (b[c].enumerable = !1, Object.defineProperty(a, c, b[c]))
		}
		return a
	});
	!Object.create && Object.defineProperty && (Object.create = function(a, b) {
		function c() {}
		if ("object" !== typeof a && "function" !== typeof a) throw new TypeError("Object prototype may only be an Object or null");
		c.prototype = a;
		var d = new c;
		d.__proto__ = a;
		void 0 !== b && Object.defineProperties(d, b);
		return d
	});
	Object.keys || (Object.keys = function(a) {
		if ("object" !== typeof a && "function" !== typeof a || null === a) throw new TypeError("Object.keys called on a non-object");
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b
	});
	Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
		for (var b = 0, c = this.length; b < c; b++) if (b in this && this[b] === a) return b;
		return -1
	});
	!("classList" in u.documentElement) && (Object.defineProperty && "undefined" !== typeof HTMLElement) && Object.defineProperty(HTMLElement.prototype, "classList", {
		get: function() {
			function a(a) {
				return function(c) {
					var d = b.className.split(/\s+/),
						f = d.indexOf(c);
					a(d, f, c);
					b.className = d.join(" ")
				}
			}
			var b = this,
				c = {
					add: a(function(a, b, c) {
						return ~b || a.push(c)
					}),
					remove: a(function(a, b) {
						return ~b && a.splice(b, 1)
					}),
					toggle: a(function(a, b, c) {
						return ~b ? a.splice(b, 1) : a.push(c)
					}),
					contains: function(a) {
						return !!~b.className.split(/\s+/).indexOf(a)
					},
					item: function(a) {
						return b.className.split(/\s+/)[a] || null
					}
				};
			Object.defineProperty(c, "length", {
				get: function() {
					return b.className.split(/\s+/).length
				}
			});
			return c
		}
	});
	var ob = m,
		C = u,
		Ca = self !== top,
		Qb = function(a) {
			var b = null;
			"VIDEO" === a.tagName ? b = a : (a = a.getElementsByTagName("video"), a[0] && (b = a[0]));
			return b
		},
		Rb = function(a) {
			var b = Qb(a);
			if (b && b.webkitEnterFullscreen) {
				try {
					b.readyState < b.HAVE_METADATA ? (b.addEventListener("loadedmetadata", function k() {
						b.removeEventListener("loadedmetadata", k, !1);
						b.webkitEnterFullscreen();
						Wa = !! b.getAttribute("controls")
					}, !1), b.load()) : (b.webkitEnterFullscreen(), Wa = !! b.getAttribute("controls")), X = b
				} catch (c) {
					return Pa("not_supported", a)
				}
				return !0
			}
			return Pa(v.request === P ? "not_supported" : "not_enabled", a)
		},
		Tb = function() {
			D.element || (Xa(), Sb())
		},
		Sb = function() {
			Ca && "webkitfullscreenchange" === v.change && ob.removeEventListener("resize", Tb, !1)
		},
		Lc = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		Mc = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && 7 <= parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10),
		v, Nc = C.createElement("video"),
		Da = {
			request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
			exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
			enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
			element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
			change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
			error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
		},
		Ub = {},
		ja;
	for (ja in Da) for (var Ea = 0, Oc = Da[ja].length; Ea < Oc; Ea++) if (Da[ja][Ea] in Nc || Da[ja][Ea] in C || "on" + Da[ja][Ea] in C) {
		Ub[ja] = Da[ja][Ea];
		break
	}
	v = Ub;
	var X = null,
		Wa = null,
		Q = function() {},
		I = [],
		Vb = -1 < navigator.userAgent.indexOf("Android") && -1 < navigator.userAgent.indexOf("Chrome"),
		Wb = function(a) {
			var b = I[I.length - 1];
			if (!(a === b.element || a === X) || !b.hasEntered) {
				"VIDEO" === a.tagName && (X = a);
				if (1 === I.length) D.onenter(D.element);
				b.enter.call(b.element, a || b.element);
				b.hasEntered = !0
			}
		},
		Xa = function() {
			X && (!Wa && !Mc) && (X.setAttribute("controls", "controls"), X.removeAttribute("controls"));
			Wa = X = null;
			var a = I.pop();
			a && (a.exit.call(a.element), D.element || (I.forEach(function(a) {
				a.exit.call(a.element)
			}), I = [], D.onexit()))
		},
		Pa = function(a, b) {
			if (0 < I.length) {
				var c = I.pop();
				b = b || c.element;
				c.error.call(b, a);
				D.onerror(b, a)
			}
		},
		D = {
			request: function(a, b, c, d) {
				a = a || C.body;
				I.push({
					element: a,
					enter: b || Q,
					exit: c || Q,
					error: d || Q
				});
				if (v.request === P || Ca && !1 === C[v.enabled] || Vb) return Rb(a);
				if (Ca && v.enabled === P) v.enabled = "webkitFullscreenEnabled", a[v.request](), setTimeout(function() {
					C[v.element] ? C[v.enabled] = !0 : (C[v.enabled] = !1, Rb(a))
				}, 250);
				else try {
					if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) a[v.request]();
					else a[v.request](Lc && Element.ALLOW_KEYBOARD_INPUT);
					setTimeout(function() {
						C[v.element] || Pa(Ca ? "not_enabled" : "not_allowed", a)
					}, 100)
				} catch (k) {
					Pa("not_enabled", a)
				}
			},
			exit: function() {
				Sb();
				C[v.exit]()
			},
			toggle: function(a, b, c, d) {
				D.element ? D.exit() : D.request(a, b, c, d)
			},
			videoEnabled: function(a) {
				if (D.enabled) return !0;
				a = a || C.body;
				a = Qb(a);
				return !a || a.webkitSupportsFullscreen === P ? !1 : a.readyState < a.HAVE_METADATA ? "maybe" : a.webkitSupportsFullscreen
			},
			onenter: Q,
			onexit: Q,
			onchange: Q,
			onerror: Q
		};
	try {
		Object.defineProperties(D, {
			element: {
				enumerable: !0,
				get: function() {
					return X && X.webkitDisplayingFullscreen ? X : C[v.element] || null
				}
			},
			enabled: {
				enumerable: !0,
				get: function() {
					return "webkitCancelFullScreen" === v.exit && !Ca ? !0 : Vb ? !1 : C[v.enabled] || !1
				}
			}
		})
	} catch (yd) {
		D.element = null, D.enabled = !1
	}
	v.change && C.addEventListener(v.change, function() {
		D.onchange(D.element);
		if (D.element) {
			var a = I[I.length - 2];
			a && a.element === D.element ? Xa() : (Wb(D.element), Ca && "webkitfullscreenchange" === v.change && ob.addEventListener("resize", Tb, !1))
		} else Xa()
	}, !1);
	C.addEventListener("webkitbeginfullscreen", function(a) {
		I.push({
			element: a.srcElement,
			enter: Q,
			exit: Q,
			error: Q
		});
		D.onchange(a.srcElement);
		Wb(a.srcElement)
	}, !0);
	C.addEventListener("webkitendfullscreen", function(a) {
		D.onchange(a.srcElement);
		Xa(a.srcElement)
	}, !0);
	v.error && C.addEventListener(v.error, function() {
		Pa("not_allowed")
	}, !1);
	ob.BigScreen = D;
	var R, E = function() {
			var a = arguments;
			if (1 === a.length && a[0] instanceof E) return a = a[0], this.red = a.red, this.green = a.green, this.blue = a.blue, this.alpha = a.alpha, this.hue = a.hue, this.saturation = a.saturation, this.lightness = a.lightness, this;
			if (1 === a.length) {
				if ("string" === typeof a[0] && 0 <= a[0].indexOf("rgb")) {
					a = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d\.]+))?\)/.exec(a[0]);
					if (!a) throw Error("Invalid rgb value");
					this.rgba = {
						red: parseInt(a[1], 10),
						green: parseInt(a[2], 10),
						blue: parseInt(a[3], 10),
						alpha: parseFloat(a[5]) || 1
					}
				} else {
					var b = a[0] + "",
						b = b.replace("#", "");
					if (!("string" === typeof b && (3 === b.length || 6 === b.length) && !isNaN(parseInt(b, 16)))) throw Error("Invalid hex value");
					this.hex = a[0]
				}
				return this
			}
			if (3 === a.length || 4 === a.length) {
				for (b = 0; 3 > b; b++) if (isNaN(parseInt(a[b], 10)) || 0 > parseInt(a[b], 10) || 255 < parseInt(a[b], 10)) throw Error("Invalid rgb value");
				if (a[3] && 0 > parseFloat(a[3]) || 1 < parseFloat(a[3])) throw Error("Invalid alpha value");
				this.rgba = {
					red: a[0],
					green: a[1],
					blue: a[2],
					alpha: parseFloat(a[3]) || 1
				};
				return this
			}
			throw Error("Invalid color");
		};
	E.prototype = {
		get complement() {
			var a = this.clone();
			a.rgb = {
				red: 255 - this.red,
				green: 255 - this.green,
				blue: 255 - this.blue
			};
			return a
		}, get hex() {
			return E.rgbToHex(this.red, this.green, this.blue)
		}, set hex(a) {
			this.rgba = E.hexToRgb(a);
			return this
		}, get hsl() {
			return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
		}, set hsl(a) {
			this.hue = a.hue;
			this.saturation = a.saturation;
			this.lightness = a.lightness;
			a = E.hslToRgb(a.hue, a.saturation, a.lightness);
			this.red = a.red;
			this.green = a.green;
			this.blue = a.blue;
			this.alpha = a.alpha;
			return this
		}, get luminance() {
			function a(a) {
				return 0.03928 >= a ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
			}
			var b = a(this.red / 255),
				c = a(this.green / 255),
				d = a(this.blue / 255);
			return 0.2126 * b + 0.7152 * c + 0.0722 * d
		}, get rgb() {
			return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
		}, set rgb(a) {
			this.rgba = a;
			return this
		}, get rgba() {
			return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
		}, set rgba(a) {
			this.red = a.red;
			this.green = a.green;
			this.blue = a.blue;
			this.alpha = a.alpha || 1;
			a = E.rgbToHsl(a.red, a.green, a.blue);
			this.hue = a.hue;
			this.saturation = a.saturation;
			this.lightness = a.lightness;
			return this
		}, get yiq() {
			return (299 * this.red + 587 * this.green + 114 * this.blue) / 1E3
		}, clone: function() {
			return new E(this)
		},
		lighten: function(a, b, c) {
			this.hsl = {
				hue: this.hue,
				saturation: this.saturation,
				lightness: this.lightness + a
			};
			if (b && c) for (a = c.contrast(this).ratio; a < b && !(this.lighten(5), a = c.contrast(this).ratio, 100 <= this.lightness););
			return this
		},
		darken: function(a, b, c) {
			this.hsl = {
				hue: this.hue,
				saturation: this.saturation,
				lightness: this.lightness - a
			};
			if (b && c) for (a = c.contrast(this).ratio; a < b && !(this.darken(5), a = c.contrast(this).ratio, 0 >= this.lightness););
			return this
		},
		overlayOn: function(a) {
			if (1 <= this.alpha) return this;
			var b = this.clone();
			b.rgba = {
				red: b.red * this.alpha + a.red * a.alpha * (1 - this.alpha),
				green: b.green * this.alpha + a.green * a.alpha * (1 - this.alpha),
				blue: b.blue * this.alpha + a.blue * a.alpha * (1 - this.alpha),
				alpha: b.alpha + a.alpha * (1 - this.alpha)
			};
			return b
		},
		contrast: function(a) {
			var b = this.alpha;
			if (1 <= b) {
				1 > a.alpha && (a = a.overlayOn(this));
				var c = this.luminance + 0.05;
				a = a.luminance + 0.05;
				var d = c / a;
				a > c && (d = 1 / d);
				d = Math.round(10 * d) / 10;
				return {
					ratio: d,
					error: 0,
					min: d,
					max: d
				}
			}
			var d = this.overlayOn(E.white).contrast(a).ratio,
				c = this.overlayOn(E.black).contrast(a).ratio,
				d = Math.max(d, c),
				k = {
					red: Math.min(Math.max(0, (a.red - this.red * b) / (1 - b)), 255),
					green: Math.min(Math.max(0, (a.green - this.green * b) / (1 - b)), 255),
					blue: Math.min(Math.max(0, (a.blue - this.blue * b) / (1 - b)), 255)
				},
				b = this.clone();
			b.rgb = k;
			a = this.overlayOn(b).contrast(a).ratio;
			return {
				ratio: Math.round(10 * ((a + d) / 2)) / 10,
				error: Math.round(10 * ((d - a) / 2)) / 10,
				min: a,
				max: d,
				closest: b,
				farthest: c === d ? E.white : E.black
			}
		},
		wcagAACompliant: function(a) {
			return 4.5 <= this.contrast(a).ratio
		},
		wcagAAACompliant: function(a) {
			return 7 <= this.contrast(a).ratio
		},
		yiqContrastColor: function() {
			return 120 <= this.yiq ? new E(0, 0, 0) : new E(255, 255, 255)
		}
	};
	E.hexToRgb = function(a) {
		a += "";
		if (3 === a.length || 4 === a.length) {
			if (a = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(a)) a[1] += a[1], a[2] += a[2], a[3] += a[3]
		} else a = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(a);
		return a ? {
			red: parseInt(a[1], 16),
			green: parseInt(a[2], 16),
			blue: parseInt(a[3], 16),
			alpha: 1
		} : null
	};
	E.rgbToHex = function(a, b, c) {
		return "#" + (16777216 + (Math.round(a) << 16) + (Math.round(b) << 8) + Math.round(c)).toString(16).slice(1)
	};
	E.rgbToHsl = function(a, b, c) {
		a /= 255;
		b /= 255;
		c /= 255;
		var d = Math.max(a, b, c),
			k = Math.min(a, b, c),
			j = (d + k) / 2,
			f = j,
			h = j;
		if (d === k) return {
			hue: 0,
			saturation: 0,
			lightness: 100 * h
		};
		var n = d - k,
			f = 0.5 < h ? n / (2 - d - k) : n / (d + k);
		d === a ? j = (b - c) / n + (b < c ? 6 : 0) : d === b ? j = (c - a) / n + 2 : d === c && (j = (a - b) / n + 4);
		return {
			hue: Math.round(360 * (j / 6)),
			saturation: Math.round(100 * f),
			lightness: Math.round(100 * h)
		}
	};
	E.hslToRgb = function(a, b, c) {
		function d(a, b, c) {
			0 > c && (c += 1);
			1 < c && (c -= 1);
			return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * 6 * (2 / 3 - c) : a
		}
		a /= 360;
		b /= 100;
		c /= 100;
		if (0 === b) return {
			red: Math.floor(255 * c),
			green: Math.floor(255 * c),
			blue: Math.floor(255 * c)
		};
		b = 0.5 > c ? c * (1 + b) : c + b - b * c;
		c = 2 * c - b;
		return {
			red: Math.floor(255 * d(c, b, a + 1 / 3)),
			green: Math.floor(255 * d(c, b, a)),
			blue: Math.floor(255 * d(c, b, a - 1 / 3))
		}
	};
	E.hslToHex = function(a, b, c) {
		a = E.hslToRgb(a, b, c);
		return E.rgbToHex(a.red, a.green, a.blue)
	};
	E.white = new E("fff");
	E.black = new E("000");
	R = E;
	var pb = {
		make: function(a) {
			a = a || {};
			var b = {};
			a.on = function(c, d) {
				c = [].concat(c);
				for (var k = 0, j = c.length; k < j; k++) {
					var f = c[k];
					f && (b[f] || (b[f] = []), b[f].push(d))
				}
				return a
			};
			a.once = function(b, d) {
				function k() {
					d.apply(a.off(b, k), arguments)
				}
				k.handler = d;
				return a.on(b, k)
			};
			a.off = function(c, d) {
				c = [].concat(c);
				for (var k = 0, j = c.length; k < j; k++) {
					var f = c[k];
					if (f && f in b) {
						var h = b[f].indexOf(d);
						if (-1 === h) {
							for (var n = 0, H = b[f].length; n < H; n++) if (b[f][n].handler === d) {
								h = k;
								break
							}
							if (-1 === h) break
						}
						b[f].splice(h, 1)
					}
				}
				return a
			};
			a.fire = function(c) {
				if (!c) return a;
				if (c in b) for (var d = b[c].slice(0), k = 0, j = d.length; k < j; k++) d[k].apply(a, d.slice.call(arguments, 1));
				return a
			};
			return a
		}
	},
		Xb = function(a, b, c) {
			if ("_root" == b) return c;
			if (a !== c) {
				var d;
				ga || (a.matches && (ga = a.matches), a.webkitMatchesSelector && (ga = a.webkitMatchesSelector), a.mozMatchesSelector && (ga = a.mozMatchesSelector), a.msMatchesSelector && (ga = a.msMatchesSelector), a.oMatchesSelector && (ga = a.oMatchesSelector), ga || (ga = S.matchesSelector));
				d = ga;
				if (d.call(a, b)) return a;
				if (a.parentNode) return Qa++, Xb(a.parentNode, b, c)
			}
		},
		Yb = function(a, b, c, d) {
			function k(a) {
				return function(b) {
					a: {
						var c = j;
						if (w[c][a]) {
							var d = b.target || b.srcElement,
								f, g, h = {},
								H = g = 0;
							Qa = 0;
							for (f in w[c][a]) if (w[c][a].hasOwnProperty(f) && (g = Xb(d, f, ca[c].element)) && S.matchesEvent(a, ca[c].element, g, "_root" == f, b)) Qa++, w[c][a][f].match = g, h[Qa] = w[c][a][f];
							b.stopPropagation = function() {
								b.cancelBubble = !0
							};
							for (g = 0; g <= Qa; g++) if (h[g]) for (H = 0; H < h[g].length; H++) {
								if (!1 === h[g][H].call(h[g].match, b)) {
									S.cancel(b);
									break a
								}
								if (b.cancelBubble) break a
							}
						}
					}
				}
			}
			if (this.element) {
				a instanceof Array || (a = [a]);
				!c && "function" == typeof b && (c = b, b = "_root");
				var j = this.id,
					f;
				for (f = 0; f < a.length; f++) if (d) {
					var h = a[f],
						n = b,
						H = c;
					if (w[this.id]) if (h) if (!H && !n) w[this.id][h] = {};
					else if (H) {
						if (w[this.id][h][n]) for (var Y = 0; Y < w[this.id][h][n].length; Y++) if (w[this.id][h][n][Y] === H) {
							w[this.id][h][n].splice(Y, 1);
							break
						}
					} else delete w[this.id][h][n];
					else for (h in h = void 0, w[this.id]) w[this.id].hasOwnProperty(h) && (w[this.id][h] = {})
				} else(!w[j] || !w[j][a[f]]) && S.addEvent(this, a[f], k(a[f])), h = a[f], n = b, H = c, w[this.id] || (w[this.id] = {}), w[this.id][h] || (w[this.id][h] = {}), w[this.id][h][n] || (w[this.id][h][n] = []), w[this.id][h][n].push(H);
				return this
			}
		},
		S = function(a, b) {
			if (!(this instanceof S)) {
				for (var c in ca) if (ca[c].element === a) return ca[c];
				Ya++;
				ca[Ya] = new S(a, Ya);
				return ca[Ya]
			}
			this.element = a;
			this.id = b
		},
		ga, Qa = 0,
		Ya = 0,
		w = {},
		ca = {};
	S.prototype.on = function(a, b, c) {
		return Yb.call(this, a, b, c)
	};
	S.prototype.off = function(a, b, c) {
		return Yb.call(this, a, b, c, !0)
	};
	S.matchesSelector = function() {};
	S.cancel = function(a) {
		a.preventDefault();
		a.stopPropagation()
	};
	S.addEvent = function(a, b, c) {
		a.element.addEventListener(b, c, "blur" == b || "focus" == b)
	};
	S.matchesEvent = function() {
		return !0
	};
	m.Gator = S;
	var qb = Gator,
		Pc = qb.addEvent,
		Zb = "onmspointerenter" in u,
		$b = "onmspointerleave" in u;
	qb.addEvent = function(a, b, c) {
		"mouseenter" === b && (b = "mouseover");
		"mouseleave" === b && (b = "mouseout");
		"MSPointerEnter" === b && !Zb && (b = "MSPointerOver");
		"MSPointerLeave" === b && !$b && (b = "MSPointerOut");
		Pc(a, b, c)
	};
	qb.matchesEvent = function(a, b, c, d, k) {
		return "mouseenter" === a || "mouseleave" === a || !Zb && "MSPointerEnter" === a || !$b && "MSPointerLeave" === a ? !k.relatedTarget ? !0 : d && b !== c || c === k.relatedTarget || c.contains(k.relatedTarget) ? !1 : !0 : !0
	};
	var rb = Gator.addEvent;
	Gator.addEvent = function(a, b, c) {
		"transitionend" === b && (rb(a, "webkitTransitionEnd", c), rb(a, "otransitionend", c));
		rb(a, b, c)
	};
	for (var sb = function(a, b, c) {
			a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
		}, bc = function(a) {
			if ("keypress" == a.type) {
				var b = String.fromCharCode(a.which);
				a.shiftKey || (b = b.toLowerCase());
				return b
			}
			return pa[a.which] ? pa[a.which] : ac[a.which] ? ac[a.which] : String.fromCharCode(a.which).toLowerCase()
		}, tb = function(a, b) {
			a = a || {};
			var c = !1,
				d;
			for (d in Fa) a[d] && Fa[d] > b ? c = !0 : Fa[d] = 0;
			c || (Za = !1)
		}, cc = function(a, b, c, d, k) {
			var j, f, h = [],
				n = c.type;
			if (!la[a]) return [];
			"keyup" == n && ub(a) && (b = [a]);
			for (j = 0; j < la[a].length; ++j) if (f = la[a][j], !(f.seq && Fa[f.seq] != f.level) && n == f.action && ("keypress" == n && !c.metaKey && !c.ctrlKey || b.sort().join(",") === f.modifiers.sort().join(","))) d && f.combo == k && la[a].splice(j, 1), h.push(f);
			return h
		}, vb = function(a, b, c) {
			if (!$a.stopCallback(b, b.target || b.srcElement, c) && !1 === a(b, c)) b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, b.cancelBubble = !0
		}, xb = function(a) {
			"number" !== typeof a.which && (a.which = a.keyCode);
			var b = bc(a);
			if (b) if ("keyup" == a.type && wb == b) wb = !1;
			else {
				var c = [];
				a.shiftKey && c.push("shift");
				a.altKey && c.push("alt");
				a.ctrlKey && c.push("ctrl");
				a.metaKey && c.push("meta");
				var c = cc(b, c, a),
					d, k = {},
					j = 0,
					f = !1;
				for (d = 0; d < c.length; ++d) c[d].seq ? (f = !0, j = Math.max(j, c[d].level), k[c[d].seq] = 1, vb(c[d].callback, a, c[d].combo)) : !f && !Za && vb(c[d].callback, a, c[d].combo);
				a.type == Za && !ub(b) && tb(k, j)
			}
		}, ub = function(a) {
			return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
		}, dc = function(a, b, c) {
			if (!c) {
				if (!ab) {
					ab = {};
					for (var d in pa) 95 < d && 112 > d || pa.hasOwnProperty(d) && (ab[pa[d]] = d)
				}
				c = ab[a] ? "keydown" : "keypress"
			}
			"keypress" == c && b.length && (c = "keydown");
			return c
		}, fc = function(a, b, c, d, k) {
			bb[a + ":" + c] = b;
			a = a.replace(/\s+/g, " ");
			var j = a.split(" "),
				f, h, n = [];
			if (1 < j.length) {
				var H = a,
					Y = c;
				Fa[H] = 0;
				Y || (Y = dc(j[0], []));
				a = function() {
					Za = Y;
					++Fa[H];
					clearTimeout(ec);
					ec = setTimeout(tb, 1E3)
				};
				c = function(a) {
					vb(b, a, H);
					"keyup" !== Y && (wb = bc(a));
					setTimeout(tb, 10)
				};
				for (d = 0; d < j.length; ++d) fc(j[d], d < j.length - 1 ? a : c, Y, H, d)
			} else {
				h = "+" === a ? ["+"] : a.split("+");
				for (j = 0; j < h.length; ++j) f = h[j], gc[f] && (f = gc[f]), c && ("keypress" != c && hc[f]) && (f = hc[f], n.push("shift")), ub(f) && n.push(f);
				c = dc(f, n, c);
				la[f] || (la[f] = []);
				cc(f, n, {
					type: c
				}, !d, a);
				la[f][d ? "unshift" : "push"]({
					callback: b,
					modifiers: n,
					action: c,
					seq: d,
					level: k,
					combo: a
				})
			}
		}, pa = {
			8: "backspace",
			9: "tab",
			13: "enter",
			16: "shift",
			17: "ctrl",
			18: "alt",
			20: "capslock",
			27: "esc",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "ins",
			46: "del",
			91: "meta",
			93: "meta",
			224: "meta"
		}, ac = {
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'"
		}, hc = {
			"~": "`",
			"!": "1",
			"@": "2",
			"#": "3",
			$: "4",
			"%": "5",
			"^": "6",
			"&": "7",
			"*": "8",
			"(": "9",
			")": "0",
			_: "-",
			"+": "=",
			":": ";",
			'"': "'",
			"<": ",",
			">": ".",
			"?": "/",
			"|": "\\"
		}, gc = {
			option: "alt",
			command: "meta",
			"return": "enter",
			escape: "esc"
		}, ab, la = {}, bb = {}, Fa = {}, ec, wb = !1, Za = !1, V = 1; 20 > V; ++V) pa[111 + V] = "f" + V;
	for (V = 0; 9 >= V; ++V) pa[V + 96] = V;
	sb(u, "keypress", xb);
	sb(u, "keydown", xb);
	sb(u, "keyup", xb);
	var $a = {
		bind: function(a, b, c) {
			a = a instanceof Array ? a : [a];
			for (var d = 0; d < a.length; ++d) fc(a[d], b, c);
			return this
		},
		unbind: function(a, b) {
			return $a.bind(a, function() {}, b)
		},
		trigger: function(a, b) {
			if (bb[a + ":" + b]) bb[a + ":" + b]({}, a);
			return this
		},
		reset: function() {
			la = {};
			bb = {};
			return this
		},
		stopCallback: function(a, b) {
			return -1 < (" " + b.className + " ").indexOf(" mousetrap ") ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.contentEditable && "true" == b.contentEditable
		}
	};
	m.Mousetrap = $a;
	"function" === typeof define && define.amd && define($a);
	var Ra = Mousetrap,
		Qc = Ra.stopCallback,
		yb = !0;
	Ra.stopCallback = function(a, b) {
		return !yb ? !0 : Qc(a, b)
	};
	Ra.pause = function() {
		yb = !1
	};
	Ra.unpause = function() {
		yb = !0
	};
	Mousetrap = Ra;
	var s, ic = u,
		oa = m;
	s = {
		addCssRule: function(a, b, c) {
			try {
				c = c || ic.styleSheets[0], c.addRule ? c.addRule(a, b) : c.insertRule(a + "{" + b + "}", (c.cssRules || c.rules).length)
			} catch (d) {}
		},
		attachClickHandler: function(a, b, c) {
			Gator(a).on(["click", "touchend"], b, function(a) {
				var b = c.call(this, a);
				return "touchend" === a.type ? !1 : b
			})
		},
		isArray: function(a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		},
		limit: function(a, b, c) {
			return a < c ? b > a ? b : a : c
		},
		openWindow: function(a, b, c, d, k) {
			var j = (oa.screenY || oa.screenTop || 0) + oa.outerHeight / 2 - c / 2,
				f = (oa.screenX || oa.screenLeft || 0) + oa.outerWidth / 2 - b / 2;
			r.browser.chrome && r.mac && (c += 27);
			return oa.open(a, d, k + ",width=" + b + ",height=" + c + ",left=" + f + ",top=" + j)
		},
		resetFocus: function(a) {
			a = (a || ic).querySelectorAll("*[tabindex]");
			for (var b = [], c = 0, d, k, j = 0, f = a.length; j < f; j++) d = a[j], k = oa.getComputedStyle(d, ""), 0 < d.tabIndex && ("none" !== k.getPropertyValue("display") && 0 < k.getPropertyValue("opacity") && "hidden" !== k.getPropertyValue("visibility")) && (b[c++] = d);
			if (a = b.shift()) a.focus(), a.blur()
		},
		round: function(a, b) {
			a = parseFloat(a);
			if (isNaN(a)) return 0;
			var c = Math.pow(10, b || 3);
			return Math.round(a * c) / c
		},
		throttle: function(a, b) {
			var c, d, k, j, f = 0,
				h = function() {
					f = new Date;
					k = null;
					j = a.apply(c, d)
				};
			return function() {
				var n = new Date,
					H = b - (n - f);
				c = this;
				d = arguments;
				0 >= H ? (clearTimeout(k), k = null, f = n, j = a.apply(c, d)) : k || (k = setTimeout(h, H));
				return j
			}
		}
	};
	var cb, db = this,
		Ga = u,
		Rc = function(a, b, c) {
			return !qa ? (b = Error(b), b.code = a, b.name = c, b) : Object.create(DOMException.prototype, {
				code: {
					enumerable: !0,
					value: a
				},
				message: {
					enumerable: !0,
					value: b
				},
				name: {
					enumerable: !0,
					value: c
				},
				toString: {
					value: function() {
						return "Error: " + this.message
					}
				}
			})
		},
		jc = function(a) {
			return !qa ? {
				code: a,
				MEDIA_ERR_ABORTED: 1,
				MEDIA_ERR_DECODE: 3,
				MEDIA_ERR_NETWORK: 2,
				MEDIA_ERR_SRC_NOT_SUPPORTED: 4
			} : Object.create(MediaError.prototype, {
				code: {
					enumerable: !0,
					value: a
				}
			})
		},
		ya = function(a, b, c) {
			var d = function(a, b) {
					if (!a || a[b] === P) throw Rc("DOMException" in db ? DOMException.INDEX_SIZE_ERR : 1, "INDEX_SIZE_ERR: DOM Exception 1", "INDEX_SIZE_ERR");
					return a[b]
				};
			return !qa ? {
				length: a,
				start: function(a) {
					return d(b, a)
				},
				end: function(a) {
					return d(c, a)
				}
			} : Object.create("object" === typeof TimeRanges ? TimeRanges.prototype : Object.prototype, {
				length: {
					enumerable: !0,
					value: a
				},
				start: {
					value: function(a) {
						return d(b, a)
					}
				},
				end: {
					value: function(a) {
						return d(c, a)
					}
				}
			})
		},
		kc = function(a, b) {
			return function() {
				if (a.type === p.TYPE_FLASH && a.swf && a.swfLoaded) {
					var c = "get" + b.charAt(0).toUpperCase() + b.slice(1);
					return a.swf[c]()
				}
				return a.type === p.TYPE_HTML && a.video ? a.video[b] : b in a.propertyValues ? a.propertyValues[b] : p.properties[b].value
			}
		},
		Sc = function(a, b) {
			return function(c) {
				a.propertyValues[b] = c;
				try {
					if (a.type === p.TYPE_FLASH && a.swf && a.swfLoaded) {
						var d = "set" + b.charAt(0).toUpperCase() + b.slice(1);
						a.swf[d](c)
					} else a.type === p.TYPE_HTML && a.video && (a.video[b] = c)
				} catch (k) {}
			}
		},
		Tc = function(a, b) {
			return function() {
				if (a.type === p.TYPE_FLASH) return !a.swfLoaded ? a.queuedMethodCalls.push({
					method: b,
					args: arguments
				}) : a.swf["_" + b]();
				if (a.type === p.TYPE_HTML) return a.video[b]()
			}
		},
		Uc = function(a) {
			if (!a) return null;
			a = a.split("?")[0].split(".");
			switch (a[a.length - 1]) {
			case "mp4":
			case "m3u8":
				return "video/mp4";
			case "web":
			case "webm":
				return "video/webm";
			case "flv":
				return "video/x-flv"
			}
			return null
		},
		lc = function(a) {
			a.style.display = "none";
			a.setAttribute("hidden", "");
			a.pause();
			a.src = ""
		},
		mc = function(a) {
			a.style.display = "none";
			a.setAttribute("hidden", "");
			try {
				a._pause(), a.setSrc("")
			} catch (b) {}
		},
		p = function(a, b) {
			if (!a) throw Error("You must pass a valid element");
			var c = this;
			c.uuid = Math.round(1E3 * Math.random() + (new Date).getTime());
			c.global = "flideo_" + c.uuid;
			db[c.global] = c;
			var d = {};
			qa || (d = Ga.createElement("flideo"), Ga.body.appendChild(d));
			var k = pb.make({});
			c.queuedMethodCalls = [];
			c.propertyValues = {};
			var j = ["webkitplaybacktargetavailabilitychanged", "webkitcurrentplaybacktargetiswirelesschanged"],
				f = {
					src: {
						enumerable: !0,
						get: kc(c, "src"),
						set: function(d) {
							c.propertyValues.src = d;
							var f = null;
							switch (Uc(d)) {
							case "video/mp4":
								f = fa && fa.h264.baseline ? p.TYPE_HTML : p.TYPE_FLASH;
								break;
							case "video/webm":
								f = fa && fa.webm ? p.TYPE_HTML : p.TYPE_FLASH;
								break;
							case "video/x-flv":
								f = p.TYPE_FLASH
							}
							d = f === p.TYPE_FLASH && !r.flash.versionAtLeast(9, 1) ? null : f;
							0;
							c.type = d;
							if (d === p.TYPE_HTML) {
								if (!c.video) {
									var h = c.eventCallback,
										f = Ga.createElement("video");
									f.setAttribute("x-webkit-airplay", "allow");
									for (var n = 0, j = p.events.length; n < j; n++) f.addEventListener(p.events[n], h);
									c.video = f;
									0;
									a.appendChild(c.video)
								}
								for (var g in c.propertyValues)"currentTime" !== g && (0, c.video[g] = c.propertyValues[g]);
								c.swf && mc(c.swf);
								c.video.style.display = "";
								c.video.removeAttribute("hidden")
							} else if (d === p.TYPE_FLASH) {
								if (!c.swf) {
									f = c.global;
									n = b.swf;
									g = Ga.createElement("object");
									g.setAttribute("type", "application/x-shockwave-flash");
									g.setAttribute("width", "100%");
									g.setAttribute("height", "100%");
									g.setAttribute("data", n);
									f = {
										flashvars: "ready=" + f + ".flashReady",
										movie: n,
										allowfullscreen: "true",
										allowscriptaccess: "always",
										bgcolor: "#000000",
										wmode: "opaque",
										quality: "high",
										scalemode: "noscale"
									};
									for (h in f) n = Ga.createElement("param"), n.setAttribute("name", h), n.setAttribute("value", f[h]), g.appendChild(n);
									c.swf = g;
									a.appendChild(c.swf)
								}
								c.video && lc(c.video);
								c.swf.style.display = "";
								c.swf.removeAttribute("hidden");
								c.swfLoaded && c.flashReady()
							} else c.video && lc(c.video), c.swf && mc(c.swf);
							c.type = d;
							null === d && k.fire("error", {
								type: "error",
								target: {
									error: jc(p.MEDIA_ERR_SRC_NOT_SUPPORTED)
								}
							})
						}
					},
					buffered: {
						enumerable: !0,
						get: function() {
							if (c.type === p.TYPE_HTML && c.video) return c.video.buffered;
							if (c.type === p.TYPE_FLASH && c.swf && c.swfLoaded) {
								var a = c.swf.getBuffered();
								if (a) return ya(a.length, a.start, a.end)
							}
							return ya(0)
						}
					},
					seekable: {
						enumerable: !0,
						get: function() {
							if (c.type === p.TYPE_HTML && c.video) return c.video.seekable;
							if (c.type === p.TYPE_FLASH && c.swf && c.swfLoaded) {
								var a = c.swf.getSeekable();
								if (a) return ya(a.length, a.start, a.end)
							}
							return ya(0)
						}
					},
					error: {
						enumerable: !0,
						get: function() {
							if (c.type === p.TYPE_HTML && c.video) return c.video.error;
							if (c.type === p.TYPE_FLASH && c.swf && c.swfLoaded) {
								var a = c.swf.getError();
								if (a) return jc(a.code)
							}
							return null
						}
					},
					canvasImageSource: {
						enumerable: !0,
						get: function() {
							return c.type === p.TYPE_HTML ? c.video : null
						}
					},
					renderer: {
						enumerable: !0,
						get: function() {
							return c.type
						}
					},
					addEventListener: {
						enumerable: !0,
						value: function(a, b) {
							if (0 <= j.indexOf(a)) c.video && c.video.addEventListener(a, b);
							else return k.on(a, b)
						}
					},
					removeEventListener: {
						enumerable: !0,
						value: function(a, b) {
							if (0 <= j.indexOf(a)) c.video && c.video.removeEventListener(a, b);
							else return k.off(a, b)
						}
					},
					children: {
						enumerable: !1,
						get: function() {
							return c.type === p.TYPE_FLASH ? [] : c.video.children
						}
					}
				},
				h, n;
			for (n in p.properties) n in f || (h = {
				enumerable: !0,
				get: kc(c, n)
			}, p.properties[n].readOnly || (h.set = Sc(c, n)), f[n] = h);
			h = 0;
			for (n = p.methods.length; h < n; h++) f[p.methods[h]] = {
				enumerable: !0,
				value: Tc(c, p.methods[h])
			};
			"WebKitPlaybackTargetAvailabilityEvent" in db && (f.webkitShowPlaybackTargetPicker = {
				enumerable: !0,
				value: function() {
					c.video && "webkitShowPlaybackTargetPicker" in c.video && c.video.webkitShowPlaybackTargetPicker()
				}
			}, f.webkitCurrentPlaybackTargetIsWireless = {
				enumerable: !0,
				get: function() {
					return c.video && "webkitCurrentPlaybackTargetIsWireless" in c.video ? c.video.webkitCurrentPlaybackTargetIsWireless : !1
				}
			});
			Object.defineProperties(d, f);
			c.eventCallback = function(a) {
				c.type === p.TYPE_HTML && ("error" === a.type && a.target.error && a.target.error.code === p.MEDIA_ERR_DECODE ? (fa.h264.baseline = "", fa.h264.high = "", d.src = d.src) : k.fire(a.type, a))
			};
			c.flashEventCallback = function(a) {
				c.type === p.TYPE_FLASH && ("error" === a.type && (a.target = c.node), k.fire(a.type, a))
			};
			c.flashReady = function() {
				if (!c.swfLoaded) {
					for (var a = 0, b = p.events.length; a < b; a++) c.swf.api_addEventListener(p.events[a], c.global + ".flashEventCallback");
					c.swfLoaded = !0
				}
				for (var d in c.propertyValues) a = "set" + d.charAt(0).toUpperCase() + d.slice(1), c.swf[a](c.propertyValues[d]);
				for (d = c.queuedMethodCalls.shift(); d;) c.swf["_" + d.method](), d = c.queuedMethodCalls.shift()
			};
			return d
		},
		fa, eb = function(a) {
			return RegExp(a.toLowerCase()).test(nc)
		},
		nc = navigator.userAgent.toLowerCase(),
		Ka = eb("android") ? parseFloat(nc.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0 : !1,
		Vc = Ka && eb("mobile"),
		Wc = eb("iphone"),
		Xc = eb("firefox"),
		La = Ga.createElement("video"),
		ta = !1;
	try {
		La.canPlayType && (ta = {
			h264: {
				baseline: La.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
				high: La.canPlayType('video/mp4; codecs="avc1.64001E"').replace(/^no$/, "")
			},
			webm: La.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
			flv: La.canPlayType('video/x-flv; codecs="vp6"'),
			hls: La.canPlayType("application/vnd.apple.mpegurl")
		})
	} catch (zd) {}
	if (Ka && (2.1 === Ka || 2.2 === Ka || Xc && !ta.h264.baseline)) ta.h264.baseline = "probably";
	Ka && !Vc && (ta.h264.high = "probably");
	Ka && (ta.hls = "");
	Wc && 2 > db.devicePixelRatio && (ta.h264.high = "");
	fa = ta;
	var qa;
	a: {
		try {
			Object.defineProperty({}, "fakeprop", {})
		} catch (Ad) {
			qa = !1;
			break a
		}
		qa = !0
	}
	p.TYPE_HTML = "html";
	p.TYPE_FLASH = "flash";
	p.NETWORK_EMPTY = 0;
	p.NETWORK_IDLE = 1;
	p.NETWORK_LOADING = 2;
	p.NETWORK_NO_SOURCE = 3;
	p.HAVE_NOTHING = 0;
	p.HAVE_METADATA = 1;
	p.HAVE_CURRENT_DATA = 2;
	p.HAVE_FUTURE_DATA = 3;
	p.HAVE_ENOUGH_DATA = 4;
	p.MEDIA_ERR_ABORTED = 1;
	p.MEDIA_ERR_DECODE = 3;
	p.MEDIA_ERR_NETWORK = 2;
	p.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
	p.properties = {
		error: {
			value: null,
			readOnly: !0
		},
		src: {
			value: ""
		},
		currentSrc: {
			value: "",
			readOnly: !0
		},
		networkState: {
			value: p.NETWORK_EMPTY,
			readOnly: !0
		},
		preload: {
			value: "auto"
		},
		buffered: {
			value: ya(0),
			readOnly: !0
		},
		readyState: {
			value: p.HAVE_NOTHING,
			readOnly: !0
		},
		seeking: {
			value: !1,
			readOnly: !0
		},
		currentTime: {
			value: 0
		},
		duration: {
			value: NaN,
			readOnly: !0
		},
		paused: {
			value: !0,
			readOnly: !0
		},
		defaultPlaybackRate: {
			value: 1
		},
		playbackRate: {
			value: 1
		},
		played: {
			value: ya(0),
			readOnly: !0
		},
		seekable: {
			value: ya(0),
			readOnly: !0
		},
		ended: {
			value: !1,
			readOnly: !0
		},
		autoplay: {
			value: !1
		},
		loop: {
			value: !1
		},
		controls: {
			value: !1
		},
		volume: {
			value: 1
		},
		muted: {
			value: !1
		},
		defaultMuted: {
			value: !1
		},
		width: {
			value: 0
		},
		height: {
			value: 0
		},
		videoWidth: {
			value: 0,
			readOnly: !0
		},
		videoHeight: {
			value: 0,
			readOnly: !0
		},
		poster: {
			value: ""
		}
	};
	p.methods = ["load", "play", "pause", "canPlayType"];
	p.events = "abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
	p.support = fa;
	cb = p;
	Razor = m.Razor || {};
	Razor.Templates = {};
	Razor.render = function(a, b) {
		return Razor.Templates[a] ? Razor.Templates[a].call(Razor, b || {}) : ""
	};
	Razor.Templates.buffer = function() {
		return '<svg width="110%"><defs><pattern id="buffer" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern></defs><rect fill="url(#buffer)" width="100%" height="100%" /></svg>'
	};
	Razor.Templates.content_rating = function(a) {
		return '<div class="content-rating"><h1>Hold up!</h1><p class="subtitle">This video does not match your content rating preferences.</p><p>It may contain content indended for mature audiences including: nudity, strong language, and violence. <a href="">Edit your content rating preferences.</a></p><button>I still want to watch this video</button><div class="logo">' + a.logo + "</div></div>"
	};
	Razor.Templates.controls = function(a) {
		var b = '<section class="play-button-cell"><div class="play-wrapper"><button tabindex="2" class="play rounded-box state-' + a.playState + '" title="Play" data-title-play="Play" data-title-pause="Pause" aria-label="Play"><div class="tiny-bars"></div><div class="play-icon">' + a.playIcon + '</div><div class="pause-icon">' + a.pauseIcon + '</div></button></div></section><section class="play-bar-cell"><div class="play-bar rounded-box"><div class="progress-container"><div class="progress"><div class="buffer hidden">' + a.bufferBar + '</div><div class="loaded" role="progressbar" aria-label="loaded" aria-valuemin="0" aria-valuemax="' + a.rawDuration + '" aria-valuenow="0"></div><div class="played" role="progressbar" aria-label="played" aria-valuemin="0" aria-valuemax="' + a.rawDuration + '" aria-valuenow="0"></div><div class="ghost-timecode invisible" role="presentation" aria-hidden="true"><div class="box">00:00</div></div><div class="timecode" role="presentation" aria-hidden="true"><div class="box">' + a.duration + "</div></div></div></div>";
		a.volume && (b += '<div class="volume-container"><div class="volume" role="slider" aria-label="volume" aria-valuemin="0" aria-valuemax="1" tabindex="2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
		a.ccButton && (b += '<div class="button-wrapper"><div class="cc-container"><button class="toggle cc on" tabindex="2">' + a.ccIcon + "</button></div></div>");
		a.hdButton && (b += '<div class="button-wrapper"><div class="hd-container"><button class="toggle hd ', b = a.hdOn ? b + "on" : b + "off", b += '" tabindex="2" title="Turn HD ', b = a.hdOn ? b + "off" : b + "on", b += '" data-title-on="Turn HD off" data-title-off="Turn HD on" aria-label="HD">' + a.hdIcon + "</button></div></div>");
		a.airplayIcon && (b += '<div class="button-wrapper"><div class="airplay-container hidden" hidden><button class="toggle airplay" tabindex="2" title="Choose an AirPlay device" data-title-off="Choose an AirPlay device" data-title-on="Turn off AirPlay">' + a.airplayIcon + "</button></div></div>");
		b += '<div class="button-wrapper';
		a.fullscreenButton || (b += " only-in-fullscreen");
		b += '"><div class="fullscreen-container"><button class="fullscreen" tabindex="2" title="Enter full screen" data-title-fullscreen="Enter full screen" data-title-unfullscreen="Exit full screen" aria-label="Fullscreen"><div class="fullscreen-icon">' + a.fullscreenIcon + '</div><div class="unfullscreen-icon">' + a.unfullscreenIcon + "</div></button></div></div>";
		a.vimeoLogo.show && (b += '<div class="logo-container"><div class="logo"><div>', a.vimeoLogo.showLink && (b += '<a href="' + a.vimeoLogo.url + '"', a.targetBlank && (b += ' target="_blank"'), b += ' tabindex="2" title="Watch on vimeo.com" aria-label="Watch on vimeo.com" data-clip-link>'), b += "" + a.vimeoLogo.logo + "", a.vimeoLogo.showLink && (b += "</a>"), b += "</div></div></div>");
		b += "</div></section>";
		a.customLogo && (b += '<section class="custom-logo-cell', a.customLogo.sticky && (b += " sticky"), b += '"><div class="custom-logo" style="width:' + a.customLogo.width + "px;height:" + a.customLogo.height + 'px">', a.customLogo.showLink && (b += '<a href="' + a.customLogo.url + '" target="_blank" tabindex="2">'), b += '<img src="' + a.customLogo.img + '" alt="">', a.customLogo.showLink && (b += "</a>"), b += "</div></section>");
		a.fullscreenButton && (b += '<section class="tiny-fullscreen-cell rounded-box"><button class="fullscreen" tabindex="2" title="Enter full screen" data-title-fullscreen="Enter full screen" data-title-unfullscreen="Exit full screen" aria-label="Fullscreen"><div class="fullscreen-icon">' + a.fullscreenIcon + "</div></button></section>");
		return b += '<div class="mobile-timecode" role="presentation" aria-hidden="true">' + a.duration + "</div>"
	};
	Razor.Templates.error = function(a) {
		var b = '<div class="window-wrapper error"><h1>' + a.title + "</h1>";
		a.message && (b += "<p>" + a.message + "</p>");
		return b + "</div>"
	};
	Razor.Templates.hd_not_allowed = function(a) {
		return '<div class="window-wrapper no-hd"><h1>' + a.title + '</h1><p class="subtitle">' + a.subtitle + '</p><a href="' + a.url + '" target="_blank" role="button" data-clip-link>' + a.button + "</button></div>"
	};
	Razor.Templates.hd_notification = function(a) {
		return '<div class="hd-notification"><div class="hd-stroke">' + a.stroke + '</div><div class="hd-fill-wrapper"><div class="hd-fill">' + a.fill + "</div></div></div>"
	};
	Razor.Templates.help = function(a) {
		var b = '<div class="window-wrapper help"><h1>Keyboard Shortcuts</h1><dl><div class="volume-up secondary"><dt class="arrow">\u2191</dt><dd>Volume up</dd></div><div class="volume-down secondary"><dt class="arrow">\u2193</dt><dd>Volume down</dd></div><div class="scrub-forward secondary"><dt class="arrow">\u2192</dt><dd>Scrub forward</dd></div><div class="scrub-backwards secondary"><dt class="arrow">\u2190</dt><dd>Scrub backwards</dd></div><div class="like"><dt>L</dt><dd>Like</dd></div><div class="share"><dt>S</dt><dd>Share</dd></div><div class="watch-later"><dt>W</dt><dd>Watch Later</dd></div>\x3c!-- <div class="play-pause"><dt>&nbsp;</dt><dd>Play / pause</dd></div> --\x3e\x3c!-- <div><dt>C</dt><dd>Toggle Captions</dd></div> --\x3e<div class="toggle-hd"><dt>H</dt><dd>Toggle HD</dd></div><div class="fullscreen"><dt>F</dt><dd>Fullscreen</dd></div>';
		a.onSite || (b += '<div class="view-on-vimeo"><dt>V</dt><dd>View on Vimeo</dd></div>');
		return b + '\x3c!-- <div><dt>?</dt><dd>Help</dd></div> --\x3e</dl><a href="http://vimeo.com" class="off-site" role="button">View on Vimeo.com</a></div>'
	};
	Razor.Templates.icon_airplay = function() {
		return '<svg class="airplay-icon" viewBox="0 0 44 36"><defs><clipPath id="triangle"><polygon points="-2,-2 -2,36 2,36 22,15 42,36 46,36 46,-2"/></clipPath></defs><rect class="stroke" stroke-width="5" width="44" height="26" x="0" y="2" clip-path="url(#triangle)"/><polygon class="fill" points="7,36 22,18 37,36"/></svg>'
	};
	Razor.Templates.icon_broken_heart = function() {
		return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
	};
	Razor.Templates.icon_cc = function() {
		return '<svg viewBox="0 0 20 14"><path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 0h-14c-1.657 0-3 1.343-3 3v8c0 1.656 1.343 3 3 3h14c1.657 0 3-1.344 3-3v-8c0-1.657-1.343-3-3-3zm-7.271 8.282c-.145.923-.516 1.686-1.105 2.268-.597.591-1.369.89-2.294.89-1.138 0-2.049-.402-2.706-1.195-.647-.786-.975-1.866-.975-3.215 0-1.458.372-2.603 1.105-3.403.65-.708 1.487-1.067 2.487-1.067 1.33 0 2.321.482 2.947 1.435.34.53.526 1.072.553 1.611l.013.236h-1.984l-.044-.169c-.092-.355-.207-.622-.343-.793-.239-.298-.591-.443-1.076-.443-.483 0-.856.209-1.14.641-.298.455-.449 1.12-.449 1.977 0 .851.156 1.49.466 1.898.298.395.666.588 1.122.588.469 0 .814-.16 1.058-.491.138-.183.255-.472.351-.856l.042-.17h2.013l-.041.258zm7.582 0c-.145.923-.516 1.686-1.104 2.268-.598.591-1.369.89-2.294.89-1.139 0-2.049-.402-2.707-1.195-.646-.785-.975-1.865-.975-3.214 0-1.458.372-2.603 1.106-3.403.649-.708 1.485-1.067 2.486-1.067 1.33 0 2.32.482 2.946 1.435.34.53.526 1.072.554 1.611l.012.236h-1.9829999999999999l-.043-.169c-.092-.355-.208-.623-.344-.793-.238-.298-.591-.443-1.076-.443-.483 0-.856.209-1.139.641-.299.455-.45 1.12-.45 1.977 0 .851.157 1.49.467 1.898.299.395.666.588 1.121.588.469 0 .814-.16 1.058-.491.138-.183.256-.472.352-.856l.042-.17h2.012l-.041.257z"/></svg>'
	};
	Razor.Templates.icon_clock = function() {
		return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
	};
	Razor.Templates.icon_fullscreen = function() {
		return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid"><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="6,6 5.9,2 4.9,3 2.9,1 1,2.9 3,4.9 2,5.9" transform="translate(6,6) rotate(270)" /></svg>'
	};
	Razor.Templates.icon_hd = function(a) {
		var b = '<svg viewBox="',
			b = a.notification ? b + "-1 -1 104.717 49.035" : b + "0 0 102.717 47.035",
			b = b + '" preserveAspectRatio="xMidYMid"><path class="',
			b = a.stroke ? b + "stroke" : b + "fill",
			b = b + '" d="M100.014 6.758c-1.352-2.162-3.244-3.781-5.676-5.134-2.434-1.083-5.947-1.624-10.274-1.624h-21.625l-7.297 47.035h21.895c2.434 0 5.676-.274 8.92-1.352 2.434-.542 4.596-1.627 7.03-3.785 2.161-1.621 4.324-4.055 5.675-7.028 1.621-2.701 2.973-6.757 3.786-11.623.269-3.244.269-6.487.269-9.19-.54-2.704-1.352-5.138-2.703-7.299zm-12.433 16.76c-.541 3.783-1.352 6.485-2.165 8.109-1.08 1.893-2.162 2.703-3.782 3.514-1.083.541-3.515 1.082-6.217 1.082h-3.517l3.517-25.41h3.782c3.514 0 6.217.811 7.568 2.703 1.083 1.625 1.352 5.135.814 10.002z"/><path class="',
			b = a.stroke ? b + "stroke" : b + "fill";
		return b + '" d="M37.572,0L35.14,16.491H19.463L21.895,0H7.027L0,47.035h14.866l2.703-18.922h15.677l-2.971,18.922h14.866L52.439,0H37.572z"/></svg>'
	};
	Razor.Templates.icon_heart = function() {
		return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
	};
	Razor.Templates.icon_lock = function() {
		return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
	};
	Razor.Templates.icon_pause = function() {
		return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><rect class="fill" width="6" height="20" x="0" y="0" /><rect class="fill" width="6" height="20" x="12" y="0" /></svg>'
	};
	Razor.Templates.icon_play = function() {
		return '<svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid"><polygon class="fill" points="1,0 20,10 1,20" /></svg>'
	};
	Razor.Templates.icon_share = function() {
		return '<svg class="share-icon" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid">\x3c!-- Up arrow --\x3e<circle class="fill" cx="5" cy="14" r="1.75" /><circle class="fill" cx="8.5" cy="10.5" r="1.75" /><circle class="fill" cx="12" cy="7" r="1.75" /><polyline class="stroke" points="12.5,2 17.5,3 16.5,8" stroke-width="2.5" stroke-linecap="round" stroke-linjoin="round" />\x3c!-- Down arrow --\x3e<circle class="fill" cx="26" cy="6" r="1.75" /><circle class="fill" cx="22.5" cy="9.5" r="1.75" /><circle class="fill" cx="19" cy="13" r="1.75" /><polyline class="stroke" points="14.5,12 13.5,17 18.5,18" stroke-width="2.5" stroke-linecap="round" stroke-linjoin="round" /></svg>'
	};
	Razor.Templates.icon_unfullscreen = function() {
		return '<svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid"><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) "/><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(90)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(180)" /><polyline class="fill" points="-1,-1 -1.1,-5 -2.1,-4 -4.1,-6 -6,-4.1 -4,-2.1 -5,-1.1" transform="translate(6,6) rotate(270)" /></svg>'
	};
	Razor.Templates.logo = function() {
		return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" aria-label="Vimeo"><title>Vimeo</title><g><path class="fill" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
	};
	Razor.Templates.outer = function(a) {
		var b = '<div class="video-wrapper"><div class="video"><div class="flideo"></div></div></div><div class="target"></div><div class="outro-wrapper hidden" hidden><div class="outro-inner"><div class="outro" role="dialog" aria-live="assertive"></div></div></div><div class="controls-wrapper"><div class="title" role="contentinfo"></div><div class="sidedock';
		a.hideSidedock && (b += " hidden");
		b += '" role="toolbar"';
		a.hideSidedock && (b += " hidden");
		return b + '></div><div class="controls"></div></div><div class="overlay-wrapper hidden" hidden><div class="overlay-cell"><div class="overlay" role="dialog" aria-live="assertive"></div><div class="overlay-icon-wrapper hidden"><div class="overlay-icon"></div></div><div class="overlay-logo logo"></div></div><nav><button tabindex="100" class="back cloaked" aria-label="Back">&#xe005;</a><button tabindex="101" class="close" aria-label="Close overlay">&#xe000;</button></nav></div><div class="notification-wrapper hidden" hidden><div class="notification-cell"><div class="notification" role="dialog" aria-live="assertive"></div></div></div>'
	};
	Razor.Templates.outro_link = function(a) {
		return '<h1><a href="' + a.url + '" target="_blank" tabindex="4">' + (a.text ? a.text : a.url) + "</a></h1>"
	};
	Razor.Templates.outro_text = function(a) {
		return '<div class="text-wrapper"><div class="text">' + a.text + "</div></div>"
	};
	Razor.Templates.outro_videos = function(a) {
		for (var b = "<h1>" + a.context + '</h1><ul class="videos">', c = 0, d = a.videos.length; c < d; c++) b += '<li><a href="' + a.videos[c].url + '" target="_blank" title="\'' + a.videos[c].title + "'", a.videos[c].owner.id !== a.owner && (b += " from " + a.videos[c].owner.name + ""), b += '" tabindex="1"><div class="img-wrapper"><img src="' + a.videos[c].thumbnail + '" alt="" width="295" height="166"></div><div class="header-wrapper"><header><h1>' + a.videos[c].title + "</h1>", a.videos[c].owner.id !== a.owner && (b += "<h2><span>from</span>&nbsp;" + a.videos[c].owner.name + "</h2>"), b += "</header></div></a></li>";
		return b + "</ul>"
	};
	Razor.Templates.outro_vod = function(a) {
		return '<h1 class="vod-outro-header">Now playing on Vimeo</h1><a role="button" href="' + a.video_url + '" target="_blank" tabindex="4">' + (a.purchased ? "Watch Now" : "Buy") + "</a>"
	};
	Razor.Templates.password = function(a) {
		return '<div class="window-wrapper password form"><h1>' + a.title + '</h1><p class="subtitle">' + a.subtitle + '</p><form action="' + a.action + '" method="post" novalidate><div class="validation-bubble hidden"><div class="validation-bubble-arrow-clipper"><div class="validation-bubble-arrow"></div></div><div class="validation-bubble-message"></div></div><input type="password" name="password" placeholder="Password" required aria-required="true" tabindex="2" aria-label="Password"><input type="submit" value="Watch Video" tabindex="3"></form></div>'
	};
	Razor.Templates.private_locked = function(a) {
		return '<div class="window-wrapper login"><h1>' + a.title + '</h1><p class="subtitle">' + a.subtitle + '</p><a href="' + a.action + '" class="popup" target="_blank" role="button" aria-label="Log in (opens in a new window)">Log in</a></div>'
	};
	Razor.Templates.private_unlocked = function() {
		return '<div class="window-wrapper form unlocked"><h1>Private Video</h1><p class="subtitle">You are logged in and have permission to watch (congrats).</p><button>Watch Video</button></div>'
	};
	Razor.Templates.share = function(a) {
		var b = '<div class="share-wrapper"><section class="share-screen' + (a.embedOnly ? " cloaked" : "") + '"><h1>Share</h1><ul class="buttons"><li><a tabindex="4" href="' + a.playerShareUrl + '/facebook" target="_blank" class="facebook" title="Share on Facebook" role="button" aria-label="Share on Facebook">&#xe002;</a></li><li><a tabindex="4" href="' + a.playerShareUrl + '/twitter" target="_blank" class="twitter" title="Share on Twitter" role="button" aria-label="Share on Twitter">&#xe004;</a></li>';
		a.tumblr && (b += '<li><a tabindex="4" href="' + a.playerShareUrl + '/tumblr" target="_blank" class="tumblr" title="Share on Tumblr" role="button" aria-label="Share on Tumblr">&#xe007;</a></li>');
		a.url && (b += '<li><a tabindex="4" href="mailto:?subject=' + encodeURIComponent("Check out \u201c" + a.title + "\u201d by " + a.owner + " on Vimeo") + "&amp;body=" + encodeURIComponent("Check out \u201c" + a.title + "\u201d by " + a.owner + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + a.shareUrl + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at http://vimeo.com.") + '" class="email" title="Share via E-mail" role="button" aria-label="Share via E-Mail">&#xe003;</a></li>');
		b += "</ul>";
		a.embed && (b += '<ul class="buttons"><li><a tabindex="4" href="' + a.url + '#share" target="_blank" class="embed" title="Get embed code" role="button" aria-label="Get embed code">&#xe001;</a></li></ul>');
		a.url && (b += '<p class="footnote share"><a class="clip_url" tabindex="4" href="' + a.url + '" target="_blank">' + a.shareUrl + "</a></p>");
		b += "</section>";
		a.embed && (b += '<section class="embed-screen' + (a.embedOnly ? "" : " cloaked") + '"><div class="embed-wrapper"><h1>Embed</h1><p class="subtitle">Add this video to your site with the embed code below.</p><div class="embed-code form"><div><input type="text" tabindex="4" name="embed_code" title="Embed code" value="' + a.embedCode + '" spellcheck="false" aria-readonly="true"', a.readOnly && (b += " readonly"), b += "></div>", a.copyButton && (b += '<button class="embed-copy" tabindex="4" id="copy-button" data-clipboard-text=\'' + a.embedCode + "'>Copy</button>"), b += "</div>", a.customizeEmbed && (b += '<p class="footnote"><a tabindex="4" href="' + a.url + '#embed" target="_blank">Customize this embed</a> on Vimeo</p>'), b += "</div></section>");
		return b + "</div>"
	};
	Razor.Templates.sidedock = function(a) {
		var b = "";
		a.likeButton && (b += '<button tabindex="3" class="like-button rounded-box', a.liked && (b += " on"), b += '" aria-label="' + (a.liked ? "Unlike" : "Like") + "", a.loggedIn || (b += " (opens in a new window)"), b += '"', a.loggedIn || (b += ' title="Log in to like this video (opens in a new window)"'), b += ">" + a.likeButton + "<span>Like</span></button>");
		a.watchLaterButton && (b += '<button tabindex="3" class="watch-later-button rounded-box', a.addedToWatchLater && (b += " on"), b += '" aria-label="' + (a.addedToWatchLater ? "Remove from" : "Add to") + " Watch Later", a.loggedIn || (b += " (opens in a new window)"), b += '"', a.loggedIn || (b += ' title="Log in to add to Watch Later (opens in a new window)"'), b += ">" + a.watchLaterButton + "<span>Later</span></button>");
		a.shareButton && (b += '<button tabindex="3" class="share-button rounded-box" aria-label="' + a.shareButtonLabel + '">' + a.shareButton + "<span>" + a.shareButtonLabel + "</span></button>");
		a.scalingButton && (b += '<button class="rounded-box scaling-button', a.scalingOn && (b += " on"), b += '" aria-label="Scaling"> SCALING IS </button>');
		return b
	};
	Razor.Templates.title = function(a) {
		var b = "<header>";
		a.badge && (b += '<div class="badge"><a tabindex="1" href="' + a.badge.link + '"', a.targetBlank && (b += ' target="_blank"'), b += '><img src="' + a.badge.img + '"', a.badge.offset && (b += ' style="margin-top:' + a.badge.offset.y + "px;margin-left:" + a.badge.offset.x + 'px"'), b += ' width="' + a.badge.width + '" height="' + a.badge.height + '" alt="' + a.badge.name + ' Badge"></a></div>');
		a.showPortrait && (b += '<div class="portrait" aria-hidden="true">', a.linkToOwner && (b += '<a tabindex="-1" href="' + a.ownerLink + '"', a.targetBlank && (b += ' target="_blank"'), b += ">"), b += '<img src="' + a.portraitImg + '" alt="Portrait image for ' + a.owner + '" width="60" height="60">', a.linkToOwner && (b += "</a>"), b += "</div>");
		b += "<div>";
		a.showTitle && (b += "<h1>", a.showTitleLink && (b += '<a tabindex="1" href="' + a.titleLink + '"', a.targetBlank && (b += ' target="_blank"'), b += " data-clip-link>"), b += "" + a.title + "", a.showTitleLink && (b += "</a>"), b += "</h1>");
		a.showByline && (b += "<h2> from ", a.linkToOwner ? (b += '<a tabindex="1" href="' + a.ownerLink + '"', a.targetBlank && (b += ' target="_blank"'), b += ">") : b += '<span class="user">', b += "" + a.owner + "", b = a.linkToOwner ? b + "</a>" : b + "</span>", a.bylineBadge && (b += "&nbsp; ", a.bylineBadge.link && (b += '<a tabindex="-1" href="' + a.bylineBadge.link + '"', a.targetBlank && (b += ' target="_blank"'), b += ">"), b += '<span class="byline-badge ' + a.bylineBadge.cssClass + '">' + a.bylineBadge.cssClass + "</span>", a.bylineBadge.link && (b += "</a>")), b += "</h2>");
		return b + "</div></header>"
	};
	ia = 1;
	Ua = 2;
	$ = 3;
	Va = 4;
	Ob = 9;
	Kb = {
		will: "willLikeVideo",
		did: "didLikeVideo"
	};
	Lb = {
		will: "willUnlikeVideo",
		did: "didUnlikeVideo"
	};
	Mb = {
		will: "willAddToWatchLater",
		did: "didAddToWatchLater"
	};
	Nb = {
		will: "willRemoveFromWatchLater",
		did: "didRemoveFromWatchLater"
	};
	kb = {
		will: "willOpenShareOverlay",
		did: "didOpenShareOverlay"
	};
	lb = {
		will: "willOpenLoginForm",
		did: "didOpenLoginForm"
	};
	var t = {
		seek: 1,
		loadVideo: 2,
		changeVolume: 3,
		changeScaling: 4,
		showOverlay: 5,
		openPopup: 6,
		reset: 7,
		changeLoop: 8,
		changeQuality: 9,
		openVimeo: 10,
		changeColor: 11,
		checkSignatureExpiration: 12,
		disableHd: 14,
		disableVolume: 15,
		forceFullscreen: 16
	},
		d = {
			error: 49,
			playInitiated: 50,
			paused: 51,
			played: 52,
			loadProgress: 53,
			playProgress: 54,
			seeked: 55,
			ended: 56,
			bufferStarted: 57,
			bufferEnded: 58,
			volumeChanged: 59,
			qualityChanged: 60,
			fullscreenButtonClicked: 100,
			pauseButtonClicked: 101,
			playButtonClicked: 102,
			hdButtonClicked: 103,
			ccButtonClicked: 104,
			scrubbingStarted: 105,
			scrubbingEnded: 106,
			volumeScrubbingStarted: 107,
			volumeScrubbingEnded: 108,
			willEnterFullscreen: 150,
			didEnterFullscreen: 151,
			willExitFullscreen: 152,
			didExitFullscreen: 153,
			likeButtonClicked: 200,
			watchLaterButtonClicked: 201,
			shareButtonClicked: 202,
			embedButtonClicked: 203,
			scalingButtonClicked: 204,
			overlayOpened: 250,
			overlayClosed: 251,
			overlayCleared: 252,
			overlayCloseButtonClicked: 253,
			facebookButtonClicked: 254,
			twitterButtonClicked: 255,
			tumblrButtonClicked: 256,
			emailButtonClicked: 257,
			embedCodeCopied: 258,
			popupOpened: 259,
			mousedOut: 300,
			mousedOver: 301,
			mouseTimeout: 302,
			liked: 303,
			unliked: 304,
			addedToWatchLater: 305,
			removedFromWatchLater: 306,
			userLogIn: 307,
			userLoggedIn: 308,
			userLoggedOut: 309,
			loginFailure: 310,
			colorChanged: 311,
			configChanged: 312,
			passwordUnlocked: 313,
			privateUnlocked: 314,
			enteredTinyMode: 315,
			enteredNormalMode: 316,
			signatureExpired: 317,
			requestConfigReloaded: 318,
			embedSettingChanged: 319,
			titleModuleReady: 350,
			sidedockModuleReady: 351,
			controlsModuleReady: 352,
			videoModuleReady: 353,
			overlayModuleReady: 354,
			notificationModuleReady: 355,
			statsModuleReady: 356,
			apiModuleReady: 357,
			analyticsModuleReady: 358,
			ready: 359,
			notificationHidden: 400,
			airPlayAvailable: 500,
			airPlayNotAvailable: 501,
			airPlayActivated: 502,
			airPlayDeactivated: 503,
			airPlayButtonPressed: 504
		},
		zb;
	zb = function(a, b, c, g) {
		function k() {
			BigScreen.element && BigScreen.element === e.element && !T && (e.element.style.cursor = "none", T = Ha = !0)
		}
		function j(a) {
			l && (u.activeElement && (C.contains(u.activeElement) || G.contains(u.activeElement)) ? (clearTimeout(ma), ma = null) : (a ? (q.fire(d.mousedOut), clearTimeout(ma), ma = null) : q.fire(d.mouseTimeout), Ha = !0, v.classList.add("hidden"), v.setAttribute("hidden", ""), l = !1, W = !0, k()))
		}
		function f(a) {
			l || (l = !0, q.fire(d.mousedOver, !0 === a), v.classList.remove("hidden"), v.removeAttribute("hidden"));
			clearTimeout(ma);
			ma = setTimeout(j, E)
		}
		function h(a) {
			if (a && 0 < a.clientX && 0 < a.clientY) try {
				u.activeElement.blur()
			} catch (b) {}
		}
		function n(a) {
			a && (e.config = a, e.storageModule.reset(e.config), q.fire(t.changeColor, e.config.embed.color), q.fire(d.configChanged, e.config));
			!e.videoModule && e.config.view !== Va && e.config.view !== Ua ? (M(e.config.video.thumbs), e.videoModule = new Ab(e.config, q, L)) : A.style.backgroundImage = "none"
		}
		function H() {
			switch (e.config.view) {
			case Va:
				0;
				w = ["password"];
				U = !0;
				Y();
				break;
			case Ua:
				0;
				K = !0;
				w = e.config.user.logged_in ? ["error",
				{
					title: "Private Video",
					message: "Sorry, you don&rsquo;t have permission to watch.",
					modal: !0,
					logo: !! e.config.embed.settings.branding,
					icon: "lock"
				}] : ["private-locked"];
				U = !0;
				Y();
				return;
			case $:
				0;
				0;
				n();
				!e.config.embed.autoplay && !K && (w = ["private-unlocked"]);
				Y();
				break;
			case Ob:
				A.classList.add("invisible"), q.fire(t.showOverlay, "content-rating"), q.once(d.overlayClosed, function() {
					A.classList.remove("invisible")
				})
			}
			K = null
		}
		function Y() {
			U && (N && O) && (w ? (w.unshift(t.showOverlay), q.fire.apply(null, w), w = null, m.requestAnimationFrame(function() {
				e.element.classList.remove("loading")
			})) : e.element.classList.remove("loading"))
		}
		function ka(a, b) {
			0;
			var c = (new Date).getTime(),
				d = e.config && e.config.video.id,
				f = e.config && e.config.request.session,
				l = a;
			isNaN(a) || (l = (e.config ? "//" + e.config.player_url + e.config.request.prefix : "") + "/video/" + a + "/config" + m.location.search);
			var h = new XMLHttpRequest;
			h.open("GET", l, !0);
			h.withCredentials = !0;
			h.onload = function() {
				e.config = JSON.parse(h.responseText);
				wa = (new Date).getTime() + 1E3 * e.config.request.expires;
				e.config.video.id === d && (e.config.request.session = f);
				var a = (new Date).getTime() - c;
				m._gaq.push(["player._trackTiming", "Player", "Config Load", a]);
				0;
				e.storageModule && e.storageModule.reset(e.config);
				q.fire(t.colorChanged, e.config.embed.color);
				H();
				e.config.embed.on_site || (u.title = e.config.view === ia || e.config.view === $ ? e.config.video.title + " from " + e.config.video.owner.name + " on Vimeo" : "Private Video on Vimeo");
				b.call(h)
			};
			h.send()
		}
		function M(a) {
			var b = e.element.clientWidth * r.devicePixelRatio,
				c = a["640"];
			900 <= b && a["960"] && (c = a["960"]);
			1E3 <= b && a["1280"] && (c = a["1280"]);
			A.setAttribute("data-thumb", c);
			a = new Image;
			a.src = c;
			e.config.embed.autoplay ? p() : (a.onload = function() {
				"none" !== A.style.backgroundImage && (A.style.backgroundImage = "url(" + c + ")");
				p()
			}, a.onerror = p, setTimeout(p, 2E3))
		}

		function p() {
			U = !0;
			Y()
		}
		function x() {
			var a = e.config.video.width / e.config.video.height,
				b = e.element.clientWidth / e.element.clientHeight,
				c = e.element.clientWidth - e.element.clientHeight * a,
				d = e.element.clientHeight - e.element.clientWidth / a;
			b > a && 0 < c && 1 >= c ? (0, A.classList.add("cover")) : b < a && 0 < d && 1 >= d ? (0, A.classList.add("cover")) : A.classList.remove("cover")
		}
		function B(a, b, c) {
			if (g && g[a.will] && !1 === g[a.will].apply(null, [e.config.video.id].concat(c))) 0;
			else if (b.apply(null, [e.config.video.id].concat(c)), g && g[a.did]) g[a.did]()
		}

		function J() {
			e.config.view === ia && e.config.embed.settings && !e.config.embed.settings.playbar ? e.element.classList.add("no-playbar") : e.element.classList.remove("no-playbar");
			e.config.embed.settings.fullscreen ? e.element.classList.add("with-fullscreen") : e.element.classList.remove("with-fullscreen");
			e.config.embed.settings.custom_logo ? e.element.classList.add("with-custom-logo") : e.element.classList.remove("with-custom-logo")
		}
		function F() {
			e.config.video.thumbs && M(e.config.video.thumbs);
			q.on([d.playInitiated, d.playButtonClicked], function() {
				A.style.backgroundImage = "none"
			});
			x();
			Gator(m).on("resize", x);
			q.on(d.didEnterFullscreen, function() {
				"none" !== A.style.backgroundImage && M(e.config.video.thumbs)
			})
		}
		function y(a, b) {
			q.fire(t.checkSignatureExpiration);
			if (null === wa) gb.push([a, b]);
			else {
				var c = new XMLHttpRequest;
				c.open(b, "//" + e.config.player_url + e.config.request.prefix + "/video/" + e.config.video.id + "/" + a + "?signature=" + e.config.request.signature + "&session=" + e.config.request.session + "&time=" + e.config.request.timestamp + "&expires=" + e.config.request.expires, !0);
				c.withCredentials = !0;
				c.send()
			}
		}
		function z() {
			if (!e.config) return ka(b, z);
			wa = (new Date).getTime() + 1E3 * e.config.request.expires;
			0;
			e.config._video = {};
			if (aa || r.iPad) e.config.embed.autoplay = 0;
			e.storageModule = new oc(e.config, q);
			var a, c = u.location.hash,
				g = c.match(/t=([0-9hms:]+)/);
			null !== g && (c = g[1]);
			var p = !1,
				M = a = 0,
				x = 0,
				ba = 0;
			if ((g = c.match(/^([0-9]+)$/)) && g.length) p = !0, ba = g[1];
			!1 === p && (g = c.match(/^(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?/), null !== g && "" !== g[0] && (p = !0, M = g[2], x = g[4], ba = g[6]));
			!1 === p && (g = c.match(/^([0-9:]+)/), null !== g && (c = c.split(":").reverse(), ba = c[0], c[1] && (x = c[1]), c[2] && (M = c[2])));
			M && (a += 3600 * M);
			x && (a += 60 * x);
			ba && (a += parseInt(ba, 10));
			0 < a && (e.config.embed.time = s.limit(a, 0, e.config.video.duration), r.touch || (e.config.embed.autoplay = 1), -1 < u.location.hash.indexOf("at=") && (u.location.hash = ""));
			e.element.innerHTML += Razor.render("outer", {
				hideSidedock: !e.config.embed.settings.instant_sidedock
			});
			A = e.element.querySelector(".video");
			L = e.element.querySelector(".video-wrapper");
			v = e.element.querySelector(".target");
			D = e.element.querySelector(".title");
			C = e.element.querySelector(".sidedock");
			G = e.element.querySelector(".controls");
			P = e.element.querySelector(".overlay-wrapper");
			pc = e.element.querySelector(".notification-wrapper");
			S = e.element.querySelector(".outro-wrapper");
			J();
			F();
			e.apiModule = new qc(e.config, q);
			Object.keys(e.apiModule).forEach(function(a) {
				if ("function" === typeof e.apiModule[a]) Object.defineProperty(Z, a, {
					enumerable: !0,
					value: e.apiModule[a]
				});
				else {
					var b = {
						enumerable: !0,
						get: e.apiModule[a].get
					};
					e.apiModule[a].set && (b.set = e.apiModule[a].set);
					Object.defineProperty(Z, a, b)
				}
			});
			e.colorModule = new rc(e.config, q, e.uuid, e.element.id, aa);
			e.overlayModule = new sc(e.config, q, P);
			e.statsModule = new tc(e.config, q);
			e.analyticsModule = new uc(e.config, q);
			e.titleModule = new vc(e.config, q, D);
			e.controlsModule = new wc(e.config, q, G);
			e.sidedockModule = new xc(e.config, q, C);
			e.notificationModule = new yc(e.config, q, pc);
			e.outroModule = new zc(e.config, q, S);
			e.popupModule = new Ac(e.config, q);
			e.keyboardModule = new Bc(e.config, q, e.element);
			Object.defineProperties(Z, {
				pauseKeyboard: {
					enumerable: !0,
					value: e.keyboardModule.pause
				},
				unpauseKeyboard: {
					enumerable: !0,
					value: e.keyboardModule.unpause
				}
			});
			e.config.view !== Va && e.config.view !== Ua && (e.videoModule = new Ab(e.config, q, L));
			O = !0;
			Y();
			e.config.embed.fullscreen = !0;
			if (!BigScreen.enabled || r.browser.bb10) e.element.classList.add("no-fullscreen-api-support"), BigScreen.videoEnabled(e.element) || (e.element.classList.add("no-fullscreen-support"), e.config.embed.fullscreen = !1);
			var w = !1,
				K = !1;
			q.on(t.forceFullscreen, function() {
				q.fire(d.willEnterFullscreen);
				K = !1;
				BigScreen.request(e.element)
			});
			q.on(d.fullscreenButtonClicked, function() {
				BigScreen.element ? (q.fire(d.willExitFullscreen), BigScreen.exit()) : (q.fire(d.willEnterFullscreen), K = !0, BigScreen.request(e.element))
			});
			var N = BigScreen.onenter,
				da = BigScreen.onexit;
			BigScreen.onenter = function(a) {
				w || (e.element.contains(a) ? w || (w = !0, q.fire(d.didEnterFullscreen, e.element === a, K), j()) : "function" === typeof N && N(a))
			};
			BigScreen.onexit = function() {
				w ? w && (w = !1, q.fire(d.didExitFullscreen, K), K = !1, j()) : "function" === typeof da && N()
			};
			Gator(e.element).on("click", "a", function() {
				BigScreen.element === e.element && BigScreen.exit()
			});
			q.on(d.scrubbingStarted, function() {
				e.element.classList.add("scrubbing")
			});
			q.on(d.scrubbingEnded, function() {
				e.element.classList.remove("scrubbing")
			});
			if (r.touch) Gator(e.element).on("gestureend", function(a) {
				1 < a.scale && q.fire(d.fullscreenButtonClicked)
			});
			else {
				var fb = 0;
				Gator(e.element).on("click", function(a) {
					if (a.target.classList && 2 !== a.button && (a.target.classList.contains("title") || a.target.classList.contains("sidedock") || a.target.classList.contains("target") || D.contains(a.target.parentNode) && "HEADER" === a.target.parentNode.tagName)) fb++, 1 === fb && setTimeout(function() {
						1 === fb ? q.fire(e.config._video.paused ? d.playButtonClicked : d.pauseButtonClicked) : q.fire(d.fullscreenButtonClicked);
						fb = 0
					}, 200)
				});
				Gator(e.element).on("mousedown", ".video-wrapper", function(a) {
					v.classList.remove("hidden");
					v.removeAttribute("hidden");
					2 !== a.button && u.createEvent && (a = u.createEvent("MouseEvents"), a.initMouseEvent("click", !0, !0, m, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), v.dispatchEvent(a));
					return !1
				}).on("contextmenu", ".video", function() {
					v.classList.remove("hidden");
					v.removeAttribute("hidden");
					return !1
				})
			}
			var R = function() {
					q.fire(t.checkSignatureExpiration);
					f()
				},
				sa = function(a) {
					Ha ? Ha = !1 : (T && (e.element.style.cursor = "default", T = !1), 0 === a.screenX || a.screenX === screen.width - 1 || 0 === a.screenY || a.screenY === screen.height - 1 ? (clearTimeout(ma), ma = null, k(), Q && (j(!0), Q = !1)) : (Q = !0, W && f(), clearTimeout(ma), ma = setTimeout(j, E)))
				},
				$ = function() {
					j(!0)
				},
				X = function(a) {
					a = G.contains(a.target) || C.contains(a.target);
					l && !a ? j(!0) : l || f()
				};
			a = function(a) {
				if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE) return R(a);
				X(a)
			};
			var M = function(a) {
					if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE) return sa(a)
				},
				x = function(a) {
					if ("mouse" === a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE) return $(a)
				},
				Q = !0;
			if (r.pointerEvents) Gator(e.element).on(["pointerenter", "MSPointerEnter"], a).on(["pointermove", "MSPointerMove"], M).on(["pointerleave", "MSPointerLeave"], x);
			else if (r.touch) Gator(e.element).on("touchend", X);
			else Gator(e.element).on("mouseenter", R).on("mousemove", sa).on("mouseleave", $);
			q.on(d.willEnterFullscreen, j);
			q.on(d.didEnterFullscreen, k);
			q.on(d.didExitFullscreen, function() {
				W = !0
			});
			q.on([d.ended, d.played, d.paused, d.scrubbingStarted], f);
			q.on(d.bufferStarted, function() {
				f(!0)
			});
			q.on([d.bufferEnded, d.scrubbingEnded], function() {
				clearTimeout(ma);
				ma = setTimeout(j, E)
			});
			q.on(t.changeVolume, function(a, b) {
				b || f(!0)
			});
			if (!r.touch) {
				var Ia;
				Gator(e.element).on("focus", "*[tabindex]", function() {
					clearTimeout(Ia);
					Ia = null;
					u.activeElement === this && m.requestAnimationFrame(f)
				});
				Gator(e.element).on("blur", "*[tabindex]", function() {
					u.activeElement === this && (Ia = setTimeout(j, 50))
				})
			}
			a = function(a) {
				var b = e.config.video.url;
				if (b) if (0 < e.config._video.currentTime && (e.config._video.currentTime < e.config.video.duration - 30 && !e.config._video.paused) && (b += "#at=" + Math.floor(e.config._video.currentTime)), e.config.embed.on_site) m.location = b;
				else return m.open(b), h(a), q.fire(d.pauseButtonClicked), !1
			};
			Gator(e.element).on("click", "a[data-clip-link]", a);
			q.on(t.openVimeo, a);
			q.on(d.likeButtonClicked, function() {
				e.config.user.logged_in ? e.config.user.liked ? B(Lb, function() {
					y("like", "DELETE");
					e.config.user.liked = !1;
					q.fire(d.unliked)
				}) : B(Kb, function() {
					y("like", "PUT");
					e.config.user.liked = !0;
					q.fire(d.liked)
				}) : B(lb, function() {
					q.fire(t.openPopup, "login-like")
				}, "like")
			});
			q.on(d.watchLaterButtonClicked, function() {
				e.config.video.url && (e.config.user.logged_in ? e.config.user.watch_later ? B(Nb, function() {
					y("watch-later", "DELETE");
					e.config.user.watch_later = !1;
					q.fire(d.removedFromWatchLater)
				}) : B(Mb, function() {
					y("watch-later", "PUT");
					e.config.user.watch_later = !0;
					q.fire(d.addedToWatchLater)
				}) : B(lb, function() {
					q.fire(t.openPopup, "login-watch-later")
				}, "watch-later"))
			});
			q.on(d.shareButtonClicked, function() {
				B(kb, function() {
					q.fire(t.showOverlay, "share", e.config.embed.settings.share && e.config.embed.settings.share.embed_only)
				})
			});
			q.on(d.embedButtonClicked, function() {
				e.config.embed.settings.share.embed_only && B(kb, function() {
					q.fire(t.showOverlay, "share", !0)
				})
			});
			q.on(d.overlayClosed, function() {
				s.resetFocus(e.element)
			});
			q.fire(t.changeScaling, e.config.storage.scaling);
			q.fire(t.changeVolume, e.config.storage.volume, !0);
			q.on(t.loadVideo, function(a) {
				e.element.classList.add("loading");
				Ha = W = !0;
				O = U = l = !1;
				clearTimeout(ma);
				ma = null;
				ka(a, function() {
					0;
					q.fire(t.changeColor, e.config.embed.color);
					history && history.replaceState && history.replaceState({
						id: e.config.video.id
					}, "", "/video/" + e.config.video.id);
					q.fire(d.configChanged, e.config, !0);
					q.fire(t.reset, !0);
					O = !0;
					F();
					m.requestAnimationFrame(Y)
				})
			});
			q.on(d.configChanged, function() {
				J()
			});
			q.on(d.userLoggedOut, function() {
				ka(e.config.video.id, function() {
					q.fire(d.configChanged, e.config)
				})
			});
			q.on(d.userLogIn, function(a) {
				ka(e.config.video.id, function() {
					0;
					q.fire(d.configChanged, e.config);
					if (e.config.user.logged_in) switch (q.fire(d.userLoggedIn, a), a) {
					case "like":
						e.config.user.liked && q.fire(d.liked);
						break;
					case "watch-later":
						e.config.user.watch_later && q.fire(d.addedToWatchLater);
						break;
					case "private":
						q.fire(d.privateUnlocked)
					} else q.fire(d.loginFailure)
				})
			});
			q.on([d.passwordUnlocked, d.privateUnlocked], n);
			a = function() {
				var a = Ja,
					b = m.getComputedStyle(e.element, ":after");
				Ja = b ? "tiny" === b.getPropertyValue("content") : !1;
				a !== Ja && q.fire(Ja ? d.enteredTinyMode : d.enteredNormalMode)
			};
			var Ja = null;
			a();
			Gator(m).on("resize", a);
			var Bb = !1;
			q.on(t.checkSignatureExpiration, function() {
				wa && wa - 1E3 <= (new Date).getTime() && (q.fire(d.signatureExpired), wa = null)
			});
			q.on(d.signatureExpired, function() {
				if (!Bb) {
					Bb = !0;
					var a = function() {
							Bb = !1;
							q.fire(d.requestConfigReloaded, e.config.request)
						};
					0;
					var b = (new Date).getTime(),
						c = new XMLHttpRequest;
					c.open("GET", "//" + e.config.player_url + e.config.request.prefix + "/video/" + e.config.video.id + "/config/request?session=" + e.config.request.session + "&signature=" + e.config.request.signature + "&time=" + e.config.request.timestamp + "&expires=" + e.config.request.expires, !0);
					c.withCredentials = !0;
					c.onload = function() {
						e.config.request = JSON.parse(c.responseText);
						wa = (new Date).getTime() + 1E3 * e.config.request.expires;
						0;
						var d = (new Date).getTime() - b;
						m._gaq.push(["player._trackTiming", "Player", "Config.Request Load", d]);
						0;
						a.call(c)
					};
					c.send()
				}
			});
			q.on(d.requestConfigReloaded, function() {
				if (0 < gb.length) for (var a = gb.shift(); a;) y.apply(null, a), a = gb.shift()
			});
			var Cc = function() {
					if (0 === m.innerWidth) 0, setTimeout(Cc, 250);
					else {
						var a, b = 90 === Math.abs(m.orientation) ? screen.height : screen.width;
						r.mobileAndroid && (!r.browser.chrome && !r.browser.opera && 4 <= r.android) && (b /= m.devicePixelRatio);
						a = b / m.innerWidth;
						b = Math.round(10 * Math.pow(a, -1.2));
						b = Math.max(b, 10) + "px";
						a = Math.round(10 * Math.pow(a, -0.7));
						a = Math.max(a, 10) + "px";
						G.style.fontSize = b;
						C.style.fontSize = b;
						D.style.fontSize = a
					}
				};
			r.touch && e.element.classList.add("touch-support");
			aa && (e.element.classList.add("mobile"), Cc());
			if (!r.touch) q.on([d.playButtonClicked, d.pauseButtonClicked], f);
			Gator(e.element).on("click", ["a[tabindex]", "button[tabindex]"], h);
			H();
			Object.preventExtensions && Object.preventExtensions(Z);
			for (q.fire(d.ready); I.length;) I.shift().call(Z)
		}
		var e = this;
		e.element = a;
		e.uuid = Math.round(1E3 * Math.random() + (new Date).getTime());
		a.classList.add("player-" + e.uuid);
		a.id || (a.id = "player" + e.uuid);
		e.config = null;
		isNaN(b) && "string" !== typeof b && (e.config = b);
		g = g || null;
		var aa = r.mobileAndroid || r.iPhone || r.windowsPhone || r.browser.bb10,
			wa = null,
			gb = [],
			q = pb.make(),
			ma = null,
			E = r.touch ? 4500 : 2E3,
			W = !0,
			Ha = !0,
			T = !1,
			l = !1,
			U = !1,
			O = !1,
			w, K = null,
			A = null,
			L = null,
			v = null,
			D = null,
			C = null,
			G = null,
			P = null,
			pc = null,
			S = null,
			Z = {},
			I = [];
		Object.defineProperties(Z, {
			config: {
				enumerable: !0,
				get: function() {
					return e.config
				},
				set: function(a) {
					e.config = a;
					q.fire(d.configChanged, e.config)
				}
			},
			delegate: {
				enumerable: !0,
				set: function(a) {
					g = a
				}
			},
			ready: {
				enumerable: !0,
				value: function(a) {
					if ("function" !== typeof a) throw new TypeError("You can only pass a function to ready().");
					I.push(a)
				}
			}
		});
		var N = !0 === c;
		if (!0 !== c) {
			var R = function() {
					if (!N) {
						N = !0;
						setTimeout(Y, 100);
						var a = (new Date).getTime() - c.startTime;
						m._gaq.push(["player._trackTiming", "Player", "CSS Load", a]);
						0
					}
				};
			c.link.id = "playerSheet";
			c.link.addEventListener("load", R, !1);
			var da = function() {
					var a = !1;
					try {
						var b = c.link.sheet,
							d;
						b && (d = b.cssRules, a = null === d, !a && d && (b.insertRule("-curl-css-test {}", 0), b.deleteRule(0), a = !0))
					} catch (e) {
						a = "[object Opera]" !== Object.prototype.toString.call(m.opera) && /security|denied/i.test(e.message)
					}
					if (!a) return setTimeout(da, 50);
					R()
				};
			da()
		}
		z();
		return Z
	};
	var uc;
	uc = function(a, b) {
		function c() {
			switch (a._video && a._video.currentRenderer) {
			case "html":
				return "HTML5";
			case "flash":
				return "Flideo";
			case "moogaloop":
				return "Moogaloop";
			default:
				return "Player"
			}
		}
		function g(b, d) {
			d || (d = a.video.id, a.video.title && (a.video.owner && a.video.owner.name) && (d += " - " + a.video.title + " from " + a.video.owner.name));
			0;
			m._gaq.push(["player._trackEvent", c(), b, d])
		}
		function k(b, c) {
			0;
			m._gaq.push(["player._trackSocial", b, c, a.video.share_url])
		}
		var j = a.request.session,
			f = !1,
			h = !1,
			n = !0;
		b.on(d.playInitiated, function() {
			h || (g("Play"), h = !0)
		});
		b.on(d.didEnterFullscreen, function(a) {
			g("Entered Fullscreen" + (!a ? " (native)" : ""))
		});
		b.on(d.didExitFullscreen, function() {
			g("Exited Fullscreen")
		});
		b.on(t.changeQuality, function(a) {
			"hd" === a ? g("HD Turned On") : g("HD Turned Off")
		});
		b.on(t.showOverlay, function(a) {
			"hd-not-allowed" === a && g("HD Attempt")
		});
		b.on(d.liked, function() {
			g("Liked")
		});
		b.on(d.unliked, function() {
			g("Unliked")
		});
		b.on(d.addedToWatchLater, function() {
			g("Added to Watch Later")
		});
		b.on(d.removedFromWatchLater, function() {
			g("Removed from Watch Later")
		});
		b.on(d.shareButtonClicked, function() {
			g("Share Button Clicked")
		});
		b.on(d.embedButtonClicked, function() {
			g("Embed Button Clicked")
		});
		b.on(d.embedCodeCopied, function() {
			f || (f = !0, g("Embed Code Copied"))
		});
		b.on(d.overlayClosed, function() {
			f = !1
		});
		b.on(d.scalingButtonClicked, function(a) {
			a ? g("Scaling Turned On") : g("Scaling Turned Off")
		});
		b.on(d.userLogIn, function() {
			g("Logged In")
		});
		b.on(d.facebookButtonClicked, function() {
			k("Facebook", "share")
		});
		b.on(d.twitterButtonClicked, function() {
			k("Twitter", "tweet")
		});
		b.on(d.emailButtonClicked, function() {
			k("Email", "email")
		});
		var H;
		b.on([d.bufferStarted, d.scrubbingStarted], function(a) {
			H || (H = a || (new Date).getTime())
		});
		b.on(d.bufferEnded, function() {
			if (0 < H) {
				var b = a._video.currentFile.quality,
					d = "Buffer Time";
				n && (n = !1, d = "Start Time");
				var f = H,
					f = (new Date).getTime() - f;
				0;
				m._gaq.push(["player._trackTiming", c(), d, f, b]);
				H = null
			}
		});
		b.on(d.configChanged, function(b) {
			a = b;
			j !== b.request.session && (m._gaq.push(["player._trackPageview", "/video/" + a.video.id]), n = !0, h = !1)
		});
		b.fire(d.analyticsModuleReady);
		return {}
	};
	var qc, ea = this;
	qc = function(a, b) {
		function c(a, b) {
			try {
				g({
					event: "error",
					data: {
						message: b,
						code: a
					}
				})
			} catch (c) {}
			return Error(b)
		}
		function g(b) {
			if (b.event && (m.fire(b.event, b.data), !n[b.event])) return;
			if (Y) {
				var c = "";
				a.embed.player_id && (b.player_id = a.embed.player_id);
				if (1 === a.embed.api) {
					c = b.event;
					if (1 === a.embed.api) {
						for (var d in y) if (y[d] === b.event) {
							c = d;
							break
						}
						switch (c) {
						case "onSeek":
						case "onProgress":
							delete b.data.percent;
							delete b.data.duration;
							break;
						case "onLoading":
							delete b.data.seconds, delete b.data.duration
						}
					}
					d = "method=" + encodeURIComponent(c || b.method);
					d += "&params=";
					c = [];
					if (b.value !== P) c.push(encodeURIComponent(b.value));
					else if ("object" === typeof b.data) for (var f in b.data) c.push(encodeURIComponent(b.data[f]));
					else b.data !== P && c.push(encodeURIComponent(b.data));
					b.player_id && c.push(b.player_id);
					c = d += c.join(",")
				} else try {
					c = JSON.stringify(b)
				} catch (j) {}
				0;
				if (ea.parent != ea) try {
					ea.parent.postMessage(c, h)
				} catch (g) {}
			}
		}
		function k(b) {
			if (b && "_" !== b.substr(0, 1)) {
				1 === a.embed.api && (b = b.replace("api_", ""));
				switch (b) {
				case "changeColor":
					return z.color.set;
				case "paused":
					return z.paused.get;
				case "seekTo":
					return z.currentTime.set
				}
				if ("function" === typeof z[b]) return z[b];
				var c = b.substr(0, 3);
				b = b.substr(3, 1).toLowerCase() + b.substr(4);
				return z[b] && z[b][c] ? z[b][c] : !1
			}
		}
		function j(a) {
			if (0 === (u.referrer || ea.location.origin || ea.location.href).indexOf(a.origin)) {
				var b;
				a: {
					if ((a = a.data) && "" !== a) {
						if ("object" === typeof a) {
							b = a;
							break a
						}
						try {
							b = JSON.parse(a);
							break a
						} catch (c) {
							var d = {};
							a.split("&").forEach(function(a) {
								try {
									var b = a.split("="),
										c = decodeURIComponent(b[0]),
										e = decodeURIComponent(b[1]);
									"id" !== c && ("params" === c && (c = "value"), e = e.split(",")[0], d[c] = e)
								} catch (f) {}
							});
							b = d;
							break a
						}
					}
					b = void 0
				}
				a = b.method;
				b = b.value;
				var f = k(a);
				f && (0, b = f.call(null, b), b !== P && "" !== b && g({
					method: a,
					value: b
				}))
			}
		}
		function f() {
			if (p && x) {
				try {
					if ("not-supported" === x) throw c("not_supported", "This video is not supported in this browser.");
					throw c("playback", "An error occurred during playback.");
				} catch (a) {}
				x = null
			}
		}
		var h = decodeURIComponent(a.request.referrer),
			n = {
				ready: !0,
				error: !0
			},
			m = pb.make({}),
			Y = !(!ea.postMessage || !ea.parent.postMessage),
			ka = null,
			p = !1,
			ba = !1,
			x = null,
			B = !1,
			J, F = "play pause finish playProgress loadProgress seek".split(" "),
			y = {
				onFinish: "finish",
				onLoading: "loadProgress",
				onLoad: "ready",
				onProgress: "playProgress",
				onPlay: "play",
				onPause: "pause",
				onSeek: "seek"
			},
			z = {
				addEventListener: function(a, b) {
					a in y && (a = y[a]);
					if (0 > F.indexOf(a)) throw c("invalid_event", '"' + a + '" is not a valid event. Valid events are: ' + F.join(", ") + ".");
					if (b) m.on(a, b);
					else n[a] = !0;
					0
				},
				removeEventListener: function(a, b) {
					b ? m.off(a, b) : n[a] = !1;
					0
				},
				play: function() {
					if ("undefined" !== typeof r && (r.iPhone || r.iPad) && !B) throw c("play", "The user must initiate playback first.");
					b.fire(d.playButtonClicked, !0)
				},
				pause: function() {
					b.fire(d.pauseButtonClicked)
				},
				loadVideo: function(d) {
					if (!a.embed.on_site && isNaN(d)) throw c("invalid_video", "The video id must be a number.");
					b.fire(t.loadVideo, d)
				},
				unload: function() {
					b.fire(t.reset)
				},
				_setEmbedSetting: function(c, f) {
					if (a.embed.on_site && (c in a.embed.settings || "custom_logo" === c)) f = "object" === typeof f ? f : Number(f), "badge" === c && (f ? f = J : J = a.embed.settings.badge), a.embed.settings[c] = f, b.fire(d.embedSettingChanged, c, f), b.fire(d.configChanged, a)
				},
				color: {
					get: function() {
						return a.embed.color.replace("#", "")
					},
					set: function(d) {
						if (a.embed.settings.color && !a.embed.on_site) throw c("color_locked", "The creator of the video has chosen to always use " + (new R(a.embed.color)).hex + ".");
						d = (d + "").replace("#", "");
						if (!("string" === typeof d && (3 === d.length || 6 === d.length) && !isNaN(parseInt(d, 16)))) throw c("invalid_color", "The color should be 3- or 6-digit hex value.");
						if ("undefined" === typeof R || "implement" in R) b.fire(t.changeColor, d);
						else try {
							var f = new R(d);
							b.fire(t.changeColor, f);
							if (3 > (new R(23, 35, 34, 0.75)).contrast(f).ratio) throw c("color_contrast", "Specified color does not meet minimum contrast ratio. We recommend using brighter colors. See WCAG 2.0 guidelines: http://www.w3.org/TR/WCAG/#visual-audio-contrast");
						} catch (h) {}
					}
				},
				currentTime: {
					get: function() {
						return 0.1 < a._video.currentTime ? s.round(a._video.currentTime) : 0
					},
					set: function(e) {
						e = parseFloat(e);
						if (isNaN(e) || 0 > e || e > a._video.duration) throw c("invalid_time", "Seconds must be a positive float less than the duration of the video (" + a._video.duration + ").");
						b.fire(t.seek, null, e);
						b.fire(d.mousedOver)
					}
				},
				duration: {
					get: function() {
						return s.round(a.video.duration)
					}
				},
				loop: {
					get: function() {
						return !!a.embed.loop
					},
					set: function(a) {
						b.fire(t.changeLoop, a)
					}
				},
				paused: {
					get: function() {
						return !!a._video.paused
					}
				},
				videoEmbedCode: {
					get: function() {
						return a.video.embed_code
					}
				},
				videoHeight: {
					get: function() {
						return a.video.video_height || a.video.height
					}
				},
				videoId: {
					get: function() {
						return a.video.id
					}
				},
				videoTitle: {
					get: function() {
						return a.video.title
					}
				},
				videoWidth: {
					get: function() {
						return a.video.video_width || a.video.width
					}
				},
				videoUrl: {
					get: function() {
						return a.video.url
					}
				},
				volume: {
					get: function() {
						var b = s.round(a.storage ? a.storage.volume : a.request.cookie.volume);
						return 1 === a.embed.api ? Math.round(100 * b) : b
					},
					set: function(d) {
						d = parseFloat(d);
						1 === a.embed.api && (d /= 100);
						if (isNaN(d) || 0 > d || 1 < d) throw c("invalid_volume", "Volume should be a float between 0 and 1.");
						ka = d;
						b.fire(t.changeVolume, d, !0)
					}
				}
			};
		b.on(d.playInitiated, function() {
			B = !0
		});
		ea.addEventListener ? ea.addEventListener("message", j, !1) : ea.attachEvent("onmessage", j);
		b.on(d.played, function() {
			ba || (ba = !0, g({
				event: "play"
			}))
		});
		b.on(d.paused, function() {
			ba = !1;
			g({
				event: "pause"
			})
		});
		b.on(d.ended, function() {
			ba = !1;
			g({
				event: "finish"
			})
		});
		b.on(d.playProgress, function(a, b, c) {
			g({
				event: "playProgress",
				data: {
					seconds: s.round(a),
					percent: s.round(c),
					duration: s.round(b)
				}
			})
		});
		b.on(d.loadProgress, function(a, b, c) {
			g({
				event: "loadProgress",
				data: {
					bytesLoaded: -1,
					bytesTotal: -1,
					percent: s.round(c),
					duration: s.round(b),
					seconds: s.round(a)
				}
			})
		});
		b.on(d.seeked, function(a, b, c) {
			g({
				event: "seek",
				data: {
					seconds: s.round(a),
					percent: s.round(c),
					duration: s.round(b)
				}
			})
		});
		b.on(d.error, function(a) {
			x = a;
			f()
		});
		b.on(t.reset, function() {
			x = null;
			B = !1
		});
		b.on(d.configChanged, function(c) {
			a = c;
			ka && setTimeout(function() {
				0;
				b.fire(t.changeVolume, ka, !0)
			}, 0)
		});
		b.fire(d.apiModuleReady);
		b.on(d.ready, function() {
			p = !0;
			g({
				event: "ready"
			});
			f()
		});
		return z
	};
	var rc, Yc = [".title a"],
		Zc = [".title a:hover"],
		$c = "a;.overlay-wrapper .footnote.share a:hover;.title h1;.title span.user;.outro .videos h1;.outro .videos h2".split(";"),
		ad = ["a:hover", ".overlay-wrapper .close:hover", ".overlay-wrapper .back:hover", ".outro .videos li h1:hover"],
		bd = [".play-bar .on .fill", ".play-bar a:hover .fill", ".play-bar button:not(.toggle):hover .fill", ".sidedock .on .fill"],
		Cb = [".sidedock .on:hover .fill"],
		cd = [".play-bar .on .stroke", ".sidedock .on .stroke"],
		Db = [".sidedock .on:hover .stroke"],
		dd = '.sidedock button:hover;.player.touch-support .sidedock button:active;.controls .play:hover;.controls .play-bar .played;.controls .tiny-fullscreen-cell:hover;.controls .volume div;.overlay .buttons li;.overlay .window-wrapper button;.overlay .window-wrapper input[type="submit"];.overlay .window-wrapper a[role="button"];.overlay .embed-copy;.outro .videos li:hover img;.outro .videos li a:focus img'.split(";"),
		ed = [".outro .videos li:hover img", ".outro .videos li a:focus img"],
		fd = '.overlay-wrapper .overlay .buttons li a;.overlay-wrapper .overlay button.embed-copy;.overlay-wrapper .footnote.share a:hover;.overlay .window-wrapper button;.overlay .window-wrapper input[type="submit"];.overlay .window-wrapper a[role="button"];.sidedock button:hover'.split(";"),
		gd = ".controls .play:hover .fill;.sidedock button:hover .fill;.play-bar a:hover .fill;.play-bar button:not(.toggle):hover .fill;.controls .tiny-fullscreen-cell:hover .fill;.sidedock .on .fill".split(";"),
		hd = [".controls .play:hover .stroke", ".sidedock button:hover .stroke", ".sidedock .on .stroke"],
		id = ['.overlay-wrapper .overlay a[role="button"]', ".overlay-wrapper .overlay button.embed-copy", ".sidedock button:hover"],
		jd = [".controls .play:hover .fill", ".sidedock button:hover .fill", ".controls .tiny-fullscreen-cell:hover .fill"],
		kd = [".sidedock button:hover .stroke"],
		ld = ['.overlay .window-wrapper input[type="submit"]:active', ".overlay .embed-copy.zeroclipboard-is-active", ".sidedock button:active"];
	rc = function(a, b, c, g, k) {
		function j(a, b) {
			var d = ".player-" + c + " ",
				d = d + a.join("," + d);
			if (b) var f = "#" + g + " ",
				d = d + ("," + f + a.join("," + f));
			k && (d = d.replace(/:hover/g, ":active"));
			return d
		}
		var f = null;
		b.on(t.changeColor, function(h) {
			var n;
			try {
				n = new R(h)
			} catch (g) {
				n = new R("00adef")
			}
			var k;
			h = n;
			if (f) for (; 0 < f.cssRules.length;) f.deleteRule(0);
			else n = u.createElement("style"), n.setAttribute("data-player", c), u.querySelector("head").appendChild(n), f = n.sheet;
			n = h.complement;
			var m = new R(23, 35, 34, 0.75);
			m.contrast(h);
			var r = (new R(0, 0, 0, 0.15)).overlayOn(h);
			3 > m.contrast(n).ratio && n.lighten(5, 3, m);
			m = 40 > h.lightness ? h.clone().lighten(15, 3, h) : h.clone().darken(15, 3, h);
			s.addCssRule(j(Yc, !0), "color:" + h.hex + " !important", f);
			s.addCssRule(j(Zc, !0), "color:" + n.hex + " !important", f);
			s.addCssRule(j($c), "color:" + h.hex, f);
			s.addCssRule(j(bd), "fill:" + h.hex, f);
			s.addCssRule(j(cd), "stroke:" + h.hex, f);
			s.addCssRule(j(dd), "background-color:" + h.hex, f);
			s.addCssRule(j(ed), "border-color:" + h.hex, f);
			s.addCssRule(j(ad), "color:" + n.hex, f);
			s.addCssRule(j(Cb), "fill:" + m.hex, f);
			s.addCssRule(j(Db), "stroke:" + m.hex, f);
			s.addCssRule(j(ld), "background-color:" + r.hex, f);
			0.95 < h.luminance && (n = h.clone().darken(15, 3, h), s.addCssRule(j(fd), "color:" + n.hex, f), s.addCssRule(j(gd), "fill:" + n.hex, f), s.addCssRule(j(hd), "stroke:" + n.hex, f), m = n.clone().darken(15, 3, n), s.addCssRule(j(Cb), "fill:" + m.hex, f), s.addCssRule(j(Db), "stroke:" + m.hex, f));
			175 < h.yiq && 0.95 > h.luminance && (k = m.clone().darken(15, 3, m), s.addCssRule(j(Cb), "fill:" + k.hex, f), s.addCssRule(j(Db), "stroke:" + k.hex, f), s.addCssRule(j(id), "color:" + m.hex, f), s.addCssRule(j(jd), "fill:" + m.hex, f), s.addCssRule(j(kd), "stroke:" + m.hex, f));
			k = {
				main: h.hex,
				selected: m.hex,
				sidedockHover: k ? m.hex : 0.95 < h.luminance ? n.hex : R.white.hex,
				sidedockSelected: 0.95 < h.luminance ? n.hex : h.hex,
				sidedockSelectedHover: k ? k.hex : m.hex
			};
			a._colors = k;
			a.embed.color = k.main.replace("#", "");
			b.fire(d.colorChanged, a.embed.color)
		});
		b.fire(t.changeColor, a.embed.color);
		return {}
	};
	var wc, Dc = function(a, b, c) {
			a += "";
			return Array(b - a.length + 1).join(c || "0") + a
		},
		Ma = function(a, b) {
			var c = Math.floor(a / 3600 % 60),
				d = Math.floor(a / 60 % 60);
			a = Math.floor(a % 60);
			if (b) {
				var k = a + " second" + (1 === a ? "" : "s");
				0 < d && (k = d + " minute" + (1 === d ? "" : "s") + ", " + k);
				0 < c && (k = c + " hour" + (1 === c ? "" : "s") + ", " + k);
				return k
			}
			return (0 < c ? c + ":" : "") + Dc(d, 2) + ":" + Dc(a, 2)
		};
	wc = function(a, b, c) {
		function g() {
			if (!O) {
				var a = C.getBoundingClientRect().right,
					b = parseInt(m.getComputedStyle(C, "").getPropertyValue("border-right-width"), 10);
				O = a - b
			}
			return O
		}
		function k(a) {
			var b;
			if (!D) {
				b = C.getBoundingClientRect().left;
				var c = parseInt(m.getComputedStyle(C, "").getPropertyValue("border-left-width"), 10);
				D = b + c
			}
			b = D;
			c = g() - b;
			return s.limit((a - b) / c, 0, 1)
		}
		function j() {
			if (Ha && !T && l && (a._video.loadProgress || a._video.currentTime)) {
				var b = 'data:image/svg+xml,<svg width="65" height="40" xmlns="http://www.w3.org/2000/svg"><rect height="3" width="' + 65 * ((a._video.loadProgress || 0) / a.video.duration) + '" x="0" y="37" fill="#666"/><rect height="3" width="' + 65 * ((a._video.currentTime || 0) / a.video.duration) + '" x="0" y="37" fill="#' + a.embed.color + '"/></svg>';
				m.requestAnimationFrame(function() {
					I.style.backgroundImage = 'url("' + b.replace(/"/g, "'") + '")'
				})
			}
		}
		function f(b, c) {
			y && !W && (c = c || a.video.duration * b || 0, m.requestAnimationFrame(function() {
				var a = c;
				S.style.left = s.round(100 * b) + "%";
				Q.innerHTML = Ma(a);
				h(b, c)
			}))
		}
		function h(a, b) {
			R.style.width = s.round(100 * a) + "%";
			R.setAttribute("aria-valuenow", s.round(b));
			R.setAttribute("aria-valuetext", Ma(Math.round(b), !0) + " played")
		}
		function n(a, b) {
			P.style.width = s.round(100 * a) + "%";
			P.setAttribute("aria-valuenow", s.round(b));
			P.setAttribute("aria-valuetext", Ma(b, !0) + " loaded")
		}
		function H() {
			U = !1;
			A.classList.remove("state-playing");
			A.classList.add("state-paused");
			var a = A.getAttribute("data-title-play");
			A.setAttribute("title", a);
			A.setAttribute("aria-label", a)
		}
		function p() {
			U = !0;
			A.classList.add("state-playing");
			A.classList.remove("state-paused");
			var a = A.getAttribute("data-title-pause");
			A.setAttribute("title", a);
			A.setAttribute("aria-label", a)
		}
		function ka(b) {
			if (b && y) l = !1, c.classList.add("invisible");
			else if (!F) if (y && a._video.currentTime < E && !e) setTimeout(ka, 500);
			else if (!w && !aa && !na && !(e && a.view === $) && (y && !z || e)) l = !1, c.classList.add("invisible")
		}
		function M(a) {
			if (!l && (!0 === a || !e)) l = !0, c.classList.remove("hidden"), c.removeAttribute("hidden"), K.classList.add("hidden"), K.setAttribute("hidden", ""), j(), setTimeout(function() {
				c.classList.remove("invisible")
			}, 0)
		}
		function ba() {
			m.requestAnimationFrame(function() {
				var b = a.video.duration;
				S.style.left = s.round(0) + "%";
				Q.innerHTML = Ma(b);
				h(0, 0);
				n(0, 0);
				I.style.backgroundImage = ""
			})
		}
		function x() {
			if (!(a.view !== ia && a.view !== $)) {
				var b = a.embed.settings,
					d = {
						targetBlank: 0 === a.embed.on_site,
						playState: U ? "playing" : "paused",
						playIcon: Razor.render("icon_play"),
						pauseIcon: Razor.render("icon_pause"),
						bufferBar: Razor.render("buffer"),
						volume: J && b.volume,
						hdButton: a.video.hd,
						hdIcon: a.video.hd && Razor.render("icon_hd"),
						hdOn: a.video.allow_hd && (null === a.storage.hd ? a.video.default_to_hd : a.storage.hd),
						airplayIcon: r.airPlay && Razor.render("icon_airplay"),
						fullscreenIcon: Razor.render("icon_fullscreen"),
						unfullscreenIcon: Razor.render("icon_unfullscreen"),
						fullscreenButton: b.fullscreen,
						vimeoLogo: {
							show: b.logo,
							showLink: !! a.video.url,
							url: a.video.url,
							logo: Razor.render("logo")
						},
						duration: Ma(a.video.duration),
						rawDuration: a.video.duration
					};
				b.custom_logo && (b = b.custom_logo, d.customLogo = {
					showLink: null !== b.url,
					url: b.url,
					img: b.img,
					sticky: b.sticky,
					width: b.width,
					height: b.height
				});
				c.innerHTML = Razor.render("controls", d);
				A = c.querySelector(".play");
				L = c.querySelector(".play-bar");
				C = c.querySelector(".progress");
				G = L.querySelector(".buffer");
				P = L.querySelector(".loaded");
				R = L.querySelector(".played");
				I = A.querySelector(".tiny-bars");
				S = c.querySelector(".timecode");
				Q = S.querySelector(".box");
				Z = c.querySelector(".ghost-timecode");
				X = Z.querySelector(".box");
				(N = c.querySelector(".volume")) && (ea = [].slice.call(N.querySelectorAll("div"), 0));
				da = c.querySelector(".hd");
				r.airPlay && (ra = c.querySelector(".airplay-container"), ua = c.querySelector(".airplay"));
				va = c.querySelector(".fullscreen");
				K || (K = u.createElement("button"), K.className = "focus-dummy hidden", K.setAttribute("tabindex", "2"), K.setAttribute("hidden", ""), K.setAttribute("aria-hidden", "true"), K.setAttribute("title", "Focus dummy (focuses the play button when the controls are hidden)"), c.parentElement.insertBefore(K, c))
			}
		}
		var B = r.touch,
			J = !0,
			F = !1,
			y = !1,
			z = !1,
			e = !1,
			aa = !1,
			wa = !1,
			w = !1,
			q = !1,
			v = !1,
			E = 1.5,
			W = !1,
			Ha, T = !1,
			l = !0,
			U = !1,
			O = null,
			D = null,
			K, A, L, C, G, P, R, I, S, Q, Z, X, N, ea, da, ra, ua, na = !1,
			va, ga = s.throttle(j, 1E3);
		x();
		s.attachClickHandler(c, ".play", function() {
			y = !0;
			A.classList.contains("state-playing") ? (b.fire(d.pauseButtonClicked), H()) : (b.fire(d.playButtonClicked), p())
		});
		b.on([d.playInitiated, d.playButtonClicked], p);
		b.on([d.pauseButtonClicked, d.paused, d.error], H);
		b.on(d.played, function() {
			p()
		});
		b.on(d.ended, function() {
			W = !1;
			H();
			f(1)
		});
		b.on(d.overlayOpened, function(a) {
			"notsupported" === a && H()
		});
		var za = function(a) {
				if (!(a.button && 2 === a.button)) {
					b.fire(d.scrubbingStarted);
					if (r.pointerEvents) {
						V = a.pointerId;
						try {
							a.target.msSetPointerCapture ? a.target.msSetPointerCapture(V) : a.target.setPointerCapture(V)
						} catch (e) {}
						Gator(c).on(["pointermove", "MSPointerMove"], ".progress", Aa);
						Gator(c).on(["pointerup", "MSPointerUp"], ".progress", ha)
					} else if (r.touch) Gator(u).on("touchmove", Aa).on("touchend", ha);
					else Gator(u).on("mousemove", Aa).on("mouseup", ha);
					var l = a.clientX;
					a.targetTouches && 0 < a.targetTouches.length && (l = a.targetTouches[0].clientX, a.preventDefault());
					a = k(l);
					f(a);
					b.fire(t.seek, a, null)
				}
			},
			Aa = function(a) {
				if (!(V !== a.pointerId || !1 === a.isPrimary)) {
					var c = a.clientX;
					a.targetTouches && 0 < a.targetTouches.length && (c = a.targetTouches[0].clientX, a.preventDefault());
					a = k(c);
					f(a);
					b.fire(t.seek, a)
				}
			},
			ha = function() {
				r.pointerEvents ? (Gator(c).off(["pointermove", "MSPointerMove"], ".progress", Aa), Gator(c).off(["pointerup", "MSPointerUp"], ".progress", ha)) : r.touch ? (Gator(u).off("touchmove", Aa), Gator(u).off("touchend", ha)) : (Gator(u).off("mousemove", Aa), Gator(u).off("mouseup", ha));
				b.fire(d.scrubbingEnded)
			};
		b.on(d.playProgress, function(b, c, d) {
			if (W && (0 === a.embed.time || 0 < a.embed.time && b >= a.embed.time)) W = !1;
			aa || (f(d, b), ga())
		});
		b.on(d.scrubbingStarted, function(a) {
			aa = !0;
			wa = a
		});
		b.on(d.scrubbingEnded, function() {
			wa = aa = !1
		});
		var V;
		b.on(d.seeked, function(a, b, c) {
			wa && f(c)
		});
		if (r.pointerEvents) Gator(c).on(["pointerdown", "MSPointerDown"], ".progress", za);
		else Gator(c).on(r.touch ? "touchstart" : "mousedown", ".progress", za);
		b.on(d.bufferStarted, function() {
			G.classList.remove("hidden");
			w = !0
		});
		b.on(d.bufferEnded, function() {
			G.classList.add("hidden");
			w = !1
		});
		var la = function(a) {
				a.target === L && (a = k(a.clientX), f(a), b.fire(t.seek, a))
			},
			za = function() {
				v || (m.requestAnimationFrame(function() {
					Z.classList.remove("invisible");
					v = !0
				}), Gator(L).on("click", la))
			},
			oa = function(b) {
				if (v) {
					var c = k(b.clientX),
						d = (100 * c).toFixed(3);
					m.requestAnimationFrame(function() {
						Z.style.left = d + "%";
						X.innerHTML = Ma(a.video.duration * c);
						b.clientX > g() + 10 && Ba()
					})
				}
			},
			Ba = function() {
				Z && Z.classList.add("invisible");
				v = !1;
				Gator(L).off("click", la)
			};
		B || (Gator(c).on("mouseenter", ".progress", za), Gator(c).on("mousemove", ".play-bar", oa), Gator(c).on("mouseleave", ".play-bar", Ba), Gator(c).on("transitionend", ".ghost-timecode", function(a) {
			"opacity" === a.propertyName && "0" === m.getComputedStyle(this, "").getPropertyValue("opacity") && (Z.style.left = 0)
		}, !1), b.on(d.mousedOut, Ba));
		var B = function(a) {
				if (1 === a.which) {
					N.setAttribute("data-tabindex", N.getAttribute("tabindex"));
					N.removeAttribute("tabindex");
					q = !0;
					b.fire(d.volumeScrubbingStarted);
					if (r.pointerEvents) {
						ca = a.pointerId;
						try {
							a.target.msSetPointerCapture ? a.target.msSetPointerCapture(ca) : a.target.setPointerCapture(ca)
						} catch (e) {}
						Gator(c).on(["pointermove", "MSPointerMove"], ".volume", xa);
						Gator(c).on(["pointerup", "MSPointerUp"], ".volume", sa)
					} else if (r.touch) Gator(u).on("touchmove", xa).on("touchend", sa);
					else Gator(u).on("mousemove", xa).on("mouseup", sa);
					var f = a.clientX;
					a.targetTouches && (f = a.targetTouches[0].clientX);
					a = ja(f);
					b.fire(t.changeVolume, a);
					fa(a)
				}
			},
			xa = function(a) {
				var c = a.clientX;
				a.targetTouches && (c = a.targetTouches[0].clientX, a.preventDefault());
				a = ja(c);
				b.fire(t.changeVolume, a);
				fa(a)
			},
			sa = function() {
				q = !1;
				b.fire(d.volumeScrubbingEnded);
				r.pointerEvents ? (Gator(c).off(["pointermove", "MSPointerMove"], ".volume", xa), Gator(c).off(["pointerup", "MSPointerUp"], ".volume", sa)) : r.touch ? Gator(u).off("touchmove", xa).off("touchend", sa) : Gator(u).off("mousemove", xa).off("mouseup", sa);
				N.setAttribute("tabindex", N.getAttribute("data-tabindex"));
				N.removeAttribute("data-tabindex")
			},
			fa = function(a) {
				if (N) {
					var b = a / (1 / ea.length),
						c = Math.ceil(b),
						d = b % 1,
						e;
					0.33 >= d && (e = "fill1");
					0.33 < d && 0.66 >= d && (e = "fill2");
					ea.forEach(function(a, b) {
						a.classList.remove("fill0");
						a.classList.remove("fill1");
						a.classList.remove("fill2");
						b === c - 1 && d && 0.66 >= d ? a.classList.add(e) : b > c - 1 && a.classList.add("fill0")
					});
					N.setAttribute("aria-valuenow", a.toFixed(3));
					N.setAttribute("aria-valuetext", Math.round(100 * a) + "%")
				}
			},
			ja = function(a) {
				var b = N.getBoundingClientRect().left,
					c = N.getBoundingClientRect().right - b;
				return s.limit((a - b) / c, 0, 1)
			};
		Gator(c).on("mouseover", ".volume div", function() {
			var a = this;
			a.classList.add("hover");
			m.requestAnimationFrame(function() {
				a.classList.remove("hover");
				a.classList.add("animate")
			})
		});
		Gator(c).on("transitionend", ".volume div", function(a) {
			"height" === a.propertyName && 12 === this.clientHeight && this.classList.remove("animate")
		});
		Gator(u).on("contextmenu", ".volume", function() {
			this.blur()
		});
		var ca;
		if (r.pointerEvents) Gator(c).on(["pointerdown", "MSPointerDown"], ".volume", B);
		else Gator(c).on(r.touch ? "touchstart" : "mousedown", ".volume", B);
		b.on(d.volumeChanged, function(a) {
			!q && ea && fa(a)
		});
		s.attachClickHandler(c, ".hd", function() {
			b.fire(d.hdButtonClicked)
		});
		b.on(d.hdButtonClicked, function() {
			if (!a.video.allow_hd) return b.fire(t.showOverlay, "hd-not-allowed");
			var c = da.classList.contains("on") ? "sd" : "hd";
			b.fire(t.changeQuality, c)
		});
		b.on(t.changeQuality, function(a) {
			"hd" === a ? (da.classList.add("on"), da.classList.remove("off"), da.setAttribute("title", da.getAttribute("data-title-on"))) : (da.classList.add("off"), da.classList.remove("on"), da.setAttribute("title", da.getAttribute("data-title-off")))
		});
		b.on(t.disableHd, function() {
			x()
		}).on(t.disableVolume, function() {
			J = !1;
			x()
		});
		r.airPlay && (s.attachClickHandler(c, ".airplay", function() {
			b.fire(d.airPlayButtonPressed)
		}), b.on(d.airPlayAvailable, function() {
			ra.classList.remove("hidden");
			ra.hidden = !1
		}).on(d.airPlayNotAvailable, function() {
			ra.classList.add("hidden");
			ra.hidden = !0
		}).on(d.airPlayActivated, function() {
			na = !0;
			ua.classList.add("on");
			ua.setAttribute("title", ua.getAttribute("data-title-on"));
			M(!0)
		}).on(d.airPlayDeactivated, function() {
			na = !1;
			ua.classList.remove("on");
			ua.setAttribute("title", ua.getAttribute("data-title-off"))
		}));
		s.attachClickHandler(c, ".fullscreen", function() {
			b.fire(d.fullscreenButtonClicked)
		});
		b.on(d.didEnterFullscreen, function() {
			T = !0;
			va.setAttribute("title", va.getAttribute("data-title-unfullscreen"))
		});
		b.on(d.didExitFullscreen, function(a) {
			T = !1;
			va.setAttribute("title", va.getAttribute("data-title-fullscreen"));
			j();
			a || (F = !0, ba())
		});
		B = function(a) {
			z = "mouseover" === a.type
		};
		if (!r.touch) Gator(c).on(["mouseenter", "mouseleave"], [".play", ".play-bar-cell", ".custom-logo-cell", ".tiny-fullscreen-cell"], B);
		b.on(d.mouseTimeout, ka);
		b.on(d.mousedOver, function() {
			M()
		});
		b.on(d.mousedOut, function() {
			z = !1;
			ka()
		});
		b.on(d.willEnterFullscreen, function() {
			ka(!0)
		});
		b.on(d.willExitFullscreen, function() {
			z = !1
		});
		Gator(c).on("transitionend", function(b) {
			if (this === c && "opacity" === b.propertyName && c.classList.contains("invisible")) {
				if (!a.embed.settings.custom_logo || !a.embed.settings.custom_logo.sticky) c.classList.add("hidden"), c.setAttribute("hidden", "");
				!e && K && (K.classList.remove("hidden"), K.removeAttribute("hidden"))
			}
		});
		Gator(c.parentElement).on("focus", ".focus-dummy", function() {
			var a = [].slice.call(c.querySelectorAll('[tabindex="' + this.getAttribute("tabindex") + '"]'), 0),
				b = a.indexOf(this);
			m.requestAnimationFrame(function() {
				a[b + 1].focus()
			})
		});
		b.on(d.overlayOpened, function(a) {
			"notsupported" !== a && ("private-unlocked" !== a && "help" !== a) && (e = !0, m.requestAnimationFrame(function() {
				ka(!0)
			}))
		});
		b.on(d.overlayClosed, function() {
			e = !1;
			m.requestAnimationFrame(function() {
				M()
			})
		});
		b.on(d.configChanged, function(b) {
			a = b;
			x();
			a.view === $ && M(!0);
			D = O = null
		});
		b.on(t.reset, function() {
			ba();
			M();
			F = W = q = aa = z = y = !1
		});
		Gator(m).on("resize", function() {
			D = O = null
		});
		b.on(d.enteredTinyMode, function() {
			Ha = !0
		});
		b.on(d.enteredNormalMode, function() {
			Ha = !1
		});
		b.on(d.playInitiated, function() {
			b.on(d.loadProgress, function(a, b, c) {
				F || m.requestAnimationFrame(function() {
					n(c, a);
					ga()
				})
			});
			y = !0;
			var c = a.embed.time || a._video.currentTime;
			f(c / a.video.duration, c);
			W = !0
		});
		b.fire(d.controlsModuleReady);
		return {}
	};
	var Bc, hb = 0.05;
	Bc = function(a, b, c) {
		function g() {
			return a.view === ia || a.view === $
		}
		function k() {
			m && "help" === r && b.fire(d.overlayCloseButtonClicked)
		}
		function j(a) {
			a = s.isArray(a) ? a : [a];
			return function() {
				if (g()) {
					if (m && "help" === r) {
						b.fire(d.overlayCloseButtonClicked);
						if (a[0] === t.showOverlay && "help" === a[1]) return !1;
						if (a[0] !== t.openVimeo) return setTimeout(function() {
							b.fire.apply(null, a)
						}, 250), !1
					}
					b.fire.apply(null, a);
					return !1
				}
			}
		}
		function f(c, f) {
			J || (f && !a._video.paused && b.fire(d.pauseButtonClicked), b.fire(d.scrubbingStarted, !0), J = !0);
			var h = B,
				n = Math.ceil(p),
				m = Math.ceil(M - p),
				h = h / ba;
			h--;
			x = m * (h * h * h + 1) + n;
			B++;
			1 === B && (x = a.video.fps);
			n = f ? 1 : x;
			n = "right" === c ? n : -n;
			m = Math["right" === c ? "ceil" : "floor"](a._video.currentTime * a.video.fps);
			b.fire(t.seek, null, (m + n) / a.video.fps)
		}
		function h(a, c) {
			if (g()) {
				k();
				var d = -1 < c.indexOf("shift");
				d && (c = c.replace("shift+", ""));
				if (u.activeElement && u.activeElement === n) return b.fire(t.changeVolume, "left" === c ? -hb : hb, !1, !0), !1;
				d || 0 === B ? f(c, d) : F(c, d)
			}
		}
		c.querySelector(".controls_wrapper");
		var n = c.querySelector(".volume"),
			m = !1,
			r, p = a.video.fps / 5,
			M = Math.max(p, 0.618 * a.video.duration),
			ba = 100,
			x = p,
			B = 0,
			J = !1,
			F = s.throttle(f, 80);
		b.on(d.overlayOpened, function(a) {
			m = !0;
			r = a;
			"notsupported" === a && Mousetrap.pause()
		});
		b.on(d.overlayClosed, function() {
			m = !1;
			r = null
		});
		b.on(d.configChanged, function(b, c) {
			a = b;
			c && Mousetrap.unpause()
		});
		var y = {
			l: d.likeButtonClicked,
			w: d.watchLaterButtonClicked,
			s: d.shareButtonClicked,
			c: d.ccButtonClicked,
			h: d.hdButtonClicked,
			f: d.fullscreenButtonClicked,
			space: function() {
				if (g() && (!u.activeElement || u.activeElement === u.body)) return b.fire(d[a._video.paused ? "playButtonClicked" : "pauseButtonClicked"]), k(), !1
			},
			up: function() {
				if (g()) return k(), b.fire(t.changeVolume, hb, !1, !0), !1
			},
			down: function() {
				if (g()) return k(), b.fire(t.changeVolume, -hb, !1, !0), !1
			},
			left: h,
			right: h,
			"shift+left": h,
			"shift+right": h,
			esc: function() {
				if (g()) {
					if (u.activeElement && c.contains(u.activeElement)) return u.activeElement.blur(), !1;
					if (m) return b.fire(d.overlayCloseButtonClicked), !1
				}
			},
			"?": [t.showOverlay, "help"]
		};
		a.embed.on_site || (y.v = t.openVimeo);
		for (var z in y)"function" === typeof y[z] ? Mousetrap.bind(z, y[z]) : Mousetrap.bind(z, j(y[z]));
		Mousetrap.bind(["shift+left", "shift+right", "left", "right"], function(a) {
			x = p;
			B = 0;
			b.fire(d.scrubbingEnded, a.shiftKey);
			J = !1
		}, "keyup");
		return {
			pause: Mousetrap.pause,
			unpause: Mousetrap.unpause
		}
	};
	var yc;
	yc = function(a, b, c) {
		function g(a, b) {
			var d;
			c.classList.remove("hidden");
			c.removeAttribute("hidden");
			c.setAttribute("data-name", a);
			var j = "watchlater" === a || "unwatchlater" === a ? 0.5 : 0.4,
				g = c.clientHeight;
			c.clientHeight > c.clientWidth && (g = c.clientWidth);
			d = Math.round(g * j);
			d = "width:" + Math.round(1.6 * g * j) + "px;height:" + d + "px";
			f.style.cssText = d;
			f.innerHTML = b;
			if ("watchlater" === a || "unwatchlater" === a) {
				var s = f,
					j = "watchlater" === a,
					p = s.querySelector(".hour-hand"),
					t = s.querySelector(".minute-hand");
				if (p && t) {
					var j = j ? 1 : -1,
						g = new Date,
						J = Math.abs(g.getHours() - 12),
						F = g.getMinutes(),
						g = 360 * (F / 60) - 135,
						J = 360 * (J / 12) + 5 * (F / 60),
						y = J + 45 * j,
						z = g + 540 * j;
					if (r.browser.firefox || r.browser.opera) {
						p.setAttribute("transform", "rotate(" + J + ",10 10)");
						t.setAttribute("transform", "rotate(" + g + ",10 10)");
						F = u.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
						F.setAttribute("attributeName", "transform");
						F.setAttribute("type", "rotate");
						F.setAttribute("begin", "0.1s");
						F.setAttribute("repeatCount", "indefinite");
						var e = F.cloneNode(!1);
						e.setAttribute("from", J + " 10 10");
						e.setAttribute("to", J + 360 * j + " 10 10");
						e.setAttribute("dur", "0.8s");
						p.appendChild(e);
						J = F.cloneNode(!1);
						J.setAttribute("from", g + " 10 10");
						J.setAttribute("to", g + 360 * j + " 10 10");
						J.setAttribute("dur", "9.6s");
						t.appendChild(J)
					} else p.style[r.transformProperty + "Origin"] = "46% 81.5%", t.style[r.transformProperty + "Origin"] = "25.5% 26.5%", p.style[r.transformProperty] = "rotate(" + J + "deg)", t.style[r.transformProperty] = "rotate(" + g + "deg)";
					m.requestAnimationFrame(function() {
						s.classList.add("animate");
						!r.browser.firefox && !r.browser.opera && m.requestAnimationFrame(function() {
							p.style[r.transformProperty] = "rotate(" + y + "deg)";
							t.style[r.transformProperty] = "rotate(" + z + "deg)"
						})
					})
				}
			}
			"hd" === a && (f.querySelector(".hd-notification").style.cssText = d, f.querySelector(".hd-fill").style.cssText = d);
			clearTimeout(h);
			c.classList.remove("animate");
			m.requestAnimationFrame(function() {
				c.classList.remove("invisible");
				"hd" !== a && (h = setTimeout(k, 750))
			})
		}
		function k() {
			c.classList.add("animate");
			c.classList.add("invisible")
		}
		function j() {
			c.classList.remove("animate");
			c.classList.remove("invisible");
			c.classList.add("hidden");
			c.setAttribute("hidden", "");
			c.removeAttribute("data-name");
			f.innerHTML = "";
			f.classList.remove("filled");
			f.classList.remove("animate");
			b.fire(d.notificationHidden)
		}
		var f = c.querySelector(".notification"),
			h;
		Gator(c).on("transitionend", function(a) {
			f.contains(a.target) && "height" === a.propertyName ? setTimeout(k, 100) : a.target === c && "opacity" === a.propertyName && m.requestAnimationFrame(j)
		});
		b.on(d.liked, function(a) {
			a || g("like", Razor.render("icon_heart"))
		});
		b.on(d.unliked, function(a) {
			a || g("unlike", Razor.render("icon_broken_heart"))
		});
		b.on(d.addedToWatchLater, function(a) {
			a || g("watchlater", Razor.render("icon_clock"))
		});
		b.on(d.removedFromWatchLater, function(a) {
			a || g("unwatchlater", Razor.render("icon_clock"))
		});
		b.on(t.changeQuality, function(a, b) {
			0;
			b || ("sd" === a && f.classList.add("filled"), m.requestAnimationFrame(function() {
				g("hd", Razor.render("hd_notification", {
					stroke: Razor.render("icon_hd", {
						stroke: !0,
						notification: !0
					}),
					fill: Razor.render("icon_hd", {
						notification: !0
					})
				}), !0);
				m.requestAnimationFrame(function() {
					"sd" === a ? f.classList.remove("filled") : f.classList.add("filled")
				})
			}))
		});
		b.on(d.configChanged, function() {});
		b.fire(d.notificationModuleReady);
		return {}
	};
	var zc;
	zc = function(a, b, c) {
		function g() {
			if ("vod" === a.embed.outro) f = {
				purchased: a.user.purchased,
				video_url: a.video.vod.url
			};
			else {
				0;
				n = !0;
				var b = new XMLHttpRequest;
				b.open("GET", "//" + a.player_url + a.request.prefix + "/video/" + a.video.id + "/outro", !0);
				b.withCredentials = !0;
				b.onload = function() {
					try {
						var c = JSON.parse(b.response);
						0;
						f = c.data;
						if ("videos" === c.type) {
							f.owner = a.video.owner.id;
							for (var c = 0, d = f.videos.length; c < d; c++)(new Image).src = f.videos[c].thumbnail
						}!0 === h && k()
					} catch (j) {}
				};
				b.send()
			}
		}
		function k() {
			if ("beginning" === a.embed.outro) return b.fire(t.reset);
			if (f && !("videos" === a.embed.outro && 0 === f.videos.length)) {
				j.innerHTML = Razor.render("outro_" + a.embed.outro, f);
				c.classList.remove("hidden");
				c.removeAttribute("hidden");
				if ("videos" === a.embed.outro) {
					var d = m.getComputedStyle(j.querySelector("header h1"), null),
						h = d.getPropertyValue("-webkit-line-clamp"),
						d = d.getPropertyValue("text-overflow");
					if (!h) for (var h = j.querySelectorAll("header h1"), g = 0, k = h.length; g < k; g++) if ("clip" === d) for (var n = h[g], r = n.innerHTML; n.scrollHeight > n.offsetHeight;) r = r.substring(0, r.length - 1), n.innerHTML = r + "&hellip;";
					else h[g].style.display = "inherit"
				}
				m.requestAnimationFrame(function() {
					c.classList.add("in")
				})
			}
		}
		var j = c.querySelector(".outro"),
			f = null,
			h = !1,
			n = !1;
		b.on(d.playProgress, function(a, b) {
			h = !1;
			!n && (null === f && a >= b - 10) && g()
		});
		b.on(d.playInitiated, function() {
			if ("nothing" === a.embed.outro || "beginning" === a.embed.outro) f = !1
		});
		b.on(d.ended, function() {
			h = !0;
			null === f && !n ? g() : k()
		});
		Gator(c).on("transitionend", function() {
			c.classList.contains("in") || (c.classList.add("hidden"), c.setAttribute("hidden", ""))
		}, !1);
		b.on([d.played, d.seeked, d.scrubbingStarted], function() {
			m.requestAnimationFrame(function() {
				c.classList.remove("in")
			})
		});
		b.on(t.showOverlay, function() {
			setTimeout(function() {
				c.classList.add("hidden")
			}, 150)
		});
		b.on(d.overlayClosed, function() {
			c.classList.contains("in") && c.classList.remove("hidden")
		});
		b.on(t.reset, function() {
			f = null;
			n = !1
		});
		b.on(d.configChanged, function(b) {
			a = b
		});
		return {}
	};
	var sc, Ec = "Uh Oh!{D&rsquo;Oh!{Aw fiddlesticks!{Jeepers!{Oh dear!{Ouch!{Zoinks!{Awww, snap!{Blast!{Curses!{ACK!{Aw shucks.{Major bummer.{Dag-nab-it!{Aargh!{Boo-hoo!{&iexcl;Ay caramba!".split("{");
	sc = function(a, b, c) {
		function g() {
			var a = c.getBoundingClientRect(),
				b = y.getBoundingClientRect(),
				d = aa.getBoundingClientRect();
			return a.height - (b.bottom + (a.height - b.bottom) / 2) - d.height / 2 + "px"
		}
		function k() {
			var a = c.getBoundingClientRect(),
				b = y.getBoundingClientRect(),
				d = z.getBoundingClientRect();
			0;
			0;
			0;
			var e = a.height / 2,
				a = b.bottom + (a.height - b.bottom) / 2;
			0;
			0;
			return {
				top: e - d.height / 2 + "px",
				transform: "translateY(" + (a - e) + "px)"
			}
		}
		function j(a, f) {
			0;
			c.setAttribute("data-name", a);
			y.innerHTML = f.template;
			f.modal && (c.classList.add("modal"), c.setAttribute("data-modal", "true"));
			f.wrapperClass && c.classList.add(f.wrapperClass);
			f.icon.type && (f.logo && (aa.classList.remove("hidden"), z.classList.add("cloaked"), m.requestAnimationFrame(function() {
				aa.innerHTML = Razor.render("logo");
				aa.style.bottom = g()
			})), z.classList.remove("hidden"), e.innerHTML = f.icon.html, m.requestAnimationFrame(function() {
				var a = k();
				z.style.top = a.top;
				z.style[r.transformProperty] = a.transform
			}), c.setAttribute("data-icon", f.icon.type), z.setAttribute("data-icon", f.icon.type), e.setAttribute("data-icon", f.icon.type), "private-unlocked" === a && e.classList.add("open"));
			c.classList.add("invisible");
			c.classList.remove("hidden");
			c.removeAttribute("hidden");
			c.classList.add("in");
			G = f;
			C = a;
			q = !0;
			b.fire(d.overlayOpened, a); - 1 < ["share", "hd-not-allowed"].indexOf(a) && s.resetFocus(c);
			m.requestAnimationFrame(function() {
				c.classList.remove("invisible");
				m.requestAnimationFrame(function() {
					y.classList.add("in");
					F.classList.add("in")
				})
			})
		}
		function f() {
			y.classList.remove("in");
			y.classList.add("out")
		}
		function h(a) {
			"true" !== c.getAttribute("data-modal") && q && (F.classList.remove("in"), F.classList.add("out"), f(), c.classList.remove("in"), c.classList.add("out"), clearTimeout(D), D = setTimeout(n, 200), a && a.preventDefault && a.preventDefault(), (a = c.querySelector(".back")) && a.classList.add("cloaked"), b.fire(d.overlayClosed), q = !1, G = C = null)
		}
		function n() {
			c.setAttribute("hidden", "");
			c.removeAttribute("data-name");
			c.removeAttribute("data-icon");
			c.classList.add("hidden");
			c.classList.remove("out");
			c.classList.remove("embed-active");
			c.classList.remove("modal");
			c.classList.remove("embed-only");
			F.classList.remove("out");
			F.classList.remove("in");
			z.removeAttribute("data-icon");
			z.classList.add("hidden");
			z.classList.remove("animate");
			e.removeAttribute("data-icon");
			e.innerHTML = "";
			aa.classList.add("hidden");
			y.classList.remove("out");
			y.innerHTML = "";
			b.fire(d.overlayCleared)
		}
		function p() {
			c.setAttribute("data-modal", "false")
		}
		function w(a) {
			if ("yes" === a.form.getAttribute("data-bubble")) {
				a.form.setAttribute("data-bubble", "no");
				var b = c.querySelector(".validation-bubble");
				b.querySelector(".validation-bubble-message").innerHTML = a.validationMessage || "There is an error with this input.";
				var d = a.getBoundingClientRect(),
					e = a.form.getBoundingClientRect();
				b.style.left = d.left - e.left + "px";
				b.style.top = d.height + 1 + "px";
				b.classList.remove("hidden");
				a.focus();
				m.requestAnimationFrame(function() {
					b.classList.add("animate")
				});
				v()
			}
		}
		function v(a) {
			var b = c.querySelector(".validation-bubble");
			if (b) {
				if (a) return clearTimeout(E), b.classList.remove("animate");
				clearTimeout(E);
				E = setTimeout(function() {
					b.classList.remove("animate")
				}, 5E3)
			}
		}
		function M(a) {
			var b = c.querySelector("input[type=password]");
			if (b.form.classList.contains("submitted")) {
				b.setAttribute("aria-invalid", "false");
				b.setCustomValidity("");
				if (b.checkValidity && !b.checkValidity()) return b.setAttribute("aria-invalid", "true"), b.validity.valueMissing && b.setCustomValidity("Please enter the password."), a || w(b), !1;
				v(!0);
				return !0
			}
		}
		function ba() {
			aa.classList.add("animate");
			z.classList.remove("cloaked");
			z.classList.add("animate");
			m.requestAnimationFrame(function() {
				z.style[r.transformProperty] = "translateY(-10px)"
			});
			p();
			f()
		}
		function x() {
			e.classList.add("open")
		}
		function B() {
			return {
				modal: !1,
				template: null,
				logo: !1,
				icon: {
					type: null,
					html: null
				}
			}
		}
		function J(b) {
			b.template = Razor.render("share", {
				url: a.video.url,
				shareUrl: a.video.share_url,
				playerShareUrl: "//" + a.player_url + a.request.prefix + "/video/" + a.video.id + "/share",
				title: a.video.title,
				owner: a.video.owner.name,
				embed: "public" === a.video.embed_permission && a.embed.settings.embed,
				embedOnly: a.embed.settings.share && a.embed.settings.share.embed_only,
				embedCode: a.video.embed_code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"),
				copyButton: r.flash.installed,
				customizeEmbed: !! a.video.url,
				readOnly: !r.touch
			});
			a.embed.settings.share && a.embed.settings.share.embed_only && (b.wrapperClass = "embed-only");
			return b
		}
		var F = c.querySelector(".overlay-cell"),
			y = c.querySelector(".overlay"),
			z = c.querySelector(".overlay-icon-wrapper"),
			e = z.querySelector(".overlay-icon"),
			aa = c.querySelector(".overlay-logo"),
			D, E, q = !1,
			C = null,
			G = null;
		b.on(t.showOverlay, function(c, e) {
			0;
			var f = function() {
					var b = B();
					switch (c) {
					case "share":
						return j(c, J(b, e));
					case "private-locked":
						return b.icon = {
							type: "lock",
							html: Razor.render("icon_lock")
						}, b.modal = !0, b.logo = !0, b.template = Razor.render("private_locked", {
							title: "Private Video",
							subtitle: "Log in to watch (if you have permission).",
							action: ("dev" === a.build.rpc ? "http" : "https") + "://" + a.vimeo_url + "/log_in"
						}), j(c, b);
					case "hd-not-allowed":
						return b.icon = {
							type: "hd",
							html: Razor.render("icon_hd")
						}, b.template = Razor.render("hd_not_allowed", {
							title: "Sorry, HD not available here",
							subtitle: "Watch this video in HD on Vimeo.com",
							button: "Watch in HD now",
							url: a.video.url
						}), j(c, b);
					case "password":
						return b.icon = {
							type: "lock",
							html: Razor.render("icon_lock")
						}, b.template = Razor.render("password", {
							title: "Password Required",
							subtitle: "If you&rsquo;ve got it, enter it below.",
							action: "//" + a.player_url + a.request.prefix + "/video/" + a.video.id + "/check-password"
						}), b.modal = !0, b.logo = !! a.embed.settings.branding, j(c, b);
					case "private-unlocked":
						return b.icon = {
							type: "lock",
							html: Razor.render("icon_lock")
						}, b.template = Razor.render("private_unlocked"), j(c, b);
					case "error":
						return b.template = Razor.render("error", {
							title: e.title,
							message: e.message
						}), b.modal = !! e.modal, b.logo = !! e.logo, e.icon && "lock" === e.icon && (b.icon = {
							type: "lock",
							html: Razor.render("icon_lock")
						}), j(c, b);
					case "help":
						return b.template = Razor.render("help", {
							onSite: a.embed.on_site
						}), j(c, b);
					case "content-rating":
						return b.template = Razor.render("content_rating", {
							logo: Razor.render("logo")
						}), b.modal = !0, j(c, b)
					}
				};
			q ? (("share" === C || "help" === C || "hd-not-allowed" === C) && C === c || (b.once(d.overlayCleared, f), p()), h()) : f()
		});
		Gator(c).on("input", "input", function() {
			this.form.classList.add("interacted")
		}).on(["focus", "blur"], "input", function() {
			v(!0)
		}).on("transitionend", ".validation-bubble", function(a) {
			"opacity" === a.propertyName && "0" === m.getComputedStyle(this, "").getPropertyValue("opacity") && this.classList.add("hidden")
		});
		b.on([d.overlayCloseButtonClicked, d.played], h);
		b.on(d.privateUnlocked, function() {
			"private-locked" === C && (p(), h())
		});
		b.on(d.configChanged, function(a) {
			"share" === C && (G = J(B(), a.embed.settings.share.embed_only), y.innerHTML = G.template)
		});
		Gator(m).on("resize", function() {
			if (q) {
				aa.style.bottom = g();
				var a = k();
				z.style.top = a.top;
				z.style[r.transformProperty] = a.transform
			}
		});
		Gator(c).on("transitionend", ".overlay-logo", function(a) {
			"opacity" === a.propertyName && this.classList.contains("animate") && (aa.classList.add("hidden"), aa.classList.remove("animate"))
		});
		Gator(c).on("transitionend", ".overlay-icon-wrapper", function(a) {
			-1 < a.propertyName.indexOf("transform") && ("" === this.style[r.transformProperty] ? (this.classList.remove("centered"), "lock" === this.getAttribute("data-icon") && !e.classList.contains("open") && !e.querySelector("canvas") ? setTimeout(x, 100) : e.classList.add("pulled-back")) : "translateY(-10px)" === this.style[r.transformProperty] && (z.classList.add("centered"), z.style[r.transformProperty] = ""))
		});
		Gator(c).on("transitionend", ".overlay-icon", function(a) {
			-1 < a.propertyName.indexOf("transform") && (this.classList.contains("out") ? (p(), h()) : this.classList.contains("pulled-back") ? (e.classList.add("out"), e.classList.remove("pulled-back")) : this.classList.contains("open") && e.classList.add("pulled-back"))
		});
		Gator(c).on("transitionend", ".share-screen", function(a) {
			"opacity" === a.propertyName && "0" === m.getComputedStyle(this, "").getPropertyValue("opacity") && this.classList.add("cloaked")
		}).on("transitionend", ".embed-screen", function(a) {
			"opacity" === a.propertyName && "0" === m.getComputedStyle(this, "").getPropertyValue("opacity") && (c.querySelector(".back").classList.add("cloaked"), this.classList.add("cloaked"), s.resetFocus(c))
		}).on("copy", "input[name=embed_code]", function() {
			b.fire(d.embedCodeCopied)
		});
		s.attachClickHandler(c, ".back", function() {
			c.querySelector(".share-screen").classList.remove("cloaked");
			c.classList.remove("embed-active");
			return !1
		});
		s.attachClickHandler(c, ".facebook", function() {
			b.fire(d.facebookButtonClicked, this.href);
			u.activeElement.blur();
			return !1
		});
		s.attachClickHandler(c, ".twitter", function() {
			b.fire(d.twitterButtonClicked, this.href);
			u.activeElement.blur();
			return !1
		});
		s.attachClickHandler(c, ".email", function() {
			b.fire(d.emailButtonClicked)
		});
		s.attachClickHandler(c, ".embed", function() {
			b.fire(d.embedButtonClicked);
			u.activeElement.blur();
			return !1
		});
		if (r.touch) Gator(y).on("focus", "input[name=embed_code]", function() {
			0;
			var a = this;
			setTimeout(function() {
				a.setSelectionRange(0, 9999);
				a.setAttribute("readonly", "readonly")
			}, 0)
		}).on("blur", "input", function() {
			this.removeAttribute("readonly")
		});
		else Gator(y).on("click", "input[name=embed_code]", function() {
			this.setSelectionRange(0, 9999)
		});
		b.on(d.facebookButtonClicked, function(a) {
			s.openWindow(a, 580, 400, "facebook", "scrollbars=yes,resizable=yes,toolbar=no")
		}).on(d.twitterButtonClicked, function(a) {
			s.openWindow(a, 550, 420, "twitter", "scrollbars=yes,resizable=yes,toolbar=no")
		}).on(d.embedButtonClicked, function() {
			function b() {
				var e = u.getElementById("copy-button");
				(new ZeroClipboard(e, {
					moviePath: a.request.urls.zeroclip_swf,
					trustedDomains: ["*"],
					allowScriptAccess: "always"
				})).on("complete", function() {
					var a = u.getElementById("copy-button");
					a.innerHTML = "Copied!";
					clearTimeout(d);
					d = setTimeout(function() {
						a.innerHTML = "Copy"
					}, 2E3);
					s.resetFocus(c)
				})
			}
			a.embed.settings.share.embed_only || (c.querySelector(".back").classList.remove("cloaked"), c.querySelector(".embed-screen").classList.remove("cloaked"), c.classList.add("embed-active"));
			var d;
			if (r.flash.installed) if (u.getElementById("zc_script_loaded")) b();
			else {
				var e = u.createElement("script"),
					f;
				e.setAttribute("id", "zc_script_loaded");
				e.setAttribute("src", a.request.urls.zeroclip_js);
				e.onreadystatechange = e.onload = function() {
					f || (0, b());
					f = !0
				};
				u.getElementsByTagName("head")[0].appendChild(e)
			}
		});
		Gator(y).on("click", ".popup", function() {
			b.fire(t.openPopup, "login-private-locked");
			return !1
		});
		Gator(y).on("click", ".password input[type=submit]", function() {
			this.form.classList.add("submitted");
			this.form.setAttribute("data-bubble", "yes");
			M(!0)
		}).on("submit", ".password form", function() {
			var a = function() {
					f.classList.remove("loading");
					e.setCustomValidity("Uh oh. There was a problem. Please try again.");
					e.setAttribute("aria-invalid", "true");
					w(e)
				};
			if (M()) {
				var e = this.querySelector("input[type=password]"),
					f = this.querySelector("input[type=submit]");
				f.classList.add("loading");
				s.resetFocus(c);
				var l = Array.prototype.slice.call(this.querySelectorAll("input"), 0).map(function(a) {
					if (a.name) return encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value)
				}).join("&"),
					g = new XMLHttpRequest;
				g.open(this.method, this.action + m.location.search);
				g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				g.withCredentials = !0;
				g.timeout = 3E3;
				g.onload = function() {
					var c;
					try {
						c = JSON.parse(g.responseText)
					} catch (e) {}!1 === c ? a(g.status, g) : (b.fire(d.passwordUnlocked, c), "icon-hidden" === m.getComputedStyle(F, ":after").getPropertyValue("content") ? (p(), h()) : ba())
				};
				g.onerror = function(b) {
					a(b)
				};
				g.send(l)
			}
			return !1
		}).on(["focus", "input"], [".password input[type=email]", ".password input[type=password]"], function() {
			M()
		});
		s.attachClickHandler(y, ".unlocked button", function() {
			ba();
			if (!r.iPad && !r.iPhone) b.once(d.overlayCleared, function() {
				b.fire(d.playButtonClicked)
			})
		});
		s.attachClickHandler(y, ".content-rating button", function() {
			p();
			h()
		});
		b.on(d.error, function(c, e) {
			var f = c,
				g = e && e.title || "Sorry",
				k = e && e.message || "There was an issue with playback.",
				n = -1 < m.location.search.indexOf("partypooper=1") || -1 < m.location.search.indexOf("fun=0");
			switch (c) {
			case "not-supported":
				f = "notsupported";
				g = n ? "Sorry" : Ec[Math.floor(Math.random() * Ec.length)];
				k = "This video can&rsquo;t be played with your current setup.";
				0.5 < a._video.currentTime && (k = "There was an issue playing this video.");
				break;
			case "decode":
				f = "decode", g = "Oops!", k = "There was a problem with this video."
			}
			var F = B();
			F.modal = e && e.modal || !0;
			F.template = Razor.render("error", {
				title: g,
				message: k
			});
			q ? (h(), b.once(d.overlayClosed, function() {
				j(f, F)
			})) : j(f, F)
		});
		b.on(d.configChanged, function(b) {
			a = b
		});
		s.attachClickHandler(c, ".close", function() {
			b.fire(d.overlayCloseButtonClicked)
		});
		Gator(c).on(["click", "touchend"], [".window-wrapper", ".share-wrapper", ".overlay-logo"], function(a) {
			a.stopPropagation()
		}).on(["click", "touchend"], [".overlay-cell", "nav"], function() {
			b.fire(d.overlayCloseButtonClicked);
			return !1
		});
		b.fire(d.overlayModuleReady);
		return {}
	};
	var xc;
	xc = function(a, b, c) {
		function g() {
			if (!u && !w) if (h && a._video.currentTime < B && !p) setTimeout(g, 500);
			else if (h && !n || p) c.classList.add("invisible"), f = !1
		}
		function k() {
			!p && !f && (c.classList.add("invisible"), c.classList.remove("hidden"), c.removeAttribute("hidden"), setTimeout(function() {
				c.classList.remove("invisible");
				f = !0
			}, 0))
		}
		function j() {
			if (!(a.view !== ia && a.view !== $)) {
				r.touch && (c.classList.remove("hidden"), c.removeAttribute("hidden"), c.classList.remove("invisible"));
				var b = a.embed.settings;
				c.innerHTML = Razor.render("sidedock", {
					loggedIn: !! a.user.logged_in,
					likeButton: b.like && Razor.render("icon_heart"),
					liked: a.user.liked,
					watchLaterButton: b.watch_later && Razor.render("icon_clock"),
					addedToWatchLater: a.user.watch_later,
					shareButton: b.share && Razor.render("icon_share"),
					shareButtonLabel: b.share && b.share.embed_only ? "Embed" : "Share",
					scalingButton: b.scaling,
					scalingOn: a.storage.scaling
				});
				M = c.querySelector(".like-button");
				v = c.querySelector(".watch-later-button");
				c.querySelector(".share-button");
				c.querySelector(".embed-button");
				x = c.querySelector(".scaling-button")
			}
		}
		var f = !1,
			h = !1,
			n = !1,
			p = !1,
			u = !1,
			w = !1,
			M, v, x, B = 1.5;
		j();
		s.attachClickHandler(c, ".like-button", function() {
			b.fire(d.likeButtonClicked)
		});
		b.on(d.liked, function() {
			M && M.classList.add("on")
		});
		b.on(d.unliked, function() {
			M && M.classList.remove("on")
		});
		s.attachClickHandler(c, ".watch-later-button", function() {
			b.fire(d.watchLaterButtonClicked)
		});
		b.on(d.addedToWatchLater, function() {
			v && v.classList.add("on")
		});
		b.on(d.removedFromWatchLater, function() {
			v && v.classList.remove("on")
		});
		s.attachClickHandler(c, ".share-button", function() {
			b.fire(a.embed.settings.share.embed_only ? d.embedButtonClicked : d.shareButtonClicked)
		});
		s.attachClickHandler(c, ".scaling-button", function() {
			b.fire(d.scalingButtonClicked);
			b.fire(t.changeScaling, !a.storage.scaling);
			return !1
		});
		b.on(t.changeScaling, function(a) {
			x && (a ? x.classList.add("on") : x.classList.remove("on"))
		});
		b.on(d.mousedOver, function(a) {
			a || k()
		});
		if (!r.touch) Gator(c).on(["mouseenter", "mouseleave"], function(a) {
			n = "mouseover" === a.type
		});
		b.on([d.mousedOut, d.mouseTimeout], g);
		b.on(d.played, function() {
			h = !0
		});
		Gator(c).on("transitionend", function(a) {
			"opacity" === a.propertyName && c.classList.contains("invisible") && (c.classList.add("hidden"), c.setAttribute("hidden", ""))
		});
		b.on(d.willEnterFullscreen, function() {
			n = !1;
			g()
		});
		b.on(d.didExitFullscreen, function(a) {
			u = !a
		});
		b.on(d.airPlayActivated, function() {
			w = !0;
			k()
		}).on(d.airPlayDeactivated, function() {
			w = !1
		});
		b.on(d.overlayOpened, function() {
			p = !0;
			m.requestAnimationFrame(function() {
				g();
				c.classList.add("cloaked")
			})
		});
		b.on(d.overlayClosed, function() {
			p = !1;
			m.requestAnimationFrame(function() {
				k();
				c.classList.remove("cloaked")
			})
		});
		b.on(d.configChanged, function(b) {
			a = b;
			j()
		});
		b.on(t.reset, function() {
			n = !1;
			g();
			n = h = !1
		});
		b.fire(d.sidedockModuleReady);
		return {}
	};
	var tc;
	tc = function(a, b) {
		function c(c, d, f, e) {
			b.fire(t.checkSignatureExpiration);
			if (h) x.push([c, d, f, 0]);
			else {
				d.signature = a.request.signature;
				d.session = a.request.session;
				d.time = a.request.timestamp;
				d.expires = a.request.expires;
				var g;
				g = Object.keys(d).map(function(a) {
					return encodeURIComponent(a) + "=" + encodeURIComponent(d[a])
				}).join("&");
				var j = new XMLHttpRequest;
				j.open("POST", "//" + a.player_url + a.request.prefix + c, !f);
				j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				j.onload = function() {
					200 !== j.status && 2 > e && x.push([c, d, f, e + 1])
				};
				j.send(g)
			}
		}
		function g(b, d, f) {
			c(b, {
				referrer: a.request.referrer,
				embed: !a.embed.on_site,
				context: a.embed.context,
				id: a.video.id,
				userId: a.user.id,
				userAccountType: a.user.account_type,
				ownerId: a.video.owner.id,
				privacy: a.video.privacy,
				rating: a.video.rating ? a.video.rating.id : null,
				type: a._video.currentRenderer,
				videoFileId: a._video.currentFile.id || 0,
				delivery: a._video.currentFile.hls ? "hls" : "progressive",
				quality: a._video.currentFile.quality,
				duration: s.round(a.video.duration),
				seconds: s.round(d)
			}, f)
		}
		function k(b, c) {
			a.request.flags.partials && a.request.flags.plays && (b = Math.round(1E3 * b) / 1E3 || 0, b > r && !p && (0, r = b, g("/log/partial", b, c)))
		}
		function j(b, d) {
			c("/log/" + b, {
				referrer: a.request.referrer,
				embed: !a.embed.on_site,
				context: a.embed.context,
				id: a.video.id,
				userId: a.user.id,
				userAccountType: a.user.account_type,
				ownerId: a.video.owner ? a.video.owner.id : 0,
				add: d
			})
		}
		function f() {
			var b = n;
			v = {};
			30 >= a.video.duration ? b = 100 : 200 >= a.video.duration && (b = Math.max(10, a.video.duration * (n / 100)), b = Math.ceil(100 * (b / a.video.duration)));
			for (var c = b; 100 > c;) v[c] = !1, c += b;
			v[100] = !1
		}
		var h = !1,
			n = 5,
			r = 0,
			p = !1,
			u = 0,
			w = !1,
			v, x = [];
		f();
		b.on(d.playProgress, function(a, b, c) {
			b = Math.round(100 * c);
			!1 === v[b] && (k(a), v[b] = !0)
		});
		b.on(d.playInitiated, function() {
			!w && a.request.flags.plays && (w = !0, g("/log/play", 0))
		});
		b.on(d.paused, function(a) {
			k(a)
		});
		b.on(d.seeked, function(a) {
			u = a;
			p || k(u)
		});
		b.on(d.scrubbingStarted, function() {
			p = !0
		});
		b.on(d.scrubbingEnded, function() {
			p = !1;
			k(u)
		});
		b.on(d.hdButtonClicked, function() {
			k(a._video.currentTime)
		});
		b.on(d.ended, function() {
			k(a.video.duration)
		});
		m.addEventListener("beforeunload", function() {
			0 < a._video.currentTime && k(a._video.currentTime, !0)
		});
		var B = function(a) {
				return function() {
					j(a)
				}
			};
		[{
			type: "share_press",
			event: d.shareButtonClicked
		}, {
			type: "facebook_press",
			event: d.facebookButtonClicked
		}, {
			type: "twitter_press",
			event: d.twitterButtonClicked
		}, {
			type: "email_press",
			event: d.emailButtonClicked
		}, {
			type: "embed_press",
			event: d.embedButtonClicked
		}, {
			type: "login_success",
			event: d.userLoggedIn
		}, {
			type: "airplay",
			event: d.airPlayActivated
		}].forEach(function(a) {
			b.on(a.event, B(a.type))
		});
		b.on(d.likeButtonClicked, function() {
			j("like_press", !a.user.liked)
		}).on(d.watchLaterButtonClicked, function() {
			j("watch_later_press", !a.user.watch_later)
		}).on(d.popupOpened, function(a) {
			0 === a.indexOf("login-") && j("login_attempt")
		});
		b.on(d.signatureExpired, function() {
			h = !0
		});
		b.on(d.requestConfigReloaded, function(b) {
			a.request = b;
			h = !1;
			if (0 < x.length) for (b = x.shift(); b;) c.apply(null, b), b = x.shift()
		});
		b.on(d.configChanged, function(b, c) {
			a = b;
			c && (r = 0, p = w = !1, f())
		});
		var J = ["not-supported", "decode", "network", "aborted", "unknown"];
		b.on(d.error, function(b) {
			0 <= J.indexOf(b) && c("/log/" + b.replace("-", "") + "_error", {
				id: a.video.id,
				context: a.embed.context
			})
		});
		b.fire(d.statsModuleReady);
		return {}
	};
	var oc, Na = zb;
	oc = function(a, b) {
		function c(a) {
			a.frame.parentElement.removeChild(a.frame);
			a = Na.storageOrigins.indexOf(a);
			Na.storageOrigins.splice(a, 1)
		}
		function g(a, b) {
			try {
				0, b.frame.contentWindow.postMessage(JSON.stringify(a), b.origin)
			} catch (c) {}
		}
		function k(c, f) {
			switch (c) {
			case "hd":
				a.video.allow_hd && b.fire(t.changeQuality, !0 === f ? "hd" : "sd", !0);
				break;
			case "scaling":
				b.fire(t.changeScaling, !! f);
				break;
			case "volume":
				b.fire(t.changeVolume, f, !0);
				break;
			case "login":
				if (f) {
					b.fire(d.userLogIn);
					break
				}
				b.fire(d.userLoggedOut);
				break;
			case "active":
				null !== f && (f !== a.request.session && !a._video.paused && 0 > m.location.search.indexOf("autopause=0")) && b.fire(d.pauseButtonClicked)
			}
		}
		function j(a) {
			if ("string" !== typeof a) return P;
			try {
				return JSON.parse(a)
			} catch (b) {
				return a || P
			}
		}
		function f(b, d) {
			if (p && h(b) !== d) {
				m.localStorage.setItem(b, JSON.stringify(d));
				var f = {
					storageType: "localStorage",
					method: "set",
					key: b,
					val: JSON.stringify(d),
					session: a.request.session
				};
				if (a.embed.on_site) try {
					0, m.postMessage(f, m.location.origin)
				} catch (j) {}
				Na.storageOrigins.forEach(function(a) {
					if (null === a.frame) {
						var b = u.createElement("iframe");
						b.src = a.origin + a.path;
						b.setAttribute("title", "Vimeo LocalStorage Proxy");
						b.setAttribute("aria-hidden", "true");
						b.setAttribute("hidden", "");
						b.onload = function() {
							b.contentWindow.postMessage("ping", "*");
							a.pingTimeout = setTimeout(function() {
								0;
								c(a)
							}, 500);
							a.loadTimeout && (clearTimeout(a.loadTimeout), a.loadTimeout = null)
						};
						a.loadTimeout = setTimeout(function() {
							0;
							c(a)
						}, 1E4);
						u.body.appendChild(b);
						a.frame = b;
						a.queue.push(f)
					} else a.loaded ? g(f, a) : a.queue.push(f)
				})
			}
		}
		function h(a) {
			if (p) return j(m.localStorage.getItem(a))
		}
		function n(b) {
			b && (a = b);
			b = h("hd");
			var c = h("scaling"),
				d = h("volume"),
				g = a.request.cookie,
				e = g && g.hd,
				j = g && g.scaling,
				g = g && g.volume,
				k = !0;
			try {
				u.cookie = "a=1", "" === u.cookie && (k = !1)
			} catch (m) {
				k = !1
			}
			a.storage = {
				hd: b === P ? null !== e ? !! e : null : b,
				scaling: c === P ? !! j : c,
				volume: d === P ? g : d,
				cookieSupport: k
			};
			f("login", !! a.user.logged_in)
		}
		var p;
		try {
			p = m.localStorage && (m.localStorage.a = 1), m.localStorage.removeItem("a")
		} catch (r) {
			p = !1
		}
		var s = Na,
			v;
		if (!(v = Na.storageOrigins)) {
			v = [{
				origin: "http://" + a.player_url,
				path: a.request.prefix + "/receiver.html"
			}, {
				origin: "https://" + a.player_url,
				path: a.request.prefix + "/receiver.html"
			}];
			for (var w = [], x = 0, B = v.length; x < B; x++) - 1 === v[x].origin.indexOf(m.location.origin) && w.push({
				origin: v[x].origin,
				path: v[x].path,
				loaded: !1,
				queue: [],
				frame: null,
				loadTimeout: null,
				pingTimeout: null
			});
			0;
			v = w
		}
		s.storageOrigins = v;
		m.addEventListener("message", function(a) {
			"pong" === a.data && Na.storageOrigins.forEach(function(b) {
				if (a.origin === b.origin) {
					b.loaded = !0;
					clearTimeout(b.pingTimeout);
					for (b.pingTimeout = null; b.queue.length;) {
						var c = b.queue.shift();
						g(c, b)
					}
				}
			})
		});
		n();
		b.on(d.qualityChanged, function(b, c) {
			c || f("hd", "hd" === b);
			a.storage.hd = "hd" === b
		});
		b.on(t.changeScaling, function(b) {
			f("scaling", b);
			a.storage.scaling = b
		});
		b.on(d.volumeChanged, function(b, c) {
			c || f("volume", b);
			a.storage.volume = b
		});
		b.on(d.playButtonClicked, function(b) {
			b || f("active", a.request.session)
		});
		b.on([d.pauseButtonClicked, d.ended], function() {
			h("active") === a.request.session && f("active", null)
		});
		b.on(d.userLoggedIn, function() {
			f("login", !0)
		});
		m.addEventListener("message", function(b) {
			b.origin === m.location.origin && (m === b.source && b.data.session !== a.request.session) && (0, k(b.data.key, b.data.val))
		}, !1);
		m.addEventListener("storage", function(a) {
			var b = j(a.newValue);
			k(a.key, b)
		}, !1);
		return {
			reset: n
		}
	};
	var Ac;
	Ac = function(a, b) {
		b.on(t.openPopup, function(c) {
			var g = "http://" + a.player_url + "/video/" + a.video.id + "/login";
			switch (c) {
			case "login-like":
				s.openWindow(g + "/like", 670, 545, "popup");
				b.fire(d.popupOpened, c);
				break;
			case "login-watch-later":
				s.openWindow(g + "/watch-later", 670, 545, "popup");
				b.fire(d.popupOpened, c);
				break;
			case "login-private-locked":
				s.openWindow(g + "/private", 670, 545, "popup"), b.fire(d.popupOpened, c)
			}
		});
		a.embed.on_site || (m.confirmLoginAction = function(a, g) {
			b.fire(d.userLogIn, g)
		});
		return {}
	};
	var r, G = function(a) {
			return RegExp(a.toLowerCase()).test(Eb)
		},
		Eb = navigator.userAgent.toLowerCase(),
		Fc = G("android") ? parseFloat(Eb.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0 : !1,
		Gc = m.devicePixelRatio || 1,
		md = "WebKitPlaybackTargetAvailabilityEvent" in m,
		nd = Fc && G("mobile"),
		od = {
			bb10: G("bb10"),
			chrome: G("chrome"),
			firefox: G("firefox"),
			opera: G("opera"),
			safari: G("safari") && G("apple") && !G("chrome") && !G("android")
		},
		Oa = navigator,
		ib = !1,
		Fb = 0,
		Gb = 0,
		Hb = 0,
		Sa = null,
		Ib = null,
		jb, Ta;
	if (Oa.plugins && Oa.plugins.length) {
		if ((Ta = Oa.plugins["Shockwave Flash"]) && Ta.description) Sa = Ta.description, ib = !0
	} else if (Oa.mimeTypes && Oa.mimeTypes.length)(Ta = Oa.mimeTypes["application/x-shockwave-flash"]) && Ta.enabledPlugin && (ib = !0);
	else try {
		Sa = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"), ib = !0
	} catch (Bd) {}
	Sa && (Ib = Sa.replace(/\D+/g, ".").replace(/^\./, ""), jb = Ib.split("."), Fb = parseInt(jb[0], 10), Gb = parseInt(jb[1], 10), Hb = parseInt(jb[2], 10));
	var pd = {
		installed: ib,
		raw: Sa,
		version: Ib,
		major: Fb,
		minor: Gb,
		revision: Hb,
		versionAtLeast: function(a, b, c) {
			a = a || 10;
			b = b || 0;
			c = c || 0;
			var d = [Fb, Gb, Hb],
				k = arguments,
				j = Math.min(d.length, k.length),
				f;
			for (f = 0; f < j; f++) if (d[f] >= k[f]) {
				if (!(f + 1 < j && d[f] === k[f])) return !0
			} else return !1
		}
	},
		qd = G("iphone") || G("ipod"),
		rd = G("ipad"),
		sd = G("ipad") && 2 > Gc,
		td = G("mac os"),
		ud = m.navigator.pointerEnabled || m.navigator.msPointerEnabled || !1,
		vd = !! u.createElementNS && !! u.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		wd = "ontouchstart" in m || m.DocumentTouch && u instanceof DocumentTouch || G("windows phone") || 1 < m.navigator.maxTouchPoints || m.navigator.msMaxTouchPoints || !1,
		Jb;
	a: {
		var xd = u.createElement("div"),
			Hc = "T" + "transform".slice(1),
			Ic = ("transform " + ["Webkit", "Moz", "O", "ms"].join(Hc + " ") + Hc).split(" "),
			Jc;
		for (Jc in Ic) {
			var Kc = Ic[Jc];
			if (xd.style[Kc] !== P) {
				Jb = Kc;
				break a
			}
		}
		Jb = void 0
	}
	r = {
		airPlay: md,
		android: Fc,
		mobileAndroid: nd,
		browser: od,
		devicePixelRatio: Gc,
		flash: pd,
		iPhone: qd,
		iPad: rd,
		iPadNonRetina: sd,
		mac: td,
		pointerEvents: ud,
		svg: vd,
		touch: wd,
		transformProperty: Jb,
		windowsPhone: G("windows phone") ? parseFloat(Eb.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0 : !1
	};
	var vc;
	vc = function(a, b, c) {
		function g() {
			c.classList.add("invisible")
		}
		function k() {
			c.classList.remove("hidden");
			c.removeAttribute("hidden");
			setTimeout(function() {
				c.classList.remove("invisible")
			}, 0)
		}
		function j() {
			if (!(a.view !== ia && a.view !== $)) {
				var b = {
					targetBlank: 0 === a.embed.on_site,
					linkToOwner: null !== a.video.owner.url,
					ownerLink: a.video.owner.url,
					showPortrait: !! a.embed.settings.portrait,
					portraitImg: a.video.owner[1 < r.devicePixelRatio ? "img_2x" : "img"],
					showTitle: !! a.embed.settings.title,
					showTitleLink: null !== a.video.url,
					titleLink: a.video.url,
					title: a.video.title,
					showByline: !! a.embed.settings.byline,
					owner: a.video.owner.name
				};
				a.embed.settings.byline_badge && (b.bylineBadge = {
					cssClass: a.embed.settings.byline_badge.type,
					link: a.embed.settings.byline_badge.url || !1
				});
				var d = a.embed.settings.badge;
				if (d) {
					var f = 1 < r.devicePixelRatio ? "img_2x" : "img";
					r.svg && d.svg && (f = "svg");
					b.showPortrait = !1;
					b.badge = {
						link: d.link,
						img: d[f],
						offset: d.offset || !1,
						width: d.width,
						height: d.height,
						name: d.name
					}
				}
				a.embed.autoplay && (c.classList.add("hidden"), c.setAttribute("hidden", ""));
				c.innerHTML = Razor.render("title", b)
			}
		}
		var f = !1;
		j();
		b.on(d.playInitiated, function() {
			g();
			f = !0
		});
		b.on(d.played, g);
		b.on([d.paused, d.mousedOver], function() {
			a.embed.settings.info_on_pause && a._video.paused && k()
		});
		b.on([d.mousedOut, d.mouseTimeout], function() {
			f && g()
		});
		Gator(c).on("transitionend", function(a) {
			"opacity" === a.propertyName && c.classList.contains("invisible") && (c.classList.add("hidden"), c.setAttribute("hidden", ""))
		}, !1);
		b.on(d.didExitFullscreen, function(a) {
			a || k()
		});
		b.on(d.ended, function() {
			g()
		});
		b.on(d.overlayOpened, function(a) {
			"notsupported" !== a && ("private-unlocked" !== a && "help" !== a) && m.requestAnimationFrame(g)
		});
		b.on(d.overlayClosed, function() {
			f || m.requestAnimationFrame(k)
		});
		b.on(d.configChanged, function(b) {
			a = b;
			j();
			a.view === $ && k()
		});
		b.on(t.reset, function() {
			k();
			f = !1
		});
		b.fire(d.titleModuleReady);
		return {}
	};
	var Ab;
	Ab = function(a, b, c) {
		function g(a) {
			var b = {},
				c, d;
			for (d in a.codecs) if (c = a.codecs[d], a[c]) for (var e in a[c]) {
				var f;
				if (f = a[c].hasOwnProperty(e)) f = q ? "h264" === c ? 2 <= R ? "" !== q.h264.high : "" === ("mobile" === e ? q.h264.baseline : q.h264.high) || 2 > R && "1080p" === e && S ? !1 : !0 : "vp8" === c ? "" !== q.webm : void 0 : !1, f = f && !(r.iPadNonRetina && 921600 < a[c][e].width * a[c][e].height);
				f && (b[e] = a[c][e], b[e].quality = e)
			}
			0;
			return b
		}
		function k(a) {
			var b = {},
				c, d;
			for (d in a.codecs) if (c = a.codecs[d], a[c]) for (var e in a[c]) a[c].hasOwnProperty(e) && (b[e] = a[c][e], b[e].quality = e);
			0;
			return b
		}
		function j() {
			b.fire(d.bufferStarted);
			V = $ = !0;
			!X && !a._video.currentFile.hls && l.pause()
		}
		function f() {
			O || z();
			T.classList.remove("cloaked");
			za ? (b.fire(d.error, za), F(), e()) : (b.fire(t.checkSignatureExpiration), L || (0, va || l.load(), b.fire(d.playInitiated), j(), L = !0, r.android && !r.browser.chrome && l.play()), A = K = !0, X && (Ba = !0, b.fire(t.forceFullscreen)), va && h())
		}
		function h() {
			!ca && !ta && (ua = $ = !1, A && l.paused && (0, na && p(na, function() {
				na = null
			}), l.play()))
		}
		function n(a) {
			l.duration && a > l.duration && (a = l.duration);
			if (0 < l.seekable.length) for (var b = 0, c = l.seekable.length; b < c; b++) if (l.seekable.start(b) <= a && l.seekable.end(b) >= a) return !0;
			return !1
		}
		function p(b, c) {
			n(b) ? (b = s.limit(b, 0, (l.duration || a.duration) - 0.01), l.currentTime = b, a._video.currentTime = b, c && c()) : (ha = b, pa = c, ya || (cb.events.forEach(function(a) {
				l.addEventListener(a, v, !1)
			}), ya = !0))
		}
		function v() {
			ha && n(ha) && (ha = s.limit(ha, 0, (l.duration || a.duration) - 0.01), l.currentTime = ha, a._video.currentTime = ha, pa && pa(), h(), pa = ha = null)
		}
		function w(a, b) {
			return a + b
		}
		function C() {
			if (l.buffered.length) {
				var a = (new Date).getTime(),
					b = l.buffered.end(l.buffered.length - 1);
				ja || (ja = a);
				N.push(b - da);
				N = N.slice(-10);
				oa = N.reduce(w) / N.length;
				Z = null;
				ja = a;
				da = b;
				Z = !0;
				Math.round(b) !== Math.round(l.duration) ? Z = setTimeout(C, 1E3) : 0
			}
		}
		function D(a, b) {
			var c = a.length - 1;
			if (1 < a.length) for (var d = 0, e = a.length; d < e; d++) if (a.start(d) <= b && a.end(d) >= b) {
				c = d;
				break
			}
			return c
		}
		function x(c) {
			L && (la || (la = (new Date).getTime()), Z || C());
			if (!ia && l.buffered && 0 < l.buffered.length) {
				c = c || l.currentTime;
				c = D(l.buffered, c);
				c = l.buffered.end(c);
				var e = c / l.duration;
				a._video.loadProgress = c;
				b.fire(d.loadProgress, c, l.duration, e);
				V && (A && c === l.duration ? h() : (l.duration - l.buffered.end(l.buffered.length - 1)) / oa + 2 <= l.duration - l.currentTime && (0, h()))
			}
		}
		function B(a) {
			var b = ["hd", "sd", "mobile"];
			for (a = b.indexOf(a); 3 > a; a++) {
				var c = b[a];
				if (I[c]) return I[c];
				if (W[c]) return W[c]
			}
			return null
		}
		function E(e, f) {
			!L || l.ended ? (y(B(e)), b.fire(d.qualityChanged, e, f)) : (ia = !0, na || (na = l.currentTime), A = !l.paused, ua = !0, l.pause(), j(), b.once(d.notificationHidden, function() {
				U || (T.insertAdjacentHTML("beforebegin", '<canvas class="snapshot"></canvas>'), U = c.querySelector(".snapshot"));
				var g = U.getContext("2d");
				if (g && l.canvasImageSource) {
					U.setAttribute("width", l.videoWidth + "px");
					U.setAttribute("height", l.videoHeight + "px");
					var h = 0,
						j = 0,
						k = 0,
						m = 0,
						k = Q.clientWidth,
						m = Q.clientHeight,
						n = a.video.width / a.video.height;
					k / m >= n ? (j = m, h = (n * m).toFixed(2)) : (h = k, j = (k / n).toFixed(2));
					k = Math.max((k - h) / 2, 0);
					m = Math.max((m - j) / 2, 0);
					U.style.cssText = "width:" + h + "px;height:" + j + "px;left:" + k + "px;top:" + m + "px";
					g.drawImage(l.canvasImageSource, 0, 0, U.width, U.height);
					U.classList.remove("hidden")
				}
				y(B(e));
				l.load();
				b.fire(d.qualityChanged, e, f);
				p(na, function() {
					ia = !1
				})
			}))
		}
		function F() {
			Q.style.backgroundImage = "url(" + Q.getAttribute("data-thumb") + ")"
		}
		function y(c) {
			c && (va = !1, a._video.currentFile = c, l.src = a._video.currentFile.url, a._video.currentRenderer = l.renderer, 0 < c.bitrate && O && O.setCurrentBitrate(c.bitrate), sa || (c = l.volume, l.volume = 0.999, 0.999 !== s.round(l.volume) && (0, b.fire(t.disableVolume)), l.volume = c, sa = !0))
		}
		function z() {
			if ("Conviva" in m) {
				Aa = !1;
				var b = Conviva.ConvivaContentInfo.createInfoForLightSession("[" + a.video.id + "] " + a.video.title + " from " + a.video.owner.name);
				b.cdnName = Conviva.ConvivaContentInfo.CDN_NAME_AKAMAI;
				b.streamUrl = a._video.currentFile.url;
				b.isLive = !! a._video.currentFile.hls;
				b.playerName = "HTML";
				b.tags = {
					location: a.embed.on_site ? "on_site" : "embed",
					context: a.embed.context,
					player_type: "html",
					player_sub_type: l.renderer,
					player_version: a.request.build.js,
					build_num: a.build.player,
					profile_id: a._video.currentFile.profile,
					availability_id: a._video.currentFile.availability,
					video_quality: a._video.currentFile.quality,
					delivery_method: a._video.currentFile.hls ? "hls" : "progressive",
					user_account_type: a.user.account_type,
					owner_account_type: a.video.owner.account_type,
					auto_play: a.embed.autoplay,
					is_vod: a.video.vod ? a.video.vod.is_feature : 0,
					purchased_status: a.user.purchased || 0,
					origin: a._video.currentFile.origin || "unknown"
				};
				O = Conviva.LivePass.createSession(l, b);
				0 < a._video.currentFile.bitrate && O.setCurrentBitrate(a._video.currentFile.bitrate);
				O.setContentLength(a.video.duration)
			} else 0, Aa = !0
		}
		function e() {
			O && (Conviva.LivePass.cleanupMonitoringSession(l), O = null)
		}
		function G() {
			if (0 === Object.keys(I).length && 0 === Object.keys(W).length) b.fire(d.error, "not-supported");
			else {
				var c = a.video.hd && a.video.allow_hd,
					e = c && (null === a.storage.hd ? a.video.default_to_hd : a.storage.hd);
				if (r.touch && 2E3 > screen.width) {
					if (q.hls && a.request.files.hls) return a.video.hd = !1, b.fire(t.disableHd), y({
						url: a.request.files.hls.all,
						quality: "sd",
						hls: !0
					});
					c && (r.windowsPhone || r.android && r.mobileAndroid || r.browser.bb10 ? 0 : q.h264.high) ? c = B(e ? "hd" : "sd") : (a.video.hd = !1, b.fire(t.disableHd), c = B("sd"))
				} else c = B(e ? "hd" : "sd");
				if (!c) return b.fire(d.error, "not-supported");
				y(c)
			}
		}
		var P = !1,
			R = r.devicePixelRatio,
			q = cb.support,
			S = r.touch,
			I, W, Q = c.querySelector(".video"),
			T = c.querySelector(".flideo"),
			l = null,
			U = null,
			O = null,
			X = r.mobileAndroid || r.android && !r.browser.chrome && !r.browser.firefox && !r.browser.opera,
			K = !1,
			A = !1,
			L = !1,
			ea = !1,
			V = !1,
			$ = !1,
			ga = !1,
			fa = !1,
			ca = !1,
			la, Z, ja, N = [],
			oa = 0,
			da = 0,
			ra, ua = !1,
			na, va = !1,
			ia = !0,
			za = null,
			Aa = !1,
			ha = null,
			pa = null,
			ya = !1,
			ta = !1,
			Ba = !1,
			xa = !1,
			sa = !1,
			Ca = 0,
			Da = 0;
		a._video = {};
		a._video.paused = !0;
		a._video.ended = !1;
		a._video.currentTime = 0;
		a._video.loadProgress = 0;
		a._video.currentFile = {};
		T.classList.add("cloaked");
		I = g(a.request.files);
		W = k(a.request.files);
		if (a.request.flags.conviva && !("Conviva" in m)) {
			var Ea = u.getElementsByTagName("script")[0],
				Ia = u.createElement("script"),
				Ja = !1;
			Ia.src = a.request.urls.conviva;
			Ea.parentNode.insertBefore(Ia, Ea);
			Ia["onreadystatechange" in Ia ? "onreadystatechange" : "onload"] = function() {
				if (!Ja && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) Ja = !0, Conviva.LivePass.toggleTraces(!1), Conviva.LivePass.init(a.request.urls.conviva_service, a.request.conviva_account, function(a) {
					0 === a.code ? (0, Aa && (0, z()), Array.prototype.slice.call(u.querySelectorAll("iframe")).forEach(function(a) {
						0 === a.getAttribute("id").indexOf("_convivaRemoteFrame") && (a.setAttribute("title", "Conviva Communication Proxy"), a.setAttribute("aria-hidden", "true"), a.setAttribute("hidden", ""))
					})) : 0
				})
			}
		}
		l = new cb(T, {
			swf: a.request.urls.flideo
		});
		l.preload = "none";
		r.mobileAndroid && r.browser.chrome && (l.preload = "metadata");
		b.on(d.mousedOver, function() {
			!P && (a.request.flags.preload_video && !va && "metadata" !== l.preload) && (l.preload = "metadata")
		});
		l.addEventListener("loadedmetadata", function() {
			va = !0;
			Infinity !== l.duration && (a.video.duration = l.duration);
			a.video.video_width = l.videoWidth;
			a.video.video_height = l.videoHeight;
			A && (l.preload = "")
		});
		l.addEventListener("durationchange", function() {
			a.video.duration = l.duration;
			O && O.setContentLength(a.video.duration)
		});
		l.addEventListener("waiting", function() {
			r.browser.firefox || j()
		}, !1);
		l.addEventListener("canplay", function() {
			ea = !0;
			if (a.embed.autoplay || A || K && !L) 0, h()
		}, !1);
		l.addEventListener("canplaythrough", function() {
			($ || A && l.paused) && h()
		}, !1);
		l.addEventListener("progress", function() {
			x()
		}, !1);
		b.on(d.playInitiated, function() {
			T.classList.remove("cloaked");
			c.classList.remove("invisible")
		});
		b.on(d.playButtonClicked, f);
		b.on(d.pauseButtonClicked, function() {
			A = !1;
			l.pause()
		});
		l.addEventListener("play", function() {
			ia = !1;
			!L && !ea ? (b.fire(d.playInitiated), A = K = L = !0) : (T.classList.remove("invisible"), b.fire(d.played, l.currentTime), a._video.paused = !1, a._video.ended = !1)
		}, !1);
		l.addEventListener("pause", function() {
			a._video.paused = !0;
			L && (!$ && !ca && !ua) && b.fire(d.paused, l.currentTime);
			ra && (clearTimeout(ra), ra = null)
		}, !1);
		l.addEventListener("playing", function() {
			L || (b.fire(d.playInitiated), L = !0);
			x();
			ga = !0
		}, !1);
		l.addEventListener("timeupdate", function() {
			var c = l.currentTime;
			a._video.currentRenderer = l.renderer;
			L && (0 < c && !fa && !Ba) && (clearTimeout(ra), ra = setTimeout(function() {
				!1 === l.paused && (!fa && !Ba) && (0, j())
			}, 2E3));
			ga && (V && 0 < c) && (0, ga = !1, V && (b.fire(d.bufferEnded), V = $ = !1));
			if (0 < l.buffered.length && !V) {
				var e = D(l.buffered, c),
					e = l.buffered.end(e);
				if (!Ba && 0 < c && c < l.duration && e === c) {
					0;
					j();
					return
				}
			}
			ia || (e = l.duration, b.fire(d.playProgress, c, e, c / e), a._video.currentTime = c, na && c > na && (na = null));
			U && (U.classList.add("hidden"), U = null)
		}, !1);
		l.addEventListener("ended", function() {
			ca || (a.embed.loop ? l.play() : (b.fire(d.ended), A = !1, a._video.paused = !0, a._video.ended = !0))
		}, !1);
		var Fa = !1;
		m.addEventListener("beforeunload", function() {
			Fa = !0
		});
		l.addEventListener("error", function(c) {
			if (!Fa && c.target.error) {
				var f = a._video.currentFile ? a._video.currentFile.quality : null;
				if (null === l.currentSrc || !f) 0;
				else switch (O || z(), c.target.error.code) {
				case c.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
					0;
					c = f;
					if (!I[f] || !W[f] || I[f].url === W[f].url) delete W[f], c = "hd" === f ? "sd" : "sd" === f ? "mobile" : null;
					delete I[f];
					a._video.currentFile = B(c);
					0;
					if (a._video.currentFile) {
						y(a._video.currentFile);
						break
					}
					K && O && O.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE);
					if ("metadata" === l.preload) {
						0;
						za = "not-supported";
						break
					}
					b.fire(d.error, "not-supported");
					za = "not-supported";
					e();
					break;
				case c.target.error.MEDIA_ERR_DECODE:
					0;
					b.fire(d.error, "decode");
					O.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE);
					e();
					break;
				case c.target.error.MEDIA_ERR_NETWORK:
					0;
					b.fire(d.error, "network");
					O.reportError(Conviva.ConvivaLightSession.ERROR_CONNECTION_FAILURE);
					e();
					break;
				case c.target.error.MEDIA_ERR_ABORTED:
					0;
					break;
				default:
					0, b.fire(d.error, "unknown"), O.reportError(Conviva.ConvivaLightSession.ERROR_STREAMING_FAILURE), e()
				}
			}
		});
		var Ga = function() {
				var b = Math.min(l.videoWidth || a.video.width, screen.width),
					c = Math.min(l.videoHeight || a.video.height, screen.height);
				if (!(Da === b && Ca === c)) {
					var d = "width:" + b + "px;",
						d = d + ("height:" + c + "px;"),
						d = d + ("margin-left:-" + (b / 2).toFixed(2) + "px;"),
						d = d + ("margin-top:-" + (c / 2).toFixed(2) + "px;"),
						d = d + "top:50%;",
						d = d + "left:50%;";
					if (!qa) {
						var e = u.createElement("style");
						u.querySelector("head").appendChild(e);
						qa = e.sheet
					}[".player:-webkit-full-screen .video-wrapper .video.native-size", ".player:-moz-full-screen .video-wrapper .video.native-size", ".player:-ms-full-screen .video-wrapper .video.native-size", ".player:fullscreen .video-wrapper .video.native-size"].forEach(function(a) {
						s.addCssRule(a, d, qa)
					});
					Ca = c;
					for (Da = b; 1 < qa.cssRules.length;) qa.deleteRule(0)
				}
			},
			qa;
		l.addEventListener("loadedmetadata", function() {
			Ga()
		});
		b.on(t.changeScaling, function(a) {
			a ? Q.classList.remove("native-size") : (Ga(), Q.classList.add("native-size"))
		});
		b.on(t.changeLoop, function(b) {
			a.embed.loop = !! b;
			l.loop = !! b
		});
		b.fire(t.changeLoop, a.embed.loop);
		b.on(d.scrubbingStarted, function() {
			A = !l.paused;
			ca = fa = !0;
			l.pause();
			clearTimeout(ra)
		});
		b.on(d.scrubbingEnded, function(a) {
			ca = !1;
			a || h()
		});
		b.on(t.seek, function(c, e) {
			e || (e = (l.duration || a.video.duration) * s.limit(c, 0, 1));
			e = s.limit(e, 0, l.duration || a.video.duration);
			L || (b.fire(d.playButtonClicked), A = K = L = !0);
			p(e, function() {
				b.fire(d.seeked, l.currentTime, l.duration, l.currentTime / l.duration)
			})
		});
		l.addEventListener("seeking", function() {}, !1);
		l.addEventListener("seeked", function() {
			x();
			fa = !1;
			l.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA && !ca && h()
		}, !1);
		b.on(t.changeVolume, function(a, c, e) {
			e && (a += l.volume);
			l.volume = s.limit(a, 0, 1);
			b.fire(d.volumeChanged, s.limit(a, 0, 1), c)
		});
		b.on(t.changeQuality, function(a, b) {
			"hd" === a ? (0, E("hd", b)) : (0, E("sd", b))
		});
		b.on(d.overlayOpened, function() {
			ta = !0;
			L && !xa && (A = !l.paused, l.pause())
		});
		b.on(d.overlayClosed, function() {
			ta = !1;
			A && !xa && h()
		});
		b.on(d.didEnterFullscreen, function(a) {
			a || (T.classList.remove("cloaked"), !L && !r.browser.safari && (l.poster = Q.getAttribute("data-thumb")), Ba = !0)
		});
		b.on(d.didExitFullscreen, function(a) {
			l.poster = "";
			L || T.classList.add("cloaked");
			Ba = !1;
			a || (F(), T.classList.add("cloaked"));
			X && l.pause()
		});
		b.on(d.playInitiated, function() {
			l.poster = ""
		});
		b.on(d.signatureExpired, function() {
			P = !0;
			na = l.currentTime
		});
		b.on(d.requestConfigReloaded, function(b) {
			a.request = b;
			P = !1;
			I = g(a.request.files);
			W = k(a.request.files);
			1 === l.buffered.length && l.buffered.end(0) === l.duration || G();
			A && l.paused && h()
		});
		b.on(d.configChanged, function(b) {
			var c = a._video.currentFile;
			a = b;
			I = g(a.request.files);
			W = k(a.request.files);
			a._video = {
				paused: l.paused,
				ended: l.ended,
				currentTime: l.currentTime,
				currentFile: c
			};
			x()
		});
		Gator(T).on("transitionend", function(a) {
			"opacity" === a.propertyName && "0" === m.getComputedStyle(this, "").getPropertyValue("opacity") && T.classList.remove("transition")
		}, !1);
		b.on(t.reset, function(c) {
			0;
			ia = !0;
			l.paused || (l.pause(), b.fire(d.paused, l.currentTime));
			l.currentTime = 0;
			F();
			T.classList.add("transition");
			T.classList.add("invisible");
			A = L = !1;
			za = null;
			a._video.paused = !0;
			a._video.ended = !1;
			a._video.currentTime = 0;
			a._video.loadProgress = 0;
			c && (l.preload = "none", G(), e())
		});
		G();
		0 < a.embed.time && p(a.embed.time, function() {
			a.embed.time = 0
		});
		r.airPlay && (0, l.addEventListener("webkitplaybacktargetavailabilitychanged", function(a) {
			switch (a.availability) {
			case "available":
				0;
				b.fire(d.airPlayAvailable);
				break;
			case "not-available":
				0, b.fire(d.airPlayNotAvailable)
			}
		}), l.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function() {
			if (l.webkitCurrentPlaybackTargetIsWireless) return xa = !0, b.fire(d.airPlayActivated);
			xa = !1;
			b.fire(d.airPlayDeactivated)
		}), b.on(d.airPlayButtonPressed, function() {
			l.webkitShowPlaybackTargetPicker()
		}));
		a.embed.autoplay && (l.preload = "", K = !0, f());
		b.fire(d.videoModuleReady)
	};
	m.VimeoPlayer = zb
})(window, document);