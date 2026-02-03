const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const langSelects = document.querySelectorAll(".lang-select");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const translations = {
  id: {
    title: "Write Toba — Indonesia ↔ Aksara Batak Toba, Seketika",
    meta_description:
      "Write Toba adalah aplikasi transliterasi offline untuk teks Indonesia ↔ aksara Batak Toba, dibuat untuk kejelasan, budaya, dan pemakaian harian.",
    app_name: "Write Toba",
    lang_label: "Bahasa",
    lang_select: "Pilih bahasa",
    lang_id: "Indonesia",
    lang_en: "English",
    lang_bbc: "Batak Toba",
    nav_toggle: "Buka navigasi",
    nav_features: "Fitur",
    nav_how: "Cara Kerja",
    nav_fonts: "Font",
    nav_learn: "Belajar",
    nav_faq: "FAQ",
    nav_download: "Unduh",
    hero_eyebrow: "Transliterasi • Offline-first • Dibuat oleh The Siboro Institute",
    hero_title: "Tulis Toba dengan percaya diri.",
    hero_subtitle:
      "Write Toba membantu Anda mentransliterasi teks Indonesia ke aksara Batak Toba (dan sebaliknya) dengan cepat, jelas, dan penuh penghormatan budaya — langsung di perangkat.",
    hero_primary: "Dapatkan untuk Android",
    hero_secondary: "Pelajari aksaranya",
    hero_meta_one: "Indonesia ↔ Batak",
    hero_meta_two: "Real-time",
    hero_meta_three: "Bisa offline",
    card_title: "Transliterasi Langsung",
    card_left: "Indonesia",
    card_right: "Toba",
    card_input_label: "Input",
    card_input_text: "Horas di bagasan",
    card_output_label: "Output",
    card_output_text: "ᮠᮧᮛᮝᮘᮤ ᮘᮌᮞᮔ",
    chip_copy: "Salin",
    chip_paste: "Tempel",
    chip_clear: "Bersihkan",
    features_title: "Dirancang untuk menulis Batak sehari-hari",
    features_subtitle:
      "Alat transliterasi cepat, kontrol yang rapi, dan output aksara yang akurat.",
    feature_one_title: "Transliterasi Real-time",
    feature_one_body: "Ketik teks Indonesia dan aksara Batak Toba muncul seketika.",
    feature_two_title: "Mode Dua Arah",
    feature_two_body: "Tukar arah untuk mengubah aksara Batak kembali ke Latin.",
    feature_three_title: "Diakritik + Angka",
    feature_three_body: "Tanda vokal dan angka Batak ditangani lengkap.",
    feature_four_title: "Salin, Tempel, Bersihkan",
    feature_four_body: "Aksi cepat membuat berbagi dan menyunting jadi mudah.",
    feature_five_title: "Pilihan Font",
    feature_five_body: "Pilih font Batak yang paling cocok untuk pembaca Anda.",
    feature_six_title: "Offline-first",
    feature_six_body: "Semua transliterasi berjalan di perangkat tanpa login.",
    how_title: "Cara kerjanya",
    how_subtitle: "Tiga langkah dari teks Latin ke aksara Batak Toba.",
    how_step_one_title: "Ketik bahasa Indonesia",
    how_step_one_body:
      "Masukkan teks Latin di panel kiri — frasa, nama, atau paragraf penuh.",
    how_step_two_title: "Transliterasi seketika",
    how_step_two_body:
      "Mesin menerapkan aturan Batak, diakritik, dan angka secara real-time.",
    how_step_three_title: "Salin dan bagikan",
    how_step_three_body:
      "Salin output aksara atau tukar arah untuk mengubah kembali.",
    cta_title: "Untuk pelajar dan penutur aktif",
    cta_body:
      "Gunakan untuk catatan, unggahan budaya, papan nama, dan pesan harian.",
    cta_button: "Unduh sekarang",
    fonts_title: "Tipografi yang menghormati aksara",
    fonts_body:
      "Pilih dari banyak font Batak, termasuk Noto Sans Batak, Batak Unicode, Pangururan, Kurinto, dan lainnya. Atur pergeseran glif otomatis atau manual untuk hasil terbaik.",
    font_tag_one: "Noto Sans Batak",
    font_tag_two: "Batak Unicode",
    font_tag_three: "Pangururan",
    font_tag_four: "Kurinto",
    font_tag_five: "Equator Petite",
    font_sample_title: "Contoh Output",
    font_sample_text: "ᮅᮥᮓᮥᮍᮀ ᮞᮀᮄᮑ",
    font_sample_caption: "Lihat bagaimana aksara Batak tampil di berbagai font.",
    learn_card_title: "Belajar aksara",
    learn_card_body:
      "Baca “Pustaha Pormanuhon Aji Tilih — Transliterasi dan Terjemahan Pustaha Warisan Siboro” untuk memperdalam tradisi tulisan Batak Toba.",
    learn_card_meta: "Tersedia di Google Play Books",
    learn_title: "Hormati kisah di balik setiap huruf",
    learn_body:
      "Write Toba dibuat agar aksara Batak tetap hidup dan mudah dibaca. Baik Anda belajar maupun sudah fasih, aplikasi ini membantu Anda konsisten, akurat, dan bangga dengan bahasa yang dibagikan.",
    faq_title: "FAQ",
    faq_subtitle: "Jawaban untuk pertanyaan umum.",
    faq_q1: "Apakah bisa dipakai tanpa internet?",
    faq_a1: "Bisa. Transliterasi berjalan sepenuhnya di perangkat, jadi tetap offline.",
    faq_q2: "Apakah bisa balik ke Latin?",
    faq_a2: "Bisa. Tukar arah untuk mengubah aksara Batak ke karakter Latin.",
    faq_q3: "Bagaimana menangani huruf serapan Indonesia?",
    faq_a3: "Mesin menerapkan substitusi yang baku dan aturan yang sesuai aksara Batak.",
    faq_q4: "Apakah gratis?",
    faq_a4: "Write Toba tersedia di Android. Lihat detail terbaru di listing toko.",
    download_title: "Unduh Write Toba",
    download_body:
      "Bawa aksara Batak Toba ke ponsel Anda. Cepat, fokus, dan menghormati budaya.",
    download_primary: "Dapatkan di Google Play",
    download_secondary: "Lihat fitur",
    download_stat_one_title: "Akurasi aksara",
    download_stat_one_body: "Diakritik, angka, dan output yang mudah dibaca sudah siap.",
    download_stat_two_title: "Font kustom",
    download_stat_two_body: "Ganti jenis huruf sesuai audiens dan gaya Anda.",
    download_stat_three_title: "Tanpa ribet",
    download_stat_three_body: "Salin, tempel, dan tukar arah hanya dengan satu ketukan.",
    footer_title: "Write Toba",
    footer_body: "Transliterasi Indonesia ↔ Batak Toba untuk komunikasi modern.",
    footer_made: "Dibuat oleh",
    footer_institute: "The Siboro Institute",
    footer_app: "Aplikasi",
    footer_meta: "Android • Offline-first • Aksara akurat",
  },
  en: {
    title: "Write Toba — Indonesian ↔ Toba Batak Script, Instantly",
    meta_description:
      "Write Toba is a fast, offline transliteration app for Indonesian ↔ Toba Batak script, built for clarity, culture, and everyday use.",
    app_name: "Write Toba",
    lang_label: "Language",
    lang_select: "Select language",
    lang_id: "Indonesia",
    lang_en: "English",
    lang_bbc: "Batak Toba",
    nav_toggle: "Open navigation",
    nav_features: "Features",
    nav_how: "How It Works",
    nav_fonts: "Fonts",
    nav_learn: "Learn",
    nav_faq: "FAQ",
    nav_download: "Download",
    hero_eyebrow: "Transliteration • Offline-first • Built by The Siboro Institute",
    hero_title: "Write Toba with confidence.",
    hero_subtitle:
      "Write Toba helps you transliterate Indonesian text into Toba Batak script (and back) with clarity, speed, and cultural care — right on your device.",
    hero_primary: "Get it for Android",
    hero_secondary: "Learn the script",
    hero_meta_one: "Indonesian ↔ Batak",
    hero_meta_two: "Real-time",
    hero_meta_three: "Works offline",
    card_title: "Live Transliteration",
    card_left: "Indonesia",
    card_right: "Toba",
    card_input_label: "Input",
    card_input_text: "Horas di bagasan",
    card_output_label: "Output",
    card_output_text: "ᮠᮧᮛᮝᮘᮤ ᮘᮌᮞᮔ",
    chip_copy: "Copy",
    chip_paste: "Paste",
    chip_clear: "Clear",
    features_title: "Designed for everyday Batak writing",
    features_subtitle: "Fast transliteration tools, thoughtful controls, and script-accurate output.",
    feature_one_title: "Real-time Transliteration",
    feature_one_body: "Type Indonesian text and see Toba Batak script appear instantly.",
    feature_two_title: "Bidirectional Mode",
    feature_two_body: "Swap directions to move from Batak script back to Latin characters.",
    feature_three_title: "Diacritics + Numerals",
    feature_three_body: "Accurate vowel markers and Batak numerals for complete writing.",
    feature_four_title: "Copy, Paste, Clear",
    feature_four_body: "Quick actions make sharing and editing effortless.",
    feature_five_title: "Font Choices",
    feature_five_body: "Pick the Batak font that feels right for your readers.",
    feature_six_title: "Offline-first",
    feature_six_body: "All transliteration happens on-device with no sign-in required.",
    how_title: "How it works",
    how_subtitle: "Three steps from Latin text to Toba Batak script.",
    how_step_one_title: "Type Indonesian",
    how_step_one_body: "Enter Latin text on the left — phrases, names, or full paragraphs.",
    how_step_two_title: "Transliterate instantly",
    how_step_two_body:
      "The engine applies Batak rules, vowel diacritics, and numerals in real time.",
    how_step_three_title: "Copy and share",
    how_step_three_body: "Copy the script output or swap directions to convert back.",
    cta_title: "Made for learners and fluent writers",
    cta_body: "Use it for study notes, cultural posts, signage, and everyday messages.",
    cta_button: "Download now",
    fonts_title: "Typography that respects the script",
    fonts_body:
      "Choose from multiple Batak fonts, including Noto Sans Batak, Batak Unicode, Pangururan, Kurinto, and more. Switch between automatic and manual glyph reordering for the best visual results.",
    font_tag_one: "Noto Sans Batak",
    font_tag_two: "Batak Unicode",
    font_tag_three: "Pangururan",
    font_tag_four: "Kurinto",
    font_tag_five: "Equator Petite",
    font_sample_title: "Sample Output",
    font_sample_text: "ᮅᮥᮓᮥᮍᮀ ᮞᮀᮄᮑ",
    font_sample_caption: "Preview how the Batak script renders across fonts.",
    learn_card_title: "Learn the script",
    learn_card_body:
      "Read “Pustaha Pormanuhon Aji Tilih — Transliterasi dan Terjemahan Pustaha Warisan Siboro” to deepen your understanding of Batak Toba writing traditions.",
    learn_card_meta: "Available on Google Play Books",
    learn_title: "Honor the story behind every letter",
    learn_body:
      "Write Toba is built to keep the Batak script alive and readable. Whether you’re learning or fluent, it helps you stay consistent, accurate, and proud of the language you share.",
    faq_title: "FAQ",
    faq_subtitle: "Answers to the most common questions.",
    faq_q1: "Does it work without the internet?",
    faq_a1: "Yes. Transliteration runs entirely on your device, so it works offline.",
    faq_q2: "Can I transliterate back to Latin?",
    faq_a2: "Yes. Swap directions to convert Batak script back into Latin characters.",
    faq_q3: "How does it handle Indonesian loan letters?",
    faq_a3: "The engine applies established substitutions and Batak-aware rules for clarity.",
    faq_q4: "Is it free to use?",
    faq_a4: "Write Toba is available on Android. Check the store listing for the latest details.",
    download_title: "Download Write Toba",
    download_body: "Bring Batak Toba script to your phone. Fast, focused, and culturally respectful.",
    download_primary: "Get it on Google Play",
    download_secondary: "See features",
    download_stat_one_title: "Script accuracy",
    download_stat_one_body: "Diacritics, numerals, and readable output are built in.",
    download_stat_two_title: "Custom fonts",
    download_stat_two_body: "Switch typefaces to match your audience and style.",
    download_stat_three_title: "Zero friction",
    download_stat_three_body: "Copy, paste, and swap directions with a tap.",
    footer_title: "Write Toba",
    footer_body: "Indonesian ↔ Toba Batak transliteration for modern communication.",
    footer_made: "Made by",
    footer_institute: "The Siboro Institute",
    footer_app: "App",
    footer_meta: "Android • Offline-first • Script-accurate",
  },
  bbc: {
    title: "Write Toba — Indonesia ↔ Surat Batak Toba, Sakkut",
    meta_description:
      "Write Toba do aplikasi transliterasi offline tu teks Indonesia ↔ surat Batak Toba, dibahen tu jelas, budaya, dohot panggunoan harian.",
    app_name: "Write Toba",
    lang_label: "Bahasa",
    lang_select: "Pilih bahasa",
    lang_id: "Indonesia",
    lang_en: "English",
    lang_bbc: "Batak Toba",
    nav_toggle: "Buka navigasi",
    nav_features: "Fitur",
    nav_how: "Cara Kerja",
    nav_fonts: "Font",
    nav_learn: "Belajar",
    nav_faq: "FAQ",
    nav_download: "Unduh",
    hero_eyebrow: "Transliterasi • Offline-first • Dibahen The Siboro Institute",
    hero_title: "Tulis Toba dohot yakin.",
    hero_subtitle:
      "Write Toba mangalehon transliterasi teks Indonesia tu surat Batak Toba (dohot ulam) dohot cepat, jelas, jala hormat tu budaya — langsung di perangkat.",
    hero_primary: "Dapot tu Android",
    hero_secondary: "Belajar suratna",
    hero_meta_one: "Indonesia ↔ Batak",
    hero_meta_two: "Real-time",
    hero_meta_three: "Bisa offline",
    card_title: "Transliterasi Langsung",
    card_left: "Indonesia",
    card_right: "Toba",
    card_input_label: "Input",
    card_input_text: "Horas di bagasan",
    card_output_label: "Output",
    card_output_text: "ᮠᮧᮛᮝᮘᮤ ᮘᮌᮞᮔ",
    chip_copy: "Salin",
    chip_paste: "Tempel",
    chip_clear: "Bersihkan",
    features_title: "Dibahen tu manulis Batak saban ari",
    features_subtitle: "Alat transliterasi cepat, kontrol rapi, dohot output surat na benar.",
    feature_one_title: "Transliterasi Real-time",
    feature_one_body: "Tulis teks Indonesia jala surat Batak Toba tarida sakkut.",
    feature_two_title: "Mode Dua Arah",
    feature_two_body: "Tukar arah tu mangubah surat Batak mulak tu Latin.",
    feature_three_title: "Diakritik + Angka",
    feature_three_body: "Tanda vokal dohot angka Batak tarurus lengkap.",
    feature_four_title: "Salin, Tempel, Bersihkan",
    feature_four_body: "Aksi cepat mambahen berbagi dohot sunting jadi mudah.",
    feature_five_title: "Pilihan Font",
    feature_five_body: "Pilih font Batak na cocok tu pamaca.",
    feature_six_title: "Offline-first",
    feature_six_body: "Sude transliterasi mardalan di perangkat, ndang perlu login.",
    how_title: "Cara kerjana",
    how_subtitle: "Tolu langkah sian teks Latin tu surat Batak Toba.",
    how_step_one_title: "Tulis bahasa Indonesia",
    how_step_one_body: "Masukkan teks Latin di panel kiri — frasa, nama, manang paragraf penuh.",
    how_step_two_title: "Transliterasi sakkut",
    how_step_two_body: "Mesin mangula aturan Batak, diakritik, dohot angka secara real-time.",
    how_step_three_title: "Salin jala bagihon",
    how_step_three_body: "Salin output surat manang tukar arah tu mangubah mulak.",
    cta_title: "Tu pelajar dohot penutur aktif",
    cta_body: "Gunaon tu catatan, unggahan budaya, papan nama, dohot pesan harian.",
    cta_button: "Unduh ayeuna",
    fonts_title: "Tipografi na hormat tu surat",
    fonts_body:
      "Pilih sian godang font Batak, termasuk Noto Sans Batak, Batak Unicode, Pangururan, Kurinto, dohot lian. Atur pergeseran glif otomatis manang manual tu hasil na denggan.",
    font_tag_one: "Noto Sans Batak",
    font_tag_two: "Batak Unicode",
    font_tag_three: "Pangururan",
    font_tag_four: "Kurinto",
    font_tag_five: "Equator Petite",
    font_sample_title: "Contoh Output",
    font_sample_text: "ᮅᮥᮓᮥᮍᮀ ᮞᮀᮄᮑ",
    font_sample_caption: "Lihat songon surat Batak tampil di berbagai font.",
    learn_card_title: "Belajar surat",
    learn_card_body:
      "Baca “Pustaha Pormanuhon Aji Tilih — Transliterasi dan Terjemahan Pustaha Warisan Siboro” tu mamajukan pangantusi tradisi tulis Batak Toba.",
    learn_card_meta: "Ada di Google Play Books",
    learn_title: "Hormati kisah di balikkon tiap huruf",
    learn_body:
      "Write Toba dibahen supaya surat Batak tetap hidup jala mudah dibaca. Baik masih belajar manang sudah fasih, aplikasi on mambantu konsisten, akurat, dohot bangga tu bahasa na dibagihon.",
    faq_title: "FAQ",
    faq_subtitle: "Jawaban tu patarido na umum.",
    faq_q1: "Bisa do tanpa internet?",
    faq_a1: "Bisa. Transliterasi mardalan di perangkat, jadi tetap offline.",
    faq_q2: "Bisa do balik tu Latin?",
    faq_a2: "Bisa. Tukar arah tu mangubah surat Batak mulak tu Latin.",
    faq_q3: "Songon do nangani huruf serapan Indonesia?",
    faq_a3: "Mesin mangula substitusi na baku dohot aturan na sesuai surat Batak.",
    faq_q4: "Gratis do?",
    faq_a4: "Write Toba ada di Android. Lihat detail na terbaru di listing toko.",
    download_title: "Unduh Write Toba",
    download_body: "Bawa surat Batak Toba tu ponselmu. Cepat, fokus, dohot hormat budaya.",
    download_primary: "Dapot di Google Play",
    download_secondary: "Lihat fitur",
    download_stat_one_title: "Akurasi surat",
    download_stat_one_body: "Diakritik, angka, dohot output na mudah dibaca sudah siap.",
    download_stat_two_title: "Font kustom",
    download_stat_two_body: "Ganti jenis huruf tu cocok dohot audiens dohot gaya.",
    download_stat_three_title: "Tanpa ribet",
    download_stat_three_body: "Salin, tempel, dohot tukar arah holan saketap.",
    footer_title: "Write Toba",
    footer_body: "Transliterasi Indonesia ↔ Batak Toba tu komunikasi modern.",
    footer_made: "Dibahen oleh",
    footer_institute: "The Siboro Institute",
    footer_app: "Aplikasi",
    footer_meta: "Android • Offline-first • Surat akurat",
  },
};

const metaDescription = document.querySelector('meta[name="description"]');

function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;
  document.documentElement.lang = lang;

  if (dict.title) {
    document.title = dict.title;
  }
  if (metaDescription && dict.meta_description) {
    metaDescription.setAttribute("content", dict.meta_description);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part.trim());
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  langSelects.forEach((select) => {
    select.value = lang;
  });
}

const storedLang = localStorage.getItem("writetoba_lang");
const defaultLang = storedLang || "id";
applyTranslations(defaultLang);

langSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem("writetoba_lang", selectedLang);
    applyTranslations(selectedLang);
  });
});

const revealItems = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));
