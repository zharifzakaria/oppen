// WhatsApp number (country code, digits only), stored reversed so crawlers scanning the source don't find it.
var WHATSAPP_REV = '48919129106';

var MS = {
  _title: 'Oppen — App dibina AI, dari prototaip ke produksi',
  navAria: 'Utama', homeAria: 'Laman utama Oppen', billingAria: 'Tempoh bayaran',
  navHow: 'Cara kerja', navWork: 'Kajian kes', navPricing: 'Harga', navFaq: 'Soalan lazim', navWa: 'WhatsApp kami',
  h1a: 'AI dah bina.', h1b: 'Kami lancarkan.',
  heroLead: 'Oppen bawa app yang anda bina dengan AI dari prototaip ke produksi: online dengan link sendiri, dan ada di skrin utama telefon anda. Kami pastikan ia selamat digunakan, kemudian jaga supaya ia terus berjalan.',
  heroCta: 'Cari langkah pertama ↓', heroPrices: 'Lihat harga',
  heroNote: 'Setup dari RM199. Hosting dari RM39 sebulan. Tak perlu Play Store.',
  stProto: 'Prototaip', stLive: 'Live', ck1: 'HTTPS aktif', ck2: 'Kunci API disimpan selamat', ck3: 'Backup harian', ck4: 'Boleh install di telefon',
  appIcon: 'AA', appName: 'App Anda', appAdded: 'Ditambah ke skrin utama',
  pathTitle: 'App anda di tahap mana?',
  pathAk: 'Ia dah berfungsi', pathAt: 'App saya dah jalan. Saya nak orang lain guna.', pathA: 'Ia berjalan di laptop atau dalam preview. Kami letak ia online dengan link sendiri, pastikan ia selamat, dan jaga supaya terus berjalan.', pathAgo: 'Lancarkan app saya →',
  pathBk: 'Ia tersekat', pathBt: 'App saya tak jalan bila online.', pathB: 'Deploy gagal, database tak dapat disambung, atau setiap kali dibaiki muncul ralat baru. Kami cari apa yang menghalangnya dan jalankannya.', pathBgo: 'Betulkan app saya →',
  howTitle: 'Cara kerja',
  st1t: 'Hantar app anda', st1: 'WhatsApp kami fail zip atau link GitHub, dengan sedikit penerangan tentang fungsi app itu. Kami balas dengan pakej yang sesuai dan harga tetap.',
  st2t: 'Kami setup dan selamatkan', st2: 'Kami deploy, betulkan apa yang boleh rosak atau bocor bila digunakan sebenar, dan jadikan ia boleh dipasang di telefon. Kami tak tulis semula idea anda.',
  st3t: 'Buka di telefon anda', st3: 'Anda dapat link live dan ikon di skrin utama. Kami jaga ia setiap bulan, supaya anda boleh fokus pada bisnes.',
  proofTitle: 'Jangan percaya cakap kami saja.',
  proofLead: 'Laman ini berjalan atas setup yang sama seperti yang kami beri kepada klien. Setiap angka di bawah datang dari alat awam. Tekan satu untuk uji sendiri.',
  pr1: 'Uptime sejak dilancarkan', pr1b: 'Uptime, 30 hari terakhir', pr2: 'Purata respons', pr3: 'Setup HTTPS', pr4: 'Header keselamatan', pr5: 'Skor keselamatan web', pr6: 'Kelajuan dan aksesibiliti', pr7: 'Penjejak dan cookies',
  prOurs: 'Status page kami', prOurs2: 'Status page kami', grade1: 'B', grade2: 'A', grade3: 'A+', score: '93 / 95', statusLive: 'Status langsung:',
  c1Label: 'Kajian kes: Platform kemahiran farmasi',
  c1Title: 'Lima prototaip. Satu platform untuk 200 pelajar.',
  c1Lead: 'Pusat Pengajian Sains Farmasi, <strong class="client">Universiti Sains Malaysia (USM)</strong> mahu pelajar farmasi berlatih kemahiran klinikal melalui kajian kes berpandu. Pensyarah sudah membina setiap modul pembelajaran sebagai prototaip tersendiri. Semuanya berfungsi, tapi berasingan.',
  c1Shot: 'Paparan pelajar platform PharmCare Skills: papan pemuka, modul pembelajaran dan kajian kes langkah demi langkah',
  proto: 'Prototaip', prod: 'Produksi', proto2: 'Prototaip', prod2: 'Produksi',
  c1Proto: 'Prototaip modul berasingan dibina oleh pensyarah, setiap satu dengan rupa dan setup sendiri. Idea yang baik, sedia untuk disatukan.',
  c1p1: 'Kelima-lima modul disatukan dalam satu sistem yang ringkas, menggunakan library yang diselenggara dengan baik',
  c1p2: 'Satu login untuk pelajar, dengan kod akses', c1p3: 'Dihoskan di server khusus, dengan backup disediakan', c1p4: 'Sedia untuk tablet, supaya pelajar boleh guna di luar makmal',
  stat1: 'Pelajar menggunakannya', stat2: 'Modul dalam satu sistem', stat3: 'Sedia untuk', stat3v: 'Tablet',
  c2Label: 'Kajian kes: Anugerah pegawai penyelidik',
  c2Title: 'Laman anugerah dibina AI, disiapkan untuk penjurian.',
  c2Lead: '<strong class="client">Malaysia Research Officer Society (MROS)</strong> membina laman pencalonan dengan AI untuk anugerah yang meraikan pegawai penyelidik negara. Borangnya berfungsi. Tapi mengurus lampiran setiap calon, dan memilih pemenang dengan adil, rupanya jauh lebih banyak kerja daripada yang dijangka.',
  c2Shot: 'Panel penilaian: pencalonan disusun ikut kategori anugerah dan markah, dengan pemenang ditanda',
  c2Proto: 'Borang pencalonan yang berfungsi, dibina dengan AI. Lampiran bertimbun tanpa cara mudah untuk disusun atau disemak, dan penganjur tiada paparan untuk mengurus atau menilai penyertaan.',
  c2p1: 'Masalah kecil dalam aliran pencalonan dibetulkan', c2p2: 'Lampiran disusun ikut calon, mudah dibuka dan disemak', c2p3: 'Paparan admin untuk mengurus setiap pencalonan',
  c2p4: 'Paparan audit, supaya setiap keputusan pemenang boleh dikesan', c2p5: 'Kekal di akaun Firebase klien sendiri, tiada migrasi diperlukan',
  c2Note: 'Kami bekerja di mana app anda sudah berada.',
  priceTitle: 'Harga mudah',
  priceLead: 'Pilih di mana app anda berjalan. Harga dalam Ringgit. Kami semak app anda secara percuma dan sahkan harga sebelum kerja bermula.',
  w1Title: 'Setup app anda', w1Sub: 'Kami jalankan app dengan betul dan pastikan ia selamat digunakan. Tanpa cloud, ia berjalan di komputer anda dan hidup sendiri setiap kali komputer dihidupkan.',
  cp1: 'App ringkas', cp2: 'App dengan database', cp3: 'App kritikal bisnes',
  lp1t: 'HTML atau JavaScript', lp2t: 'Node, Python atau PHP, dengan data', lp3t: 'Untuk app yang menjadi nadi bisnes anda',
  locFrom: 'dari RM', locUnit: 'sekali bayar',
  w2Title: 'Letak di cloud?', w2Sub: 'Perlu kalau orang lain akan guna. Berjalan di server kami sepanjang hari, jadi sesiapa boleh buka dari mana-mana. Dibayar sekurang-kurangnya 6 bulan awal.',
  ht1: 'Online sepanjang hari, HTTPS, kemas kini server', ht2: 'Tambah backup harian dan 1 perubahan sebulan', ht3: 'Tambah balasan dalam 4 jam dan 3 perubahan sebulan',
  wqTitle: 'Tak pasti yang mana? Tanda apa yang app anda buat. Kalau tiada, app ringkas sudah memadai.',
  wq1: 'Simpan tempahan, pesanan atau pendaftaran', wq2: 'Pengguna perlu log masuk', wq3: 'Terima bayaran atau data sensitif', wq4: 'Bisnes terhenti kalau ia down',
  rec: 'Sesuai untuk app anda', wSkip: 'Langkau, saya seorang guna, di komputer saya',
  sumTitle: 'Jumlah anda', sumSetup: 'Setup', sumCloud: 'Cloud', sumCta: 'Hantar ke WhatsApp', sumUnit: 'bayar awal', sumHint: 'Pilih setup untuk lihat jumlah.',
  monthly: '6 bulan', yearly: 'Tahunan (2 bulan percuma)',
  terms: '<strong>Bayaran:</strong> Deposit 50% untuk mula setup, 50% bila app anda live. Pakej cloud dibayar sekurang-kurangnya 6 bulan awal. Domain dicaj pada harga kos, atau guna domain anda sendiri.',
  founding: '<strong>Klien perintis:</strong> 5 klien pertama kami dapat harga istimewa sebagai balasan untuk testimoni ringkas. Tanya kami di WhatsApp.',
  aboutLabel: 'Siapa di sebalik Oppen', aboutTitle: 'Hai, saya Zharif Zakaria.',
  aboutBody: 'Saya bermula dalam bidang reka bentuk: pameran, produk dan penerbitan. Pada 2017 saya beralih ke pembangunan web, membina sistem PHP untuk universiti, agensi kerajaan dan pasukan penyelidik di Malaysia. Reka bentuk mengajar saya memikirkan orang yang menggunakannya. Kod mengajar saya memastikan ia tahan lasak.',
  aboutBody2: 'Oppen ialah cara saya membawa ketelitian yang sama kepada app yang dibina dengan AI, dari prototaip ke produksi. Bila anda WhatsApp Oppen, anda bercakap terus dengan saya.',
  aboutName: 'Kenapa dua P? Satu untuk Prototaip, apa yang anda ada sekarang. Satu untuk Produksi, apa yang ia akan jadi.',
  aboutHobby: 'Di luar waktu kerja, saya suka menggodek Raspberry Pi, Arduino, ESP32, LEGO Mindstorms EV3 dan micro:bit, serta bermain RPG solo dan board game. Saya suka dunia yang dibina dengan teliti, sama ada dalam permainan atau dalam kod.',
  ssm: 'Perniagaan berdaftar: TSA 42 ENTERPRISE (PG0418796-U)',
  faqTitle: 'Soalan lazim',
  q1: 'Perlu Play Store atau App Store?', a1: 'Tak perlu. App anda dipasang terus dari browser ke skrin utama, di Android dan iPhone. Untuk app khas staf di Android, kami juga boleh beri fail APK untuk dipasang.',
  q2: 'Adakah anda akan ubah app saya?', a2: 'Hanya apa yang perlu supaya ia selamat digunakan oleh orang ramai. Kami beritahu apa yang kami ubah dan kenapa. Idea, skrin dan fungsi app anda kekal milik anda.',
  q3: 'Siapa pemilik kod?', a3: 'Anda. Kalau anda mahu berpindah, kami serahkan semua yang anda perlukan.',
  q4: 'App jenis apa yang boleh dihoskan?', a4: 'App HTML ringkas, dan app Node, Python atau PHP yang ada database: sistem tempahan, borang pesanan, senarai ahli, sistem dalaman. Kami boleh host untuk anda, atau bekerja dalam hosting atau akaun cloud anda sendiri. Hantar kepada kami dan kami beritahu pakej yang sesuai.',
  q5: 'App saya simpan data pelanggan. Bagaimana dengan PDPA?', a5: 'Kami sediakan asasnya: notis privasi, storan selamat dan backup. Bila kami host data anda, kami tandatangani terma bertulis ringkas tentang cara kami mengendalikannya. Untuk nasihat undang-undang penuh, rujuk peguam.',
  q6: 'Macam mana saya tahu harga akhir?', a6: 'Hantar app anda dan kami semak secara percuma. Kami sahkan harga tetap dan tempoh siap sebelum kerja bermula. Kalau app perlu dibina semula, bukan sekadar dibaiki, kami beritahu dan beri sebut harga berasingan.',
  q7: 'Bagaimana cara bayaran?', a7: 'Setup: deposit 50% untuk mula dan 50% bila app anda live. Pakej cloud dibayar sekurang-kurangnya 6 bulan awal.',
  q8: 'Berapa cepat anda balas?', a8: 'Dalam 1 hari bekerja untuk Hosting dan Care. Dalam 4 jam bekerja untuk Care Plus.',
  ctaTitle: 'Tak pasti yang mana satu?<br>Tanya saja.', ctaBtn: 'Chat dengan kami di WhatsApp',
  footTag: 'Prototaip ke produksi, untuk app yang dibina dengan AI.', footCopy: '© 2026 Oppen, Malaysia',

  // Micro pages: launch.html (app works, wants users) and fix.html (app won't work online)
  doneTitle: 'Kami pernah buat ini.', doneLead: 'Dua projek dibina AI yang kami bawa dari prototaip ke produksi.',
  done1: '<strong>Universiti Sains Malaysia (USM)</strong><span>Lima prototaip yang dibina pensyarah, disatukan menjadi satu platform kemahiran farmasi yang digunakan 200 pelajar. Projek khas.</span>',
  done2: '<strong>Malaysia Research Officer Society (MROS)</strong><span>Laman pencalonan dibina AI, disiapkan dengan pengurusan lampiran, paparan admin dan jejak audit untuk penjurian. Pelan: app dengan database.</span>',
  doneLink: 'Baca kajian kes',
  lTitle: 'Oppen — Bagi orang guna app yang anda bina dengan AI',
  lEyebrow: 'Pelancaran dan sokongan app AI', lH1a: 'Anda dah bina app dengan AI.', lH1b: 'Sekarang biar orang lain guna.',
  lLead: 'App anda tak perlu kekal sebagai demo di laptop. Oppen bawa app web yang anda bina dengan AI ke online dengan link sendiri, selamat untuk pengguna sebenar, dan ada di skrin utama telefon mereka. Kemudian kami jaga supaya ia terus berjalan.',
  lCta: 'Minta semakan app saya', lNote: 'Semakan percuma dulu: kami beritahu apa yang app anda perlukan dan kosnya sebelum kerja bermula. Setup dari RM199, hosting dari RM39 sebulan.',
  lGetTitle: 'Dari laptop anda ke pengguna sebenar.', lGetLead: 'Go live bukan sekadar muat naik fail. Ini yang app anda dapat.',
  lg1t: 'Online dengan link sendiri', lg1: 'Domain anda sendiri dengan HTTPS, supaya sesiapa boleh buka, bukan anda seorang.',
  lg2t: 'Di mana-mana telefon', lg2: 'Boleh dipasang di skrin utama Android dan iPhone. Tak perlu Play Store.',
  lg3t: 'Selamat dengan data orang', lg3: 'Rahsia keluar dari kod, semakan login, backup harian dan asas PDPA.',
  lg4t: 'Terus berjalan', lg4: 'Pemantauan yang beri amaran kepada kami kalau ia down. Pelan jagaan bulanan meliputi kemas kini dan perubahan kecil.',
  lPriceTitle: 'Berapa kosnya.', lPriceLead: 'Setup sekali bayar, kemudian hosting supaya orang lain boleh capai app anda. Kami sahkan harga tepat selepas semakan percuma.', lPriceLink: 'Kira jumlah anda →',
  lpr1: '<strong>App ringkas · RM199 setup</strong><span>Dibina dengan HTML atau JavaScript, tanpa database di belakangnya.</span>',
  lpr2: '<strong>App dengan database · RM499 setup</strong><span>App Node, Python atau PHP yang simpan data: tempahan, pesanan, senarai ahli.</span>',
  lpr3: '<strong>App kritikal bisnes · dari RM999 setup</strong><span>Untuk app yang menjadi nadi bisnes anda.</span>',
  lpr4: '<strong>Hosting · dari RM39 sebulan</strong><span>Perlu supaya orang lain boleh guna. Dibayar sekurang-kurangnya 6 bulan awal.</span>',
  lpr5: '<strong>Projek lebih besar · sebut harga ikut projek</strong><span>Menyatukan beberapa prototaip, atau membina apa yang belum ada. Platform USM di bawah ialah salah satunya.</span>',
  lCtaTitle: 'App anda dah jalan.<br>Jom bawa ke pengguna.',
  fTitle: 'Oppen — App dibina AI yang tak jalan bila online',
  fEyebrow: 'Bila app AI anda tersekat', fH1a: 'AI dah bina app anda.', fH1b: 'Kenapa tak jalan bila online?',
  fLead: 'Dalam preview ia berfungsi, tapi deploy gagal. Database tak dapat disambung. Atau setiap kali satu ralat dibetulkan, muncul ralat lain. Oppen cari apa yang menghalang app web anda dan jalankannya secara online.',
  fCta: 'Tunjuk apa yang menghalang', fSee: 'Apa yang kami betulkan',
  fNote: 'Semakan percuma dulu: kami beritahu apa yang rosak, apa yang perlu dibuat dan kosnya sebelum kami mula.',
  fSt: 'Gagal', fk1: 'Build berjaya', fk2: 'Database disambung', fk3: 'Kunci dan setting di tempatnya', fk4: 'Ralat dibetulkan',
  fSymTitle: 'Biasa dengar?', fSymLead: 'Ini masalah yang kami jumpa paling kerap dalam app yang dibina AI. Bukan salah anda, dan biasanya boleh dibaiki.',
  fs1: '<strong>Jalan dalam preview, tapi bukan online.</strong><span>Elok di komputer anda atau dalam alat AI, tapi rosak sebaik saja di-deploy.</span>',
  fs2: '<strong>Deploy asyik gagal.</strong><span>Ralat build, package hilang, setting yang AI tak pernah sebut.</span>',
  fs3: '<strong>Database tak dapat disambung.</strong><span>App terbuka, tapi tiada apa yang disimpan atau dipaparkan.</span>',
  fs4: '<strong>Setiap pembaikan rosakkan benda lain.</strong><span>Anda tampal ralat ke AI, dan dapat ralat baru pula.</span>',
  fs5: '<strong>Jalan untuk anda, bukan untuk orang lain.</strong><span>Login, link atau halaman yang gagal di peranti orang lain.</span>',
  fHowTitle: 'Bagaimana kami betulkannya',
  fst1t: 'Hantar app anda', fst1: 'WhatsApp kami link GitHub atau fail zip, dan apa yang tak kena. Tangkapan skrin ralat sangat membantu.',
  fst2t: 'Kami cari puncanya', fst2: 'Kami jejak masalah hingga ke puncanya, bukan sekadar ralat terkini, dan beritahu apa yang perlu dibuat dengan harga tetap.',
  fst3t: 'Kami jalankannya', fst3: 'Kami betulkan, deploy secara online, dan jaga ia kalau anda mahu. App, kod dan idea anda kekal milik anda.',
  fHonest: 'Kalau app anda perlu dibina semula, bukan sekadar dibaiki, kami beritahu sebelum anda bayar apa-apa.',
  fCtaTitle: 'Tersekat dengan ralat?<br>Hantar kepada kami.'
};

var TEXT = {
  en: {
    month: 'a month', year: 'a year', switchLabel: 'BM', switchLang: 'ms', switchAria: 'Baca dalam Bahasa Melayu',
    general: 'Hi Oppen, I have an AI-built app I want to take from prototype to production.',
    launch: 'Hi Oppen, I built an app with AI and want other people to use it. Can you assess it? Here is what it does: ',
    fix: 'Hi Oppen, my AI-built app won\'t work online. Can you take a look? Here is what happens: ',
    notChosen: 'Not chosen yet', skipped: 'Skipped', months: function (n) { return n + ' months'; },
    plan: function (s, c, tot, does) { return 'Hi Oppen, my plan: ' + s + ' setup' + (c ? ', plus ' + c + ' in the cloud' : ', on my own computer only') + '. Total ' + tot + ' upfront.' + (does ? ' What I ticked: ' + does + '.' : '') + ' Here is what my app does: '; }
  },
  ms: {
    month: 'sebulan', year: 'setahun', switchLabel: 'EN', switchLang: 'en', switchAria: 'Read in English',
    general: 'Hai Oppen, saya ada app yang dibina dengan AI dan nak bawa dari prototaip ke produksi.',
    launch: 'Hai Oppen, saya bina app dengan AI dan nak orang lain guna. Boleh semak? Ini fungsi app saya: ',
    fix: 'Hai Oppen, app saya yang dibina dengan AI tak jalan bila online. Boleh tengokkan? Ini apa yang berlaku: ',
    notChosen: 'Belum dipilih', skipped: 'Dilangkau', months: function (n) { return n + ' bulan'; },
    plan: function (s, c, tot, does) { return 'Hai Oppen, pilihan saya: setup ' + s + (c ? ', dan ' + c + ' di cloud' : ', di komputer saya sahaja') + '. Jumlah ' + tot + ' bayar awal.' + (does ? ' Yang saya tanda: ' + does + '.' : '') + ' Ini fungsi app saya: '; }
  }
};

var EN = {};
document.querySelectorAll('[data-i18n]').forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { EN[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
EN.pr1b = 'Uptime, last 30 days';

var state = { lang: 'en', yearly: false };
var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function waLink(text) { return 'https://wa.me/' + WHATSAPP_REV.split('').reverse().join('') + '?text=' + encodeURIComponent(text); }
// Links carry only their message; the real link is built when someone uses it, so the number never sits in the page.
['click', 'auxclick', 'contextmenu'].forEach(function (type) {
  document.addEventListener(type, function (e) {
    var a = e.target.closest('a[data-msg]');
    if (a) a.href = waLink(a.dataset.msg);
  });
});

function render() {
  var t = TEXT[state.lang], dict = state.lang === 'ms' ? MS : EN;
  document.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = dict[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', dict[el.dataset.i18nAria]); });
  document.documentElement.lang = state.lang;

  var sw = document.querySelector('[data-lang-switch]');
  sw.textContent = t.switchLabel; sw.lang = t.switchLang; sw.setAttribute('aria-label', t.switchAria);

  document.querySelectorAll('[data-monthly]').forEach(function (el) { el.textContent = el.dataset.monthly * (state.yearly ? 10 : 1); });
  document.querySelectorAll('[data-unit]').forEach(function (el) { el.textContent = state.yearly ? t.year : t.month; });

  document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = 'https://wa.me/'; a.dataset.msg = t[a.dataset.wa]; });
  moveThumb();
  updateTotal();
}

// Pricing wizard: step 1 picks the setup, step 2 adds a cloud plan or skips it.
function pick(name) { return document.querySelector('input[name="' + name + '"]:checked'); }
function optInfo(input) {
  var o = input.closest('.wopt'), q = function (s) { return o.querySelector(s).textContent; };
  return { numEl: o.querySelector('.num'), name: o.querySelector('b').firstChild.textContent.trim(), price: q('.pre') + q('.num'), unit: q('.unit'), num: q('.num'), pre: q('.pre') };
}
function updateTotal() {
  var skip = document.getElementById('w-skip');
  if (!skip) return; // only the main page has the pricing wizard
  var t = TEXT[state.lang], setup = pick('setup'), cloud = pick('cloud') || (skip.checked && skip);
  var stepCloud = document.getElementById('w-cloud');
  stepCloud.disabled = !setup;
  document.getElementById('w-setup').classList.toggle('done', !!setup);
  stepCloud.classList.toggle('done', !!(setup && cloud));
  document.querySelectorAll('input[name="cloud"]').forEach(function (c) {
    var o = c.closest('.wopt');
    if (o) o.classList.toggle('fits', !!setup && c.value === setup.value);
  });

  var s = setup && optInfo(setup);
  var c = cloud && cloud.value !== 'skip' && optInfo(cloud);
  // Cloud is prepaid: at least 6 months, or a year at the yearly price.
  var months = state.yearly ? 12 : 6;
  var cloudCost = c ? (state.yearly ? +c.num : c.numEl.dataset.monthly * 6) : 0;
  var total = s ? +setup.dataset.price + cloudCost : 0;
  if (c) c = { name: c.name + ' (' + t.months(months) + ')', price: 'RM' + cloudCost };
  var line = function (id, name, price, empty) {
    var dd = document.getElementById(id);
    dd.classList.toggle('empty', !name);
    dd.innerHTML = name ? '<span>' + name + '</span><span>' + price + '</span>' : empty;
  };
  line('sum-setup', s && s.name, s && s.price, t.notChosen);
  line('sum-cloud', c && c.name, c && c.price, cloud && cloud.value === 'skip' ? t.skipped : t.notChosen);

  var num = document.getElementById('sum-num'), next = String(total);
  document.getElementById('sum-pre').textContent = s ? s.pre : 'RM';
  if (num.textContent !== next) {
    num.textContent = next;
    if (!reduceMotion) num.animate([{ transform: 'translateY(30%)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 260, easing: 'cubic-bezier(.2,0,0,1)' });
  }

  var cta = document.getElementById('sum-cta');
  document.getElementById('sum-hint').hidden = !!s;
  if (s) {
    cta.href = 'https://wa.me/';
    cta.dataset.msg = t.plan(s.name + ' (' + s.price + ')', c && c.name.replace(/\)$/, ', ' + c.price + ')'), s.pre + total, [].map.call(document.querySelectorAll('input[name="does"]:checked'), function (d) { return d.nextElementSibling.textContent; }).join('; '));
    cta.removeAttribute('aria-disabled');
    cta.removeAttribute('tabindex');
  } else {
    cta.removeAttribute('href');
    delete cta.dataset.msg;
    cta.setAttribute('aria-disabled', 'true');
    cta.setAttribute('tabindex', '-1');
  }
}
// Skip is a checkbox so it can be turned off again; it and the cloud plans clear each other.
document.querySelectorAll('.wizard input').forEach(function (i) {
  i.addEventListener('change', function () {
    if (i.id === 'w-skip' && i.checked) document.querySelectorAll('input[name="cloud"]').forEach(function (c) { c.checked = false; });
    if (i.name === 'cloud') document.getElementById('w-skip').checked = false;
    // "What does your app do?" ticks pick the setup tier: the highest ticked value wins, none means Simple.
    if (i.name === 'does') {
      var tier = 0;
      document.querySelectorAll('input[name="does"]:checked').forEach(function (c) { tier = Math.max(tier, +c.value); });
      document.querySelector('input[name="setup"][value="' + tier + '"]').checked = true;
    }
    updateTotal();
  });
});

function moveThumb() {
  var on = document.querySelector('[data-pick][aria-pressed="true"]');
  if (!on) return;
  var g = on.parentNode;
  g.style.setProperty('--thumb-x', on.offsetLeft + 'px');
  g.style.setProperty('--thumb-w', on.offsetWidth + 'px');
}

document.querySelector('[data-lang-switch]').addEventListener('click', function () {
  var main = document.querySelector('main');
  state.lang = state.lang === 'en' ? 'ms' : 'en';
  try { localStorage.setItem('lang', state.lang); } catch (e) {}
  if (reduceMotion) return render();
  main.classList.add('swapping');
  setTimeout(function () { render(); main.classList.remove('swapping'); }, 150);
});

document.querySelectorAll('[data-pick]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var yearly = btn.dataset.pick === 'yearly';
    if (yearly === state.yearly) return;
    state.yearly = yearly;
    document.querySelectorAll('[data-pick]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
    render();
    if (!reduceMotion) document.querySelectorAll('[data-monthly]').forEach(function (el) {
      el.animate([{ transform: 'translateY(' + (yearly ? '' : '-') + '40%)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 260, easing: 'cubic-bezier(.2,0,0,1)' });
    });
  });
});

try { if (localStorage.getItem('lang') === 'ms') state.lang = 'ms'; } catch (e) {}
render();
addEventListener('resize', moveThumb);

// Uptime tiles read the live status page. Until the monitor is 30 days old, its 30-day figure is the uptime since launch.
fetch('https://stats.uptimerobot.com/api/getMonitor/ZTvfoCzikY?m=804391203').then(function (r) { return r.json(); }).then(function (j) {
  var m = j.monitor, times = m.responseTimes.map(function (x) { return x.value; });
  document.getElementById('up-ratio').textContent = +(+m['30dRatio'].ratio).toFixed(2) + '%';
  if (times.length) document.getElementById('up-ms').textContent = Math.round(times.reduce(function (a, b) { return a + b; }) / times.length) + ' ms';
  if (Date.now() - Date.parse(m.createdAt.replace(' ', 'T') + 'Z') > 30 * 864e5) {
    var k = document.querySelector('[data-i18n="pr1"]');
    k.dataset.i18n = 'pr1b';
    k.innerHTML = (state.lang === 'ms' ? MS : EN).pr1b;
  }
}).catch(function () {});

// Section headings rise into view once, as they scroll in.
if (!reduceMotion && 'IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('main .display, .cta h2').forEach(function (h) {
    h.classList.add('reveal');
    io.observe(h);
  });
}

// Hero parallax: only for a real mouse, and never when reduced motion is on.
if (!reduceMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  var hero = document.getElementById('top'), launch = hero.querySelector('.launch');
  hero.addEventListener('pointermove', function (e) {
    var r = launch.getBoundingClientRect(), clamp = function (v) { return Math.max(-1, Math.min(1, v)); };
    launch.style.setProperty('--mx', clamp((e.clientX - r.left - r.width / 2) / (r.width / 2 + 200)).toFixed(3));
    launch.style.setProperty('--my', clamp((e.clientY - r.top - r.height / 2) / (r.height / 2 + 100)).toFixed(3));
  });
  hero.addEventListener('pointerleave', function () {
    launch.style.setProperty('--mx', 0);
    launch.style.setProperty('--my', 0);
  });
}

// Screenshot zoom follows the cursor (CSS only scales it for a real mouse).
document.querySelectorAll('.zoom').forEach(function (z) {
  z.addEventListener('pointermove', function (e) {
    var r = z.getBoundingClientRect();
    z.style.setProperty('--zx', (e.clientX - r.left) / r.width * 100 + '%');
    z.style.setProperty('--zy', (e.clientY - r.top) / r.height * 100 + '%');
  });
});
document.fonts && document.fonts.ready.then(moveThumb);
