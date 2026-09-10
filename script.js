// ==========================================
// FIRAT ÜNİVERSİTESİ PORTALI - MEGA SCRIPT (script.js - 1000+ SATIR)
// ==========================================

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { 
    threshold: 0.05,
    rootMargin: "0px 0px 100px 0px"
});

revealElements.forEach(el => observer.observe(el));

function checkInitialReveal() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
            el.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', checkInitialReveal);
window.addEventListener('load', checkInitialReveal);
setTimeout(checkInitialReveal, 100);

// ==========================================
// YARDIMCI FONKSİYON: TÜRKÇE UYUMLU KÜÇÜK HARFE ÇEVİRME
// (JS'in standart toLowerCase()'i büyük "İ" harfini yanlış çevirir,
// bu yüzden arama kutusunda "İnşaat", "İşletme" gibi kelimeler
// bulunamayabiliyordu. .toLocaleLowerCase('tr-TR') ile düzeltildi.)
// ==========================================
function trLower(str) {
    return str.toLocaleLowerCase('tr-TR');
}

// ==========================================
// 2. İKİ KATINA ÇIKARILMIŞ DEV MAKALE METİNLERİ (1000+ SATIR)
// ==========================================
const modalData = {

    // --- YURTLAR REHBERİ ---
    "yurt-kyk-ahmet-kabakli": {
        title: "🏢 Ahmet Kabaklı Erkek KYK Yurdu - Eksiksiz Barınma ve Yaşam Kılavuzu",
        text: `
            <p><strong>Genel Coğrafi Konum ve Stratejik Ulaşım Ağı:</strong> Zafran Mevkii'nin hâkim tepesinde, Fırat Üniversitesi ana kampüsünün hemen üst aksında konumlanan Ahmet Kabaklı Erkek Öğrenci Yurdu, yalnızca Elazığ'ın değil, tüm Doğu ve Güneydoğu Anadolu bölgesinin en büyük, en modern ve en kapsamlı devlet barınma komplekslerinden biri olma özelliğini taşımaktadır. Yurdun nizamiyesinden hareket eden 22 numaralı belediye otobüsleri ve özel halk minibüsleri, öğrencilerin kampüs içerisindeki tüm fakültelere 5 ila 7 dakika içinde ulaşmasını sağlamaktadır. Bu stratejik konum, sabah erken saatlerdeki derslere yetişen öğrenciler için büyük bir ulaşım kolaylığı ve zaman tasarrufu anlamına gelmektedir. Şehir merkezine olan entegrasyonu sayesinde öğrenciler sosyal ve kültürel etkinliklere de rahatlıkla katılım gösterebilmektedir.</p>
            <p><strong>Oda Mimarisi, İç Donanım ve Konfor Standartları:</strong> Modern deprem yönetmeliklerine tam uygun olarak inşa edilen bloklar, öğrencilerin huzurlu bir akademik dönem geçirmesi için titizlikle tasarlanmıştır. Odalar genellikle 3 ve 4 kişilik ferah konseptlerden oluşur. Her öğrenciye özel olarak tahsis edilen donanım listesi şu şekildedir: Bel ve sırt sağlığını destekleyen ortopedik yataklı bazalar, kıyafetlerin ve kişisel eşyaların güvenle kilitlenebileceği geniş gardıroplar, laptop ve çizim masası olarak kullanılabilen ergonomik çalışma masaları, kişisel kitaplık rafları ve oda içinde atıştırmalık ile gıdaların saklanmasına olanak tanıyan mini buzdolapları. Blokların tamamında 24 saat kesintisiz sıcak su akışı, merkezi doğalgaz kalorifer ısıtma sistemi ve her katta bulunan havalandırmalı dinlenme koridorları yer almaktadır. Pencereler çift cam ısı yalıtımlı olup dışarıdaki sesleri tamamen kesmektedir.</p>
            <p><strong>Akademik Çalışma Alanları ve Sosyal Donatılar:</strong></p>
            <ul>
                <li><strong>7/24 Açık Akustik Etüt Salonları:</strong> Vize ve final dönemlerinde öğrencilerin akın ettiği, ses yalıtımlı, bireysel aydınlatmalı çalışma masalarıyla donatılmış salonlar aralıksız hizmet vermektedir. Mühendislik projeleri için geniş çizim masaları da mevcuttur.</li>
                <li><strong>Dev Yemekhane ve Kafeterya Kompleksi:</strong> GSB destekli geniş yemekhane salonu, hijyenik kafeterya, fotokopi ve kırtasiye noktası, profesyonel berber salonu ve ortak çamaşır yıkama-kurutma üniteleri yurt sınırları içerisindedir.</li>
                <li><strong>Sportif Faaliyet Alanları:</strong> Yurt bahçesinde yer alan açık hava basketbol sahaları, voleybol sahaları ve profesyonel çim halı saha, öğrencilerin ders dışı fiziksel aktivitelerle stres atmalarını sağlar.</li>
                <li><strong>Psikososyal Destek ve Rehberlik:</strong> Yurt yönetim bünyesinde öğrencilerin uyum süreçlerini koordine eden, akademik ve kişisel sorunlarında rehberlik eden uzman personel kadrosu görev yapmaktadır. Düzenlenen turnuvalar ve sosyal kulüp faaliyetleri ile öğrenciler arasında güçlü bir dayanışma ağı kurulur.</li>
            </ul>
            <p><strong>Güvenlik ve Hijyen Protokolleri:</strong> Yurt binasına giriş ve çıkışlar yalnızca yüksek güvenlikli biyometrik yüz tanıma ve akıllı kart turnike sistemleriyle sağlanmaktadır. Gece görüşlü yüksek çözünürlüklü kameralar ve profesyonel özel güvenlik ekipleri kampüsü 24 saat boyunca koruma altındadır. Temizlik personelleri ise günlük periyotlarla katları, lavaboları ve ortak yaşam alanlarını dezenfekte etmektedir. Öğrencilerin sağlığı ve güvenliği her şeyin üzerinde tutulmaktadır.</p>
        `
    },
    "yurt-kyk-harput": {
        title: "🏢 Harput Erkek KYK Yurdu - Kurumsal İnceleme ve Yaşam Şartları",
        text: `
            <p><strong>Kurumsal Konum ve Tarihsel Arka Plan:</strong> Harput Erkek KYK Yurdu, Fırat Üniversitesi'nin merkez yerleşkesine yakınlığıyla bilinen, uzun yıllardır binlerce mühendislik, fen ve iktisadi idari bilimler öğrencisine ev sahipliği yapmış çok köklü bir barınma merkezidir. Şehir içi ana arterlerine ve toplu taşıma duraklarına olan yakınlığı, öğrencilerin sosyal hayata hızlıca karışmasını kolaylaştırmaktadır. Köklü geçmişi boyunca binlerce mezun vermiştir.</p>
            <p><strong>Güvenlik Altyapısı ve Konfor:</strong> Giriş kapılarında aktif olarak kullanılan biyometrik parmak izi okuma turnikeleri, 7/24 esasına göre görev yapan profesyonel güvenlik ekibi ve gece görüşlü kapalı devre kamera kayıt ağları ile üst düzey bir güvenlik kalkanı oluşturulmuştur. Öğrenci kartı olmayan hiçbir şahsın tesise girişine kesinlikle izin verilmemektedir. Ziyaretçi kuralları titizlikle uygulanmaktadır.</p>
            <p><strong>Sosyal Donatılar ve Altyapı Olanakları:</strong> Yurt binası içerisinde öğrencilerin temel gıda ve kırtasiye ihtiyaçlarını giderebilecekleri modern kantin işletmeleri, dinlenme odaları, masa tenisi salonları ve yüksek hızlı GSB Wi-Fi altyapısı mevcuttur. Profesyonel çamaşır ve kurutma makineleri öğrencilerin kullanımına sunulmaktadır. Günlük kat temizlikleri deneyimli ekipler tarafından titizlikle yürütülmektedir.</p>
            <p><strong>İklimlendirme ve Isınma:</strong> Merkezi sistem doğalgaz petek ısıtması sayesinde kış aylarının çetin geçtiği Elazığ ikliminde dahi odalar son derece sıcak ve konforludur. Su depoları ve jeneratör altyapısı sayesinde olası kesintilerden öğrenciler hiçbir şekilde etkilenmemektedir.</p>
        `
    },
    "yurt-kyk-fethi-sekin": {
        title: "🏢 Fethi Sekin Kız KYK Yurdu - Kapsamlı Barınma Rehberi",
        text: `
            <p><strong>Lokasyon ve Ulaşım Üstünlüğü:</strong> Kampüs ana giriş kapısının hemen karşısında, Üniversite Mahallesi'nin en güvenli ve hareketli aksında yer alır. Mühendislik, İletişim, Mimarlık ve Fen-Edebiyat fakültelerine yürüyerek sadece 5 dakikada ulaşım imkânı tanır. Konumu itibarıyla öğrencilerin derslere geç kalma riskini sıfıra indirmektedir.</p>
            <p><strong>Oda Konsepti ve İç Mimarisi:</strong> Odaların içerisinde öğrencilerin konforu için özel olarak tasarlanmış banyo ve tuvalet ünitesi bulunmaktadır. 3 ve 4 kişilik modern bazalı yatak sistemleri, ergonomik çalışma masaları, dolap içi kilitli kasalar ve kişisel gardıroplar titizlikle yerleştirilmiştir. Ses ve ısı yalıtımlı pencereler sayesinde dış sesler tamamen izole edilmiştir.</p>
            <p><strong>Sosyal İmkânlar ve Hizmetler:</strong> Yurt binası bünyesinde geniş okuma salonları, el sanatları hobi atölyeleri, profesyonel kuaför salonu, dikiş-terzi ünitesi ve tam donanımlı çamaşır yıkama-kurutmahane yer almaktadır. GSB yemek bursu kapsamında sabah kahvaltısı ve akşam yemekleri, modern ve hijyenik yemekhane salonlarında zengin çeşitlerle sunulmaktadır.</p>
            <p><strong>Rehberlik ve Uyum Faaliyetleri:</strong> Üniversiteye yeni gelen kız öğrenciler için oryantasyon günleri, şehir tanıtım turları ve psikolojik uyum seminerleri düzenlenerek öğrencilerin şehre hızlıca adapte olması sağlanır. Yurt yönetimi her zaman öğrencilerin yanındadır.</p>
        `
    },
    "yurt-kyk-omer-bilginoglu": {
        title: "🏢 Ömer Bilginoğlu Kız KYK Yurdu - Detaylı İnceleme",
        text: `
            <p><strong>Merkezi Yaşam Alanı:</strong> Kampüsün akademik ve sosyal kalbinde yer alan Ömer Bilginoğlu Kız Yurdu; 13.500 metrekarelik devasa Merkez Kütüphane'ye, Öğrenci Sarayı sosyal tesislerine ve ana yemekhaneye komşu konumdadır. Bu sayede öğrenciler akademik kaynaklara anında erişim sağlayabilmektedir.</p>
            <p><strong>Altyapı ve Hizmet Kalitesi:</strong> Merkezi ısıtma sistemi, kesintisiz sıcak su, yüksek hızlı kablosuz internet ağı ve katlarda yer alan konforlu dinlenme salonları ile öğrencilere ev konforunda bir çalışma ortamı sunulmaktadır. Yurt bahçesinde yer alan yeşil alanlar, kamelyalar ve yürüyüş yolları ders stresini atmak için ideal bir ortam yaratır.</p>
            <p><strong>Güvenlik ve İdari Yapı:</strong> 24 saat kesintisiz güvenlik kameraları, turnikeli geçiş sistemleri, gece nöbetçi memurluğu ve kat sorumlularıyla ebeveynlerin gözünün arkada kalmayacağı güvenli bir barınma ekosistemi sağlanmaktadır.</p>
        `
    },
    "yurt-kyk-sare-ana": {
        title: "🏢 Sare Ana Kız KYK Yurdu - Sağlık Kampüsü Yanı Barınma",
        text: `
            <p><strong>Sağlık Kampüsü Yakınlığı:</strong> Sare Ana KYK Yurdu, Fırat Üniversitesi'nin Tıp, Diş Hekimliği, Eczacılık ve Sağlık Bilimleri fakültelerinin bulunduğu sağlık yerleşkesinin hemen yakınında konuşlanmıştır. Bu stratejik konum, özellikle yoğun nöbet ve pratik ders programına sahip sağlık branşı öğrencilerine çok büyük bir zaman tasarrufu sağlamaktadır.</p>
            <p><strong>Bina Özellikleri ve Mimari:</strong> Yeni nesil enerji tasarruflu yalıtım teknolojileriyle inşa edilmiş binalarda aydınlık, ferah oda tasarımları, 24 saat açık sessiz etüt merkezleri ve modern yemekhane birimleri hizmet vermektedir. Odalarda kişiye özel çalışma alanları ve kesintisiz internet erişimi standart olarak sunulmaktadır.</p>
        `
    },
    "yurt-kyk-elazig-kiz": {
        title: "🏢 Elazığ Kız KYK Yurdu - Kurumsal Tanıtım",
        text: `
            <p><strong>Genel Bakış ve Konum:</strong> Şehir merkezine ve ana ulaşım hatlarına kolay entegre olan köklü kız öğrenci yurtlarımızdan biridir. Toplu taşıma araçlarıyla kampüse ve çarşı merkezine aktarmasız doğrudan erişim sağlanabilmektedir.</p>
            <p><strong>İmkânlar ve Sosyal Yaşam:</strong> Güvenli nizamiyesi, zengin kitaplıklı etüt odaları, kantin ve çamaşırhane hizmetlerinin yanı sıra; yıl boyunca düzenlenen kültürel geziler, tiyatro kulübü etkinlikleri ve el sanatları kursları ile öğrencilerin sosyal hayata adaptasyonu en üst düzeyde desteklenmektedir.</p>
        `
    },
    "yurt-kyk-firat": {
        title: "🏢 Fırat KYK Yurdu - Doğrudan Kampüs İçi Konaklama",
        text: `
            <p><strong>Doğrudan Kampüs İçi Konum:</strong> Üniversite yerleşkesinin kalbinde yer alması sayesinde öğrencilere sıfır ulaşım maliyeti ve günlük zaman avantajı kazandırır. Sabahları ders ziline dakikalar kala bile fakültelere yürüyerek ulaşmak mümkündür.</p>
            <p><strong>İmkânlar:</strong> Kütüphaneye, yemekhaneye ve sosyal tesis merkezlerine en yakın devlet yurdu olması nedeniyle öğrenciler tarafından yoğun olarak tercih edilmektedir.</p>
        `
    },
    "yurt-ozel-yurtlar": {
        title: "🏠 Üniversite Mahallesi Özel Yurtlar ve Lüks Yaşam Rehberi",
        text: `
            <p><strong>Konum ve Alternatifler:</strong> Kampüsün hemen bitişiğini saran Üniversite Mahallesi, Zübeyde Hanım Caddesi ve Malatya Caddesi üzerinde öğrencilerin konforunu en üst düzeye çıkaran lüks konseptli çok sayıda özel kız ve erkek öğrenci yurdu hizmet vermektedir.</p>
            <p><strong>Özel Yurtların Sunduğu Ayrıcalıklı Avantajlar:</strong></p>
            <ul>
                <li>Tek kişilik, iki kişilik ve üç kişilik; otel konforunu aratmayan, LCD televizyonlu ve mini buzdolaplı lüks oda alternatifleri.</li>
                <li>Haftanın 7 günü zengin açık büfe sabah kahvaltısı ve ev yemeği lezzetinde akşam yemeği menüleri.</li>
                <li>Haftalık profesyonel oda temizliği hizmeti, nevresim değişimi ve kota sınırsız fiber internet.</li>
                <li>Öğrencilerin spor yapabileceği fitness salonları, sinema odaları, kafeteryalar ve sessiz bireysel etüt salonları.</li>
            </ul>
        `
    },
    "yurt-ozel-apartlar": {
        title: "🛋️ 1+0 & 1+1 Öğrenci Apartları ve Bağımsız Yaşam",
        text: `
            <p><strong>Bağımsız Yaşam Modeli:</strong> Kendi ev düzenini kurmak, yemek saatlerini kendi belirlemek ve daha esnek bir yaşam alanı isteyen öğrenciler için Üniversite Mahallesi ve Bosna Caddesi civarında eşyalı stüdyo daireler oldukça popülerdir.</p>
            <p><strong>Donanım ve Maliyet Detayları:</strong> Beyaz eşyaları (çamaşır makinesi, buzdolabı, ankastre ocak), yatak grubu, oturma grubu, çalışma masası ve temel mutfak gereçleri eksiksiz olarak teslim edilir. Birçok apart işletmesinde elektrik, su, internet ve bina aidat giderleri sabit kira paketine dâhil edilerek öğrencilere kolaylık sağlanır.</p>
        `
    },
    "yurt-ev-kiralama": {
        title: "🔑 Kiralık Öğrenci Evleri ve Semt Analiz Rehberi",
        text: `
            <p><strong>Popüler Öğrenci Semtleri ve Özellikleri:</strong></p>
            <ul>
                <li><strong>Üniversite Mahallesi:</strong> Ulaşım masrafını sıfırlayan, kampüse sıfır konumda olan en popüler ve hareketli seçenektir. Sosyal imkânlar evinize bir adım mesafededir.</li>
                <li><strong>Abdullahpaşa ve Çaydaçıra Mahalleleri:</strong> Son yıllarda inşa edilen depreme dayanıklı yeni binaların bulunduğu, site içerisinde güvenlikli 2+1 ve 3+1 dairelerin yoğunlaştığı, tek otobüsle üniversiteye ulaşılan nezih ve sakin yerleşim alanlarıdır.</li>
            </ul>
        `
    },
    "yurt-basvuru-sureci": {
        title: "📝 KYK Başvuru Süreci ve e-Devlet Adım Adım Rehberi",
        text: `
            <p><strong>Başvuru Zamanlaması:</strong> ÖSYM YKS yerleştirme sonuçlarının ilan edilmesinin ve üniversite kayıtlarının dijital ortamda tamamlanmasının ardından, Gençlik ve Spor Bakanlığı (GSB) tarafından e-Devlet kapısı üzerinden resmi yurt başvuru takvimi duyurulur.</p>
            <p><strong>Kritik Hususlar ve Puanlama:</strong> Başvuru formunda beyan edilen aile gelir durumu, öğrencinin YKS yerleştirme başarı sıralaması, şehit/gazi yakını olma durumu ve sosyal imtiyaz kodları sistem üzerinden otomatik taranarak puanlama yapılır. Form doldurulurken Ulusal Elektronik Tebligat Sistemi (UETS) adresinin güncel olması zorunludur.</p>
        `
    },
    "yurt-imkanlar-beslenme": {
        title: "🍲 KYK Yemekhane ve Günlük Beslenme Desteği Sistemi",
        text: `
            <p><strong>Devlet Destekli Beslenme Yardımı:</strong> GSB yurtlarında barınan tüm öğrencilere bakanlık tarafından her ay güncellenen tutarda nakdi yemek yardımı (kredi desteği) doğrudan öğrenci kimlik kartlarına tanımlanmaktadır.</p>
            <p><strong>Servis Zamanları ve Hijyen:</strong> Sabah kahvaltıları 06:30 - 10:30 saatleri arasında zengin ve besleyici çeşitle, akşam yemekleri ise 16:00 - 22:30 saatleri arasında 4 çeşit sıcak, yüksek kalorili dengeli menüyle modern yemekhanelerde servis edilir.</p>
        `
    },

    // --- KAMPÜS: 8 ANA BAŞLIĞIN MAFİSAL / DETAYLI METİNLERİ ---
    "tarihce-kokler": {
        title: "📜 Kökler, İsim Kökeni ve Kurumsal Hafıza",
        text: `
            <p>Fırat Üniversitesi'nin temelleri, Doğu Anadolu Bölgesi'nin kalbinde nitelikli teknik eleman, mühendis ve bilim insanı yetiştirmek amacıyla 1967 yılında atılmıştır. İlk olarak Elazığ Yüksek Teknik Okulu olarak faaliyete başlayan bu mütevazı kurum, kısa süre içinde bölgenin endüstriyel ve akademik kalkınmasında kilit rol üstlenmiştir. 1969 yılında Elazığ Devlet Mühendislik ve Mimarlık Akademisi (EDMMA) statüsüne kavuşmuştur.</p>
            <p>11 Nisan 1975 tarihli ve 1873 sayılı resmi kanunla "Fırat Üniversitesi" adını alan bu kök yapı; günümüzde Bingöl, Tunceli (Munzur), Muş Alparslan ve Bitlis Eren üniversitelerinin de kurucu akademik çekirdeğini oluşturmuştur. Adını coğrafyamızın en büyük akarsuyu olan Fırat Nehrinden alan köklü üniversite, tarihi mirasından aldığı güçle geleceğin dijital dünyasını inşa etmektedir.</p>
        `
    },
    "tarihce-basari": {
        title: "🏆 Akademik Dereceler, URAP ve Global Sıralamalar",
        text: `
            <p>Fırat Üniversitesi, her yıl yayımlanan University Ranking by Academic Performance (URAP) araştırma raporlarında Türkiye genelindeki tüm devlet üniversiteleri arasında ilk 15 içerisindeki istikrarlı ve prestijli yerini gururla korumaktadır.</p>
            <p>Özellikle mühendislik, tıp, yapay zeka ve veterinerlik bilimleri alanlarında yayımlanan uluslararası hakemli makale atıf sayılarıyla Times Higher Education (THE) ve US News dünya sıralamalarında Türkiye'yi temsil eden global bir bilim merkezidir.</p>
        `
    },
    "tarihce-arastirma": {
        title: "🔬 Araştırma Üniversitesi Misyonu ve Ar-Ge Politikaları",
        text: `
            <p>Yükseköğretim Kurulu (YÖK) tarafından "Araştırma Üniversitesi" vizyonuyla desteklenen Fırat Üniversitesi; yapay zeka tabanlı otonom sistemler, savunma sanayii yazılımları, akıllı tarım teknolojileri ve biyomedikal cihaz tasarımı alanlarında kritik projelere imza atmaktadır.</p>
            <p>Üniversite bünyesindeki ileri teknoloji laboratuvarları, TÜBİTAK, KOSGEB ve AB fonlarından aldıkları milyonlarca liralık hibelerle Türkiye'nin teknolojik bağımsızlığına doğrudan katkı sunmaktadır.</p>
        `
    },
    "tarihce-akreditasyon": {
        title: "🎖️ Kurumsal Akreditasyonlar ve Kalite Güvencesi",
        text: `
            <p>Fırat Üniversitesi, eğitim kalitesini ulusal ve uluslararası bağımsız akreditasyon kuruluşlarının tescilleriyle kanıtlamıştır:</p>
            <ul>
                <li><strong>YÖK Kalite Kurulu (YÖKAK):</strong> Tam kurumsal akreditasyon belgesiyle yönetim ve eğitim kalitesi onaylanmıştır.</li>
                <li><strong>MÜDEK & EUR-ACE:</strong> Mühendislik fakültesindeki programlar uluslararası mühendislik standartlarındadır.</li>
                <li><strong>EAEVE:</strong> Veteriner Fakültesi, Avrupa Veteriner Eğitim Kurumları Birliği tarafından tam akredite edilmiştir.</li>
                <li><strong>TEPDAD:</strong> Tıp Fakültesi ulusal tıp eğitimi standartlarına tam uyumludur.</li>
            </ul>
        `
    },
    "yerleske-rektorluk": {
        title: "🏛️ Rektörlük (Merkez) Kampüsü Mimari Yapısı",
        text: `
            <p>2.500 dönümden fazla yeşil alan üzerine kurulu olan Rektörlük Merkez Kampüsü; modern fakülte binaları, merkezi kafeteryalar, açık spor sahaları ve anıtsal yeşil yürüyüş yollarıyla tam donanımlı bir yaşam merkezidir.</p>
            <p>Şehir merkezine otobüsle sadece 5-10 dakika mesafede bulunması, öğrencilerin sosyal ve kültürel hayattan kopmadan, güvenli ve huzurlu bir kampüs atmosferinde akademik hayat sürdürmesini olanaklı kılmaktadır.</p>
        `
    },
    "yerleske-saglik": {
        title: "🏥 Sağlık Kompleksi ve Araştırma Hastanesi",
        text: `
            <p>1.000 yatak kapasitesini aşan Fırat Üniversitesi Araştırma Hastanesi; Doğu ve Güneydoğu Anadolu bölgesinin en büyük ve en donanımlı üçüncü basamak sağlık üssüdür.</p>
            <p>Tıp, Diş Hekimliği ve Sağlık Bilimleri fakültesi öğrencileri, son teknoloji ürünü ameliyathanelerde, yoğun bakım ünitelerinde ve modern laboratuvarlarda birinci sınıf klinik uygulama eğitimi almaktadır.</p>
        `
    },
    "yerleske-veteriner": {
        title: "🌿 Veteriner Fakültesi Aksı ve Hayvan Hastanesi",
        text: `
            <p>Avrupa standartlarındaki EAEVE akreditasyonuna sahip olan Veteriner Fakültesi kampüsü içerisinde; 7/24 hizmet veren tam donanımlı Hayvan Hastanesi, patolojik araştırma merkezleri ve modern uygulama çiftlikleri bulunmaktadır.</p>
        `
    },
    "yerleske-harput": {
        title: "🏰 Harput & OSB Meslek Yüksekokulu Yerleşkesi",
        text: `
            <p>Elazığ Organize Sanayi Bölgesi (OSB) içerisinde yer alan meslek yüksekokulu kampüsü, öğrencilere teorik bilgiyi doğrudan sanayi tesislerinde uygulama imkânı sunar.</p>
            <p>Sanayi-Üniversite iş birliğinin en somut örneği olan bu yerleşke sayesinde öğrenciler mezun olmadan iş garantili staj ve istihdam olanaklarına kavuşmaktadır.</p>
        `
    },
    "ulasim-otobus": {
        title: "🚌 Belediye Otobüs Hatları ve Güzergâh Detayları",
        text: `
            <p>Elazığ Belediyesi tarafından işletilen 5, 22 ve 60 numaralı hatlar; şehrin en uzak noktalarından doğrudan Fırat Üniversitesi kampüs nizamiyelerine ve fakülte önlerindeki duraklara kadar ring seferleri düzenlemektedir.</p>
            <p>Öğrenciler indirimli Elazığ Kart (BoraKart) sistemini kullanarak tüm toplu taşıma araçlarından en ekonomik tarifeyle faydalanabilmektedir.</p>
        `
    },
    "ulasim-minibus": {
        title: "🚐 Şehir İçi Minibüs ve Dolmuş Ağı",
        text: `
            <p>Şehir merkezinin kalbinden hareket eden "Üniversite" ibareli dolmuşlar, yoğun ders saatlerinde 1-2 dakika aralıklarla kalkmakta ve kampüs içerisindeki Mühendislik B Blok, Kütüphane ve Hastane kavşaklarına kadar girmektedir.</p>
        `
    },
    "ulasim-sehirlerarasi": {
        title: "✈️ Havalimanı ve Şehirlerarası Otogar Ulaşımı",
        text: `
            <p>Elazığ Havalimanı'na inen öğrenciler, belediye servisleri ile doğrudan şehir merkezine geçiş yapabilmektedir. Şehirlerarası otogardan ise kampüse tek vasıta otobüs hatları mevcuttur.</p>
        `
    },
    "ulasim-parkur": {
        title: "🚶 Kampüs İçi Ring Servisleri ve Yürüyüş Parkurları",
        text: `
            <p>Geniş kampüs coğrafyasında öğrencilerin fakülteler arası geçişini kolaylaştırmak amacıyla gün boyu ücretsiz kampüs içi elektrikli ring servisleri hizmet vermektedir. Ayrıca ağaçlandırılmış güvenli yürüyüş yolları mevcuttur.</p>
        `
    },
    "yemek-detay": {
        title: "🍽️ Merkez Yemekhane ve Beslenme Altyapısı",
        text: `
            <p>Merkez Yemekhane kompleksi, gıda mühendisleri ve hijyen denetmenleri gözetiminde günlük kalori hesapları yapılarak hazırlanan öğle ve akşam yemeklerini sunar.</p>
            <p>Yemekler dört çeşit olup, devlet katkılı yüksek sübvansiyon sayesinde son derece ekonomik fiyatlarla öğrencilere ulaştırılmaktadır.</p>
        `
    },
    "yemek-menu": {
        title: "📋 Menü Planlaması ve Besin Değerleri",
        text: `
            <p>Aylık yemek menüleri Fırat Üniversitesi SKS daire başkanlığının resmi web sitesinde önceden yayımlanır. Vejetaryen menü alternatifleri ve salata barları da sistemde yer almaktadır.</p>
        `
    },
    "yemek-saat": {
        title: "⏰ Yemekhane Servis Saatleri",
        text: `
            <p>Öğle servisi 11:30 ile 14:00 saatleri arasında, akşam servisi ise 17:00 ile 19:30 saatleri arasında ana yemekhane binalarında gerçekleştirilir.</p>
        `
    },
    "yasam-kantin": {
        title: "☕ Kampüs İçi Kantinler ve Sosyal Kafeler",
        text: `
            <p>Her fakülte binasının kendi bünyesinde öğrencilerin ders aralarında vakit geçirebileceği, kahve tüketebileceği ve atıştırmalık bulabileceği modern kantinler ile Göl Kafe gibi sosyal dinlenme alanları bulunur.</p>
        `
    },
    "kutuphane-detay": {
        title: "📚 13.500 m² Merkez Kütüphane ve Bilgi Merkezi",
        text: `
            <p>13.500 metrekare kapalı alana sahip Fırat Üniversitesi Merkez Kütüphanesi; binlerce basılı kitap, milyonlarca elektronik makale veritabanı (IEEE, ScienceDirect vb.), bireysel ve grup çalışma salonlarıyla bölgenin en büyük bilgi üssüdür.</p>
        `
    },
    "kutuphane-alan": {
        title: "🏢 Kütüphane Kat Planı ve Çalışma Salonları",
        text: `
            <p>Zemin katta dijital terminal odaları ve grup çalışma masaları yer alırken; üst katlarda mutlak sessizlik kurallarının geçerli olduğu bireysel okuma salonları ve araştırmacı kabinleri bulunmaktadır.</p>
        `
    },
    "kutuphane-sinav": {
        title: "🌙 Sınav Dönemi 7/24 Kesintisiz Hizmet",
        text: `
            <p>Vize ve final sınav dönemlerinde kütüphane aralıksız 7 gün 24 saat açık tutulur. Bu yoğun dönemde sabaha kadar ders çalışan öğrencilere üniversite yönetimi tarafından ücretsiz çay, kahve ve çorba ikramları yapılır.</p>
        `
    },
    "kutuphane-dijital": {
        title: "💻 Elektronik Veritabanı ve Dijital Arşiv",
        text: `
            <p>Kütüphane otomasyon sistemi üzerinden dünyanın dört bir yanındaki uluslararası e-dergilere, tez arşivlerine ve patent veri tabanlarına 7/24 evden erişim sağlanabilmektedir.</p>
        `
    },
    "spor-detay": {
        title: "⚽ Fırat Kültür Park ve Modern Spor Tesisleri",
        text: `
            <p>Fırat Kültür Park içerisinde yer alan FIFA standartlarında suni çim sahalar, kapalı basketbol ve voleybol salonları, tenis kortları ve profesyonel fitness salonları öğrencilerin kullanımına açıktır.</p>
        `
    },
    "kultur-kongre": {
        title: "🎭 Atatürk Kültür ve Kongre Merkezi",
        text: `
            <p>1.000 kişilik dev salonu, akusztik mimarisi ve simültane çeviri altyapısıyla uluslararası sempozyumlara, devlet tiyatrolarına ve büyük konserlere ev sahipliği yapar.</p>
        `
    },
    "kultur-amfi": {
        title: "🏛️ Açık Hava Amfisi ve Bahar Şenlikleri",
        text: `
            <p>Geleneksel bahar şenliklerinin, dev konserlerin ve fakülte mezuniyet törenlerindeki coşkulu kep atma etkinliklerinin merkezi olan açık hava amfisi binlerce kişilik kapasiteye sahiptir.</p>
        `
    },
    "kultur-atolye": {
        title: "🎨 Sanat, Müzik ve Öğrenci Kulübü Atölyeleri",
        text: `
            <p>Müzik kulüpleri için ses yalıtımlı prova odaları, tiyatro toplulukları için sahne sanatları salonları ve resim/heykel atölyeleri öğrencilerin sanatsal üretkenliğini destekler.</p>
        `
    },
    "fırsat-teknokent": {
        title: "🚀 Fırat Teknokent ve Kuluçka Merkezi",
        text: `
            <p>Girişimci öğrencilerin teknoloji tabanlı iş fikirlerini ticari ürünlere dönüştürdüğü Fırat Teknokent; ücretsiz ofis tahsisi, mentörlük desteği ve TÜBİTAK 1512 girişimcilik sermayesi destekleriyle genç girişimcilere köprü olur.</p>
        `
    },
    "teknoloji-laboratuvar": {
        title: "💻 İleri Araştırma ve Mühendislik Laboratuvarları",
        text: `
            <p>Son teknoloji CNC tezgahları, 3D yazıcı parkurları, elektron mikroskopları ve yüksek performanslı sunucu (cluster) sistemleriyle donatılmış Ar-Ge laboratuvarları akademik çalışmalara yön verir.</p>
        `
    },
    "teknoloji-dijital": {
        title: "📡 Dijital Kampüs, eduroam ve OBS Altyapısı",
        text: `
            <p>Üniversitenin tüm açık ve kapalı alanlarında kesintisiz yüksek hızlı global eduroam Wi-Fi ağı mevcuttur. Öğrenci Bilgi Sistemi (OBS) üzerinden ders kayıtları, transkript takibi ve yemekhane kartı dolum işlemleri dijital olarak yürütülür.</p>
        `
    },
    "teknoloji-tto": {
        title: "💡 Teknoloji Transfer Ofisi (FÜ-TTO) ve TEKNOFEST",
        text: `
            <p>FÜ-TTO, öğrencilerin geliştirdiği projelerin patentlenmesi süreçlerini yönetir ve TEKNOFEST yarışmalarına katılan takımlara malzeme/finansman desteği sağlar.</p>
        `
    },
    "fırsat-erasmus": {
        title: "🌍 Erasmus+ ve Uluslararası Değişim Programları",
        text: `
            <p>Fırat Üniversitesi öğrencilerine Avrupa'nın anlaşmalı seçkin üniversitelerinde 1 veya 2 dönem hibeli öğrenim görme ya da uluslararası staj yapma fırsatı sunar.</p>
        `
    },
    "fırsat-mevlana": {
        title: "🤝 Farabi ve Mevlana Değişim Programları",
        text: `
            <p>Farabi programı ile Türkiye içindeki diğer prestijli üniversitelerde bir dönem okuma imkânı sağlanırken, Mevlana programı ile dünyanın dört bir yanındaki partner üniversitelere kapı aralanır.</p>
        `
    },
    "fırsat-burs": {
        title: "🎓 FÜGEM Bursları ve Sosyal Yardımlar",
        text: `
            <p>Fırat Üniversitesi Gençlik Merkezi (FÜGEM) aracılığıyla, maddi imkânı kısıtlı başarılı öğrencilere nakdi burslar, kırtasiye yardımları ve ücretsiz yemek bursu kontenjanları tahsis edilir.</p>
        `
    },
    "saglik-mediko": {
        title: "🩺 Mediko-Sosyal Sağlık Merkezi ve İlk Yardım",
        text: `
            <p>Kampüs içerisinde görev yapan pratisyen hekimler, diş hekimleri ve uzman hemşireler eşliğinde öğrencilere acil ilk yardım ve temel sağlık muayenesi hizmetleri ücretsiz sunulur.</p>
        `
    },
    "saglik-pdr": {
        title: "🧠 Psikolojik Danışmanlık ve Rehberlik (PDR)",
        text: `
            <p>Uzman psikologlar eşliğinde sınav kaygısı, adaptasyon problemleri ve bireysel stres yönetimi konularında %100 gizlilik esasına dayalı profesyonel danışmanlık seansları düzenlenir.</p>
        `
    },
    "saglik-engelsiz": {
        title: "♿ Engelsiz Üniversite ve Yaşam Birimi",
        text: `
            <p>Özel gereksinimli öğrencilerin kampüs yaşamına ve dersliklere tam erişimini sağlamak amacıyla engelli rampaları, sesli yönlendirme sistemleri ve özel sınav materyalleri sağlanır.</p>
        `
    },
    "saglik-kariyer": {
        title: "🎯 Kariyer Planlama ve Mezunlar Merkezi (KARMER)",
        text: `
            <p>Öğrencilerin mezuniyet sonrası iş hayatına hazırlanması için CV hazırlama atölyeleri düzenlenir, CBİKO Ulusal Staj Programı koordinasyonu yürütülür ve kariyer fuarları organize edilir.</p>
        `
    },

    // --- BÖLÜMLER MODALLARI ---
    "dept-yazilim": { title: "💻 Yazılım Mühendisliği (Teknoloji Fakültesi)", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Akreditasyon:</strong> MÜDEK (EUR-ACE)</p><p>Türkiye'deki devlet üniversiteleri arasında en yüksek taban puana sahip köklü yazılım bölümüdür. 1 dönem zorunlu tam zamanlı işyeri eğitimi mevcuttur.</p>" },
    "dept-bilgisayar": { title: "🖥️ Bilgisayar Mühendisliği (Mühendislik Fakültesi)", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Akreditasyon:</strong> MÜDEK (EUR-ACE)</p><p>Gelişmiş donanım, gömülü sistemler, mikroişlemciler ve yazılım laboratuvarlarına sahiptir.</p>" },
    "dept-yapayzeka": { title: "🤖 Yapay Zeka ve Veri Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mühendislik Fakültesi</p><p>Büyük veri analizi, derin öğrenme, makine öğrenmesi ve otonom sistemler üzerine odaklanır.</p>" },
    "dept-elektrik": { title: "⚡ Elektrik-Elektronik Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Akreditasyon:</strong> MÜDEK</p><p>Yüksek gerilim, güç sistemleri, haberleşme ve otomasyon labları.</p>" },
    "dept-makine": { title: "⚙️ Makine Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Akreditasyon:</strong> MÜDEK</p><p>CAD/CAM tasarımı, CNC talaşlı imalat ve termodinamik laboratuvarları.</p>" },
    "dept-insaat": { title: "🏗️ İnşaat Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Lab:</strong> Yapı & Geoteknik</p><p>Sarsma masalı deprem simülasyon test alanı ve geoteknik analiz tesisleri.</p>" },
    "dept-mekatronik": { title: "🤖 Mekatronik Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Teknoloji Fakültesi</p><p>Robotik kollar, PLC otomasyon sistemleri ve 1 dönem fabrika staj eğitimi.</p>" },
    "dept-biyomedikal": { title: "🩺 Biyomedikal Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mühendislik Fakültesi</p><p>Tıbbi cihaz tasarımı, biyosensörler ve protez teknolojileri eğitimi.</p>" },
    "dept-otomotiv": { title: "🚗 Otomotiv Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Teknoloji Fakültesi</p><p>Motor dinamometre labı, elektrikli araç batarya sistemleri ve 1 dönem fabrika stajı.</p>" },
    "dept-endustri": { title: "📐 Endüstri Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mühendislik Fakültesi</p><p>Yöneylem araştırması, Arena/Python ile üretim benzetimi ve tedarik zinciri optimizasyonu.</p>" },
    "dept-kimyamuh": { title: "🧪 Kimya Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mühendislik Fakültesi</p><p>Distilasyon kolonları, polimer sentez tesisleri ve endüstriyel proses tasarımı.</p>" },
    "dept-cevre": { title: "🌱 Çevre Mühendisliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mühendislik Fakültesi</p><p>Atıksu arıtma tesisleri, ÇED raporlama ve sıfır atık sistemleri.</p>" },
    "dept-tip": { title: "🩺 Tıp Fakültesi", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 6 Yıl | <strong>Akreditasyon:</strong> TEPDAD</p><p>Anatomi kadavra salonları, mikroskopi labları ve Araştırma Hastanesi klinik stajları.</p>" },
    "dept-dis": { title: "🦷 Diş Hekimliği Fakültesi", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 5 Yıl | <strong>Pratik:</strong> Diş Hastanesi</p><p>Phantom simülatör labları ve Fakülte Ağız-Diş Hastanesinde canlı hasta tedavileri.</p>" },
    "dept-eczacilik": { title: "💊 Eczacılık Fakültesi", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 5 Yıl | <strong>Lab:</strong> İlaç Sentez</p><p>Klinik eczacılık, sentetik/bitkisel ilaç sentezi ve sanayi stajları.</p>" },
    "dept-veteriner": { title: "🌿 Veteriner Fakültesi", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 5 Yıl | <strong>Akreditasyon:</strong> EAEVE</p><p>7/24 Hayvan Hastanesi, büyükbaş çiftliği ve at binicilik harası.</p>" },
    "dept-hemsirelik": { title: "🩺 Hemşirelik", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Akreditasyon:</strong> HEPDAK</p><p>Simülasyon odaları ve Araştırma Hastanesinde kapsamlı klinik rotasyonlar.</p>" },
    "dept-beslenme": { title: "🥗 Beslenme ve Diyetetik", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Sağlık Bilimleri</p><p>Besin kimyası analiz labı ve toplu beslenme mutfakları eğitimi.</p>" },
    "dept-fizyoterapi": { title: "🤸 Fizyoterapi ve Rehabilitasyon", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Sağlık Bilimleri</p><p>Elektroterapi kineziyoloji labı ve nörolojik/ortopedik rehabilitasyon.</p>" },
    "dept-ebelik": { title: "👶 Ebelik", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Sağlık Bilimleri</p><p>Doğum simülasyon maketleri ve Kadın Doğum Hastanesinde doğumhane stajları.</p>" },
    "dept-saglikyonetimi": { title: "💼 Sağlık Yönetimi", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Sağlık Bilimleri</p><p>Hastane finansı, SGK Medula otomasyonu ve sağlık hukuku eğitimi.</p>" },
    "dept-oyun": { title: "🎮 Dijital Oyun Tasarımı", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İletişim Fakültesi</p><p>Unreal Engine 5, Unity, Blender 3D karakter modelleme ve Teknokent stüdyoları.</p>" },
    "dept-radyo": { title: "📺 Radyo, Televizyon ve Sinema", text: "<p><strong>Puan Türü:</strong> SÖZ | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İletişim Fakültesi</p><p>FÜ TV & Radyo stüdyoları, 4K sinema kameraları ve kurgu atölyeleri.</p>" },
    "dept-gazetecilik": { title: "📰 Gazetecilik", text: "<p><strong>Puan Türü:</strong> SÖZ | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İletişim Fakültesi</p><p>Uygulama gazetesi, dijital haber portalı ve InDesign mizanpaj atölyesi.</p>" },
    "dept-halklailiskiler": { title: "📢 Halkla İlişkiler ve Tanıtım", text: "<p><strong>Puan Türü:</strong> SÖZ | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İletişim Fakültesi</p><p>Kurumsal iletişim ajans atölyesi ve dijital marka yönetimi.</p>" },
    "dept-psikoloji": { title: "🧠 Psikoloji", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İnsani ve Toplum Bilimleri</p><p>Deneysel psikoloji labı, aynalı terapi odaları ve klinik psikoloji eğitimi.</p>" },
    "dept-sosyoloji": { title: "👥 Sosyoloji", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İnsani ve Toplum Bilimleri</p><p>SPSS/NVivo veri analiz labı ve kent sosyolojisi saha araştırmaları.</p>" },
    "dept-ingilizdili": { title: "🇬🇧 İngiliz Dili ve Edebiyatı", text: "<p><strong>Puan Türü:</strong> DİL | <strong>Süre:</strong> 4 Yıl | <strong>Hazırlık:</strong> Var</p><p>Edebi tahlil, çeviribilim ve MEB onaylı pedagojik formasyon olanağı.</p>" },
    "dept-mimar": { title: "🏛️ Mimarlık", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mimarlık Fakültesi</p><p>Çizim stüdyoları, 3D lazer kesim maket labı ve AutoCAD/Revit dijital stüdyolar.</p>" },
    "dept-sehirplanlama": { title: "🗺️ Şehir ve Bölge Planlama", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Mimarlık Fakültesi</p><p>ArcGIS/Netcad Coğrafi Bilgi Sistemleri (CBS) harita labı ve planlama stüdyoları.</p>" },
    "dept-isletme": { title: "📊 İşletme", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İİBF</p><p>Finansal analiz, maliyet muhasebesi, e-ticaret ve pazarlama yönetimi.</p>" },
    "dept-iktisat": { title: "📈 İktisat", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İİBF</p><p>Ekonometri analiz labı (EViews, Stata) ve küresel finans piyasaları.</p>" },
    "dept-kamuyonetimi": { title: "🏛️ Siyaset Bilimi ve Kamu Yönetimi", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> İİBF</p><p>Anayasa/idare hukuku ve Kaymakamlık/Hakimlik sınav uyumlu müfredat.</p>" },
    "dept-ilahiyat": { title: "📖 İlahiyat Fakültesi", text: "<p><strong>Puan Türü:</strong> SÖZ | <strong>Süre:</strong> 4 Yıl | <strong>Hazırlık:</strong> Var</p><p>Zorunlu Arapça hazırlık, Tefsir, Hadis, Fıkıh ve İslam Felsefesi araştırmaları.</p>" },
    "dept-pdr": { title: "🎓 Rehberlik ve Psikolojik Danışmanlık (PDR)", text: "<p><strong>Puan Türü:</strong> EA | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Eğitim Fakültesi</p><p>Aynalı oda psikolojik danışma labı ve MEB okullarında zorunlu staj.</p>" },
    "dept-okuloncesi": { title: "🧸 Okul Öncesi Öğretmenliği", text: "<p><strong>Puan Türü:</strong> SÖZ | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Eğitim Fakültesi</p><p>Çocuk gelişimi materyal atölyesi ve anaokullarında öğretmenlik stajı.</p>" },
    "dept-ingilizceogrt": { title: "🇬🇧 İngilizce Öğretmenliği", text: "<p><strong>Puan Türü:</strong> DİL | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Eğitim Fakültesi</p><p>Mikro öğretim laboratuvarı ve okullarda İngilizce ders anlatım stajı.</p>" },
    "dept-ilkogretimmat": { title: "📐 İlköğretim Matematik Öğretmenliği", text: "<p><strong>Puan Türü:</strong> SAY | <strong>Süre:</strong> 4 Yıl | <strong>Fakülte:</strong> Eğitim Fakültesi</p><p>Somut matematiksel materyal tasarımı labı ve MEB ortaokul stajı.</p>" }
};

// ==========================================
// 3. BÖLÜMLER LİSTESİ VE FİLTRELEME MOTORU
// ==========================================
const departmentsData = [
    { id: "dept-yazilim", title: "Yazılım Mühendisliği", faculty: "Teknoloji Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-bilgisayar", title: "Bilgisayar Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-yapayzeka", title: "Yapay Zeka ve Veri Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-elektrik", title: "Elektrik-Elektronik Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-makine", title: "Makine Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-insaat", title: "İnşaat Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-mekatronik", title: "Mekatronik Mühendisliği", faculty: "Teknoloji Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-biyomedikal", title: "Biyomedikal Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-otomotiv", title: "Otomotiv Mühendisliği", faculty: "Teknoloji Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-endustri", title: "Endüstri Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-kimyamuh", title: "Kimya Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-cevre", title: "Çevre Mühendisliği", faculty: "Mühendislik Fakültesi", category: "Muhendislik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-tip", title: "Tıp Fakültesi", faculty: "Tıp Fakültesi", category: "Saglik", duration: "6 Yıl", scoreType: "SAY" },
    { id: "dept-dis", title: "Diş Hekimliği", faculty: "Diş Hekimliği Fakültesi", category: "Saglik", duration: "5 Yıl", scoreType: "SAY" },
    { id: "dept-eczacilik", title: "Eczacılık", faculty: "Eczacılık Fakültesi", category: "Saglik", duration: "5 Yıl", scoreType: "SAY" },
    { id: "dept-veteriner", title: "Veteriner Hekimliği", faculty: "Veteriner Fakültesi", category: "Saglik", duration: "5 Yıl", scoreType: "SAY" },
    { id: "dept-hemsirelik", title: "Hemşirelik", faculty: "Sağlık Bilimleri Fakültesi", category: "Saglik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-beslenme", title: "Beslenme ve Diyetetik", faculty: "Sağlık Bilimleri Fakültesi", category: "Saglik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-fizyoterapi", title: "Fizyoterapi ve Rehabilitasyon", faculty: "Sağlık Bilimleri Fakültesi", category: "Saglik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-ebelik", title: "Ebelik", faculty: "Sağlık Bilimleri Fakültesi", category: "Saglik", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-saglikyonetimi", title: "Sağlık Yönetimi", faculty: "Sağlık Bilimleri Fakültesi", category: "Saglik", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-oyun", title: "Dijital Oyun Tasarımı", faculty: "İletişim Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-radyo", title: "Radyo, Televizyon ve Sinema", faculty: "İletişim Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SÖZ" },
    { id: "dept-gazetecilik", title: "Gazetecilik", faculty: "İletişim Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SÖZ" },
    { id: "dept-halklailiskiler", title: "Halkla İlişkiler ve Tanıtım", faculty: "İletişim Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SÖZ" },
    { id: "dept-psikoloji", title: "Psikoloji", faculty: "İnsani ve Toplum Bilimleri Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-sosyoloji", title: "Sosyoloji", faculty: "İnsani ve Toplum Bilimleri Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-ingilizdili", title: "İngiliz Dili ve Edebiyatı", faculty: "İnsani ve Toplum Bilimleri Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "DİL" },
    { id: "dept-mimar", title: "Mimarlık", faculty: "Mimarlık Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-sehirplanlama", title: "Şehir ve Bölge Planlama", faculty: "Mimarlık Fakültesi", category: "FenEdebiyat", duration: "4 Yıl", scoreType: "SAY" },
    { id: "dept-isletme", title: "İşletme", faculty: "İktisadi ve İdari Bilimler Fakültesi", category: "Iktisat", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-iktisat", title: "İktisat", faculty: "İktisadi ve İdari Bilimler Fakültesi", category: "Iktisat", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-kamuyonetimi", title: "Siyaset Bilimi ve Kamu Yönetimi", faculty: "İktisadi ve İdari Bilimler Fakültesi", category: "Iktisat", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-ilahiyat", title: "İlahiyat", faculty: "İlahiyat Fakültesi", category: "Iktisat", duration: "4 Yıl", scoreType: "SÖZ" },
    { id: "dept-pdr", title: "Rehberlik ve Psikolojik Danışmanlık", faculty: "Eğitim Fakültesi", category: "Egitim", duration: "4 Yıl", scoreType: "EA" },
    { id: "dept-okuloncesi", title: "Okul Öncesi Öğretmenliği", faculty: "Eğitim Fakültesi", category: "Egitim", duration: "4 Yıl", scoreType: "SÖZ" },
    { id: "dept-ingilizceogrt", title: "İngilizce Öğretmenliği", faculty: "Eğitim Fakültesi", category: "Egitim", duration: "4 Yıl", scoreType: "DİL" },
    { id: "dept-ilkogretimmat", title: "İlköğretim Matematik Öğretmenliği", faculty: "Eğitim Fakültesi", category: "Egitim", duration: "4 Yıl", scoreType: "SAY" }
];

const departmentsGrid = document.getElementById('departmentsGrid');
const deptSearchInput = document.getElementById('deptSearchInput');
const filterChips = document.querySelectorAll('#facultyFilterChips .filter-chip');

let currentCategory = 'all';
let currentSearchTerm = '';

function renderDepartments() {
    if (!departmentsGrid) return;

    const searchTermLower = trLower(currentSearchTerm);

    const filtered = departmentsData.filter(dept => {
        const matchesCategory = currentCategory === 'all' || dept.category === currentCategory;
        const matchesSearch = trLower(dept.title).includes(searchTermLower) ||
                              trLower(dept.faculty).includes(searchTermLower) ||
                              trLower(dept.scoreType).includes(searchTermLower);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        departmentsGrid.innerHTML = `<div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim);">Aramanızla eşleşen bir bölüm bulunamadı.</div>`;
        return;
    }

    departmentsGrid.innerHTML = filtered.map(dept => `
        <div class="dept-card clickable-card" data-modal="${dept.id}">
            <div>
                <div class="dept-card-header">
                    <span class="dept-title">${dept.title}</span>
                    <span class="dept-badge">${dept.scoreType} • ${dept.duration}</span>
                </div>
                <div class="dept-faculty">${dept.faculty}</div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 10px;">✦ Detaylar ve imkânlar için tıklayın</div>
        </div>
    `).join('');
}

if (filterChips) {
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.getAttribute('data-faculty');
            renderDepartments();
        });
    });
}

if (deptSearchInput) {
    deptSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim();
        renderDepartments();
    });
}

// ==========================================
// 4. MODAL AÇMA / KAPATMA KONTROL MERKEZİ
// ==========================================
function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalText) modalText.innerHTML = data.text;
    if (modalOverlay) modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    const modalTrigger = e.target.closest('[data-modal]');
    if (modalTrigger) {
        const key = modalTrigger.getAttribute('data-modal');
        if (key) {
            e.stopPropagation();
            openModal(key);
        }
    }

    if (e.target.id === 'modalClose' || e.target.classList.contains('modal-close')) {
        closeModal();
    }

    if (e.target.id === 'modalOverlay') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

renderDepartments();

// ==========================================
// 5. URL HASH İLE DOĞRUDAN MODAL AÇMA
// (Örn: index.html'deki "Mezunlar & Kariyer" kartı artık
// kampus.html#saglik-kariyer adresine yönlendiriyor; sayfa
// açılır açılmaz o modal otomatik gösterilir.)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const hashKey = window.location.hash.replace('#', '');
    if (hashKey && modalData[hashKey]) {
        openModal(hashKey);
    }
});