var _und = "undefined",
	__adroll = window.__adroll || {
		exp: 5E4,
		eexp: 720,
		pv: 1E11 * Math.random(),
		__adc: "__ar_v4",
		_nad: 0,
		_lce: null,
		_broken: !1,
		_url: 2E3,
		_r: {},
		_kwl: 50,
		_logs: [],
		_secure: function() {
			return "https:" == document.location.protocol ? !0 : !1
		},
		_head: function() {
			return (document.getElementsByTagName("head") || [null])[0] || (document.getElementsByTagName("body") || [null])[0] || document.getElementsByTagName("script")[0].parentNode
		},
		_srv: function(a) {
			a = typeof a == _und ? "" : a;
			return "//d.adroll.com" + a
		},
		_cdn: function(a) {
			a = typeof a == _und ? "" : a;
			return this._secure() ? "https://s.adroll.com" + a : "http://a.adroll.com" + a
		},
		log: function(a) {
			this._logs.push(a)
		},
		read_log: function(a) {
			return this._logs.join(a ? "\n" : "<br>\n")
		},
		cookieEnabled: function(a) {
			if (adroll_ext_network || adroll_optout || this._broken) return !1;
			if (2 <= this._nad || a) return this._lce;
			this.set("_te_", "1");
			if ("1" == this.get("_te_")) {
				this.del("_te_");
				return 0 < this._nad && !this.get(this.__adc) ? this._lce = !1 : this._lce = !0
			}
			return this._lce = !1
		},
		parseUri: function(a) {
			for (var a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a), b = {}, c = 14, d = "source,protocol,authority,userInfo,user,password,host,port,relative,path,directory,file,query,anchor".split(","); c--;) b[d[c]] = a[c] || "";
			b.queryKey = {};
			b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(a, c, d) {
				c && (b.queryKey[c] = d)
			});
			return b
		},
		get_keywords: function() {
			try {
				var a = document.referrer || "";
				if (!a) return "";
				var b = this.parseUri(a);
				return -1 != b.host.indexOf("google.com") ? b.queryKey.q.substring(0, this._kwl) : ""
			} catch (c) {
				return ""
			}
		},
		get: function(a) {
			var b = document.cookie;
			if (null == b) return this._broken = !0, null;
			var c;
			0 > b.indexOf(a + "=") ? b = null : (a = b.indexOf(a + "=") + a.length + 1, c = b.indexOf(";", a), -1 == c && (c = b.length), b = b.substring(a, c), b = "" == b ? null : unescape(b));
			return b
		},
		set: function(a, b, c) {
			var d;
			!c || "number" != typeof c ? c = "" : (d = new Date, d.setTime(d.getTime() + 36E5 * c), c = d.toGMTString(), c = "; expires=" + c);
			d = "; domain=" + window.location.hostname;
			b = escape(b);
			document.cookie = a + "=" + b + c + "; path=/" + d
		},
		del: function(a) {
			this.set(a, "", -8760)
		},
		generate_link: function() {
			return ""
		},
		get_base_url: function(a, b, c, d, e, f) {
			var a = a + "/" + b + "/" + c + (d ? "/" + d : "") + (e ? "/" + e : ""),
				h = "";
			this.cookieEnabled(!1) ? (h = escape(this.get_eids()), a += "?pv=" + this.pv + "&cookie=" + h) : a += "?no-cookies=1&pv=" + this.pv;
			f && (a += "&" + f.join("&"));
			if (a.length > this._url) {
				this.del(this.__adc);
				if (a.length - h.length > this._url) return "#";
				this.log("Url was too big, shrinking it");
				return this.get_url(b, c, d, e, f)
			}
			this.log("Generated url: " + a);
			return a
		},
		get_url: function(a, b, c, d, e) {
			return this.get_base_url(!c ? this._srv("/r") : this._srv("/c"), a, b, c, d, e)
		},
		get_eids: function() {
			if (adroll_ext_network || adroll_optout) return "";
			try {
				for (var a = this.get(this.__adc), b = a ? a.split("|") : "", a = [], c = b.length - 1; 0 <= c; c--) if (b[c]) {
					var d = b[c].split(":");
					a.push([d[0], d[2]].join(":"))
				}
				return a.join("|")
			} catch (e) {
				return this.del(this.__adc), ""
			}
		},
		get_date: function(a) {
			var b = new Date;
			a && b.setTime(b.getTime() + 36E5 * a);
			var a = "" + b.getUTCFullYear(),
				c = b.getUTCMonth(),
				c = 10 <= c ? c : "0" + c,
				b = b.getUTCDate();
			return [a, c, 10 <= b ? b : "0" + b].join("")
		},
		normalize_url: function(a) {
			return a.toLowerCase()
		},
		check_cookie: function(a, b) {
			if (adroll_ext_network || adroll_optout) return "";
			for (var c = a.split("|"), d = c.length - 1; 0 <= d; d--) if (c[d]) {
				var e = c[d].split(":");
				b == e[0] && (e[2] = "" + (parseInt(e[2]) + 1), c[d] = e.join(":"))
			}
			return c.join("|")
		},
		handle: function(a) {
			var b = this.get(this.__adc) || ""; - 1 != b.indexOf(a) ? this.set(this.__adc, this.check_cookie(b, a), this.exp) : this.set(this.__adc, [b, [a, this.get_date(this.eexp), "1"].join(":")].join("|"), this.exp)
		},
		expire_old: function() {
			if (!adroll_ext_network && !adroll_optout) {
				for (var a = this.get_date(), b = this.get(this.__adc), b = b ? b.split("|") : [""], c = [], d = b.length - 1; 0 <= d; d--) b[d] && b[d].split(":")[1] > a && c.push(b[d]);
				this.set(this.__adc, c.join("|"), this.exp)
			}
		},
		render_win_notification: function(a) {
			if (a.adroll_cpm_macro && a.adroll_win_notif) {
				var b = new Image,
					c = this._secure() ? "https://" : "http://";
				b.src = c + a.adroll_win_notif + a.adroll_cpm_macro;
				b.setAttribute("width", "1");
				b.setAttribute("height", "1");
				b.setAttribute("border", "0");
				this._head().appendChild(b)
			}
		},
		render_ad_code: function(a, b, c, d) {
			d = typeof d == _und ? null : d;
			if (typeof this._r[b] == _und || d) {
				var e = ["width=" + adroll_width, "height=" + adroll_height, "x=0", "y=0"];
				if (c) this.log("Rendering test ad " + c + " in space " + b), e.push("test_ad=" + c), a = this.get_url(a, b, null, "ad", e);
				else if (d) {
					this.log("Rendering adgroup " + d);
					var c = this.macro_values(),
						f = this.macro_url_params(c, !1, !1, !1, !1);
					e.push(f);
					this.render_win_notification(c);
					a = this.get_url(a, b, d, null, e)
				} else this.log("Rendering ad space " + b), a = this.get_url(a, b, null, "ad", e);
				this.expire_old();
				document.write('<script src="' + a + '"><\/script>');
				this._nad += 1;
				this._r[b] = 1
			}
		},
		endswith: function(a, b) {
			return -1 !== a.indexOf(b, a.length - b.length)
		},
		macro_values: function() {
			adroll_cpm_macro = typeof adroll_cpm_macro == _und ? null : adroll_cpm_macro;
			adroll_url_macro = typeof adroll_url_macro == _und ? null : adroll_url_macro;
			adroll_c_macro = typeof adroll_c_macro == _und ? null : adroll_c_macro;
			adroll_subnetwork = typeof adroll_subnetwork == _und ? null : adroll_subnetwork;
			adroll_ad_payload = typeof adroll_ad_payload == _und ? null : adroll_ad_payload;
			adroll_win_notif = typeof adroll_win_notif == _und ? null : adroll_win_notif;
			var a = {
				r: /^\$\{.*\}$/i,
				g: /^%%.*%%$/i,
				b: /^\[.*\]$/i,
				x: /^\$\{.*\}$/i,
				t: /INSERTCLICKTRACKER/
			}[adroll_ext_network],
				a = typeof a == _und ? /CANNOT_MATCH_THIS/ : a,
				b = {};
			adroll_cpm_macro && !a.test(adroll_cpm_macro) && (b.adroll_cpm_macro = adroll_cpm_macro);
			adroll_url_macro && !a.test(adroll_url_macro) && (b.adroll_url_macro = adroll_url_macro);
			adroll_c_macro && !a.test(adroll_c_macro) && (b.adroll_c_macro = adroll_c_macro);
			adroll_subnetwork && !a.test(adroll_subnetwork) && (b.adroll_subnetwork = adroll_subnetwork);
			adroll_ad_payload && !a.test(adroll_ad_payload) && (b.adroll_ad_payload = adroll_ad_payload);
			adroll_win_notif && !a.test(adroll_win_notif) && (b.adroll_win_notif = adroll_win_notif);
			return b
		},
		format_macros: function(a, b, c, d) {
			return this.macro_url_params(this.macro_values(), a, b, c, d)
		},
		macro_url_params: function(a, b, c, d, e) {
			var e = typeof e == _und ? !1 : e,
				f = d ? escape : function(a) {
					return a
				},
				h = a.adroll_cpm_macro,
				i = a.adroll_url_macro,
				k = c ? a.adroll_c_macro : null,
				g = [],
				j = b ? this.parseUri(b) : null,
				j = j ? this.endswith(j.path, ".tp") : !1;
			!j && e && g.push(["desturl", ""]);
			k && 0 === k.indexOf("http") ? (e = f, "g" == adroll_ext_network && (e = d ?
			function(a) {
				return a
			} : unescape), g.push(["clickurl", e(k)])) : j && e && g.push(["clickurl", ""]);
			adroll_ext_network && g.push(["adroll_network", adroll_ext_network]);
			h && g.push(["cpm", h]);
			a.adroll_subnetwork && g.push(["adroll_subnetwork", a.adroll_subnetwork]);
			a.adroll_ad_payload && g.push(["adroll_ad_payload", a.adroll_ad_payload]);
			i && (a = this.parseUri(unescape(i)), g.push(["site_url", f("http://" + a.host)]), c && (g.push(["adroll_width", f(adroll_width)]), g.push(["adroll_height", f(adroll_height)])));
			this.log("Macros found " + this.serialize(g));
			return b ? this.buildurl(b, g) : this.serialize(g)
		},
		view: function(a) {
			var b = new Image;
			b.src = this._srv("/view/" + a);
			b.setAttribute("width", "1");
			b.setAttribute("height", "1");
			b.setAttribute("border", "0");
			this._head().appendChild(b)
		},
		serialize: function(a) {
			if (a.length) {
				for (var b = [], c = a.length - 1; 0 <= c; c--) b.push(a[c].join("="));
				return b.join("&")
			}
			return ""
		},
		buildurl: function(a, b) {
			var c = this.serialize(b),
				d = a.indexOf("?");
			return !c ? a : d == a.length - 1 ? a + c : -1 != d ? "&" == a[a.length - 1] ? a + c : a + "&" + c : a + "?" + c
		},
		set_cookie: function() {},
		reset: function() {
			adroll_c_id = null;
			adroll_cpm_macro = adroll_c_macro = adroll_url_macro = "";
			adroll_win_notif = adroll_ad_payload = adroll_subnetwork = adroll_ext_network = null
		},
		addLoadEvent: function(a) {
			if (typeof __adroll_loaded != _und && __adroll_loaded || typeof _adroll_ie != _und && _adroll_ie || /msie/i.test(navigator.userAgent)) return a();
			if (/WebKit/i.test(navigator.userAgent)) load_timer = setInterval(function() {
				/loaded|complete/.test(document.readyState) && clearInterval(load_timer);
				a()
			}, 10);
			else {
				var b = window.onload;
				window.onload = function() {
					a();
					b && b()
				}
			}
		},
		render_pixel_code: function(a, b) {
			this.expire_old();
			var c = this._srv("/pixel"),
				d = document.createElement("script");
			d.setAttribute("async", "true");
			d.type = "text/javascript";
			var e = __adroll.get_keywords();
			this.addLoadEvent(function() {
				var f = [];
				try {
					f.push("keyw=" + escape(e))
				} catch (h) {}
				try {
					typeof adroll_segments != _und && f.push("name=" + escape(adroll_segments.toLowerCase()))
				} catch (i) {}
				try {
					var k = __adroll.get_conversion_value();
					k && f.push("conv_value=" + k)
				} catch (g) {}
				try {
					var j = __adroll.external_data_to_qs(!0);
					j && f.push(j)
				} catch (l) {}
				f = __adroll.get_base_url(c, a, b, null, "", f);
				d.src = f;
				__adroll._head().appendChild(d)
			})
		},
		record_user: function(a) {
			var b = ["adroll_conversion_value", "adroll_conversion_value_in_dollars", "adroll_segments"],
				c, d, e = window,
				a = a || {};
			for (c = 0; c < b.length; c++) {
				try {
					delete e[b[c]]
				} catch (f) {}
				if (b[c] in a) {
					e[b[c]] = a[b[c]];
					try {
						delete a[b[c]]
					} catch (h) {}
				}
			}
			try {
				delete e.adroll_custom_data
			} catch (i) {}
			for (d in a) if (a.hasOwnProperty(d)) {
				e.adroll_custom_data = a;
				break
			}
			this.render_pixel_code(adroll_adv_id, adroll_pix_id)
		},
		normalize_var: function(a, b) {
			if (!a) return "";
			a = a.toString().substr(0, this._kwl).replace(/,/gi, ".");
			b && (a = escape(a));
			return a
		},
		get_conversion_value: function() {
			return typeof adroll_conversion_value != _und && !isNaN(parseInt(adroll_conversion_value)) ? "" + adroll_conversion_value : typeof adroll_conversion_value_in_dollars != _und && !isNaN(parseFloat(adroll_conversion_value_in_dollars)) ? "" + parseInt(100 * adroll_conversion_value_in_dollars) : null
		},
		get_external_data: function() {
			if (typeof adroll_custom_data != _und) {
				var a = adroll_custom_data,
					b = {},
					c;
				for (c in a) a.hasOwnProperty(c) && (b[c.toLowerCase()] = a[c]);
				return b
			}
			return null
		},
		_gurl: function() {
			var a = window.location;
			return this.normalize_url(a.pathname + a.search)
		},
		get_pid: function(a, b, c, d) {
			function e(a) {
				return a ? !! RegExp(a, "gi").exec(h) : null
			}
			var f = null,
				h = this._gurl(),
				i = this.get_external_data();
			i && i.product_id && (f = i.product_id);
			if (!f && c && !("string" == c && c instanceof String) && "html" == c.scheme) {
				if (e(b) || !0 != e(a)) return "";
				f = this.get_product_id_from_dom(c)
			} else if (!f) {
				if (e(b)) return "";
				f = this.get_product_id_from_url(h, a, c)
			}
			if (!f) return "";
			f = "?adroll_product_id=" + this.normalize_var((f + "").toLowerCase(), d);
			h = this._srv("/p/" + adroll_adv_id + "/" + f);
			return '<img src="' + h + '" width="1" height="1" border="0"/>'
		},
		get_product_id_from_dom: function(a) {
			var b = null,
				c;
			a.path && (window.jQuery ? (c = jQuery(a.path), c.length && (c = c.eq(0), b = "text" == a.attribute ? c.text() : c.attr(a.attribute))) : window.Prototype && window.$$ ? (c = $$(a.path), c.length && (c = c[0], b = "text" == a.attribute ? c.innerText && !window.opera ? c.innerText : c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, " ") : c.readAttribute(a.attribute))) : window.YUI ? (c = YUI().use("node"), c.one && (c = c.one(a.path), b = null, c && (b = c.get(a.attribute).replace(/[\n\r\s]+/g, " ")))) : window.$$ && (c = $$(a.path), c.length && (c = c[0], b = "text" == a.attribute ? c.get("text") : c.getProperty(a.attribute))));
			if (b && (b = b.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), a.regular_expression && a.regular_expression_replace && (c = RegExp(a.regular_expression, "gi"), c = c.exec(b), null != c))) {
				a = a.regular_expression_replace;
				for (b = 0; b < c.length; b++) a = a.replace(RegExp("\\\\" + b, "gi"), c[b] || "");
				b = a
			}
			return b
		},
		get_product_id_from_url: function(a, b, c) {
			var d = null;
			try {
				d = parseInt(c)
			} catch (e) {}
			return null != d && !isNaN(d) && b && (a = RegExp(b, "gi").exec(a), null != a && d in a) ? a[d] : null
		},
		external_data_to_qs: function(a) {
			var b = [],
				c = this.get_external_data();
			if (!c) return null;
			for (var d in c) c.hasOwnProperty(d) && b.push(this.normalize_var(escape("" + d) + "=" + escape("" + c[d])));
			b = b.join("&");
			a && (b = escape(b));
			return "adroll_external_data=" + b
		},
		replace_external_data: function(a) {
			var b = this.get_external_data();
			if (!b) return a;
			var c = null,
				d;
			for (d in b) b.hasOwnProperty(d) && (c = RegExp("\\[" + d + "\\]", "gi"), a = a.replace(c, b[d]), c = RegExp("\\[" + d + "_ESC\\]", "gi"), a = a.replace(c, escape(b[d])));
			return a
		},
		set_pixel_cookie: function(a, b, c) {
			adroll_optout || (this.handle(a), this.handle(b), this.handle(c))
		}
	};
adroll_optout = false;
adroll_ext_network = null;
__adroll.render_pixel_code(adroll_adv_id, adroll_pix_id);