const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
const langSelect = document.querySelector('#lang-select');
const metaDescription = document.querySelector('meta[name="description"]');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const translations = {
  en: {
    home_title: 'Six Degrees — Your Relationship Graph, Yours to Keep',
    home_meta_description:
      'Six Degrees helps you build and maintain meaningful relationships by tracking how you’re connected to everyone in your network.',
    privacy_page_title: 'Privacy Policy - Six Degrees',
    privacy_page_meta_description:
      'Six Degrees Privacy Policy - Learn how we collect, use, and protect your information.',
    app_name: 'Six Degrees',
    lang_label: 'Language',
    lang_select: 'Select language',
    lang_en: 'English',
    lang_ja: '日本語',
    lang_id: 'Indonesia',
    nav_toggle: 'Toggle navigation',
    nav_features: 'Features',
    nav_how: 'How It Works',
    nav_privacy: 'Privacy',
    nav_faq: 'FAQ',
    nav_download: 'Download',
    nav_contact: 'Contact',
    hero_eyebrow: 'Personal CRM • Offline-first • GitHub sync',
    hero_title: 'Remember every connection.',
    hero_subtitle:
      "Six Degrees helps you build and maintain meaningful relationships by tracking how you're connected to everyone in your network — from introductions to events to conversations.",
    hero_primary: 'Get it on Google Play',
    hero_secondary: 'Privacy Policy',
    hero_meta_one: 'Contains ads',
    hero_meta_two: 'Android',
    hero_meta_three: 'Updated Jan 7, 2026',
    card_title: 'Connection Map',
    card_node_you: 'You',
    card_node_intro: 'Rina (Introduced By)',
    card_node_event: 'Design Meetup',
    card_node_org: 'Studio Lumen',
    card_note: 'Every relationship has a story.',
    features_title: 'Built for remembering people',
    features_subtitle:
      'Track introductions, interactions, and the context that makes relationships meaningful.',
    feature_one_title: 'Remember Every Connection',
    feature_one_body:
      'Capture how you met, who introduced you, and the moments that started the relationship.',
    feature_two_title: 'Stay Connected',
    feature_two_body:
      'Set a reach‑out cadence and get daily nudges for the people who matter most.',
    feature_three_title: 'Interaction History',
    feature_three_body:
      'Log calls, meetings, and notes so you can pick up every conversation with context.',
    feature_four_title: 'Tags and Groups',
    feature_four_body:
      'Organize people by interests, communities, or any custom tags you need.',
    feature_five_title: 'Powerful Search',
    feature_five_body:
      'Find anyone instantly across names, notes, and relationship details.',
    feature_six_title: 'Exportable Graph',
    feature_six_body: 'Your entire relationship graph stays portable and easy to back up.',
    how_title: 'How it works',
    how_subtitle: 'Local-first by default, GitHub sync when you want it.',
    how_step_one_title: 'Store locally',
    how_step_one_body: 'All data is stored on-device in SQLite for speed and privacy.',
    how_step_two_title: 'Optional GitHub sync',
    how_step_two_body:
      'Mirror your data to your own GitHub repository using git-based sync.',
    how_step_three_title: 'Stay in control',
    how_step_three_body:
      'No subscriptions, no vendor lock‑in. Export your graph anytime.',
    cta_title: 'Perfect for',
    cta_body:
      'Professional networks, communities, friends, family, and anyone you want to keep close.',
    cta_button: 'Download now',
    section_privacy_title: 'Your data, your control',
    section_privacy_body:
      'Six Degrees stores data locally on your device. GitHub sync is optional and uses your own private repository — we never see or access your data.',
    section_privacy_item_one: 'No data shared with third parties',
    section_privacy_item_two: 'No data collected',
    section_privacy_item_three: 'Offline-first, local SQLite storage',
    section_privacy_item_four: 'Optional GitHub backup for portability',
    section_privacy_link: 'Read the privacy policy →',
    section_privacy_card_title: 'What lives in Git?',
    section_privacy_card_body:
      'People, events, interactions, and edges as clean JSON — nothing hidden.',
    faq_title: 'FAQ',
    faq_subtitle: 'Answers to the most common questions.',
    faq_q1: 'Is my data stored on your servers?',
    faq_a1: 'No. Data lives on your device and optionally in your own GitHub repository.',
    faq_q2: 'Do I need GitHub?',
    faq_a2: 'No. The app works offline without GitHub. Sync is optional.',
    faq_q3: 'Can I import my contacts?',
    faq_a3: 'Yes. Import from your phonebook and avoid duplicates.',
    faq_q4: 'Which platforms are supported?',
    faq_a4: 'Android today. iOS is built with the same codebase.',
    download_title: 'Download Six Degrees',
    download_body: 'Start building your relationship graph today.',
    download_button: 'Google Play',
    footer_title: 'Six Degrees',
    footer_body_home: 'Your personal relationship memory.',
    footer_body_privacy: 'Personal CRM built for people who value privacy and relationships.',
    footer_links_title: 'Quick Links',
    footer_link_features: 'Features',
    footer_link_how: 'How It Works',
    footer_link_privacy: 'Privacy',
    footer_link_policy: 'Privacy Policy',
    footer_contact_title: 'Contact',
    footer_copyright: '© 2026 The Siboro Institute. All rights reserved.',
    breadcrumb_home: 'Home',
    breadcrumb_policy: 'Privacy Policy',
    policy_title: 'Privacy Policy',
    policy_intro:
      'This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Six Degrees unless otherwise defined in this Privacy Policy.',
    policy_section_one: 'Information Collection and Use',
    policy_section_one_body:
      'For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. The app does use third party services that may collect information used to identify you.',
    policy_section_two: 'Log Data',
    policy_section_two_body:
      'We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.',
    policy_section_three: 'Service Providers',
    policy_section_three_body:
      'We may employ third-party companies and individuals due to the following reasons:',
    policy_section_three_item_one: 'To facilitate our Service;',
    policy_section_three_item_two: 'To provide the Service on our behalf;',
    policy_section_three_item_three: 'To perform Service-related services; or',
    policy_section_three_item_four:
      'To assist us in analyzing how our Service is used.',
    policy_section_three_body_two:
      'We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',
    policy_section_four: 'Security',
    policy_section_four_body:
      'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',
    policy_section_five: "Children's Privacy",
    policy_section_five_body:
      'These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.',
    policy_section_six: 'Changes to This Privacy Policy',
    policy_section_six_body:
      'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.',
    policy_section_seven: 'Contact Us',
    policy_section_seven_body:
      'If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href="mailto:institute@siboro.com">contact us</a>.',
  },
  ja: {
    home_title: 'Six Degrees — 関係グラフを自分の手元に',
    home_meta_description:
      'Six Degrees は、ネットワーク内のつながり方を記録して、意味のある関係づくりを支援するパーソナルCRMです。',
    privacy_page_title: 'プライバシーポリシー - Six Degrees',
    privacy_page_meta_description:
      'Six Degrees のプライバシーポリシー。情報の収集、利用、保護についてご確認ください。',
    app_name: 'Six Degrees',
    lang_label: '言語',
    lang_select: '言語を選択',
    lang_en: 'English',
    lang_ja: '日本語',
    lang_id: 'Indonesia',
    nav_toggle: 'ナビゲーションを切り替え',
    nav_features: '機能',
    nav_how: '使い方',
    nav_privacy: 'プライバシー',
    nav_faq: 'FAQ',
    nav_download: 'ダウンロード',
    nav_contact: 'お問い合わせ',
    hero_eyebrow: 'パーソナルCRM • オフラインファースト • GitHub同期',
    hero_title: 'すべてのつながりを覚えておく。',
    hero_subtitle:
      'Six Degrees は、紹介・イベント・会話など、ネットワーク内のつながり方を記録して意味のある関係づくりを支援します。',
    hero_primary: 'Google Play で入手',
    hero_secondary: 'プライバシーポリシー',
    hero_meta_one: '広告あり',
    hero_meta_two: 'Android',
    hero_meta_three: '更新日 2026年1月7日',
    card_title: 'コネクションマップ',
    card_node_you: 'あなた',
    card_node_intro: 'リナ（紹介者）',
    card_node_event: 'デザインミートアップ',
    card_node_org: 'Studio Lumen',
    card_note: 'すべての関係には物語がある。',
    features_title: '人を覚えるために作られた',
    features_subtitle:
      '紹介ややりとり、関係の背景を記録して、つながりを意味のあるものに。',
    feature_one_title: 'すべてのつながりを記録',
    feature_one_body:
      '出会い方、紹介者、関係が始まった瞬間を残せます。',
    feature_two_title: 'つながりを保つ',
    feature_two_body:
      '連絡のリズムを設定し、大切な人へ毎日のリマインド。',
    feature_three_title: '交流履歴',
    feature_three_body:
      '通話、会議、メモを記録して次の会話に文脈を。',
    feature_four_title: 'タグとグループ',
    feature_four_body:
      '興味やコミュニティ、任意のタグで整理できます。',
    feature_five_title: '強力な検索',
    feature_five_body:
      '名前・メモ・関係情報からすぐに検索。',
    feature_six_title: 'エクスポート可能なグラフ',
    feature_six_body:
      '関係グラフは持ち運びやすく、簡単にバックアップできます。',
    how_title: '使い方',
    how_subtitle: 'ローカルファースト、必要なときだけGitHub同期。',
    how_step_one_title: 'ローカルに保存',
    how_step_one_body:
      'すべてのデータはSQLiteで端末内に保存されます。',
    how_step_two_title: '任意のGitHub同期',
    how_step_two_body:
      'git同期で自分のGitHubリポジトリへミラーできます。',
    how_step_three_title: '自分でコントロール',
    how_step_three_body:
      'サブスクなし、ベンダーロックインなし。いつでもエクスポート。',
    cta_title: 'こんな人に最適',
    cta_body:
      'プロのネットワーク、コミュニティ、友人、家族、近くに保ちたい人。',
    cta_button: '今すぐダウンロード',
    section_privacy_title: 'あなたのデータはあなたのもの',
    section_privacy_body:
      'Six Degrees はデータを端末に保存します。GitHub同期は任意で、あなたの非公開リポジトリを使用 — 私たちはアクセスしません。',
    section_privacy_item_one: '第三者とデータを共有しない',
    section_privacy_item_two: 'データ収集なし',
    section_privacy_item_three: 'オフラインファースト、ローカルSQLite保存',
    section_privacy_item_four: '移植性のための任意GitHubバックアップ',
    section_privacy_link: 'プライバシーポリシーを読む →',
    section_privacy_card_title: 'Gitに保存されるもの',
    section_privacy_card_body:
      '人、イベント、交流、エッジをクリーンなJSONで。隠し事なし。',
    faq_title: 'FAQ',
    faq_subtitle: 'よくある質問への回答。',
    faq_q1: 'データはサーバーに保存されますか？',
    faq_a1:
      'いいえ。データは端末内、必要に応じてあなたのGitHubに保存されます。',
    faq_q2: 'GitHubは必要ですか？',
    faq_a2: 'いいえ。オフラインで使え、同期は任意です。',
    faq_q3: '連絡先をインポートできますか？',
    faq_a3: 'はい。電話帳からインポートして重複を避けられます。',
    faq_q4: '対応プラットフォームは？',
    faq_a4: '現在はAndroid。iOSは同一コードベースで構築されています。',
    download_title: 'Six Degrees をダウンロード',
    download_body: '今日から関係グラフを作成しましょう。',
    download_button: 'Google Play',
    footer_title: 'Six Degrees',
    footer_body_home: 'あなたの関係記憶を支えるパーソナルCRM。',
    footer_body_privacy:
      'プライバシーと関係性を重視する人のためのパーソナルCRM。',
    footer_links_title: 'クイックリンク',
    footer_link_features: '機能',
    footer_link_how: '使い方',
    footer_link_privacy: 'プライバシー',
    footer_link_policy: 'プライバシーポリシー',
    footer_contact_title: 'お問い合わせ',
    footer_copyright: '© 2026 The Siboro Institute. 無断転載を禁じます。',
    breadcrumb_home: 'ホーム',
    breadcrumb_policy: 'プライバシーポリシー',
    policy_title: 'プライバシーポリシー',
    policy_intro:
      'このページは、当サービスの利用を検討される方に対して、個人情報の収集、利用、開示に関する方針をお知らせするものです。当サービスをご利用いただく場合、本ポリシーに基づく情報の収集および利用に同意したものとみなされます。当社が収集する個人情報は、サービスの提供および改善のために使用されます。本プライバシーポリシーに記載されている場合を除き、当社はお客様の情報を第三者と共有することはありません。本プライバシーポリシーで使用する用語は、Six Degrees で利用可能な利用規約における用語と同一の意味を持ちます。',
    policy_section_one: '情報の収集と利用',
    policy_section_one_body:
      'より良い体験のために、当サービスの利用中に特定の個人識別情報の提供をお願いする場合があります。取得した情報は保持され、本ポリシーに記載されたとおりに使用されます。アプリは、個人を特定する情報を収集する可能性のある第三者サービスを使用しています。',
    policy_section_two: 'ログデータ',
    policy_section_two_body:
      '当サービスの利用中にアプリでエラーが発生した場合、第三者製品を通じてログデータと呼ばれる情報を端末から収集することがあります。ログデータには、IPアドレス、端末名、OSバージョン、アプリ設定、利用日時、その他の統計情報が含まれる場合があります。',
    policy_section_three: 'サービス提供者',
    policy_section_three_body:
      '当社は以下の目的で第三者企業や個人を採用する場合があります。',
    policy_section_three_item_one: 'サービス提供を容易にするため。',
    policy_section_three_item_two: '当社に代わってサービスを提供するため。',
    policy_section_three_item_three: 'サービス関連業務を実施するため。',
    policy_section_three_item_four: 'サービスの利用状況を分析するため。',
    policy_section_three_body_two:
      '当社は、これらの第三者が業務遂行のために個人情報へアクセスする可能性があることをお知らせします。ただし、第三者はその情報を開示または他の目的で使用しない義務を負います。',
    policy_section_four: 'セキュリティ',
    policy_section_four_body:
      '当社は個人情報の保護に商業的に許容される手段を用いるよう努めていますが、インターネット上の送信方法や電子的保管方法は完全に安全ではなく、絶対的な安全性を保証することはできません。',
    policy_section_five: '子どものプライバシー',
    policy_section_five_body:
      '当サービスは13歳未満の方を対象としていません。13歳未満の子どもから個人情報を意図的に収集することはありません。万が一、13歳未満の子どもが個人情報を提供したことが判明した場合、直ちに当社のサーバーから削除します。保護者の方でお子様が個人情報を提供したことをご存じの場合は、ご連絡ください。',
    policy_section_six: 'プライバシーポリシーの変更',
    policy_section_six_body:
      '当社はプライバシーポリシーを随時更新することがあります。変更がないか定期的に本ページをご確認ください。変更がある場合は、本ページに新しいプライバシーポリシーを掲載してお知らせします。変更は掲載後ただちに有効となります。',
    policy_section_seven: 'お問い合わせ',
    policy_section_seven_body:
      'プライバシーポリシーについてご質問やご提案がある場合は、<a href="mailto:institute@siboro.com">こちらまでご連絡ください</a>。',
  },
  id: {
    home_title: 'Six Degrees — Grafik Relasi Anda, Tetap Milik Anda',
    home_meta_description:
      'Six Degrees membantu Anda membangun dan merawat hubungan bermakna dengan melacak bagaimana Anda terhubung dengan semua orang di jaringan Anda.',
    privacy_page_title: 'Kebijakan Privasi - Six Degrees',
    privacy_page_meta_description:
      'Kebijakan Privasi Six Degrees - Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.',
    app_name: 'Six Degrees',
    lang_label: 'Bahasa',
    lang_select: 'Pilih bahasa',
    lang_en: 'English',
    lang_ja: '日本語',
    lang_id: 'Indonesia',
    nav_toggle: 'Buka navigasi',
    nav_features: 'Fitur',
    nav_how: 'Cara Kerja',
    nav_privacy: 'Privasi',
    nav_faq: 'FAQ',
    nav_download: 'Unduh',
    nav_contact: 'Kontak',
    hero_eyebrow: 'Personal CRM • Offline-first • Sinkron GitHub',
    hero_title: 'Ingat setiap koneksi.',
    hero_subtitle:
      'Six Degrees membantu Anda membangun dan merawat hubungan bermakna dengan melacak bagaimana Anda terhubung — dari perkenalan hingga acara dan percakapan.',
    hero_primary: 'Dapatkan di Google Play',
    hero_secondary: 'Kebijakan Privasi',
    hero_meta_one: 'Mengandung iklan',
    hero_meta_two: 'Android',
    hero_meta_three: 'Diperbarui 7 Jan 2026',
    card_title: 'Peta Koneksi',
    card_node_you: 'Anda',
    card_node_intro: 'Rina (Diperkenalkan oleh)',
    card_node_event: 'Meetup Desain',
    card_node_org: 'Studio Lumen',
    card_note: 'Setiap hubungan punya cerita.',
    features_title: 'Dibuat untuk mengingat orang',
    features_subtitle:
      'Lacak perkenalan, interaksi, dan konteks yang membuat hubungan bermakna.',
    feature_one_title: 'Ingat Setiap Koneksi',
    feature_one_body:
      'Catat bagaimana Anda bertemu, siapa yang mengenalkan, dan momen awal hubungan.',
    feature_two_title: 'Tetap Terhubung',
    feature_two_body:
      'Atur ritme menjangkau dan dapatkan pengingat harian untuk orang penting.',
    feature_three_title: 'Riwayat Interaksi',
    feature_three_body:
      'Catat panggilan, pertemuan, dan catatan agar percakapan selalu kontekstual.',
    feature_four_title: 'Tag dan Grup',
    feature_four_body:
      'Kelompokkan orang berdasarkan minat, komunitas, atau tag khusus.',
    feature_five_title: 'Pencarian Kuat',
    feature_five_body:
      'Temukan siapa pun dengan cepat melalui nama, catatan, dan detail relasi.',
    feature_six_title: 'Grafik yang Bisa Diekspor',
    feature_six_body:
      'Grafik relasi Anda tetap portabel dan mudah dicadangkan.',
    how_title: 'Cara kerja',
    how_subtitle: 'Local-first secara default, sinkron GitHub saat Anda perlu.',
    how_step_one_title: 'Simpan lokal',
    how_step_one_body:
      'Semua data disimpan di perangkat dalam SQLite untuk kecepatan dan privasi.',
    how_step_two_title: 'Sinkron GitHub opsional',
    how_step_two_body:
      'Cerminkan data Anda ke repositori GitHub sendiri dengan sinkronisasi berbasis git.',
    how_step_three_title: 'Tetap pegang kendali',
    how_step_three_body:
      'Tanpa langganan, tanpa vendor lock‑in. Ekspor grafik kapan saja.',
    cta_title: 'Cocok untuk',
    cta_body:
      'Jaringan profesional, komunitas, teman, keluarga, dan siapa pun yang ingin Anda jaga dekat.',
    cta_button: 'Unduh sekarang',
    section_privacy_title: 'Data Anda, kendali Anda',
    section_privacy_body:
      'Six Degrees menyimpan data secara lokal di perangkat Anda. Sinkron GitHub bersifat opsional dan memakai repositori privat Anda — kami tidak melihat atau mengakses data Anda.',
    section_privacy_item_one: 'Tidak ada data yang dibagikan ke pihak ketiga',
    section_privacy_item_two: 'Tidak ada data yang dikumpulkan',
    section_privacy_item_three: 'Offline-first, penyimpanan SQLite lokal',
    section_privacy_item_four: 'Cadangan GitHub opsional untuk portabilitas',
    section_privacy_link: 'Baca kebijakan privasi →',
    section_privacy_card_title: 'Apa yang ada di Git?',
    section_privacy_card_body:
      'Orang, acara, interaksi, dan edge sebagai JSON bersih — tanpa yang disembunyikan.',
    faq_title: 'FAQ',
    faq_subtitle: 'Jawaban untuk pertanyaan umum.',
    faq_q1: 'Apakah data saya disimpan di server Anda?',
    faq_a1:
      'Tidak. Data ada di perangkat Anda dan opsional di repositori GitHub milik Anda.',
    faq_q2: 'Apakah saya perlu GitHub?',
    faq_a2: 'Tidak. Aplikasi tetap berjalan offline tanpa GitHub. Sinkron opsional.',
    faq_q3: 'Bisakah saya mengimpor kontak?',
    faq_a3: 'Bisa. Impor dari buku telepon dan hindari duplikasi.',
    faq_q4: 'Platform apa yang didukung?',
    faq_a4: 'Android saat ini. iOS dibangun dengan codebase yang sama.',
    download_title: 'Unduh Six Degrees',
    download_body: 'Mulai bangun grafik relasi Anda hari ini.',
    download_button: 'Google Play',
    footer_title: 'Six Degrees',
    footer_body_home: 'Memori relasi pribadi Anda.',
    footer_body_privacy:
      'Personal CRM untuk orang yang menghargai privasi dan hubungan.',
    footer_links_title: 'Tautan Cepat',
    footer_link_features: 'Fitur',
    footer_link_how: 'Cara Kerja',
    footer_link_privacy: 'Privasi',
    footer_link_policy: 'Kebijakan Privasi',
    footer_contact_title: 'Kontak',
    footer_copyright: '© 2026 The Siboro Institute. Semua hak dilindungi.',
    breadcrumb_home: 'Beranda',
    breadcrumb_policy: 'Kebijakan Privasi',
    policy_title: 'Kebijakan Privasi',
    policy_intro:
      'Halaman ini digunakan untuk memberi tahu pengunjung mengenai kebijakan kami tentang pengumpulan, penggunaan, dan pengungkapan Informasi Pribadi jika seseorang memutuskan menggunakan Layanan kami. Jika Anda memilih menggunakan Layanan kami, maka Anda setuju dengan pengumpulan dan penggunaan informasi sesuai kebijakan ini. Informasi Pribadi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan Layanan. Kami tidak akan menggunakan atau membagikan informasi Anda kepada siapa pun kecuali sebagaimana dijelaskan dalam Kebijakan Privasi ini. Istilah yang digunakan dalam Kebijakan Privasi ini memiliki makna yang sama dengan Syarat dan Ketentuan kami, yang dapat diakses di Six Degrees, kecuali didefinisikan lain dalam Kebijakan Privasi ini.',
    policy_section_one: 'Pengumpulan dan Penggunaan Informasi',
    policy_section_one_body:
      'Untuk pengalaman yang lebih baik, saat menggunakan Layanan kami, kami mungkin meminta Anda memberikan informasi pengenal pribadi tertentu. Informasi yang kami minta akan disimpan oleh kami dan digunakan sebagaimana dijelaskan dalam kebijakan privasi ini. Aplikasi ini menggunakan layanan pihak ketiga yang mungkin mengumpulkan informasi untuk mengidentifikasi Anda.',
    policy_section_two: 'Data Log',
    policy_section_two_body:
      'Kami ingin memberi tahu Anda bahwa setiap kali Anda menggunakan Layanan kami, jika terjadi kesalahan pada aplikasi, kami mengumpulkan data dan informasi (melalui produk pihak ketiga) di ponsel Anda yang disebut Data Log. Data Log ini dapat mencakup informasi seperti alamat Protokol Internet (IP) perangkat Anda, nama perangkat, versi sistem operasi, konfigurasi aplikasi saat menggunakan Layanan kami, waktu dan tanggal penggunaan Layanan, serta statistik lainnya.',
    policy_section_three: 'Penyedia Layanan',
    policy_section_three_body:
      'Kami dapat mempekerjakan perusahaan dan individu pihak ketiga karena alasan berikut:',
    policy_section_three_item_one: 'Untuk memfasilitasi Layanan kami;',
    policy_section_three_item_two: 'Untuk menyediakan Layanan atas nama kami;',
    policy_section_three_item_three: 'Untuk melakukan layanan terkait Layanan; atau',
    policy_section_three_item_four: 'Untuk membantu kami menganalisis cara Layanan digunakan.',
    policy_section_three_body_two:
      'Kami ingin memberi tahu pengguna Layanan ini bahwa pihak ketiga tersebut memiliki akses ke Informasi Pribadi Anda. Alasannya adalah untuk melakukan tugas yang ditugaskan kepada mereka atas nama kami. Namun, mereka berkewajiban untuk tidak mengungkapkan atau menggunakan informasi untuk tujuan lain.',
    policy_section_four: 'Keamanan',
    policy_section_four_body:
      'Kami menghargai kepercayaan Anda dalam memberikan Informasi Pribadi, sehingga kami berupaya menggunakan cara yang dapat diterima secara komersial untuk melindunginya. Namun ingat bahwa tidak ada metode transmisi melalui internet, atau metode penyimpanan elektronik yang 100% aman dan andal, dan kami tidak dapat menjamin keamanan absolutnya.',
    policy_section_five: 'Privasi Anak',
    policy_section_five_body:
      'Layanan ini tidak ditujukan kepada siapa pun yang berusia di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pengenal pribadi dari anak-anak di bawah 13 tahun. Jika kami mengetahui bahwa seorang anak di bawah 13 tahun telah memberikan informasi pribadi, kami segera menghapusnya dari server kami. Jika Anda adalah orang tua atau wali dan mengetahui bahwa anak Anda telah memberikan informasi pribadi, silakan hubungi kami agar kami dapat melakukan tindakan yang diperlukan.',
    policy_section_six: 'Perubahan pada Kebijakan Privasi',
    policy_section_six_body:
      'Kami dapat memperbarui Kebijakan Privasi dari waktu ke waktu. Karena itu, Anda disarankan meninjau halaman ini secara berkala untuk mengetahui perubahan. Kami akan memberi tahu perubahan dengan memposting Kebijakan Privasi baru di halaman ini. Perubahan berlaku segera setelah diposting di halaman ini.',
    policy_section_seven: 'Hubungi Kami',
    policy_section_seven_body:
      'Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi, jangan ragu untuk <a href="mailto:institute@siboro.com">menghubungi kami</a>.',
  },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  const page = document.body ? document.body.getAttribute('data-page') : 'home';

  document.documentElement.lang = lang;

  if (page === 'privacy') {
    if (dict.privacy_page_title) {
      document.title = dict.privacy_page_title;
    }
    if (metaDescription && dict.privacy_page_meta_description) {
      metaDescription.setAttribute('content', dict.privacy_page_meta_description);
    }
  } else {
    if (dict.home_title) {
      document.title = dict.home_title;
    }
    if (metaDescription && dict.home_meta_description) {
      metaDescription.setAttribute('content', dict.home_meta_description);
    }
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  if (langSelect) {
    langSelect.value = lang;
  }
}

const storedLang = localStorage.getItem('sixdegrees_lang');
const defaultLang = storedLang || 'en';
applyTranslations(defaultLang);

if (langSelect) {
  langSelect.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem('sixdegrees_lang', selectedLang);
    applyTranslations(selectedLang);
  });
}
