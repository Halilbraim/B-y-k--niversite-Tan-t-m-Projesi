// ==========================================
// FIRAT ÜNİVERSİTESİ PORTALI - MEGA SCRIPT
// ==========================================


// ==========================================
// 1. REVEAL ANİMASYONLARI
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
// 2. TÜRKÇE UYUMLU ARAMA
// ==========================================

function trLower(str) {
    return str.toLocaleLowerCase('tr-TR');
}


// ==========================================
// 3. MODAL VERİLERİ
// ==========================================

const modalData = {


    // ==========================================
    // YURTLAR
    // ==========================================

    "yurt-kyk-ahmet-kabakli": {

        title: "🏢 Ahmet Kabaklı Erkek KYK Yurdu - Eksiksiz Barınma ve Yaşam Kılavuzu",

        text: `
            <p>
                <strong>Genel Konum ve Ulaşım:</strong>
                Ahmet Kabaklı Erkek Öğrenci Yurdu, öğrencilerin üniversite
                yaşamına kolay şekilde devam edebilmesi açısından kampüs ve
                şehir ulaşım bağlantıları değerlendirilebilecek yurt
                seçeneklerinden biridir. Yurt seçerken yalnızca kampüse
                uzaklığa değil, ders saatlerine, günlük ulaşım süresine ve
                çevredeki temel ihtiyaç noktalarına da dikkat edilmelidir.
            </p>

            <p>
                <strong>Oda ve Yaşam Alanları:</strong>
                KYK yurtlarında öğrencilerin barınma ihtiyacının yanında
                ders çalışma ve günlük yaşam ihtiyaçlarını karşılayabilecek
                ortak alanlar da bulunur. Oda düzeni, çalışma masaları,
                dolaplar, ortak kullanım alanları ve internet gibi imkânlar
                öğrencinin günlük rutinini doğrudan etkileyebilir.
            </p>

            <p>
                <strong>Çalışma ve Sosyal Alanlar:</strong>
                Özellikle sınav dönemlerinde öğrenciler için etüt alanları
                önemli hale gelir. Ortak çalışma salonları, yemekhane,
                kantin, çamaşırhane ve sosyal alanlar öğrencilerin kampüs
                dışında da düzenli bir yaşam oluşturmasına yardımcı olur.
            </p>

            <p>
                <strong>Güvenlik ve Düzen:</strong>
                Yurtlarda giriş-çıkış kontrolleri, güvenlik uygulamaları,
                temizlik ve ortak yaşam kuralları öğrencilerin günlük
                düzeninin önemli parçalarıdır. Güncel uygulamalar için
                öğrencilerin ilgili yurt yönetiminin duyurularını takip
                etmesi gerekir.
            </p>
        `
    },


    "yurt-kyk-harput": {

        title: "🏢 Harput Erkek KYK Yurdu - Kurumsal İnceleme ve Yaşam Şartları",

        text: `
            <p>
                <strong>Konum:</strong>
                Harput Erkek KYK Yurdu, öğrencilerin barınma ihtiyaçlarını
                karşılamak amacıyla kullanılan seçeneklerden biridir.
                Yurt tercihinde bulunurken kampüse ulaşım süresi kadar
                şehir merkezine bağlantı, market ve günlük ihtiyaç noktaları
                gibi faktörlerin de değerlendirilmesi yararlı olur.
            </p>

            <p>
                <strong>Günlük Yaşam:</strong>
                Yurt ortamında öğrenciler ders çalışma, dinlenme ve sosyal
                ihtiyaçlarını ortak alanlar üzerinden sürdürebilir.
                Kantin, etüt alanları, çamaşırhane ve internet gibi
                hizmetlerin güncel durumu dönemsel olarak değişebileceği
                için resmi yurt duyurularının takip edilmesi önemlidir.
            </p>

            <p>
                <strong>Üniversiteye Uyum:</strong>
                İlk defa şehir dışında üniversite okuyacak öğrenciler için
                yurt ortamı yeni arkadaşlıklar kurmak ve üniversite
                hayatına adapte olmak açısından da önemli olabilir.
                Özellikle ilk haftalarda yurt yönetiminin duyuruları ve
                kuralları dikkatle takip edilmelidir.
            </p>
        `
    },


    "yurt-kyk-fethi-sekin": {

        title: "🏢 Fethi Sekin Kız KYK Yurdu - Kapsamlı Barınma Rehberi",

        text: `
            <p>
                <strong>Konum ve Ulaşım:</strong>
                Fethi Sekin Kız KYK Yurdu, üniversite öğrencilerinin
                barınma ihtiyacını karşılayan yurt seçeneklerinden biridir.
                Yurt tercihinde kampüse ulaşım süresi, dersliklere erişim,
                toplu taşıma bağlantıları ve günlük ihtiyaçlara yakınlık
                birlikte değerlendirilmelidir.
            </p>

            <p>
                <strong>Oda Düzeni:</strong>
                Öğrenciler için yatak, çalışma alanı, dolap ve ortak kullanım
                alanları günlük yaşamın temel parçalarını oluşturur.
                Oda arkadaşlarıyla uyumlu bir çalışma ve dinlenme düzeni
                oluşturmak özellikle yoğun ders dönemlerinde önem kazanır.
            </p>

            <p>
                <strong>Sosyal ve Akademik Yaşam:</strong>
                Etüt alanları, ortak salonlar ve sosyal faaliyetler,
                öğrencilerin ders dışındaki zamanlarını değerlendirmesine
                yardımcı olabilir. Yeni öğrenciler için yurt ortamı aynı
                zamanda arkadaşlıklar kurmak açısından da faydalı olabilir.
            </p>
        `
    },


    "yurt-kyk-omer-bilginoglu": {

        title: "🏢 Ömer Bilginoğlu Kız KYK Yurdu - Detaylı İnceleme",

        text: `
            <p>
                <strong>Konum ve Günlük Hayat:</strong>
                Ömer Bilginoğlu Kız Öğrenci Yurdu, üniversite öğrencilerinin
                barınma ve günlük yaşam ihtiyaçlarını karşılamaya yönelik
                seçeneklerden biridir. Yurt seçerken fakülteye ulaşım,
                çalışma ortamı ve sosyal imkânlar birlikte değerlendirilmelidir.
            </p>

            <p>
                <strong>Çalışma Alanları:</strong>
                Öğrenciler açısından düzenli ders çalışma alanlarının
                bulunması özellikle sınav dönemlerinde önemlidir. Kişisel
                çalışma alışkanlığına uygun sessiz alanlar oluşturmak,
                akademik yoğunluğu yönetmeyi kolaylaştırabilir.
            </p>

            <p>
                <strong>Güvenlik ve Ortak Yaşam:</strong>
                Yurtlarda giriş-çıkış kuralları, ortak kullanım alanları,
                temizlik ve yönetmeliklere uyum günlük yaşamın temel
                parçalarıdır. Güncel kurallar ve hizmetler için yurt
                yönetiminin resmi duyuruları takip edilmelidir.
            </p>
        `
    },


    "yurt-kyk-sare-ana": {

        title: "🏢 Sare Ana Kız KYK Yurdu - Sağlık Kampüsü Yanı Barınma",

        text: `
            <p>
                <strong>Konum:</strong>
                Sare Ana Kız KYK Yurdu, sağlık alanlarında eğitim gören
                öğrenciler açısından ulaşım süresinin planlanması bakımından
                değerlendirilebilecek bir barınma seçeneğidir. Özellikle
                derslik, uygulama alanı ve ulaşım noktalarının birbirine
                uzaklığı günlük program açısından önem taşıyabilir.
            </p>

            <p>
                <strong>Çalışma ve Dinlenme:</strong>
                Yoğun ders programına sahip öğrenciler için yurt içerisindeki
                çalışma alanları ve dinlenme düzeni önemli hale gelir.
                Öğrencinin kendi çalışma programını oluşturması ve ortak
                alanları verimli kullanması akademik dönem boyunca faydalı
                olabilir.
            </p>
        `
    },


    "yurt-kyk-elazig-kiz": {

        title: "🏢 Elazığ Kız KYK Yurdu - Kurumsal Tanıtım",

        text: `
            <p>
                <strong>Genel Bakış:</strong>
                Elazığ'daki kız öğrenci yurtları arasında tercih yaparken
                kampüse ulaşım, şehir merkezine erişim, oda düzeni ve
                günlük yaşam ihtiyaçlarının karşılanabilmesi gibi kriterler
                dikkate alınabilir.
            </p>

            <p>
                <strong>Sosyal Yaşam:</strong>
                Yurtlarda bulunan ortak alanlar öğrencilerin ders dışında
                vakit geçirmesine ve yeni arkadaşlıklar kurmasına yardımcı
                olabilir. Kültürel ve sosyal faaliyetlerin güncel durumu
                yurt yönetiminin duyurularından takip edilmelidir.
            </p>
        `
    },


    "yurt-kyk-firat": {

        title: "🏢 Fırat KYK Yurdu - Kampüs İçi Konaklama",

        text: `
            <p>
                <strong>Kampüse Yakınlık:</strong>
                Kampüse yakın bir yurtta kalmak, öğrencinin günlük ulaşım
                süresini azaltarak derslere ve kampüs içerisindeki
                etkinliklere daha kolay katılmasına yardımcı olabilir.
                Özellikle sabah dersleri olan öğrenciler için ulaşım
                planlaması önemli bir avantaj sağlayabilir.
            </p>

            <p>
                <strong>Günlük İmkânlar:</strong>
                Kütüphane, yemekhane, fakülteler ve sosyal alanlara erişim
                süresinin kısa olması öğrencinin gün içerisindeki zamanını
                daha verimli planlamasına yardımcı olabilir.
            </p>
        `
    },


    "yurt-ozel-yurtlar": {

        title: "🏠 Üniversite Mahallesi Özel Yurtlar ve Yaşam Rehberi",

        text: `
            <p>
                <strong>Konum ve Alternatifler:</strong>
                Üniversite çevresindeki özel yurtlar, devlet yurtlarına
                alternatif olarak öğrencilerin değerlendirebileceği
                seçenekler arasında yer alır. Özel yurt seçerken yalnızca
                oda fiyatına değil; yemek, internet, temizlik, ulaşım ve
                sözleşme şartlarına da dikkat edilmelidir.
            </p>

            <p>
                <strong>Oda Seçenekleri:</strong>
                Özel yurtlarda tek, iki veya daha fazla kişilik oda
                seçenekleri bulunabilir. Oda büyüklüğü, çalışma masası,
                dolap kapasitesi ve ortak alanların kullanım koşulları
                öğrencinin günlük konforunu etkileyebilir.
            </p>

            <p>
                <strong>Karar Vermeden Önce:</strong>
                Yurdu yerinde görmek, sözleşme şartlarını okumak ve
                hizmetlerin fiyata dahil olup olmadığını netleştirmek
                sağlıklı bir tercih yapılmasına yardımcı olur.
            </p>
        `
    },


    "yurt-ozel-apartlar": {

        title: "🛋️ 1+0 & 1+1 Öğrenci Apartları ve Bağımsız Yaşam",

        text: `
            <p>
                <strong>Bağımsız Yaşam:</strong>
                Apartlar, daha bağımsız bir yaşam düzeni kurmak isteyen
                öğrenciler için değerlendirilebilecek seçeneklerdir.
                Öğrenci kendi yemek, çalışma ve dinlenme düzenini daha
                esnek şekilde planlayabilir.
            </p>

            <p>
                <strong>Maliyet:</strong>
                Apart tercihinde kira dışında elektrik, su, internet,
                aidat ve diğer giderlerin toplam maliyete etkisi
                hesaplanmalıdır. Eşyalı veya eşyasız seçenekler arasında
                başlangıç maliyetleri de farklı olabilir.
            </p>

            <p>
                <strong>Kontrat:</strong>
                Ev veya apart kiralarken sözleşmedeki depozito,
                ödeme tarihi, aidat ve çıkış şartları dikkatlice
                incelenmelidir.
            </p>
        `
    },


    "yurt-ev-kiralama": {

        title: "🔑 Kiralık Öğrenci Evleri ve Semt Analiz Rehberi",

        text: `
            <p>
                <strong>Öğrenci Evi Seçimi:</strong>
                Kiralık ev ararken kampüse uzaklık, toplu taşıma,
                marketler, güvenli ve aydınlık ulaşım güzergâhları ile
                evin fiziksel durumu birlikte değerlendirilmelidir.
            </p>

            <p>
                <strong>Ev Arkadaşları:</strong>
                Birlikte yaşanacak kişilerle kira paylaşımı, temizlik,
                faturalar, ortak kullanım alanları ve ev kuralları
                konusunda önceden anlaşmak ileride oluşabilecek
                sorunların azalmasına yardımcı olabilir.
            </p>

            <p>
                <strong>Kontrat ve Giderler:</strong>
                Kira bedeline ek olarak depozito, aidat, faturalar ve
                taşınma masrafları da hesaba katılmalıdır.
            </p>
        `
    },


    "yurt-basvuru-sureci": {

        title: "📝 KYK Başvuru Süreci ve e-Devlet Rehberi",

        text: `
            <p>
                KYK yurt başvuruları, ilgili dönemde Gençlik ve Spor
                Bakanlığı tarafından açıklanan takvim doğrultusunda
                e-Devlet üzerinden gerçekleştirilir. Başvuru tarihleri
                her yıl değişebileceğinden güncel duyurular takip edilmelidir.
            </p>

            <p>
                Başvuru sırasında öğrencinin ve ailesinin durumuna ilişkin
                istenen bilgilerin doğru ve eksiksiz girilmesi önemlidir.
                Başvuru tamamlandıktan sonra sonuç ve yerleştirme
                duyuruları yine resmi kanallardan takip edilmelidir.
            </p>
        `
    },


    "yurt-imkanlar-beslenme": {

        title: "🍲 KYK Yemekhane ve Günlük Beslenme Sistemi",

        text: `
            <p>
                KYK yurtlarında öğrencilerin günlük yaşamını kolaylaştırmak
                amacıyla yemekhane ve beslenme hizmetleri sunulabilir.
                Kahvaltı ve akşam yemeği uygulamaları ile ilgili güncel
                saatler ve destek miktarları dönemsel olarak değişebilir.
            </p>

            <p>
                Bu nedenle öğrencilerin yurt yönetiminin güncel yemek
                programını ve GSB tarafından açıklanan uygulamaları
                takip etmesi en doğru bilgiye ulaşmasını sağlar.
            </p>
        `
    },


    // ==========================================
    // KAMPÜS
    // ==========================================

    "tarihce-kokler": {

        title: "📜 Kökler, İsim Kökeni ve Kurumsal Hafıza",

        text: `
            <p>
                Fırat Üniversitesi'nin tarihsel gelişimi, Elazığ ve
                çevresindeki yükseköğretim ihtiyacının karşılanması
                sürecinin önemli parçalarından biridir. Üniversitenin
                geçmişi, bölgenin akademik, bilimsel ve sosyal gelişimiyle
                birlikte şekillenmiştir.
            </p>

            <p>
                Kurumun ismi, bölgenin coğrafi ve kültürel açıdan önemli
                unsurlarından biri olan Fırat Nehri'nden gelmektedir.
                Üniversite yıllar içerisinde farklı fakülteler, yüksekokullar,
                araştırma birimleri ve uygulama merkezleriyle büyüyerek
                geniş bir akademik yapıya ulaşmıştır.
            </p>

            <p>
                Bu tarihsel birikim, bugün üniversitede eğitim gören
                öğrencilerin yalnızca akademik bir kurumda değil, uzun
                yıllara yayılan bir üniversite kültürünün içerisinde
                eğitim almasını sağlar.
            </p>
        `
    },


    "tarihce-basari": {

        title: "🏆 Akademik Dereceler, URAP ve Sıralamalar",

        text: `
            <p>
                Üniversitelerin akademik performansını değerlendiren
                sıralama sistemlerinde yayın sayısı, atıf performansı,
                akademik üretkenlik ve benzeri çeşitli göstergeler
                kullanılabilir. Fırat Üniversitesi de farklı sıralama
                ve değerlendirme sistemlerinde yer alan üniversitelerden
                biridir.
            </p>

            <p>
                Özellikle mühendislik, sağlık bilimleri, veterinerlik,
                teknoloji ve araştırma alanlarındaki akademik çalışmalar
                üniversitenin bilimsel görünürlüğünün önemli parçalarını
                oluşturur.
            </p>

            <p>
                Sıralamalar yıllara göre değişebildiğinden öğrencilerin
                güncel sıralama sonuçlarını ilgili kuruluşların ve
                üniversitenin resmi kaynaklarından kontrol etmesi gerekir.
            </p>
        `
    },


    "tarihce-arastirma": {

        title: "🔬 Araştırma Üniversitesi Misyonu ve Ar-Ge",

        text: `
            <p>
                Araştırma odaklı üniversitelerde lisans eğitiminin yanında
                bilimsel araştırma, proje geliştirme ve akademik üretim
                önemli bir yer tutar. Fırat Üniversitesi bünyesinde de
                farklı disiplinlerde araştırma ve geliştirme çalışmaları
                yürütülmektedir.
            </p>

            <p>
                Mühendislik, sağlık, teknoloji, yapay zeka, enerji,
                biyomedikal çalışmalar ve farklı bilim alanlarında
                yürütülen projeler öğrencilerin akademik araştırma
                kültürüyle tanışmasına fırsat oluşturabilir.
            </p>

            <p>
                Öğrenciler ilerleyen yıllarda araştırma projelerine,
                laboratuvar çalışmalarına ve akademik etkinliklere
                katılarak derslerde öğrendikleri bilgileri uygulamalı
                biçimde geliştirebilir.
            </p>
        `
    },


    "tarihce-akreditasyon": {

        title: "🎖️ Kurumsal Akreditasyonlar ve Kalite Güvencesi",

        text: `
            <p>
                Akreditasyon, yükseköğretim programlarının belirli eğitim
                ve kalite standartlarını karşılayıp karşılamadığının
                değerlendirilmesi açısından önemlidir. Üniversitelerde
                program bazında farklı akreditasyon süreçleri bulunabilir.
            </p>

            <p>
                Mühendislik, sağlık ve diğer alanlardaki programların
                akreditasyon durumları dönem içerisinde değişebileceğinden
                öğrencilerin kendi bölümlerine ilişkin güncel bilgileri
                resmi bölüm ve üniversite sayfalarından kontrol etmesi
                gerekir.
            </p>

            <ul>
                <li><strong>Program Kalitesi:</strong> Eğitim çıktılarının belirli standartlara göre değerlendirilmesine yardımcı olur.</li>
                <li><strong>Öğrenci Deneyimi:</strong> Ders planları ve eğitim süreçlerinin düzenli biçimde gözden geçirilmesini destekler.</li>
                <li><strong>Sürekli İyileştirme:</strong> Üniversitelerin eğitim kalitesini geliştirmesine katkı sağlar.</li>
            </ul>
        `
    },


    "yerleske-rektorluk": {

        title: "🏛️ Rektörlük ve Merkez Kampüs",

        text: `
            <p>
                Merkez kampüs, öğrencilerin eğitim faaliyetlerinin yanında
                sosyal, kültürel ve günlük ihtiyaçlarını da karşılayabildiği
                geniş bir üniversite yaşam alanıdır. Fakülte binaları,
                idari birimler, sosyal alanlar ve çeşitli öğrenci hizmetleri
                kampüs yaşamının farklı parçalarını oluşturur.
            </p>

            <p>
                Merkez kampüste öğrenciler ders aralarında farklı fakülte
                ve sosyal alanlara yürüyerek ulaşabilir. Kampüs içerisinde
                zaman yönetimi açısından dersliklerin konumunu dönem başında
                öğrenmek özellikle yeni öğrenciler için faydalıdır.
            </p>
        `
    },


    "yerleske-saglik": {

        title: "🏥 Sağlık Kompleksi ve Araştırma Hastanesi",

        text: `
            <p>
                Sağlık alanındaki eğitimlerde teorik derslerin yanında
                uygulamalı eğitim ve klinik gözlem önemli bir yere sahiptir.
                Üniversitenin sağlıkla ilgili akademik birimleri ve hastane
                altyapısı bu eğitim sürecinin farklı aşamalarında kullanılabilir.
            </p>

            <p>
                Tıp, diş hekimliği, sağlık bilimleri ve ilgili programlarda
                öğrenciler eğitim seviyelerine uygun olarak laboratuvar,
                uygulama ve klinik süreçlerle karşılaşabilir. Bu yapı,
                öğrencilerin teorik bilgileri gerçek uygulamalarla
                ilişkilendirmesine yardımcı olur.
            </p>
        `
    },


    "yerleske-veteriner": {

        title: "🌿 Veteriner Fakültesi ve Hayvan Hastanesi",

        text: `
            <p>
                Veterinerlik eğitiminde öğrencilerin teorik derslerin
                yanında hayvan sağlığı, klinik uygulamalar, laboratuvar
                çalışmaları ve saha deneyimleri kazanması önemlidir.
                Veteriner Fakültesi bünyesindeki uygulama alanları bu
                eğitim sürecinin önemli parçalarını oluşturabilir.
            </p>

            <p>
                Öğrenciler eğitim seviyelerine göre farklı hayvan türleri,
                hastalıklar, teşhis yöntemleri ve tedavi süreçleri hakkında
                uygulamalı deneyim kazanabilir. Güncel uygulama alanları
                ve hizmetler fakültenin resmi duyurularından takip edilmelidir.
            </p>
        `
    },


    "yerleske-harput": {

        title: "🏰 Harput & OSB Meslek Yüksekokulu Yerleşkesi",

        text: `
            <p>
                Meslek yüksekokullarında uygulamalı eğitim, öğrencilerin
                mesleki becerilerini geliştirmesinde önemli bir yere sahiptir.
                OSB ve sanayi çevresine yakın eğitim ortamları, öğrencilerin
                üretim süreçlerini ve sektör ihtiyaçlarını daha yakından
                tanımasına yardımcı olabilir.
            </p>

            <p>
                Öğrencilerin staj, işyeri eğitimi ve sektör bağlantıları
                konusunda kendi programlarının güncel duyurularını takip
                etmesi önemlidir. Uygulamalı eğitim süreci bölümlere göre
                farklılık gösterebilir.
            </p>
        `
    },


    // ==========================================
    // ULAŞIM
    // ==========================================

    "ulasim-otobus": {

        title: "🚌 Belediye Otobüs Hatları",

        text: `
            <p>
                Elazığ şehir içi toplu taşıma sistemi, öğrencilerin
                kampüs ile şehir merkezi arasında ulaşım sağlamasında
                önemli bir alternatiftir. Belediye otobüslerinin
                güzergâhları ve sefer sıklıkları dönemsel olarak
                değişebileceği için güncel ulaşım bilgileri kontrol
                edilmelidir.
            </p>

            <p>
                Öğrenciler ulaşım kartı, indirimli öğrenci tarifesi,
                durak bilgileri ve güncel sefer saatlerini ilgili
                ulaşım kanallarından takip ederek günlük ders programlarını
                daha kolay planlayabilir.
            </p>
        `
    },


    "ulasim-minibus": {

        title: "🚐 Şehir İçi Minibüs ve Dolmuş Ağı",

        text: `
            <p>
                Minibüs ve dolmuşlar, öğrencilerin şehir içerisinde
                kullanabileceği alternatif ulaşım araçları arasında
                yer alır. Özellikle kampüs çevresindeki yoğun saatlerde
                öğrenciler için farklı güzergâh seçenekleri sunabilir.
            </p>

            <p>
                Sefer aralıkları ve güzergâhlar zaman içerisinde değişebileceği
                için öğrencilerin güncel durak ve güzergâh bilgilerini
                kontrol etmesi önerilir. Ders başlangıç saatlerinde
                ulaşım yoğunluğunu hesaba katmak zaman kaybını azaltabilir.
            </p>
        `
    },


    "ulasim-sehirlerarasi": {

        title: "✈️ Havalimanı ve Şehirlerarası Otogar Ulaşımı",

        text: `
            <p>
                Elazığ'a şehir dışından gelen öğrenciler için havalimanı
                ve otogar bağlantıları özellikle üniversiteye ilk geliş
                döneminde önemlidir. Öğrencinin ulaşım planını önceden
                yapması, özellikle kayıt ve yurt yerleşimi dönemlerinde
                zaman yönetimini kolaylaştırabilir.
            </p>

            <p>
                Havalimanı, otogar ve şehir merkezi arasındaki güncel
                ulaşım seçenekleri dönemsel olarak değişebilir. Bu nedenle
                seyahat öncesinde ilgili ulaşım firmalarının veya resmi
                ulaşım kaynaklarının güncel bilgileri kontrol edilmelidir.
            </p>
        `
    },


    "ulasim-parkur": {

        title: "🚶 Kampüs İçi Ring ve Yürüyüş Alanları",

        text: `
            <p>
                Geniş kampüslerde öğrencilerin fakülteler, kütüphane,
                yemekhane ve sosyal alanlar arasında hareket etmesi
                günlük üniversite hayatının önemli bir parçasıdır.
                Yürüyüş yolları ve varsa kampüs içi servis seçenekleri
                bu ulaşımı kolaylaştırabilir.
            </p>

            <p>
                Özellikle ilk haftalarda kampüs haritasını incelemek,
                dersliklerin konumunu öğrenmek ve dersler arasında
                ne kadar süre gerektiğini hesaplamak yeni öğrencilerin
                kampüse daha hızlı adapte olmasına yardımcı olabilir.
            </p>
        `
    },


    // ==========================================
    // BESLENME
    // ==========================================

    "yemek-detay": {

        title: "🍽️ Merkez Yemekhane ve Beslenme Altyapısı",

        text: `
            <p>
                Üniversite yemekhaneleri, öğrencilerin kampüs içerisinde
                uygun maliyetli öğün seçeneklerine ulaşabilmesi açısından
                önemli hizmet alanlarından biridir. Menülerin içeriği,
                servis saatleri ve ücretler dönemsel olarak değişebilir.
            </p>

            <p>
                Öğrencilerin yemek hizmetlerinden yararlanırken güncel
                menüyü ve üniversitenin ilgili birimleri tarafından
                açıklanan uygulamaları takip etmesi gerekir. Yoğun ders
                programı olan öğrenciler için yemek saatlerini önceden
                planlamak günlük zaman yönetimini kolaylaştırabilir.
            </p>
        `
    },


    "yemek-menu": {

        title: "📋 Menü Planlaması ve Besin İçeriği",

        text: `
            <p>
                Üniversite yemek menülerinde farklı besin gruplarının
                dengeli şekilde sunulması öğrencilerin günlük beslenme
                düzeni açısından önemlidir. Menülerin içeriği ve sunulan
                seçenekler ilgili birimler tarafından dönemsel olarak
                belirlenebilir.
            </p>

            <p>
                Öğrencilerin özel beslenme ihtiyacı veya alerjisi varsa
                ilgili yemek hizmeti birimlerinden güncel bilgi alması
                en doğru yaklaşım olacaktır.
            </p>
        `
    },


    "yemek-saat": {

        title: "⏰ Yemekhane Servis Saatleri",

        text: `
            <p>
                Yemekhanelerin öğle ve akşam servis saatleri öğrencilerin
                ders programına göre günlük planlama yapmasını sağlar.
                Ancak servis saatleri akademik dönem, tatil günleri ve
                resmi programlara göre değişebilir.
            </p>

            <p>
                Bu nedenle öğrencilerin özellikle ilk hafta ve sınav
                dönemlerinde güncel yemek servisi duyurularını takip
                etmesi faydalıdır.
            </p>
        `
    },


    "yasam-kantin": {

        title: "☕ Kampüs İçi Kantinler ve Sosyal Kafeler",

        text: `
            <p>
                Kantin ve kafeler, öğrencilerin ders aralarında kısa
                süreli dinlenebildiği ve arkadaşlarıyla vakit geçirebildiği
                sosyal alanlardır. Kahve, içecek, atıştırmalık ve günlük
                ihtiyaçlara yönelik farklı ürünler bulunabilir.
            </p>

            <p>
                Öğrenciler bu alanları yalnızca yemek için değil,
                ders aralarında sosyalleşmek ve arkadaşlarıyla çalışma
                planları yapmak için de kullanabilir. Fiyatlar ve çalışma
                saatleri işletmeye göre değişebileceğinden güncel bilgi
                yerinde kontrol edilmelidir.
            </p>
        `
    },


    // ==========================================
    // KÜTÜPHANE
    // ==========================================

    "kutuphane-detay": {

        title: "📚 Merkez Kütüphane ve Bilgi Merkezi",

        text: `
            <p>
                Üniversite kütüphanesi, öğrencilerin ders kitaplarının
                yanında akademik makalelere, elektronik kaynaklara,
                tezlere ve farklı araştırma materyallerine ulaşabileceği
                önemli bir çalışma alanıdır.
            </p>

            <p>
                Özellikle mühendislik ve bilgisayar gibi araştırma yoğun
                bölümlerde öğrencilerin kütüphane veri tabanlarını
                kullanmayı erken öğrenmesi büyük fayda sağlayabilir.
                Akademik kaynak tarama becerisi ilerleyen sınıflarda
                proje ve bitirme çalışmaları açısından da önem kazanır.
            </p>
        `
    },


    "kutuphane-alan": {

        title: "🏢 Kütüphane Çalışma Alanları",

        text: `
            <p>
                Kütüphanelerde bireysel çalışma masaları, grup çalışma
                alanları ve farklı sessizlik seviyelerine sahip bölümler
                bulunabilir. Öğrenci kendi çalışma alışkanlığına uygun
                alanı seçerek ders çalışma verimini artırabilir.
            </p>

            <p>
                Grup projelerinde birlikte çalışmak isteyen öğrenciler
                için grup çalışma alanları faydalı olabilirken,
                sınav dönemlerinde bireysel ve sessiz çalışma alanları
                daha fazla tercih edilebilir.
            </p>
        `
    },


    "kutuphane-sinav": {

        title: "🌙 Sınav Dönemi Çalışma Düzeni",

        text: `
            <p>
                Vize ve final dönemlerinde kütüphanelerin kullanım
                yoğunluğu artabilir. Öğrencilerin sınav dönemine
                kalmadan düzenli çalışma alışkanlığı oluşturması,
                son haftalarda oluşabilecek yoğunluğu azaltabilir.
            </p>

            <p>
                Kütüphanenin özel çalışma saatleri veya sınav dönemindeki
                uygulamaları değişebileceğinden güncel duyuruların
                takip edilmesi gerekir. Uzun süreli çalışma sırasında
                düzenli mola vermek de çalışma verimliliği açısından
                önemlidir.
            </p>
        `
    },


    "kutuphane-dijital": {

        title: "💻 Elektronik Veritabanı ve Dijital Arşiv",

        text: `
            <p>
                Elektronik veri tabanları öğrencilerin akademik makale,
                tez, kitap ve araştırma materyallerine çevrim içi
                erişmesine yardımcı olabilir. Üniversitenin aboneliği
                bulunan kaynaklar öğrencilere önemli bir araştırma
                avantajı sağlayabilir.
            </p>

            <p>
                Özellikle proje hazırlarken yalnızca genel internet
                aramalarına bağlı kalmak yerine akademik veri tabanlarını
                kullanmak kaynakların güvenilirliğini değerlendirmeyi
                kolaylaştırır.
            </p>
        `
    },


    // ==========================================
    // SOSYAL YAŞAM
    // ==========================================

    "spor-detay": {

        title: "⚽ Kültür Park ve Spor Tesisleri",

        text: `
            <p>
                Üniversite yaşamında spor faaliyetleri öğrencilerin
                ders dışındaki zamanlarını değerlendirmesine yardımcı
                olabilir. Kampüs içerisinde bulunan spor alanları,
                öğrencilerin farklı fiziksel aktivitelere katılmasına
                imkân sağlayabilir.
            </p>

            <p>
                Futbol, basketbol, voleybol, yürüyüş ve benzeri
                etkinlikler öğrencilerin sosyal çevre oluşturmasına
                da katkıda bulunabilir. Kullanım saatleri ve rezervasyon
                şartları tesislere göre değişebileceği için güncel
                bilgilerin kontrol edilmesi gerekir.
            </p>
        `
    },


    "kultur-kongre": {

        title: "🎭 Atatürk Kültür ve Kongre Merkezi",

        text: `
            <p>
                Kültür ve kongre merkezleri üniversitenin akademik
                toplantılarının yanında konferans, söyleşi, sempozyum,
                tiyatro ve çeşitli kültürel etkinliklerin düzenlenmesine
                olanak sağlayabilir.
            </p>

            <p>
                Öğrencilerin bu etkinlikleri takip etmesi, kendi
                bölümleri dışında farklı alanlardan insanlarla
                tanışmasına ve akademik bakış açılarını genişletmesine
                yardımcı olabilir.
            </p>
        `
    },


    "kultur-amfi": {

        title: "🏛️ Açık Hava Amfisi ve Bahar Etkinlikleri",

        text: `
            <p>
                Açık hava alanları üniversite içerisindeki sosyal
                etkinliklerin daha geniş öğrenci gruplarına ulaşmasını
                sağlayabilir. Bahar dönemlerinde çeşitli öğrenci
                organizasyonları, gösteriler ve sosyal etkinlikler
                düzenlenebilir.
            </p>

            <p>
                Etkinlik tarihleri ve programları her yıl değişebileceği
                için öğrencilerin üniversite ve öğrenci topluluklarının
                güncel duyurularını takip etmesi gerekir.
            </p>
        `
    },


    "kultur-atolye": {

        title: "🎨 Sanat, Müzik ve Hobi Atölyeleri",

        text: `
            <p>
                Üniversite hayatı öğrencilerin akademik alanlarının
                dışında farklı ilgi alanlarını keşfetmeleri için de
                önemli bir dönemdir. Müzik, tiyatro, resim, fotoğraf,
                tasarım ve çeşitli hobi faaliyetleri öğrencilerin
                sosyal çevresini genişletebilir.
            </p>

            <p>
                Bu tür faaliyetlere düzenli katılım iletişim, ekip
                çalışması ve organizasyon becerilerinin gelişmesine
                katkıda bulunabilir. Öğrenciler ilgi duydukları
                toplulukları dönem başında araştırabilir.
            </p>
        `
    },


    // ==========================================
    // TEKNOLOJİ
    // ==========================================

    "fırsat-teknokent": {

        title: "🚀 Fırat Teknokent ve Kuluçka Merkezi",

        text: `
            <p>
                Teknokent yapıları üniversite ile teknoloji şirketleri
                arasındaki bağlantının güçlendirilmesinde önemli rol
                oynar. Öğrenciler burada girişimcilik, yazılım,
                teknoloji geliştirme ve proje fikirleri konusunda
                farklı deneyimler kazanabilir.
            </p>

            <p>
                Özellikle bilgisayar mühendisliği ve yazılım gibi
                bölümlerde okuyan öğrenciler için gerçek problemlere
                yönelik proje geliştirme deneyimi akademik bilgilerin
                uygulamaya dönüşmesini sağlayabilir.
            </p>

            <p>
                Öğrencilerin güncel staj, proje, girişimcilik ve
                kuluçka desteklerini ilgili birimlerin duyurularından
                takip etmesi faydalıdır.
            </p>
        `
    },


    "teknoloji-laboratuvar": {

        title: "💻 İleri Araştırma ve Mühendislik Laboratuvarları",

        text: `
            <p>
                Laboratuvarlar öğrencilerin derslerde öğrendikleri
                teorik bilgileri uygulama yoluyla pekiştirebildikleri
                önemli eğitim alanlarıdır. Mühendislik bölümlerinde
                elektronik, yazılım, mekanik, enerji ve farklı
                araştırma alanlarına yönelik laboratuvarlar bulunabilir.
            </p>

            <p>
                Laboratuvar kullanım şartları, ekipmanlar ve öğrenci
                erişimi bölüme göre farklılık gösterebilir. Öğrenciler
                ilgili derslerin laboratuvarlarını kullanırken
                öğretim elemanlarının güvenlik ve kullanım kurallarına
                uymalıdır.
            </p>
        `
    },


    "teknoloji-dijital": {

        title: "📡 Dijital Kampüs, eduroam ve OBS",

        text: `
            <p>
                Üniversitenin dijital sistemleri öğrencilerin akademik
                hayatını daha kolay yönetebilmesine yardımcı olur.
                Öğrenci Bilgi Sistemi üzerinden ders kayıtları,
                akademik bilgiler ve çeşitli öğrenci işlemleri
                takip edilebilir.
            </p>

            <p>
                Eduroam gibi üniversite ağı çözümleri öğrencilerin
                uygun alanlarda internete erişmesine yardımcı olabilir.
                Kullanıcı adı, bağlantı ve teknik destek bilgileri
                üniversitenin güncel bilişim duyurularından öğrenilmelidir.
            </p>
        `
    },


    "teknoloji-tto": {

        title: "💡 Teknoloji Transfer Ofisi ve Proje Fırsatları",

        text: `
            <p>
                Teknoloji Transfer Ofisleri üniversitedeki akademik
                bilgi ve projelerin sanayiyle buluşmasına yardımcı olan
                yapılardır. Öğrenciler proje geliştirme, fikrini
                olgunlaştırma, girişimcilik ve fikri mülkiyet gibi
                konularda bilgi edinebilir.
            </p>

            <p>
                Özellikle yarışma ve proje takımlarında yer alan
                öğrenciler için proje fikrinin nasıl geliştirileceğini
                öğrenmek önemli bir deneyim olabilir. Güncel destek
                programları ilgili birimlerin duyurularından takip
                edilmelidir.
            </p>
        `
    },


    // ==========================================
    // KARİYER / DEĞİŞİM / SAĞLIK
    // ==========================================

    "fırsat-erasmus": {

        title: "🌍 Erasmus+ ve Uluslararası Değişim Programları",

        text: `
            <p>
                Erasmus+, öğrencilerin yurtdışındaki anlaşmalı
                yükseköğretim kurumlarında belirli bir süre eğitim
                görmesine veya uygun koşullarda staj deneyimi
                kazanmasına imkân sağlayan uluslararası hareketlilik
                programlarından biridir.
            </p>

            <p>
                Böyle bir değişim deneyimi öğrencinin farklı bir eğitim
                sistemini tanımasına, yabancı dil pratiği yapmasına ve
                farklı ülkelerden öğrencilerle akademik ve sosyal
                iletişim kurmasına yardımcı olabilir.
            </p>

            <p>
                Başvuru yapmayı düşünen öğrencilerin güncel başvuru
                ilanlarını, bölümünün değişim anlaşmalarını, yabancı
                dil şartlarını ve ilgili dönemin kontenjanlarını
                takip etmesi önemlidir. Başvuru koşulları dönemlere
                göre değişebileceğinden güncel resmi duyurular esas
                alınmalıdır.
            </p>
        `
    },


    "fırsat-mevlana": {

        title: "🤝 Farabi ve Mevlana Değişim Programları",

        text: `
            <p>
                Değişim programları öğrencilerin kendi üniversitelerinin
                dışında farklı akademik ortamları tanımasına yardımcı
                olabilir. Farabi programı Türkiye içerisindeki
                yükseköğretim kurumları arasında değişim imkânı sunan
                programlardan biridir.
            </p>

            <p>
                Mevlana gibi uluslararası hareketlilik programlarında
                ise farklı ülkelerdeki yükseköğretim kurumlarıyla
                akademik değişim imkânları bulunabilir. Güncel program
                kapsamı, başvuru şartları ve kontenjanlar dönemsel
                olarak değişebilir.
            </p>

            <p>
                Başvuru öncesinde öğrencilerin kendi bölümlerinin
                anlaşmalarını ve üniversitenin güncel değişim
                duyurularını incelemesi gerekir.
            </p>
        `
    },


    "fırsat-burs": {

        title: "🎓 FÜGEM Bursları ve Öğrenci Destekleri",

        text: `
            <p>
                Üniversite öğrencileri eğitim hayatları boyunca farklı
                burs ve sosyal destek imkânlarını araştırabilir.
                Üniversite bünyesindeki ilgili birimler, dönemsel
                olarak öğrencilere yönelik destek programları hakkında
                duyurular yayımlayabilir.
            </p>

            <p>
                Burs başvurularında gelir durumu, başarı, kontenjan ve
                farklı değerlendirme kriterleri kullanılabilir.
                Başvuru koşulları her destek programında farklı
                olabileceği için öğrencilerin güncel ilanları
                dikkatlice incelemesi önemlidir.
            </p>
        `
    },


    "saglik-mediko": {

        title: "🩺 Mediko-Sosyal Sağlık Hizmetleri",

        text: `
            <p>
                Üniversitelerde Mediko-Sosyal birimleri öğrencilerin
                temel sağlık ihtiyaçları konusunda destek alabileceği
                birimler arasında yer alabilir. Sunulan hizmetlerin
                kapsamı ve başvuru koşulları üniversiteye göre
                değişebilir.
            </p>

            <p>
                Öğrencilerin sağlıkla ilgili bir ihtiyaç yaşaması
                durumunda üniversitenin ilgili sağlık biriminden
                güncel hizmet bilgilerini öğrenmesi ve gerekli
                durumlarda uygun sağlık kuruluşlarına başvurması
                önemlidir.
            </p>
        `
    },


    "saglik-pdr": {

        title: "🧠 Psikolojik Danışmanlık ve Rehberlik (PDR)",

        text: `
            <p>
                Üniversiteye başlamak, yeni bir şehirde yaşamak,
                ders yoğunluğu ve sosyal çevre oluşturmak öğrenciler
                için farklı uyum süreçleri oluşturabilir. Psikolojik
                danışmanlık birimleri bu konularda destek alınabilecek
                üniversite hizmetlerinden biridir.
            </p>

            <p>
                Öğrenciler sınav stresi, zaman yönetimi, üniversiteye
                uyum veya günlük yaşamla ilgili zorlanmalar konusunda
                uygun danışmanlık hizmetlerini araştırabilir.
                Görüşmelerin kapsamı ve başvuru yöntemi üniversitenin
                güncel uygulamalarına göre belirlenir.
            </p>
        `
    },


    "saglik-engelsiz": {

        title: "♿ Engelsiz Üniversite ve Yaşam Birimi",

        text: `
            <p>
                Engelsiz üniversite birimleri, farklı erişilebilirlik
                ihtiyaçlarına sahip öğrencilerin eğitim ve kampüs
                yaşamına daha rahat katılabilmesi için destek
                mekanizmaları oluşturmayı amaçlar.
            </p>

            <p>
                Fiziksel erişim, ders materyallerine erişim,
                sınav düzenlemeleri ve iletişim desteği gibi konularda
                ihtiyaç halinde ilgili birimle görüşülebilir.
                Sunulan desteklerin kapsamı öğrencinin ihtiyacına
                ve üniversitenin mevcut uygulamalarına göre değişebilir.
            </p>
        `
    },


    "saglik-kariyer": {

        title: "🎯 Kariyer Planlama ve Mezunlar Merkezi (KARMER)",

        text: `
            <p>
                Kariyer merkezleri öğrencilerin mezuniyet sonrasındaki
                iş hayatına hazırlanmasına yardımcı olabilecek
                önemli üniversite birimleridir. CV hazırlama,
                mülakat teknikleri, kariyer planlama ve iş dünyasıyla
                iletişim gibi konularda çeşitli çalışmalar düzenlenebilir.
            </p>

            <p>
                Kariyer etkinlikleri öğrencilerin farklı sektörlerden
                şirketleri ve profesyonelleri tanımasına yardımcı
                olabilir. Özellikle birinci sınıftan itibaren kariyer
                hedefleri üzerine düşünmek, öğrencinin ilerleyen
                yıllarda staj ve proje seçimlerini daha bilinçli
                yapmasına katkı sağlayabilir.
            </p>

            <p>
                Öğrencilerin kariyer merkezi tarafından yayınlanan
                staj, etkinlik, seminer ve iş ilanlarını düzenli olarak
                takip etmesi faydalıdır.
            </p>
        `
    },
    "saglik-bilgilendirme": {
    title: "💡 Sağlık ve Öğrenci Bilgilendirme",
    text: `
        <p>
            Üniversite hayatında öğrencilerin yalnızca akademik ihtiyaçları
            değil, günlük yaşamlarını sağlıklı ve düzenli şekilde sürdürebilmeleri
            için ihtiyaç duyabilecekleri bilgilere ulaşmaları da önemlidir.
            Sağlıkla ilgili konularda üniversitenin ilgili birimlerinden ve
            resmi duyurularından yararlanılabilir.
        </p>

        <p>
            Öğrencilerin sağlık hizmetleri, başvuru süreçleri, danışmanlık
            imkanları ve kampüs içerisindeki ilgili birimler hakkında güncel
            bilgileri takip etmesi, ihtiyaç duyduğu durumda doğru birime daha
            kolay şekilde ulaşmasına yardımcı olabilir.
        </p>

        <p>
            Özellikle üniversiteye yeni başlayan öğrencilerin kampüs içerisindeki
            sağlık ve destek birimlerinin nerede bulunduğunu, hangi konularda
            hizmet verdiklerini ve güncel çalışma koşullarını önceden öğrenmesi
            kampüs yaşamına uyum sağlamalarını kolaylaştırabilir.
        </p>
    `
},


    // ==========================================
    // 9. BÖLÜM - ÖĞRENCİ YAŞAMI
    // ==========================================

    "ogrenci-topluluklari": {

        title: "🎓 Öğrenci Toplulukları ve Kulüpler",

        text: `
            <p>
                Üniversite yaşamının yalnızca derslerden oluşmadığı
                düşünüldüğünde, öğrenci toplulukları kampüs hayatının
                en önemli parçalarından biridir. Farklı ilgi alanlarına
                yönelik topluluklar sayesinde öğrenciler hem sosyal
                çevrelerini geliştirebilir hem de üniversite içinde
                aktif görevler üstlenebilir.
            </p>

            <p>
                Teknoloji, spor, sanat, kültür, girişimcilik, akademik
                çalışmalar ve sosyal sorumluluk gibi farklı alanlarda
                faaliyet gösteren topluluklara katılmak, öğrencilerin
                kendi ilgi alanlarını keşfetmesine yardımcı olur.
                Özellikle birinci sınıfta topluluklara katılmak, yeni
                arkadaşlıklar kurmak ve kampüse daha hızlı adapte olmak
                açısından faydalı olabilir.
            </p>

            <p>
                Topluluklarda yalnızca etkinliklere katılan bir öğrenci
                olmak yerine zaman içerisinde organizasyon, ekip
                çalışması, iletişim ve proje yönetimi gibi alanlarda
                sorumluluk almak da mümkündür.
            </p>
        `
    },


    "ogrenci-etkinlikler": {

        title: "🎪 Etkinlikler ve Bahar Şenlikleri",

        text: `
            <p>
                Üniversite kampüsündeki sosyal etkinlikler, öğrencilerin
                ders yoğunluğunun dışında vakit geçirebileceği ve farklı
                insanlarla tanışabileceği önemli alanlardan biridir.
                Konserler, söyleşiler, konferanslar, sergiler,
                turnuvalar ve çeşitli öğrenci organizasyonları kampüs
                yaşamını daha hareketli hale getirebilir.
            </p>

            <p>
                Özellikle bahar döneminde düzenlenen etkinlikler,
                öğrencilerin üniversite ortamını akademik hayatın
                dışında da deneyimlemesine olanak sağlayabilir.
                Fakülteler, öğrenci toplulukları ve üniversitenin
                ilgili birimleri tarafından düzenlenen etkinliklerin
                duyuruları takip edilerek farklı organizasyonlara
                katılım sağlanabilir.
            </p>

            <p>
                Bu etkinlikler yalnızca eğlence amacı taşımaz.
                Söyleşi ve konferanslar mesleki bakış açısını
                geliştirebilirken, atölye ve takım etkinlikleri
                öğrencilerin iletişim ve organizasyon becerilerini
                geliştirmesine katkı sağlayabilir.
            </p>
        `
    },


    "ogrenci-yarismalar": {

        title: "🏆 Yarışmalar ve Proje Takımları",

        text: `
            <p>
                Üniversite döneminde proje ve yarışmalara katılmak,
                derslerde öğrenilen bilgileri uygulamaya dönüştürmek
                için önemli fırsatlar sunar. Özellikle mühendislik,
                bilgisayar, yazılım, yapay zeka ve tasarım alanlarında
                öğrenciler ekipler oluşturarak farklı projeler
                geliştirebilir.
            </p>

            <p>
                Yarışma süreçlerinde yalnızca teknik bilgi değil;
                ekip çalışması, görev paylaşımı, zaman yönetimi,
                sunum hazırlama ve problem çözme becerileri de gelişir.
                Bu nedenle bir yarışmaya katılmak, sonuçtan bağımsız
                olarak öğrencinin kendisini geliştirebileceği bir
                deneyim olabilir.
            </p>

            <p>
                Proje takımlarında görev almak isteyen öğrencilerin
                kendi bölümlerindeki duyuruları, öğrenci topluluklarını
                ve üniversite tarafından desteklenen proje faaliyetlerini
                takip etmesi faydalıdır. Zaman içerisinde bu çalışmalar
                öğrencinin portföyüne koyabileceği somut projeler
                oluşturmasına da yardımcı olabilir.
            </p>
        `
    },


    "ogrenci-gonulluluk": {

        title: "🤝 Gönüllülük ve Sosyal Sorumluluk",

        text: `
            <p>
                Üniversite yılları, akademik gelişimin yanında topluma
                katkı sağlayan sosyal sorumluluk faaliyetlerine katılmak
                için de uygun bir dönemdir. Gönüllülük çalışmaları
                öğrencilerin farklı insanlarla iletişim kurmasını ve
                toplumsal konular hakkında daha fazla farkındalık
                kazanmasını sağlayabilir.
            </p>

            <p>
                Sosyal sorumluluk faaliyetleri; eğitim desteği,
                çevre çalışmaları, yardım kampanyaları, farkındalık
                etkinlikleri ve çeşitli gönüllülük organizasyonları
                şeklinde gerçekleştirilebilir. Öğrenci toplulukları
                ve üniversitenin ilgili birimleri bu tür faaliyetlerin
                organize edilmesinde önemli rol oynayabilir.
            </p>

            <p>
                Düzenli olarak gönüllülük faaliyetlerine katılmak
                öğrencinin iletişim, organizasyon ve ekip çalışması
                becerilerini geliştirmesine yardımcı olurken üniversite
                yaşamını daha sosyal ve anlamlı hale getirebilir.
            </p>
        `
    },


    // ==========================================
    // BÖLÜMLER
    // ==========================================

    "dept-yazilim": {
        title: "💻 Yazılım Mühendisliği (Teknoloji Fakültesi)",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Yazılım geliştirme, algoritmalar, veri yapıları,
                yazılım tasarımı ve bilgisayar sistemleri gibi alanlara
                odaklanan bir mühendislik eğitimidir.
            </p>
        `
    },


    "dept-bilgisayar": {
        title: "🖥️ Bilgisayar Mühendisliği (Mühendislik Fakültesi)",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Bilgisayar mühendisliği; programlama, algoritmalar,
                veri yapıları, bilgisayar donanımı, yapay zeka,
                işletim sistemleri ve yazılım geliştirme gibi birçok
                alanı kapsayan geniş bir mühendislik bölümüdür.
            </p>
        `
    },


    "dept-yapayzeka": {
        title: "🤖 Yapay Zeka ve Veri Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Makine öğrenmesi, veri analizi, yapay zeka algoritmaları
                ve veri mühendisliği gibi konular üzerine yoğunlaşır.
            </p>
        `
    },


    "dept-elektrik": {
        title: "⚡ Elektrik-Elektronik Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Elektrik sistemleri, elektronik, haberleşme, otomasyon,
                kontrol ve enerji alanlarında temel mühendislik eğitimi
                sunar.
            </p>
        `
    },


    "dept-makine": {
        title: "⚙️ Makine Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Mekanik sistemler, tasarım, üretim, termodinamik,
                malzeme ve makine elemanları gibi alanlara odaklanır.
            </p>
        `
    },


    "dept-insaat": {
        title: "🏗️ İnşaat Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Yapı, geoteknik, ulaştırma, hidrolik ve inşaat yönetimi
                gibi alanlarda eğitim verir.
            </p>
        `
    },


    "dept-mekatronik": {
        title: "🤖 Mekatronik Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Mekanik, elektronik, yazılım ve otomasyon alanlarının
                birleşimine dayanan disiplinler arası bir mühendislik
                bölümüdür.
            </p>
        `
    },


    "dept-biyomedikal": {
        title: "🩺 Biyomedikal Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Tıbbi cihazlar, biyosensörler, sağlık teknolojileri ve
                mühendislik uygulamalarının sağlık alanındaki kullanımına
                odaklanır.
            </p>
        `
    },


    "dept-otomotiv": {
        title: "🚗 Otomotiv Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Araç tasarımı, motor sistemleri, elektrikli araçlar,
                üretim ve otomotiv teknolojileri üzerine eğitim verir.
            </p>
        `
    },


    "dept-endustri": {
        title: "📐 Endüstri Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Üretim sistemleri, optimizasyon, veri analizi,
                tedarik zinciri ve süreç yönetimi alanlarına odaklanır.
            </p>
        `
    },


    "dept-kimyamuh": {
        title: "🧪 Kimya Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Kimyasal prosesler, üretim sistemleri, malzeme,
                enerji ve endüstriyel proses tasarımı konularını kapsar.
            </p>
        `
    },


    "dept-cevre": {
        title: "🌱 Çevre Mühendisliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Su ve atık su yönetimi, çevre teknolojileri,
                atık yönetimi ve sürdürülebilirlik konularında eğitim verir.
            </p>
        `
    },


    "dept-tip": {
        title: "🩺 Tıp Fakültesi",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 6 Yıl
            </p>

            <p>
                Temel tıp bilimlerinden klinik bilimlere uzanan kapsamlı
                bir eğitim sürecidir. Eğitim ilerledikçe uygulamalı
                ve klinik çalışmaların ağırlığı artar.
            </p>
        `
    },


    "dept-dis": {
        title: "🦷 Diş Hekimliği Fakültesi",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 5 Yıl
            </p>

            <p>
                Diş hekimliği eğitimi temel bilimlerin yanında ağız,
                diş ve çene sağlığına yönelik teorik ve uygulamalı
                çalışmaları kapsar.
            </p>
        `
    },


    "dept-eczacilik": {
        title: "💊 Eczacılık Fakültesi",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 5 Yıl
            </p>

            <p>
                İlaç bilimi, farmasötik teknoloji, kimya, farmakoloji
                ve klinik eczacılık gibi alanları kapsayan eğitim sunar.
            </p>
        `
    },


    "dept-veteriner": {
        title: "🌿 Veteriner Fakültesi",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 5 Yıl
            </p>

            <p>
                Hayvan sağlığı, hastalıkların teşhisi, tedavisi,
                cerrahi uygulamalar ve hayvansal üretim alanlarında
                eğitim verir.
            </p>
        `
    },


    "dept-hemsirelik": {
        title: "🩺 Hemşirelik",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Hemşirelik öğrencileri temel sağlık bilimlerinin yanında
                klinik uygulamalar ve hasta bakım süreçleri konusunda
                eğitim alır.
            </p>
        `
    },


    "dept-beslenme": {
        title: "🥗 Beslenme ve Diyetetik",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Beslenme bilimi, toplum sağlığı, hastalıklarda beslenme
                ve bireysel beslenme planlaması konularına odaklanır.
            </p>
        `
    },


    "dept-fizyoterapi": {
        title: "🤸 Fizyoterapi ve Rehabilitasyon",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Hareket sistemi, rehabilitasyon, fiziksel tedavi
                yöntemleri ve fonksiyonel iyileşme üzerine eğitim verir.
            </p>
        `
    },


    "dept-ebelik": {
        title: "👶 Ebelik",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Gebelik, doğum, doğum sonrası bakım ve kadın sağlığı
                alanlarında teorik ve uygulamalı eğitim sunar.
            </p>
        `
    },


    "dept-saglikyonetimi": {
        title: "💼 Sağlık Yönetimi",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Sağlık kurumlarının yönetimi, finans, organizasyon,
                sağlık politikaları ve yönetim süreçlerine odaklanır.
            </p>
        `
    },


    "dept-oyun": {
        title: "🎮 Dijital Oyun Tasarımı",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Oyun tasarımı, 3D modelleme, oyun motorları, görsel
                tasarım ve interaktif medya alanlarını kapsar.
            </p>
        `
    },


    "dept-radyo": {
        title: "📺 Radyo, Televizyon ve Sinema",
        text: `
            <p>
                <strong>Puan Türü:</strong> SÖZ |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Radyo, televizyon, sinema, medya üretimi, kurgu ve
                görsel-işitsel anlatım alanlarında eğitim verir.
            </p>
        `
    },


    "dept-gazetecilik": {
        title: "📰 Gazetecilik",
        text: `
            <p>
                <strong>Puan Türü:</strong> SÖZ |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Haber üretimi, araştırmacı gazetecilik, dijital medya
                ve iletişim teknolojileri üzerine eğitim sunar.
            </p>
        `
    },


    "dept-halklailiskiler": {
        title: "📢 Halkla İlişkiler ve Tanıtım",
        text: `
            <p>
                <strong>Puan Türü:</strong> SÖZ |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Kurumsal iletişim, marka yönetimi, medya ilişkileri
                ve halkla ilişkiler stratejileri üzerine yoğunlaşır.
            </p>
        `
    },


    "dept-psikoloji": {
        title: "🧠 Psikoloji",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                İnsan davranışlarını, bilişsel süreçleri, gelişimi
                ve farklı psikoloji alanlarını bilimsel yöntemlerle
                inceleyen bir bölümdür.
            </p>
        `
    },


    "dept-sosyoloji": {
        title: "👥 Sosyoloji",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Toplum, sosyal ilişkiler, kültür, kurumlar ve toplumsal
                değişim üzerine çalışmalar yürütür.
            </p>
        `
    },


    "dept-ingilizdili": {
        title: "🇬🇧 İngiliz Dili ve Edebiyatı",
        text: `
            <p>
                <strong>Puan Türü:</strong> DİL |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                İngilizce edebiyat, dil, kültür, edebi analiz ve
                çeviri çalışmaları gibi alanlara odaklanır.
            </p>
        `
    },


    "dept-mimar": {
        title: "🏛️ Mimarlık",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Mimari tasarım, yapı teknolojileri, çizim, modelleme
                ve mekân planlama konularında eğitim verir.
            </p>
        `
    },


    "dept-sehirplanlama": {
        title: "🗺️ Şehir ve Bölge Planlama",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Şehirlerin planlanması, ulaşım, arazi kullanımı,
                sürdürülebilirlik ve bölgesel gelişim konularını inceler.
            </p>
        `
    },


    "dept-isletme": {
        title: "📊 İşletme",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Yönetim, pazarlama, finans, muhasebe, insan kaynakları
                ve girişimcilik gibi işletme alanlarını kapsar.
            </p>
        `
    },


    "dept-iktisat": {
        title: "📈 İktisat",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Ekonomik sistemler, piyasalar, finans, makroekonomi,
                mikroekonomi ve ekonomik veri analizi üzerine eğitim verir.
            </p>
        `
    },


    "dept-kamuyonetimi": {
        title: "🏛️ Siyaset Bilimi ve Kamu Yönetimi",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Kamu yönetimi, siyaset bilimi, hukuk, kamu politikaları
                ve yönetim süreçleri üzerine eğitim sunar.
            </p>
        `
    },


    "dept-ilahiyat": {
        title: "📖 İlahiyat Fakültesi",
        text: `
            <p>
                <strong>Puan Türü:</strong> SÖZ |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Temel İslam bilimleri, din bilimleri, felsefe,
                tarih ve ilgili akademik alanlarda eğitim verir.
            </p>
        `
    },


    "dept-pdr": {
        title: "🎓 Rehberlik ve Psikolojik Danışmanlık (PDR)",
        text: `
            <p>
                <strong>Puan Türü:</strong> EA |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Psikolojik danışma, gelişim, eğitim psikolojisi,
                rehberlik ve danışmanlık uygulamaları üzerine eğitim verir.
            </p>
        `
    },


    "dept-okuloncesi": {
        title: "🧸 Okul Öncesi Öğretmenliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SÖZ |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Erken çocukluk dönemi gelişimi, eğitim yöntemleri,
                çocuk psikolojisi ve okul öncesi öğretim uygulamalarına
                odaklanır.
            </p>
        `
    },


    "dept-ingilizceogrt": {
        title: "🇬🇧 İngilizce Öğretmenliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> DİL |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                İngilizce dil bilgisi, iletişim becerileri, öğretim
                yöntemleri ve yabancı dil eğitimi üzerine çalışmalar
                yürütür.
            </p>
        `
    },


    "dept-ilkogretimmat": {
        title: "📐 İlköğretim Matematik Öğretmenliği",
        text: `
            <p>
                <strong>Puan Türü:</strong> SAY |
                <strong>Süre:</strong> 4 Yıl
            </p>

            <p>
                Matematik öğretim yöntemleri, eğitim bilimleri ve
                ortaokul düzeyinde matematik eğitimi üzerine yoğunlaşır.
            </p>
        `
    }

};


// ==========================================
// 4. BÖLÜMLER LİSTESİ
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


// ==========================================
// 5. BÖLÜM FİLTRELEME
// ==========================================

const departmentsGrid = document.getElementById('departmentsGrid');
const deptSearchInput = document.getElementById('deptSearchInput');
const filterChips = document.querySelectorAll('#facultyFilterChips .filter-chip');

let currentCategory = 'all';
let currentSearchTerm = '';


function renderDepartments() {

    if (!departmentsGrid) return;

    const searchTermLower = trLower(currentSearchTerm);

    const filtered = departmentsData.filter(dept => {

        const matchesCategory =
            currentCategory === 'all' ||
            dept.category === currentCategory;

        const matchesSearch =
            trLower(dept.title).includes(searchTermLower) ||
            trLower(dept.faculty).includes(searchTermLower) ||
            trLower(dept.scoreType).includes(searchTermLower);

        return matchesCategory && matchesSearch;

    });


    if (filtered.length === 0) {

        departmentsGrid.innerHTML = `
            <div class="no-results"
                 style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 40px;
                    color: var(--text-dim);
                 ">
                Aramanızla eşleşen bir bölüm bulunamadı.
            </div>
        `;

        return;
    }


    departmentsGrid.innerHTML = filtered.map(dept => `

        <div class="dept-card clickable-card"
             data-modal="${dept.id}">

            <div>

                <div class="dept-card-header">

                    <span class="dept-title">
                        ${dept.title}
                    </span>

                    <span class="dept-badge">
                        ${dept.scoreType} • ${dept.duration}
                    </span>

                </div>

                <div class="dept-faculty">
                    ${dept.faculty}
                </div>

            </div>

            <div style="
                font-size: 0.8rem;
                color: var(--text-dim);
                margin-top: 10px;
            ">
                ✦ Detaylar ve imkânlar için tıklayın
            </div>

        </div>

    `).join('');
}


// ==========================================
// 6. FİLTRE BUTONLARI
// ==========================================

if (filterChips) {

    filterChips.forEach(chip => {

        chip.addEventListener('click', () => {

            filterChips.forEach(c =>
                c.classList.remove('active')
            );

            chip.classList.add('active');

            currentCategory =
                chip.getAttribute('data-faculty');

            renderDepartments();

        });

    });

}


// ==========================================
// 7. BÖLÜM ARAMA
// ==========================================

if (deptSearchInput) {

    deptSearchInput.addEventListener('input', (e) => {

        currentSearchTerm =
            e.target.value.trim();

        renderDepartments();

    });

}


// ==========================================
// 8. MODAL AÇMA
// ==========================================

function openModal(key) {

    const data = modalData[key];

    if (!data) return;


    const modalOverlay =
        document.getElementById('modalOverlay');

    const modalTitle =
        document.getElementById('modalTitle');

    const modalText =
        document.getElementById('modalText');


    if (modalTitle) {
        modalTitle.textContent = data.title;
    }


    if (modalText) {
        modalText.innerHTML = data.text;
    }


    if (modalOverlay) {
        modalOverlay.classList.add('active');
    }


    document.body.style.overflow = 'hidden';

}


// ==========================================
// 9. MODAL KAPATMA
// ==========================================

function closeModal() {

    const modalOverlay =
        document.getElementById('modalOverlay');

    if (modalOverlay) {
        modalOverlay.classList.remove('active');
    }

    document.body.style.overflow = '';

}


// ==========================================
// 10. MODAL EVENTLERİ
// ==========================================

document.addEventListener('click', (e) => {

    const modalTrigger =
        e.target.closest('[data-modal]');


    if (modalTrigger) {

        const key =
            modalTrigger.getAttribute('data-modal');

        if (key) {

            e.stopPropagation();

            openModal(key);

        }

    }


    if (
        e.target.id === 'modalClose' ||
        e.target.classList.contains('modal-close')
    ) {

        closeModal();

    }


    if (e.target.id === 'modalOverlay') {

        closeModal();

    }

});


// ==========================================
// 11. ESC İLE MODAL KAPAT
// ==========================================

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        closeModal();
    }

});


// ==========================================
// 12. BÖLÜMLERİ İLK KEZ OLUŞTUR
// ==========================================

renderDepartments();


// ==========================================
// 13. URL HASH İLE MODAL AÇ
// ==========================================

window.addEventListener('DOMContentLoaded', () => {

    const hashKey =
        window.location.hash.replace('#', '');

    if (
        hashKey &&
        modalData[hashKey]
    ) {

        openModal(hashKey);

    }

});