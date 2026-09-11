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

    "konaklama": {
    title: "🏠 Konaklama ve Yurtlar",
    text: `
        <p>Elazığ'da üniversite öğrencileri için farklı konaklama seçenekleri bulunmaktadır. Öğrenciler ihtiyaçlarına ve bütçelerine uygun olarak çeşitli yurt ve konaklama alternatiflerini değerlendirebilmektedir. Kampüs çevresindeki konaklama seçenekleri öğrencilerin üniversiteye ulaşımını kolaylaştırabilmektedir. Yurtlarda öğrencilerin günlük ihtiyaçlarını karşılamaya yönelik farklı imkanlar bulunabilmektedir.</p>

        <p>Konaklama seçimi yapılırken üniversiteye olan mesafe önemli bir kriter olarak değerlendirilebilir. Ulaşım imkanlarının yakın olması öğrencilerin günlük hayatını kolaylaştırmaktadır. Öğrenciler konaklama seçeneklerini araştırırken çalışma ortamı ve sosyal imkanları da değerlendirebilir. Farklı konaklama seçeneklerinin özelliklerini karşılaştırmak öğrencilerin kendileri için uygun tercihi yapmasına yardımcı olabilir.</p>

        <p>Yurt yaşamı öğrencilerin farklı kişilerle tanışmasına ve sosyal çevre oluşturmasına da katkı sağlayabilmektedir. Ortak yaşam alanları öğrencilerin iletişim ve dayanışma becerilerini geliştirebilmektedir. Öğrenciler konaklama tercihlerini yaparken kendi ihtiyaçlarını ve günlük yaşam düzenlerini göz önünde bulundurabilir. Elazığ'daki konaklama seçenekleri öğrencilerin üniversite hayatını daha rahat sürdürebilmelerine yardımcı olmaktadır.</p>
    `
},

"yemek": {
    title: "🍽️ Yeme İçme",
    text: `
        <p>Elazığ'da öğrencilerin günlük yaşamlarında değerlendirebileceği farklı yeme içme seçenekleri bulunmaktadır. Üniversite çevresinde öğrencilerin kolayca ulaşabileceği çeşitli yemek alternatifleri yer almaktadır. Öğrenciler günlük ihtiyaçlarına göre farklı mekanları değerlendirebilmektedir. Kampüs çevresindeki seçenekler özellikle yoğun ders programına sahip öğrenciler için kolaylık sağlayabilmektedir.</p>

        <p>Şehir merkezinde de farklı yemek kültürlerini deneyimleyebilecek çeşitli mekanlar bulunmaktadır. Öğrenciler arkadaşlarıyla birlikte farklı bölgeleri keşfederek yeni yemek seçenekleri deneyebilmektedir. Yeme içme mekanları aynı zamanda öğrencilerin sosyal olarak vakit geçirebileceği alanlar arasında yer almaktadır. Farklı mekanları araştırmak öğrencilerin kendi bütçelerine ve tercihlerine uygun seçenekleri bulmasına yardımcı olabilir.</p>

        <p>Öğrenciler günlük yaşamlarında kampüs çevresindeki ve şehir merkezindeki seçeneklerden yararlanabilmektedir. Arkadaşlarla yapılan yemek buluşmaları üniversite hayatının sosyal yönünü güçlendirebilmektedir. Farklı mekanları keşfetmek öğrencilerin Elazığ'ı daha yakından tanımasına da katkı sağlayabilir. Elazığ'daki yeme içme seçenekleri öğrencilerin günlük ihtiyaçlarını karşılamalarının yanında sosyal yaşamlarına da çeşitlilik katmaktadır.</p>
    `
},

"alisveris": {
    title: "🛒 Alışveriş",
    text: `
        <p>Elazığ'da öğrencilerin günlük ihtiyaçlarını karşılayabileceği çeşitli alışveriş noktaları bulunmaktadır. Öğrenciler temel ihtiyaçlarını şehir içerisinde bulunan farklı mağaza ve marketlerden karşılayabilmektedir. Üniversite çevresindeki alışveriş seçenekleri günlük yaşamı kolaylaştırmaktadır. Şehir merkezinde ise farklı ihtiyaçlara yönelik daha geniş seçenekler bulunabilmektedir.</p>

        <p>Öğrenciler kırtasiye ve kişisel ihtiyaçları için farklı mağazaları değerlendirebilmektedir. Marketler günlük yiyecek ve temel ihtiyaçların karşılanmasında önemli bir yere sahiptir. Alışveriş merkezleri öğrencilerin farklı ürünleri bir arada bulmasına yardımcı olabilmektedir. Öğrencilerin alışveriş yaparken ihtiyaçlarını önceden belirlemesi zamanlarını daha verimli kullanmalarını sağlayabilir.</p>

        <p>Şehir içerisindeki farklı alışveriş bölgelerini keşfetmek öğrencilerin çevreyi daha iyi tanımasına yardımcı olabilir. Alışveriş noktalarına ulaşım sağlamak için şehir içi toplu taşıma seçeneklerinden yararlanılabilmektedir. Öğrenciler ihtiyaçlarına göre kampüs çevresini veya şehir merkezini tercih edebilmektedir. Elazığ'daki alışveriş imkanları öğrencilerin günlük üniversite yaşamındaki ihtiyaçlarını karşılamalarına yardımcı olmaktadır.</p>
    `
},

"saglik": {
    title: "🏥 Sağlık Hizmetleri",
    text: `
        <p>Elazığ'da öğrencilerin ihtiyaç duyabileceği çeşitli sağlık hizmetleri bulunmaktadır. Öğrenciler sağlık ihtiyaçları için farklı sağlık kuruluşlarından ve ilgili birimlerden yararlanabilmektedir. Üniversite yaşamında sağlık hizmetlerine kolay ulaşabilmek öğrenciler açısından önemli bir konudur. Kampüs ve şehir çevresindeki sağlık imkanlarını önceden bilmek öğrencilerin ihtiyaç halinde daha bilinçli hareket etmesine yardımcı olabilir.</p>

        <p>Öğrenciler sağlık hizmetlerinden yararlanırken ilgili kurumların çalışma koşullarını ve hizmet kapsamını öğrenebilir. Farklı sağlık kuruluşları farklı alanlarda hizmet sunabilmektedir. Acil durumlarda uygun sağlık hizmetine ulaşılması büyük önem taşımaktadır. Öğrencilerin yaşadıkları bölgedeki sağlık kuruluşlarının konumlarını bilmeleri günlük yaşam açısından faydalı olabilir.</p>

        <p>Sağlık hizmetleri hakkında güncel ve doğru bilgilerin ilgili kurumlardan alınması önemlidir. Öğrenciler sağlık ihtiyaçları konusunda üniversitenin ilgili birimlerinden de bilgi alabilmektedir. Sağlık imkanlarını bilmek öğrencilerin şehir hayatına daha kolay uyum sağlamasına yardımcı olabilir. Elazığ'daki sağlık hizmetleri öğrencilerin üniversite hayatları boyunca ihtiyaç duyabilecekleri temel imkanlara ulaşmalarına katkı sağlamaktadır.</p>
    `
},

"etkinlik": {
    title: "🎉 Etkinlikler",
    text: `
        <p>Elazığ'da öğrencilerin katılabileceği çeşitli sosyal, kültürel ve akademik etkinlikler gerçekleştirilebilmektedir. Üniversite ortamında düzenlenen etkinlikler öğrencilerin ders dışındaki zamanlarını değerlendirmelerine yardımcı olmaktadır. Seminer ve söyleşiler öğrencilerin farklı konular hakkında yeni bilgiler edinmesini sağlamaktadır. Kültürel etkinlikler öğrencilerin sosyal yaşamlarını daha hareketli hale getirebilmektedir.</p>

        <p>Öğrenci toplulukları tarafından gerçekleştirilen etkinlikler farklı ilgi alanlarına sahip öğrencileri bir araya getirmektedir. Yarışmalar öğrencilerin hem eğlenmesine hem de ekip çalışması deneyimi kazanmasına yardımcı olabilmektedir. Konferanslar ve kariyer etkinlikleri öğrencilerin mesleki gelişimine katkı sağlayabilmektedir. Sanatsal faaliyetler öğrencilerin yaratıcılıklarını geliştirmelerine ve kendilerini ifade etmelerine fırsat verebilmektedir.</p>

        <p>Etkinliklere katılmak öğrencilerin yeni arkadaşlıklar kurmasına yardımcı olabilir. Farklı etkinlikleri takip etmek öğrencilerin üniversite hayatından daha fazla yararlanmasını sağlayabilir. Öğrenciler ilgi alanlarına uygun etkinlikleri tercih ederek sosyal çevrelerini geliştirebilir. Elazığ'daki etkinlikler öğrencilerin akademik yaşamlarının yanında sosyal ve kültürel açıdan da aktif bir üniversite hayatı geçirmelerine katkı sağlamaktadır.</p>
    `
},

"ogrenci-hayati": {
    title: "🎓 Öğrenci Hayatı",
    text: `
        <p>Elazığ'da öğrenci hayatı, üniversite eğitiminin yanında sosyal ve kültürel aktivitelerle birlikte şekillenmektedir. Öğrenciler ders programlarının dışında arkadaşlarıyla vakit geçirerek sosyal çevrelerini geliştirebilmektedir. Üniversite çevresindeki farklı mekanlar öğrencilerin günlük yaşamını kolaylaştırmaktadır. Kampüs ortamı öğrencilerin hem akademik hem de sosyal açıdan zaman geçirebildiği önemli alanlardan biridir.</p>

        <p>Öğrenci toplulukları üniversite hayatının sosyal yönünü geliştiren önemli oluşumlar arasında yer almaktadır. Kulüplere katılmak öğrencilerin farklı ilgi alanlarını keşfetmesine yardımcı olabilmektedir. Şehirdeki tarihi ve doğal alanları ziyaret etmek öğrencilerin Elazığ'ı daha yakından tanımasını sağlayabilir. Sosyal etkinliklere katılmak öğrencilerin üniversite yıllarında farklı deneyimler kazanmasına yardımcı olmaktadır.</p>

        <p>Öğrenciler ders çalışma ve sosyal aktiviteler arasında kendi günlük düzenlerini oluşturabilmektedir. Farklı arkadaş gruplarıyla vakit geçirmek üniversite yıllarının sosyal yönünü güçlendirebilmektedir. Şehir içerisinde yeni yerler keşfetmek öğrencilerin boş zamanlarını değerlendirmesine yardımcı olabilir. Elazığ'daki öğrenci hayatı, akademik eğitimin yanında sosyal ve kültürel deneyimler kazanmak için çeşitli imkanlar sunmaktadır.</p>
    `
},

"haftasonu": {
    title: "🌄 Hafta Sonu Aktiviteleri",
    text: `
        <p>Elazığ'da öğrenciler hafta sonlarını değerlendirmek için farklı sosyal ve kültürel aktiviteler gerçekleştirebilmektedir. Şehrin tarihi bölgeleri hafta sonu gezileri için değerlendirilebilecek seçenekler arasında yer almaktadır. Harput gibi tarihi alanlar öğrencilerin şehrin kültürel geçmişini daha yakından tanımasına yardımcı olabilir. Doğal alanlar da şehir hayatından uzaklaşmak isteyen öğrenciler için farklı alternatifler sunmaktadır.</p>

        <p>Hazar Gölü çevresi doğal güzellikleri görmek isteyen öğrencilerin değerlendirebileceği bölgelerden biridir. Arkadaşlarla yapılan şehir gezileri hafta sonlarının daha keyifli geçirilmesine yardımcı olabilmektedir. Öğrenciler şehir merkezindeki sosyal alanlarda vakit geçirerek farklı aktiviteler gerçekleştirebilmektedir. Kültürel etkinlikleri takip etmek hafta sonu planlarına farklı seçenekler ekleyebilir.</p>

        <p>Hafta sonu aktiviteleri öğrencilerin ders yoğunluğundan uzaklaşarak sosyal çevreleriyle vakit geçirmesine yardımcı olmaktadır. Farklı bölgeleri keşfetmek öğrencilerin Elazığ hakkındaki deneyimlerini genişletebilmektedir. Öğrenciler kendi ilgi alanlarına göre gezi, sosyal etkinlik veya kültürel faaliyetleri tercih edebilmektedir. Elazığ, öğrencilerin hafta sonlarını farklı aktivitelerle değerlendirebileceği çeşitli seçeneklere sahip bir şehir olarak öne çıkmaktadır.</p>
    `
},


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
    // KAYIT İŞLEMLERİ VE AKADEMİK SÜREÇLER
    // ==========================================

    "kayit-obs": {

        title: "💻 OBS ve Ders Kayıt Süreci",

        text: `
            <p>
                Öğrenci Bilgi Sistemi (OBS), öğrencilerin her dönem
                başında ders seçimi yapabildiği, not ve devamsızlık
                bilgilerini takip edebildiği ve akademik işlemlerini
                yürütebildiği temel dijital platformdur. Dönem başında
                belirlenen ders kayıt tarihleri içerisinde sisteme
                girerek alınacak derslerin seçilmesi gerekir.
            </p>

            <p>
                Ders kayıt haftasında sistem yoğunluğu yaşanabileceği
                için öğrencilerin kayıt tarihlerini önceden not etmesi
                ve gerekli ön koşul derslerini kontrol etmesi
                önerilir. Kayıt sırasında yaşanan teknik sorunlarda
                fakülte öğrenci işleri biriminden destek alınabilir.
            </p>
        `
    },


    "kayit-takvim": {

        title: "📅 Akademik Takvim ve Önemli Tarihler",

        text: `
            <p>
                Akademik takvim; ders kayıt dönemleri, ekle-sil
                haftası, ara sınav ve final tarihleri, bütünleme
                sınavları ve tatil dönemleri gibi öğrencinin dönem
                boyunca takip etmesi gereken tüm önemli tarihleri
                içerir. Bu takvim her akademik yıl başında üniversite
                tarafından güncellenerek ilan edilir.
            </p>

            <p>
                Öğrencilerin dönem başında akademik takvimi inceleyerek
                sınav ve kayıt tarihlerini kendi ajandalarına not
                etmesi, son dakika karışıklıklarının önüne geçmelerine
                yardımcı olabilir. Güncel takvim bilgileri üniversitenin
                resmi web sitesinden takip edilmelidir.
            </p>
        `
    },


    "kayit-danisman": {

        title: "🧑‍🏫 Danışman Öğretim Üyesi Sistemi",

        text: `
            <p>
                Her öğrenciye kayıt olduğu bölümden bir danışman
                öğretim üyesi atanır. Danışmanlar; ders seçimi,
                akademik planlama, staj süreçleri ve üniversite
                hayatına dair karşılaşılan sorularda öğrencilere
                rehberlik eder.
            </p>

            <p>
                Özellikle ders kayıt döneminde danışman onayı
                gerekebileceğinden öğrencilerin danışman öğretim
                üyeleriyle düzenli iletişim halinde olması, hem
                akademik planlamayı kolaylaştırır hem de olası
                sorunların erken fark edilmesine yardımcı olur.
            </p>
        `
    },


    "kayit-mezuniyet": {

        title: "🎓 Diploma ve Mezuniyet İşlemleri",

        text: `
            <p>
                Mezuniyet aşamasına gelen öğrencilerin ders yükümlülüklerini
                tamamlamış olması, staj ve varsa bitirme projesi gibi
                gereklilikleri yerine getirmiş olması gerekir. Mezuniyet
                işlemleri genellikle öğrenci işleri birimi üzerinden
                takip edilir ve ilişik kesme süreciyle tamamlanır.
            </p>

            <p>
                Diploma teslim süreci, geçici mezuniyet belgesi alma
                ve transkript işlemleri üniversiteden üniversiteye
                farklılık gösterebilir. Bu nedenle mezuniyet döneminde
                öğrencilerin güncel prosedürleri öğrenci işleri
                biriminden takip etmesi önemlidir.
            </p>
        `
    },


    // ==========================================
    // ULUSLARARASI ÖĞRENCİLER
    // ==========================================

    "uluslararasi-basvuru": {

        title: "🌐 Yabancı Uyruklu Öğrenci Başvuru ve Kabul Süreci",

        text: `
            <p>
                Yabancı uyruklu öğrenci adayları, üniversitenin ilgili
                başvuru dönemlerinde çevrim içi başvuru sistemleri
                üzerinden programlara başvurabilir. Başvuru şartları,
                istenen belgeler ve değerlendirme kriterleri bölüme
                ve öğrencinin geldiği eğitim sistemine göre
                değişebilir.
            </p>

            <p>
                Kabul edilen öğrencilerin kayıt, denklik ve oturum
                izni gibi işlemler için üniversitenin uluslararası
                öğrenci birimiyle iletişime geçmesi gerekir. Güncel
                başvuru takvimi ve belge listesi üniversitenin resmi
                duyurularından takip edilmelidir.
            </p>
        `
    },


    "uluslararasi-ofis": {

        title: "🏢 Uluslararası Öğrenci Ofisi ve Destek Hizmetleri",

        text: `
            <p>
                Uluslararası öğrenci birimleri, yabancı uyruklu
                öğrencilerin kayıt, ikamet izni, sağlık sigortası ve
                üniversiteye uyum süreçlerinde destek sağlayan
                birimlerdir. Öğrencilerin Türkiye'deki üniversite
                yaşamına adapte olmasına yardımcı olacak rehberlik
                hizmetleri sunabilir.
            </p>

            <p>
                Kültürel uyum, sosyal etkinlikler ve akademik
                danışmanlık gibi konularda da destek alınabilecek bu
                birimler, öğrencilerin karşılaştığı sorunlarda ilk
                başvurulacak noktalardan biridir. Hizmetlerin kapsamı
                ve iletişim bilgileri üniversitenin güncel
                duyurularından öğrenilmelidir.
            </p>
        `
    },


    "uluslararasi-dil": {

        title: "🗣️ Türkçe Hazırlık ve Dil Desteği",

        text: `
            <p>
                Türkçe bilgisi yeterli düzeyde olmayan yabancı uyruklu
                öğrenciler için Türkçe hazırlık programları
                sunulabilir. Bu programlar öğrencilerin akademik
                derslere başlamadan önce dil yeterliliği kazanmasını
                amaçlar.
            </p>

            <p>
                Dil eğitimi süresi ve muafiyet şartları öğrencinin
                mevcut dil seviyesine göre değişebilir. Öğrencilerin
                Türkçe yeterlilik sınavı ve hazırlık programı ile
                ilgili güncel bilgileri ilgili dil eğitimi biriminden
                takip etmesi gerekir.
            </p>
        `
    },


    "uluslararasi-degisim": {

        title: "🔄 Gelen Değişim Öğrencileri (Incoming Erasmus)",

        text: `
            <p>
                Erasmus+ ve benzeri değişim programları kapsamında
                yurt dışındaki anlaşmalı üniversitelerden gelen
                öğrenciler, bir veya iki dönem boyunca üniversitede
                eğitim görebilir. Bu öğrenciler için ders seçimi,
                barınma ve oryantasyon süreçleri ayrıca planlanır.
            </p>

            <p>
                Gelen değişim öğrencileriyle etkileşime geçmek,
                yerel öğrenciler için de farklı kültürleri tanıma ve
                yabancı dil pratiği yapma açısından değerli bir
                fırsat olabilir. Öğrenci toplulukları zaman zaman bu
                öğrencilere yönelik ortak etkinlikler düzenleyebilir.
            </p>
        `
    },


    // ==========================================
    // KAMPÜS GÜVENLİĞİ VE ACİL DURUM
    // ==========================================

    "guvenlik-birim": {

        title: "🛡️ Kampüs Güvenlik Birimi",

        text: `
            <p>
                Kampüs güvenlik birimleri, öğrencilerin ve personelin
                güvenli bir ortamda eğitim ve çalışma faaliyetlerini
                sürdürebilmesi için giriş-çıkış kontrolü, devriye
                hizmetleri ve genel güvenlik düzenini sağlamakla
                görevlidir.
            </p>

            <p>
                Kampüs içerisinde herhangi bir güvenlik sorunuyla
                karşılaşan öğrencilerin en yakın güvenlik noktasına
                veya ilgili birime bilgi vermesi önemlidir. Güvenlik
                birimlerinin iletişim numaraları genellikle kampüs
                içindeki bilgilendirme panolarında ve üniversite
                web sitesinde paylaşılır.
            </p>
        `
    },


    "guvenlik-acil": {

        title: "🚑 Acil Durum ve İlk Yardım Prosedürleri",

        text: `
            <p>
                Kampüs içerisinde sağlık sorunu, kaza veya doğal afet
                gibi acil durumlarla karşılaşılması ihtimaline karşı
                üniversitelerde genellikle acil durum prosedürleri ve
                ilk yardım noktaları bulunur. Öğrencilerin bu
                prosedürleri ve en yakın sağlık biriminin konumunu
                dönem başında öğrenmesi faydalı olur.
            </p>

            <p>
                Acil bir durumda güvenlik birimi veya kampüs içindeki
                sağlık biriminin (Mediko-Sosyal) aranması, sorunun
                hızlı şekilde çözülmesine yardımcı olur. Deprem,
                yangın gibi durumlarda izlenmesi gereken tahliye
                planları bina girişlerinde asılı bilgilendirmelerden
                takip edilebilir.
            </p>
        `
    },


    "guvenlik-aydinlatma": {

        title: "💡 Aydınlatma ve Güvenli Ulaşım Güzergâhları",

        text: `
            <p>
                Özellikle akşam saatlerinde kampüs içerisinde hareket
                eden öğrenciler için aydınlatılmış ve işlek
                güzergâhları tercih etmek güvenlik açısından faydalı
                olabilir. Kampüs içi ana yollar ve yurt-fakülte
                arası güzergâhlar genellikle daha yoğun kullanılan
                ve aydınlatılan alanlardır.
            </p>

            <p>
                Akşam ders veya etkinliklerden sonra kampüsten
                ayrılacak öğrencilerin mümkünse toplu halde hareket
                etmesi ve kampüs içi ring veya toplu taşıma
                seçeneklerini değerlendirmesi önerilir.
            </p>
        `
    },


    "guvenlik-kayipesya": {

        title: "🔍 Kayıp Eşya ve Bildirim Süreci",

        text: `
            <p>
                Kampüs içerisinde eşyasını kaybeden veya bir eşya
                bulan öğrenciler genellikle güvenlik birimine veya
                ilgili idari birime bildirimde bulunabilir. Kayıp
                eşya bildirimlerinin mümkün olduğunca hızlı yapılması,
                eşyanın sahibine ulaştırılma ihtimalini artırır.
            </p>

            <p>
                Önemli belgelerin (öğrenci kimliği, kartlar vb.)
                kaybolması durumunda ilgili idari birimlerden yeniden
                çıkarılması için gereken prosedürler hakkında bilgi
                alınabilir.
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
                <strong>Program İçeriği:</strong>
                Yazılım Mühendisliği; algoritmalar, veri yapıları, nesne
                yönelimli programlama, veritabanı sistemleri, yazılım
                mimarisi ve yazılım geliştirme süreç yönetimi gibi
                konuları kapsayan bir mühendislik eğitimidir. Öğrenciler
                eğitimleri boyunca farklı programlama dilleri, geliştirme
                araçları ve proje yönetim yöntemleriyle tanışarak
                uçtan uca yazılım üretme becerisi kazanmayı hedefler.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar; yazılım geliştirici, sistem analisti, mobil
                ve web uygulama geliştirici, test ve kalite mühendisi
                gibi birçok pozisyonda kariyer yapabilir. Teknoloji
                şirketleri, yazılım firmaları, kamu kurumları ve
                serbest çalışma (freelance) proje geliştirme süreçleri
                de mezunların değerlendirebileceği alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Bilgisayar Mühendisliği; programlama, algoritmalar,
                veri yapıları, bilgisayar donanımı, işletim sistemleri,
                bilgisayar ağları, yapay zeka ve yazılım geliştirme gibi
                geniş bir yelpazeyi kapsayan bir mühendislik bölümüdür.
                Öğrenciler hem donanım hem de yazılım tarafında temel
                bilgiler edinerek bilgisayar sistemlerinin nasıl
                tasarlandığını ve çalıştığını kavrar.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar yazılım geliştirme, sistem mühendisliği,
                ağ ve güvenlik uzmanlığı, veri bilimi, gömülü sistemler
                ve yapay zeka gibi alanlarda çalışabilir. Teknoloji
                şirketleri, bankacılık, savunma sanayii ve araştırma
                kurumları bilgisayar mühendisliği mezunlarının yoğun
                olarak tercih edildiği sektörler arasındadır.
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
                <strong>Program İçeriği:</strong>
                Bu bölümde öğrenciler makine öğrenmesi, derin öğrenme,
                büyük veri analizi, istatistiksel modelleme ve veri
                mühendisliği gibi konularda eğitim alır. Programlama,
                matematik ve istatistik bilgisi ile veri işleme
                becerileri bir araya getirilerek öğrencilerin karmaşık
                veri kümelerinden anlamlı sonuçlar çıkarabilmesi
                hedeflenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar veri bilimci, makine öğrenmesi mühendisi,
                yapay zeka geliştirici ve veri mühendisi gibi
                pozisyonlarda çalışabilir. Teknoloji şirketlerinin
                yanında finans, sağlık, perakende ve üretim gibi
                sektörlerde veri odaklı karar destek sistemleri
                geliştirilmesinde de görev alabilirler.
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
                <strong>Program İçeriği:</strong>
                Elektrik-Elektronik Mühendisliği; elektrik devreleri,
                elektronik sistemler, haberleşme, kontrol sistemleri,
                otomasyon ve enerji üretim-dağıtım teknolojileri gibi
                geniş bir alanı kapsar. Öğrenciler devre tasarımından
                sinyal işlemeye, güç sistemlerinden gömülü sistemlere
                kadar farklı uzmanlık alanlarında temel bilgi ve
                uygulama deneyimi kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar enerji şirketleri, elektronik üretim
                firmaları, telekomünikasyon sektörü, otomasyon ve
                endüstriyel kontrol sistemleri alanlarında çalışabilir.
                Ayrıca kamu kurumlarındaki enerji ve altyapı projelerinde
                de görev alma imkânı bulunur.
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
                <strong>Program İçeriği:</strong>
                Makine Mühendisliği; mekanik sistemlerin tasarımı,
                üretim yöntemleri, termodinamik, akışkanlar mekaniği,
                malzeme bilimi ve makine elemanları gibi konuları
                kapsar. Öğrenciler bilgisayar destekli tasarım (CAD)
                araçlarını kullanmayı, mekanik sistemleri analiz
                etmeyi ve üretim süreçlerini planlamayı öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar otomotiv, enerji, üretim, havacılık ve
                makine imalat sektörlerinde tasarım, üretim ve
                Ar-Ge mühendisi olarak çalışabilir. Endüstriyel
                tesislerdeki bakım, kalite kontrol ve proje yönetimi
                süreçleri de mezunların değerlendirebileceği alanlar
                arasındadır.
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
                <strong>Program İçeriği:</strong>
                İnşaat Mühendisliği; yapı statiği, geoteknik mühendislik,
                ulaştırma, hidrolik-su yapıları ve inşaat yönetimi gibi
                alt disiplinleri kapsayan geniş kapsamlı bir mühendislik
                eğitimidir. Öğrenciler bina, köprü, yol ve altyapı
                projelerinin tasarım, analiz ve uygulama aşamalarını
                öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar yapı denetim firmaları, müteahhitlik
                şirketleri, belediyeler ve kamu kurumlarının altyapı
                projelerinde saha ve proje mühendisi olarak çalışabilir.
                Deprem mühendisliği, ulaştırma planlaması ve su yapıları
                gibi uzmanlık alanlarında da kariyer geliştirilebilir.
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
                <strong>Program İçeriği:</strong>
                Mekatronik Mühendisliği; mekanik, elektronik, yazılım
                ve otomasyon alanlarının birleşiminden oluşan
                disiplinler arası bir mühendislik bölümüdür. Öğrenciler
                robotik sistemler, sensör-aktüatör teknolojileri,
                kontrol sistemleri ve endüstriyel otomasyon konularında
                hem teorik hem uygulamalı eğitim alır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar üretim ve otomasyon şirketlerinde, robotik
                sistem geliştirme firmalarında ve endüstri 4.0
                projelerinde görev alabilir. Akıllı üretim hatları,
                robotik sistemler ve gömülü sistem geliştirme gibi
                alanlar mezunlar için önemli kariyer fırsatları sunar.
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
                <strong>Program İçeriği:</strong>
                Biyomedikal Mühendisliği; tıbbi cihaz tasarımı,
                biyosensörler, görüntüleme sistemleri, biyomalzemeler
                ve sağlık teknolojilerinin mühendislik prensipleriyle
                geliştirilmesi üzerine odaklanır. Öğrenciler mühendislik
                bilgisini biyoloji ve tıp alanındaki uygulamalarla
                birleştirmeyi öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar tıbbi cihaz üreten firmalarda, hastanelerin
                biyomedikal birimlerinde, Ar-Ge merkezlerinde ve
                sağlık teknolojileri şirketlerinde çalışabilir.
                Görüntüleme sistemleri, protez teknolojileri ve
                tıbbi yazılım geliştirme gibi alanlar da mezunların
                yönelebileceği uzmanlık konuları arasındadır.
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
                <strong>Program İçeriği:</strong>
                Otomotiv Mühendisliği; araç tasarımı, motor ve tahrik
                sistemleri, elektrikli ve hibrit araç teknolojileri,
                üretim süreçleri ve araç güvenliği gibi konuları
                kapsar. Öğrenciler geleneksel içten yanmalı motor
                teknolojilerinin yanında elektrikli araç ve otonom
                sürüş sistemleri gibi güncel gelişmeleri de öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar otomotiv üretim firmalarında, yan sanayi
                şirketlerinde, Ar-Ge merkezlerinde ve elektrikli
                araç teknolojileri geliştiren firmalarda tasarım
                ve üretim mühendisi olarak çalışabilir. Kalite
                kontrol ve test mühendisliği de sektördeki yaygın
                kariyer alanlarındandır.
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
                <strong>Program İçeriği:</strong>
                Endüstri Mühendisliği; üretim sistemlerinin tasarımı,
                optimizasyon, kalite yönetimi, tedarik zinciri, veri
                analizi ve süreç iyileştirme gibi konuları kapsayan
                çok yönlü bir mühendislik dalıdır. Öğrenciler hem
                mühendislik hem de yönetim becerilerini bir arada
                kullanarak sistemleri daha verimli hale getirmeyi
                öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar üretim planlama, lojistik, kalite yönetimi,
                süreç iyileştirme ve iş analistliği gibi pozisyonlarda
                farklı sektörlerde çalışabilir. Danışmanlık firmaları,
                üretim tesisleri ve tedarik zinciri yönetimi alanları
                da mezunların yoğun tercih ettiği kariyer yollarındandır.
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
                <strong>Program İçeriği:</strong>
                Kimya Mühendisliği; kimyasal proses tasarımı, üretim
                sistemleri, malzeme mühendisliği, enerji dönüşüm
                süreçleri ve endüstriyel proses optimizasyonu gibi
                konuları kapsar. Öğrenciler laboratuvar çalışmaları
                ve proses simülasyonları aracılığıyla kimyasal
                üretim süreçlerini tasarlama ve iyileştirme becerisi
                kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar kimya, petrokimya, ilaç, gıda ve enerji
                sektörlerindeki üretim tesislerinde proses mühendisi
                olarak çalışabilir. Ar-Ge merkezleri ve kalite
                kontrol birimleri de mezunların değerlendirebileceği
                önemli kariyer alanları arasındadır.
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
                <strong>Program İçeriği:</strong>
                Çevre Mühendisliği; su ve atık su arıtma sistemleri,
                katı atık yönetimi, hava kirliliği kontrolü, çevresel
                etki değerlendirme ve sürdürülebilirlik konularını
                kapsar. Öğrenciler çevresel sorunlara mühendislik
                çözümleri üretmeyi ve çevre mevzuatına uygun sistemler
                tasarlamayı öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar belediyeler, çevre danışmanlık firmaları,
                arıtma tesisleri ve sanayi kuruluşlarının çevre
                birimlerinde çalışabilir. Çevresel etki değerlendirme
                raporlaması ve sürdürülebilirlik projeleri de mezunlar
                için önemli kariyer fırsatları sunar.
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
                <strong>Program İçeriği:</strong>
                Tıp eğitimi; ilk yıllarda anatomi, fizyoloji, biyokimya
                gibi temel tıp bilimleriyle başlar, ardından farmakoloji,
                patoloji ve mikrobiyoloji gibi ara dönem derslerine
                geçilir. Eğitimin ilerleyen yıllarında klinik stajlar
                ağırlık kazanır ve öğrenciler farklı uzmanlık
                alanlarında hasta başında uygulamalı eğitim alır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar pratisyen hekim olarak görev yapabilir veya
                tıpta uzmanlık sınavı (TUS) ile farklı uzmanlık
                dallarında ihtisas yaparak kariyerlerine devam
                edebilir. Kamu hastaneleri, özel sağlık kuruluşları
                ve akademik kadrolar mezunların yönelebileceği
                başlıca alanlardır.
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
                <strong>Program İçeriği:</strong>
                Diş hekimliği eğitimi temel tıp bilimlerinin yanında
                ağız, diş ve çene sağlığına yönelik teorik dersleri
                ve klinik uygulamaları kapsar. Öğrenciler diş
                hastalıkları, ortodonti, protez, cerrahi ve koruyucu
                diş hekimliği gibi alanlarda uygulamalı eğitim alarak
                hasta tedavisi konusunda deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar serbest diş hekimliği kliniği açabilir, kamu
                veya özel sağlık kuruluşlarında çalışabilir ya da
                diş hekimliğinde uzmanlık eğitimine devam ederek
                ortodonti, ağız cerrahisi gibi alanlarda uzmanlaşabilir.
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
                <strong>Program İçeriği:</strong>
                Eczacılık eğitimi; ilaç kimyası, farmakoloji,
                farmasötik teknoloji, klinik eczacılık ve toksikoloji
                gibi alanları kapsar. Öğrenciler ilaçların
                geliştirilmesi, üretimi, güvenli kullanımı ve hasta
                danışmanlığı konularında hem teorik hem laboratuvar
                temelli eğitim alır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar serbest eczane açabilir, ilaç firmalarında
                Ar-Ge ve üretim birimlerinde çalışabilir veya hastane
                eczacılığı alanında görev alabilir. Klinik eczacılık
                ve ilaç güvenliği gibi uzmanlık alanları da mezunlar
                için kariyer seçenekleri arasındadır.
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
                <strong>Program İçeriği:</strong>
                Veterinerlik eğitimi; hayvan anatomisi ve fizyolojisi,
                hastalıkların teşhis ve tedavisi, cerrahi uygulamalar,
                hayvansal üretim ve halk sağlığı gibi konuları kapsar.
                Öğrenciler eğitimlerinin ilerleyen yıllarında klinik
                stajlar ve saha uygulamaları ile hayvan sağlığı
                konusunda uygulamalı deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar serbest veteriner kliniği açabilir, kamu
                kurumlarında (tarım ve hayvancılık birimleri) görev
                alabilir veya hayvancılık, gıda ve ilaç sektöründeki
                firmalarda çalışabilir. Akademik kariyer ve araştırma
                da mezunların yönelebileceği alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Hemşirelik eğitimi; temel sağlık bilimleri, hasta
                bakım süreçleri, klinik uygulamalar ve sağlık
                yönetimi konularını kapsar. Öğrenciler hastane
                stajları aracılığıyla farklı kliniklerde hasta
                bakımı, ilaç uygulamaları ve sağlık danışmanlığı
                konusunda uygulamalı deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar kamu ve özel hastanelerde, sağlık ocaklarında,
                huzurevlerinde ve özel sağlık kuruluşlarında hemşire
                olarak çalışabilir. Yoğun bakım, ameliyathane ve
                toplum sağlığı gibi alanlarda uzmanlaşma imkânı da
                bulunur.
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
                <strong>Program İçeriği:</strong>
                Beslenme ve Diyetetik bölümü; beslenme bilimi, toplum
                sağlığı, hastalıklarda beslenme tedavisi ve bireysel
                beslenme planlaması konularına odaklanır. Öğrenciler
                farklı yaş gruplarına ve sağlık durumlarına uygun
                beslenme programları hazırlamayı ve besin değerlerini
                analiz etmeyi öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar hastanelerde klinik diyetisyen, gıda
                firmalarında beslenme danışmanı veya serbest diyetisyen
                olarak çalışabilir. Spor beslenmesi, toplum sağlığı
                programları ve gıda endüstrisi de mezunların
                değerlendirebileceği alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Fizyoterapi ve Rehabilitasyon bölümü; hareket sistemi,
                nörolojik ve ortopedik rehabilitasyon, fiziksel tedavi
                yöntemleri ve fonksiyonel iyileşme süreçleri üzerine
                eğitim verir. Öğrenciler klinik uygulamalar aracılığıyla
                hasta değerlendirme ve tedavi planlaması konusunda
                deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar hastanelerde, özel fizyoterapi merkezlerinde,
                spor kulüplerinde ve rehabilitasyon merkezlerinde
                fizyoterapist olarak çalışabilir. Spor fizyoterapisi
                ve pediatrik rehabilitasyon gibi alanlarda uzmanlaşma
                imkânı da bulunur.
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
                <strong>Program İçeriği:</strong>
                Ebelik eğitimi; gebelik takibi, doğum ve doğum sonrası
                bakım, yenidoğan sağlığı ve kadın sağlığı konularında
                teorik ve uygulamalı eğitim sunar. Öğrenciler hastane
                ve sağlık merkezi stajları aracılığıyla doğum öncesi,
                sırası ve sonrası bakım süreçlerinde uygulamalı
                deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar kamu ve özel hastanelerde, doğumevlerinde
                ve aile sağlığı merkezlerinde ebe olarak çalışabilir.
                Anne-çocuk sağlığı programları ve toplum sağlığı
                hizmetleri de mezunların görev alabileceği alanlar
                arasındadır.
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
                <strong>Program İçeriği:</strong>
                Sağlık Yönetimi bölümü; sağlık kurumlarının yönetimi,
                sağlık ekonomisi ve finansmanı, sağlık politikaları
                ve organizasyon yönetimi gibi konuları kapsar.
                Öğrenciler hem işletme hem de sağlık sistemleri
                bilgisini bir araya getirerek sağlık kuruluşlarının
                verimli şekilde yönetilmesi için gerekli becerileri
                kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar hastane yöneticiliği, sağlık sigortası
                şirketleri, sağlık bakanlığı birimleri ve özel sağlık
                kuruluşlarının idari kadrolarında çalışabilir. Sağlık
                politikaları geliştirme ve sağlık hizmetleri
                danışmanlığı da mezunlar için kariyer seçenekleri
                arasındadır.
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
                <strong>Program İçeriği:</strong>
                Dijital Oyun Tasarımı bölümü; oyun tasarımı ilkeleri,
                3D modelleme, oyun motorları, görsel tasarım, senaryo
                yazımı ve interaktif medya konularını kapsar. Öğrenciler
                hem yaratıcı hem de teknik becerileri bir araya
                getirerek oyun geliştirme sürecinin tüm aşamalarında
                deneyim kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar oyun stüdyolarında oyun tasarımcısı, seviye
                tasarımcısı, 3D sanatçı veya oyun geliştirici olarak
                çalışabilir. Bağımsız oyun geliştirme (indie), animasyon
                stüdyoları ve interaktif medya projeleri de mezunlar
                için önemli kariyer alanlarındandır.
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
                <strong>Program İçeriği:</strong>
                Bu bölümde öğrenciler radyo ve televizyon yapımcılığı,
                sinema tarihi ve kuramı, senaryo yazımı, kurgu ve
                görsel-işitsel anlatım teknikleri konusunda eğitim
                alır. Uygulamalı stüdyo çalışmaları ve proje
                ödevleriyle öğrenciler kamera arkası ve önü süreçlerini
                birlikte deneyimler.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar televizyon kanallarında, prodüksiyon
                şirketlerinde, dijital medya platformlarında ve
                reklam ajanslarında yapımcı, yönetmen yardımcısı,
                kurgu editörü veya içerik üreticisi olarak çalışabilir.
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
                <strong>Program İçeriği:</strong>
                Gazetecilik bölümü; haber toplama ve yazma teknikleri,
                araştırmacı gazetecilik, medya etiği, dijital
                gazetecilik ve iletişim teknolojileri konularını
                kapsar. Öğrenciler hem yazılı hem de dijital medya
                ortamlarında haber üretme ve içerik hazırlama
                becerisi kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar gazete, televizyon ve dijital haber
                platformlarında muhabir, editör veya içerik üreticisi
                olarak çalışabilir. Kurumsal iletişim birimleri ve
                basın danışmanlığı da mezunların yönelebileceği
                alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Halkla İlişkiler ve Tanıtım bölümü; kurumsal iletişim,
                marka yönetimi, medya ilişkileri, kriz yönetimi ve
                dijital pazarlama iletişimi gibi konuları kapsar.
                Öğrenciler kurumların hedef kitleleriyle etkili
                iletişim kurmasını sağlayacak stratejiler geliştirmeyi
                öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar şirketlerin kurumsal iletişim birimlerinde,
                halkla ilişkiler ajanslarında, reklam ve pazarlama
                şirketlerinde uzman veya yönetici olarak çalışabilir.
                Marka yönetimi ve sosyal medya iletişimi de güncel
                kariyer alanları arasındadır.
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
                <strong>Program İçeriği:</strong>
                Psikoloji bölümü; insan davranışları, bilişsel
                süreçler, gelişim psikolojisi, sosyal psikoloji ve
                klinik psikoloji gibi farklı alt alanları bilimsel
                yöntemlerle inceler. Öğrenciler araştırma yöntemleri,
                istatistik ve psikolojik test uygulamaları konusunda
                da eğitim alır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Lisans mezunları insan kaynakları, araştırma
                şirketleri ve sosyal hizmet kurumlarında görev
                alabilir; klinik psikolog olarak çalışabilmek için
                genellikle lisansüstü eğitim gerekir. Eğitim
                kurumları ve danışmanlık merkezleri de değerlendirilebilecek
                alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Sosyoloji bölümü; toplum yapısı, sosyal ilişkiler,
                kültür, kurumlar, toplumsal değişim ve sosyal
                araştırma yöntemleri üzerine çalışmalar yürütür.
                Öğrenciler saha araştırmaları ve veri analizi
                aracılığıyla toplumsal olguları bilimsel bir
                bakış açısıyla incelemeyi öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar araştırma şirketlerinde, kamu kurumlarının
                sosyal politika birimlerinde, sivil toplum
                kuruluşlarında ve insan kaynakları alanında
                çalışabilir. Akademik kariyer de sosyoloji
                mezunlarının tercih ettiği yollardan biridir.
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
                <strong>Program İçeriği:</strong>
                İngiliz Dili ve Edebiyatı bölümü; İngiliz ve dünya
                edebiyatı, dilbilim, edebi metin analizi ve çeviri
                çalışmaları gibi alanları kapsar. Öğrenciler ileri
                düzey İngilizce dil becerilerinin yanında edebi
                eserleri eleştirel bir bakış açısıyla incelemeyi
                öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar çeviri ve yayıncılık sektöründe, eğitim
                kurumlarında, uluslararası şirketlerde ve medya
                kuruluşlarında çalışabilir. Öğretmenlik yapabilmek
                için genellikle pedagojik formasyon eğitimi
                gerekmektedir.
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
                <strong>Program İçeriği:</strong>
                Mimarlık bölümü; mimari tasarım, yapı teknolojileri,
                teknik çizim, bilgisayar destekli modelleme ve mekân
                planlama gibi konuları kapsar. Öğrenciler atölye
                dersleri aracılığıyla bina ve mekân tasarımı
                projeleri geliştirerek hem yaratıcı hem de teknik
                becerilerini bir arada kullanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar mimarlık bürolarında, inşaat ve gayrimenkul
                şirketlerinde, belediyelerin imar birimlerinde ve
                kamu kurumlarında mimar olarak çalışabilir. İç
                mekân tasarımı ve kentsel tasarım da mezunların
                yönelebileceği uzmanlık alanları arasındadır.
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
                <strong>Program İçeriği:</strong>
                Şehir ve Bölge Planlama bölümü; kentlerin planlanması,
                arazi kullanım kararları, ulaşım planlaması,
                sürdürülebilir kentleşme ve bölgesel gelişim
                konularını inceler. Öğrenciler harita okuma,
                coğrafi bilgi sistemleri (CBS) ve planlama
                yazılımlarını kullanmayı öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar belediyelerin imar ve planlama birimlerinde,
                kalkınma ajanslarında, kamu kurumlarında ve şehir
                planlama danışmanlık firmalarında şehir plancısı
                olarak çalışabilir. Kentsel dönüşüm projeleri de
                mezunlar için önemli bir kariyer alanıdır.
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
                <strong>Program İçeriği:</strong>
                İşletme bölümü; yönetim ve organizasyon, pazarlama,
                finans, muhasebe, insan kaynakları ve girişimcilik
                gibi işletme fonksiyonlarını kapsayan geniş kapsamlı
                bir eğitim sunar. Öğrenciler işletmelerin farklı
                departmanlarında karar alma ve yönetim süreçlerini
                öğrenir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar özel sektör şirketlerinde, bankacılık ve
                finans kuruluşlarında, pazarlama ve satış birimlerinde
                veya kendi işlerini kurarak girişimci olarak
                çalışabilir. İnsan kaynakları ve proje yönetimi de
                yaygın tercih edilen kariyer alanlarıdır.
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
                <strong>Program İçeriği:</strong>
                İktisat bölümü; mikroekonomi, makroekonomi, ekonomik
                politikalar, uluslararası ticaret, finans piyasaları
                ve ekonomik veri analizi gibi konuları kapsar.
                Öğrenciler ekonomik olayları analiz etme ve veri
                temelli değerlendirme yapma becerisi kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar bankacılık, finans kuruluşları, kamu
                kurumlarının ekonomi ve planlama birimleri ile
                araştırma şirketlerinde ekonomist veya analist
                olarak çalışabilir. Uluslararası kuruluşlar da
                mezunların değerlendirebileceği alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Bu bölümde öğrenciler kamu yönetimi, siyaset bilimi,
                anayasa hukuku, kamu politikaları ve yönetim
                süreçleri gibi konularda eğitim alır. Program,
                kamu kurumlarının işleyişini ve siyasal sistemleri
                analiz edebilme becerisi kazandırmayı hedefler.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar kamu kurumlarında memur veya uzman olarak
                çalışabilir, kamu personeli seçme sınavı (KPSS)
                sonucuna göre farklı devlet kurumlarına
                yerleşebilir. Sivil toplum kuruluşları ve
                uluslararası kuruluşlar da mezunlar için
                değerlendirilebilecek alanlardandır.
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
                <strong>Program İçeriği:</strong>
                İlahiyat eğitimi; temel İslam bilimleri, din
                bilimleri, İslam tarihi, felsefe ve Arapça gibi
                alanları kapsar. Öğrenciler dini metinleri analiz
                etme, dinler tarihi ve din eğitimi konularında
                akademik bir bakış açısı kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar Diyanet İşleri Başkanlığı bünyesinde din
                görevlisi olarak çalışabilir, pedagojik formasyon
                alarak din kültürü ve ahlak bilgisi öğretmenliği
                yapabilir. Akademik kariyer de mezunların tercih
                ettiği yollardan biridir.
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
                <strong>Program İçeriği:</strong>
                PDR bölümü; psikolojik danışma kuramları, gelişim
                psikolojisi, eğitim psikolojisi, rehberlik teknikleri
                ve danışmanlık uygulamaları üzerine eğitim verir.
                Öğrenciler uygulamalı stajlar aracılığıyla bireysel
                ve grup danışmanlığı becerileri geliştirir.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar okullarda rehber öğretmen olarak, rehberlik
                araştırma merkezlerinde veya özel danışmanlık
                merkezlerinde psikolojik danışman olarak çalışabilir.
                Kariyer danışmanlığı ve kurumsal danışmanlık da
                mezunlar için değerlendirilebilecek alanlardır.
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
                <strong>Program İçeriği:</strong>
                Okul Öncesi Öğretmenliği bölümü; erken çocukluk
                dönemi gelişimi, oyun ve öğrenme yöntemleri, çocuk
                psikolojisi ve okul öncesi eğitim programları gibi
                konuları kapsar. Öğrenciler uygulama okullarında
                staj yaparak sınıf yönetimi ve etkinlik planlama
                becerisi kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar Milli Eğitim Bakanlığı'na bağlı anaokulu
                ve ilkokulların anasınıflarında, özel kreş ve
                anaokullarında öğretmen olarak çalışabilir.
                Erken çocukluk eğitimi materyali geliştirme de
                değerlendirilebilecek alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                İngilizce Öğretmenliği bölümü; ileri düzey İngilizce
                dil becerileri, dil öğretim yöntemleri, öğretim
                teknolojileri ve sınıf yönetimi konularını kapsar.
                Öğrenciler okul stajları aracılığıyla ders planlama
                ve öğretim uygulaması deneyimi kazanır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar Milli Eğitim Bakanlığı'na bağlı okullarda
                veya özel dil okullarında İngilizce öğretmeni olarak
                çalışabilir. Dil eğitimi materyali geliştirme,
                kurumsal dil eğitimi ve çevrimiçi eğitim platformları
                da değerlendirilebilecek alanlar arasındadır.
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
                <strong>Program İçeriği:</strong>
                Bu bölümde öğrenciler matematik öğretim yöntemleri,
                eğitim bilimleri, ölçme-değerlendirme ve ortaokul
                düzeyinde matematik konularının nasıl öğretileceği
                üzerine eğitim alır. Uygulama okullarındaki stajlar
                sayesinde sınıf içi öğretim deneyimi kazanılır.
            </p>

            <p>
                <strong>Kariyer Fırsatları:</strong>
                Mezunlar Milli Eğitim Bakanlığı'na bağlı ortaokullarda
                matematik öğretmeni olarak çalışabilir. Özel
                dershaneler, eğitim kurumları ve öğretim materyali
                geliştirme çalışmaları da mezunlar için değerlendirilebilecek
                alanlar arasındadır.
            </p>
        `
    },
    "hamza": {
    title: "🏗️ Hamza Yanılmaz",
    text: `
        <p>Hamza Yanılmaz, mezuniyet sonrasında kariyer yolculuğuna başarılı bir şekilde devam eden mezunlarımızdan biridir. Üniversite yıllarında aldığı eğitim, mesleki gelişiminin temelini oluşturmuştur. Öğrencilik döneminde edindiği teorik bilgiler, iş hayatında karşılaştığı problemlere çözüm üretmesine yardımcı olmuştur. Farklı projelerde görev alarak ekip çalışması konusunda kendisini geliştirmiştir. Teknoloji ve mesleki gelişmeleri takip ederek kendisini sürekli yenilemeye çalışmaktadır. Üniversitede kazandığı deneyimleri profesyonel hayatında kullanmaktadır. Karşılaştığı zorlukları yeni şeyler öğrenmek için bir fırsat olarak değerlendirmektedir. Kariyerinde ilerlerken disiplinli ve planlı çalışmaya önem vermektedir. Mesleki hedeflerine ulaşmak için kendisini geliştirmeye devam etmektedir. Başarı hikâyesi, öğrencilerimiz için ilham verici bir örnek oluşturmaktadır.</p>
    `
},

"asaf": {
    title: "💻 Asaf",
    text: `
        <p>Asaf, üniversite eğitiminin ardından teknoloji ve yazılım alanında kendisini geliştiren mezunlarımızdan biridir. Üniversite yıllarında kazandığı programlama bilgilerini farklı çalışmalarla pekiştirmiştir. Yazılım dünyasındaki yeni teknolojileri takip etmeye önem vermektedir. Projeler geliştirerek teorik bilgilerini uygulamaya dönüştürmektedir. Problem çözme becerilerini geliştirmek için farklı teknikler üzerinde çalışmaktadır. Ekip içerisinde çalışarak iletişim ve iş birliği yeteneklerini de geliştirmiştir. Kendi alanında deneyim kazanırken sürekli yeni bilgiler öğrenmeye devam etmektedir. Teknolojinin hızlı değişimine uyum sağlamak için kendisini güncel tutmaktadır. Gelecekte daha büyük ve kapsamlı projelerde yer almayı hedeflemektedir. Çalışmaları, yazılım alanında kariyer yapmak isteyen öğrenciler için güzel bir örnektir.</p>
    `
},

"savunma": {
    title: "🛡️ Savunma Sanayii",
    text: `
        <p>Savunma sanayii, teknoloji ve mühendisliğin bir araya geldiği önemli çalışma alanlarından biridir. Bu alanda görev alan mezunlarımız üniversitede kazandıkları teknik bilgileri profesyonel hayatta kullanmaktadır. Savunma projelerinde dikkatli ve sistematik çalışmak büyük önem taşımaktadır. Mühendislik bilgisi yanında ekip çalışması da başarılı projelerin önemli bir parçasıdır. Mezunlarımız farklı teknolojiler üzerinde çalışarak kendilerini geliştirme fırsatı bulmaktadır. Yeni nesil sistemlerin geliştirilmesi sürekli öğrenmeyi gerektirmektedir. Üniversitede yapılan projeler, öğrencilerin bu sektöre hazırlanmasına katkı sağlamaktadır. Teknik problemlere çözüm üretme becerisi bu alanda önemli bir avantaj sağlamaktadır. Disiplinli çalışma ve sorumluluk bilinci sektör içerisinde büyük önem taşımaktadır. Bu kariyer alanı, teknik yeteneklerini geliştirmek isteyen öğrenciler için önemli fırsatlar sunmaktadır.</p>
    `
},

"global": {
    title: "🌍 Global Kariyer",
    text: `
        <p>Global kariyer, mezunların farklı ülkelerde ve uluslararası şirketlerde çalışma fırsatı elde etmesini ifade etmektedir. Uluslararası çalışma ortamları farklı kültürlerle iletişim kurma imkânı sağlamaktadır. Yabancı dil bilgisi global kariyer hedeflerinde önemli bir avantaj oluşturmaktadır. Mezunlarımız farklı ülkelerdeki çalışma kültürlerini deneyimleyerek kendilerini geliştirebilmektedir. Uluslararası projelerde görev almak profesyonel deneyimin genişlemesine katkı sağlamaktadır. Farklı bakış açılarıyla çalışmak problem çözme yeteneğini geliştirebilmektedir. Teknolojinin gelişmesi sayesinde dünyanın farklı bölgelerindeki ekiplerle çalışmak daha kolay hale gelmiştir. Global kariyer hedefleyen öğrencilerin akademik gelişimlerinin yanında iletişim becerilerine de önem vermesi gerekmektedir. Farklı kültürlere açık olmak uluslararası çalışma ortamlarına uyum sağlamayı kolaylaştırmaktadır. Global kariyer, öğrencilere geniş bir profesyonel çevre oluşturma fırsatı sunmaktadır.</p>
    `
},

"adli": {
    title: "⚖️ Adli Bilişim",
    text: `
        <p>Adli bilişim, dijital ortamda bulunan verilerin incelenmesi ve analiz edilmesiyle ilgilenen önemli bir çalışma alanıdır. Bu alanda bilgisayar bilimleri ile hukuk süreçleri bir araya gelmektedir. Dijital verilerin doğru şekilde incelenmesi büyük dikkat ve teknik bilgi gerektirmektedir. Adli bilişim uzmanları farklı dijital kaynaklardan elde edilen bilgileri analiz edebilmektedir. Üniversitede öğrenilen bilgisayar ve yazılım bilgileri bu alanda önemli bir temel oluşturmaktadır. Analitik düşünme ve problem çözme becerileri mesleki çalışmalar açısından önemlidir. Teknolojinin gelişmesiyle birlikte adli bilişimin çalışma alanları da genişlemektedir. Dijital güvenlik konusunda bilinçli olmak bu alanda çalışan kişiler için önemli bir kazanımdır. Alan sürekli geliştiği için yeni teknolojileri ve yöntemleri takip etmek gerekmektedir. Adli bilişim, teknoloji ve analiz alanlarına ilgi duyan öğrenciler için dikkat çekici bir kariyer seçeneğidir.</p>
    `
},

"ai": {
    title: "🤖 Yapay Zekâ",
    text: `
        <p>Yapay zekâ, günümüzde birçok farklı sektörde kullanılan gelişen teknoloji alanlarından biridir. Bu alanda bilgisayarların belirli görevleri gerçekleştirebilmesi için farklı yöntemler kullanılmaktadır. Makine öğrenmesi ve veri analizi yapay zekâ çalışmalarının önemli konuları arasında yer almaktadır. Öğrenciler temel programlama bilgilerini kullanarak yapay zekâ alanında kendilerini geliştirebilir. Matematiksel düşünme ve problem çözme becerileri bu alandaki çalışmalar için faydalıdır. Yapay zekâ projelerinde veri toplama ve verileri doğru şekilde değerlendirme önemli bir aşamadır. Teknolojinin hızlı gelişmesi bu alanda sürekli öğrenmeyi gerekli kılmaktadır. Farklı sektörlerde yapay zekâ çözümlerine olan ilgi giderek artmaktadır. Bu alanda çalışmak isteyen öğrencilerin programlama ve veri konularında kendilerini geliştirmeleri faydalı olacaktır. Yapay zekâ, geleceğin teknoloji kariyerleri arasında önemli bir yere sahip olmaya devam etmektedir.</p>
    `
},

"fintek": {
    title: "💳 Fintek",
    text: `
        <p>Fintek, finansal hizmetlerle teknolojinin birleştiği modern ve gelişen bir çalışma alanıdır. Bu sektörde yazılım ve dijital teknolojiler finansal işlemleri kolaylaştırmak için kullanılmaktadır. Mobil ödeme sistemleri ve dijital bankacılık fintek alanındaki gelişmelere örnek olarak gösterilebilir. Yazılım bilgisi olan mezunlar bu sektörde farklı projelerde görev alabilmektedir. Finansal verilerin güvenli bir şekilde işlenmesi sektör açısından büyük önem taşımaktadır. Siber güvenlik de fintek sistemlerinin önemli parçalarından biridir. Fintek projelerinde kullanıcı deneyimi ve kolay kullanılabilirlik de dikkate alınmaktadır. Teknolojik gelişmeler finans sektöründeki çalışma yöntemlerini değiştirmektedir. Bu alanda çalışmak isteyen öğrencilerin yazılım ve teknoloji bilgilerinin yanında finans konularına da ilgi duyması faydalı olabilir. Fintek, teknoloji ile finansı birleştirmek isteyen mezunlar için geniş kariyer olanakları sunmaktadır.</p>
    `
},

"oyun": {
    title: "🎮 Oyun Geliştirme",
    text: `
        <p>Oyun geliştirme, yazılım ve yaratıcılığın bir arada kullanıldığı teknoloji alanlarından biridir. Bir oyun projesinin ortaya çıkması için programlama, tasarım ve farklı teknik çalışmaların birlikte yürütülmesi gerekir. Oyun motorları geliştiricilerin fikirlerini dijital ortama aktarmasına yardımcı olmaktadır. Programlama bilgisi oyun mekaniklerinin oluşturulmasında önemli bir rol oynamaktadır. Grafik ve ses gibi unsurlar da oyuncuların deneyimini geliştirmektedir. Oyun geliştirme ekip çalışmasının oldukça önemli olduğu alanlardan biridir. Proje sürecinde karşılaşılan teknik sorunlar problem çözme becerilerini geliştirmektedir. Yeni teknolojileri takip etmek geliştiricilerin kendilerini sürekli yenilemesini sağlamaktadır. Öğrenciler küçük projeler geliştirerek oyun sektörüne yönelik deneyim kazanmaya başlayabilir. Oyun geliştirme, yazılım ve yaratıcı projelere ilgi duyan öğrenciler için keyifli bir kariyer alanıdır.</p>
    `
},

"staj": {
    title: "💼 Staj Deneyimi",
    text: `
        <p>Staj, öğrencilerin üniversitede öğrendikleri bilgileri gerçek çalışma ortamında deneyimlemelerini sağlayan önemli bir süreçtir. Staj sürecinde öğrenciler profesyonel çalışma düzenini yakından tanıma fırsatı bulmaktadır. Gerçek projelerde görev almak teorik bilgilerin uygulamaya dönüştürülmesine yardımcı olmaktadır. İş arkadaşlarıyla iletişim kurmak öğrencilerin ekip çalışması becerilerini geliştirmektedir. Staj sırasında farklı teknolojiler ve çalışma yöntemleri öğrenilebilmektedir. Karşılaşılan problemlerin çözülmesi öğrencilerin mesleki özgüvenlerini artırmaktadır. Staj deneyimi öğrencilerin hangi alanlarda çalışmak istediklerini keşfetmelerine yardımcı olabilir. Profesyonel iş ortamını erken dönemde görmek kariyer planlamasına katkı sağlamaktadır. Staj sırasında oluşturulan bağlantılar ilerleyen dönemlerde yeni fırsatların oluşmasına yardımcı olabilir. Bu nedenle staj, öğrencilerin kariyer yolculuğunda önemli bir deneyim olarak değerlendirilmektedir.</p>
    `
},

"github": {
    title: "🐙 GitHub",
    text: `
        <p>GitHub, yazılım projelerinin saklanması ve geliştirilmesi için kullanılan popüler platformlardan biridir. Öğrenciler projelerini GitHub üzerinde paylaşarak çalışmalarını daha düzenli şekilde takip edebilir. Git sistemi sayesinde projelerde yapılan değişiklikler kayıt altında tutulabilmektedir. Ekip halinde çalışan geliştiriciler aynı proje üzerinde birlikte çalışabilmektedir. GitHub profili, öğrencilerin geliştirdikleri projeleri sergilemeleri açısından faydalı olabilir. Açık kaynak projelerine katkı yapmak farklı yazılım teknolojilerinin öğrenilmesine yardımcı olmaktadır. Proje geçmişinin tutulması yapılan çalışmaların gelişimini görmeyi kolaylaştırmaktadır. GitHub kullanmak öğrencilerin yazılım geliştirme süreçlerini daha profesyonel şekilde öğrenmesine katkı sağlayabilir. Projeleri düzenli ve anlaşılır şekilde paylaşmak geliştiricilerin çalışmalarını daha kolay tanıtmasına yardımcı olur. Bu nedenle GitHub, yazılım alanında kariyer hedefleyen öğrenciler için faydalı bir araçtır.</p>
    `
},

"leetcode": {
    title: "🧩 LeetCode",
    text: `
        <p>LeetCode, programlama ve algoritma problemleri üzerinde çalışma yapılabilen bir platformdur. Platform farklı seviyelerde birçok problem çözme fırsatı sunmaktadır. Algoritma soruları öğrencilerin problem çözme becerilerini geliştirmesine yardımcı olmaktadır. Farklı programlama dilleri kullanılarak aynı problem üzerinde çalışmalar yapılabilmektedir. Düzenli problem çözmek algoritmik düşünme yeteneğinin gelişmesine katkı sağlayabilir. Problemleri çözerken performans ve kod verimliliği gibi konular da öğrenilmektedir. Bu çalışmalar yazılım mülakatlarına hazırlanma sürecinde de faydalı olabilir. Öğrenciler çözdükleri problemlerin üzerinden geçerek farklı çözüm yöntemlerini karşılaştırabilir. Algoritma bilgisi geliştikçe daha karmaşık problemlerin çözülmesi mümkün hale gelmektedir. LeetCode, yazılım becerilerini geliştirmek isteyen öğrenciler için pratik yapma imkânı sunmaktadır.</p>
    `
},

"alumni": {
    title: "🎓 Mezunlar",
    text: `
        <p>Üniversitemizden mezun olan öğrenciler farklı sektörlerde kariyerlerine devam etmektedir. Mezunlarımızın sahip olduğu farklı deneyimler öğrenciler için önemli bir ilham kaynağı oluşturmaktadır. Mezuniyet sonrasında iş hayatına atılan öğrenciler üniversitede kazandıkları bilgileri profesyonel ortamda kullanmaktadır. Farklı sektörlerde görev almak mezunların farklı alanlarda uzmanlaşmasına imkân sağlamaktadır. Mezunlarımız teknoloji, mühendislik, yazılım ve birçok farklı alanda çalışmalar gerçekleştirebilmektedir. Üniversite döneminde yapılan projeler kariyer hayatına hazırlanma konusunda önemli katkılar sağlamaktadır. Staj ve proje deneyimleri mezuniyet sonrasında iş hayatına geçişi kolaylaştırabilmektedir. Mezunların kariyer hikâyeleri mevcut öğrencilerin gelecek planlarını şekillendirmesine yardımcı olabilir. Mezunlar arasındaki iletişim ve dayanışma üniversite topluluğunun devamlılığı açısından önemlidir. Her mezunun farklı bir kariyer yolculuğu olması, öğrencilere birçok farklı gelecek seçeneği göstermektedir.</p>
    `
},
"ogrenci-topluluklari": {
    title: "💻 Yazılım ve Yapay Zeka Kulübü",
    text: `
        <p>Yazılım ve Yapay Zeka Kulübü, teknoloji alanına ilgi duyan öğrencileri bir araya getiren öğrenci topluluklarından biridir. Kulüp kapsamında C ve Python gibi programlama dilleri üzerine çeşitli çalışmalar gerçekleştirilmektedir. Web ve mobil uygulama geliştirme konusunda öğrencilerin kendilerini geliştirmelerine yönelik etkinlikler düzenlenmektedir. Workshoplar sayesinde öğrenciler öğrendikleri teorik bilgileri uygulamalı olarak deneyimleme fırsatı bulmaktadır. Kulüp üyeleri farklı projeler üzerinde çalışarak takım çalışması ve problem çözme becerilerini geliştirebilmektedir. Hackathonlar öğrencilerin kısa süre içerisinde proje üretme ve fikirlerini hayata geçirme deneyimi kazanmalarına yardımcı olmaktadır. Düzenlenen teknik geziler sayesinde öğrenciler teknoloji sektörünü ve profesyonel çalışma ortamlarını daha yakından tanıyabilmektedir. Kulüp etkinlikleri öğrencilerin hem teknik hem de sosyal becerilerini geliştirmelerine katkı sağlamaktadır. Farklı seviyelerdeki öğrencilerin bir araya gelmesi bilgi paylaşımını ve dayanışmayı artırmaktadır. Yazılım ve Yapay Zeka Kulübü, teknoloji alanında kendisini geliştirmek isteyen öğrenciler için aktif bir öğrenme ortamı sunmaktadır.</p>
    `
},

"ogrenci-yarismalar": {
    title: "⚙️ IEEE Fırat Öğrenci Kolu",
    text: `
        <p>IEEE Fırat Öğrenci Kolu, mühendislik ve teknoloji alanlarına ilgi duyan öğrencileri bir araya getiren önemli öğrenci topluluklarından biridir. Öğrencilerin akademik ve mesleki gelişimlerine katkı sağlamak amacıyla çeşitli etkinlikler gerçekleştirilmektedir. Uluslararası mühendislik projeleri öğrencilerin farklı disiplinlerde deneyim kazanmasına yardımcı olmaktadır. Kariyer günleri sayesinde öğrenciler sektör temsilcileriyle bir araya gelme fırsatı bulabilmektedir. Düzenlenen akademik seminerler öğrencilerin güncel teknolojiler ve mühendislik çalışmaları hakkında bilgi edinmesini sağlamaktadır. Proje çalışmaları sırasında öğrenciler ekip içerisinde görev alarak iş birliği becerilerini geliştirebilmektedir. Farklı etkinlikler öğrencilerin üniversite hayatını daha aktif ve verimli geçirmelerine katkıda bulunmaktadır. Öğrenciler kendi fikirlerini projelere dönüştürerek uygulamalı deneyim kazanabilmektedir. Akademik ve profesyonel çevrelerle kurulan iletişim öğrencilerin kariyer hedeflerini şekillendirmesine yardımcı olabilmektedir. IEEE Fırat Öğrenci Kolu, mühendislik alanında kendisini geliştirmek isteyen öğrenciler için çeşitli fırsatlar sunmaktadır.</p>
    `
},

"adli": {
    title: "🛡️ Siber Güvenlik Topluluğu",
    text: `
        <p>Siber Güvenlik Topluluğu, bilgisayar ve ağ güvenliği konularına ilgi duyan öğrencileri bir araya getiren bir öğrenci topluluğudur. Topluluk kapsamında ağ güvenliği hakkında temel ve uygulamalı çalışmalar gerçekleştirilmektedir. Öğrenciler siber güvenliğin temel kavramlarını öğrenerek bu alandaki bilgilerini geliştirme fırsatı bulmaktadır. CTF yarışmaları sayesinde öğrenciler farklı güvenlik problemleri üzerinde çalışma deneyimi kazanabilmektedir. Sızma testleri konusunda yapılan çalışmalar güvenlik açıklarının nasıl değerlendirildiğini anlamaya yardımcı olmaktadır. Düzenlenen eğitimler öğrencilerin teknik bilgilerini adım adım geliştirmelerine katkı sağlamaktadır. Topluluk içerisinde yapılan çalışmalar problem çözme ve analitik düşünme becerilerinin gelişmesini desteklemektedir. Öğrenciler ekip halinde çalışarak hem teknik hem de iletişim becerilerini geliştirebilmektedir. Siber güvenlik alanındaki güncel gelişmeler takip edilerek öğrencilerin sektördeki yeniliklerden haberdar olması sağlanmaktadır. Siber Güvenlik Topluluğu, bu alanda kariyer yapmak isteyen öğrenciler için öğrenme ve deneyim kazanma ortamı oluşturmaktadır.</p>
    `
},
"ulasim-otobus": {
    title: "🚌 Şehir İçi Ulaşım",
    text: `
        <p>Elazığ'da öğrencilerin şehir içerisinde ulaşımını sağlayan farklı toplu taşıma seçenekleri bulunmaktadır. Belediye otobüsleri öğrencilerin kampüs ve şehir merkezi arasında ulaşım sağlamasında önemli bir yere sahiptir. Minibüsler de şehir içerisinde farklı bölgelere ulaşmak için kullanılan ulaşım araçları arasında yer almaktadır. Öğrenciler ulaşım sırasında öğrenci Elazığ Kart kullanarak toplu taşıma hizmetlerinden yararlanabilmektedir. Kampüse ulaşım sağlayan araçlar öğrencilerin günlük hayatını kolaylaştırmaktadır. Ders saatlerine uygun hareket ederek ulaşım süresini daha verimli değerlendirmek mümkündür. Şehir merkezine ulaşım sayesinde öğrenciler ders dışında sosyal ve kültürel etkinliklere de katılabilmektedir. Toplu taşıma kullanımı öğrencilerin şehir içerisindeki farklı noktalara daha kolay ulaşmasına yardımcı olmaktadır. Öğrenciler ulaşım seçeneklerini kullanarak hem üniversiteye hem de şehirdeki sosyal alanlara erişim sağlayabilmektedir. Elazığ'daki şehir içi ulaşım seçenekleri öğrencilerin günlük üniversite hayatını daha rahat sürdürebilmelerine katkı sağlamaktadır.</p>
    `
},

"yerleske-harput": {
    title: "🏰 Gezilecek Yerler",
    text: `
        <p>Elazığ, tarihi ve doğal güzellikleriyle öğrencilerin ders dışında keşfedebileceği birçok farklı yere sahiptir. Tarihi Harput Mahallesi, şehrin geçmişini ve kültürel dokusunu yakından görmek isteyen öğrenciler için önemli bir gezi noktasıdır. Harput'ta tarihi yapılar ve geleneksel şehir dokusu bir arada görülebilmektedir. Hazar Gölü, doğal güzelliği ve çevresindeki manzaralarıyla şehirden uzaklaşmak isteyen öğrencilerin tercih edebileceği yerlerden biridir. Buzluk Mağarası ise doğal yapısıyla dikkat çeken farklı bir gezi noktasıdır. Keban Barajı da Elazığ'ın önemli doğal ve teknolojik yapılarından biri olarak ziyaret edilebilmektedir. Öğrenciler bu bölgeleri arkadaşlarıyla birlikte gezerek ders yoğunluğundan uzaklaşma fırsatı bulabilir. Şehrin tarihi ve doğal alanlarını keşfetmek Elazığ'ın kültürel yapısını daha yakından tanımaya yardımcı olmaktadır. Farklı gezi noktaları öğrencilerin boş zamanlarını değerlendirmeleri için çeşitli seçenekler sunmaktadır. Elazığ'daki tarihi ve doğal mekanlar, üniversite öğrencilerine şehir hayatının dışında farklı deneyimler yaşama fırsatı sağlamaktadır.</p>
    `
},

"yasam-kantin": {
    title: "🛍️ Sosyal Yaşam",
    text: `
        <p>Elazığ'da öğrencilerin ders dışında vakit geçirebileceği çeşitli sosyal alanlar bulunmaktadır. Üniversite Mahallesi, öğrencilerin günlük yaşamında önemli bir yere sahip olan bölgelerden biridir. Bu bölgede öğrencilerin arkadaşlarıyla zaman geçirebileceği farklı kafeler ve sosyal alanlar bulunmaktadır. Bosna Hersek Bulvarı da öğrenci yaşamının hareketli olduğu önemli noktalardan biri olarak öne çıkmaktadır. Öğrenciler ders sonrasında arkadaşlarıyla buluşarak sosyal aktiviteler gerçekleştirebilmektedir. Kafeler, öğrencilerin ders çalışmak veya arkadaşlarıyla sohbet etmek için değerlendirebileceği mekanlar arasında yer almaktadır. Sosyal alanlarda vakit geçirmek öğrencilerin üniversite hayatını daha keyifli hale getirebilmektedir. Farklı bölgeleri keşfetmek öğrencilerin şehre ve çevresine daha kolay alışmasına yardımcı olmaktadır. Üniversite çevresindeki sosyal imkanlar öğrencilerin ders ve sosyal yaşam arasında denge kurmasına katkı sağlayabilmektedir. Elazığ'daki öğrenci odaklı sosyal yaşam, üniversite yıllarını daha hareketli ve çeşitli geçirmek isteyen öğrenciler için farklı imkanlar sunmaktadır.</p>
    `
},
"robotik": {
    title: "🤖 Robotik ve Otomasyon Kulübü",
    text: `
        <p>Robotik ve Otomasyon Kulübü, teknoloji ve mühendislik alanlarına ilgi duyan öğrencileri bir araya getirmektedir. Kulüp kapsamında robotik sistemler üzerine çeşitli çalışmalar gerçekleştirilmektedir. Öğrenciler Arduino ve benzeri geliştirme platformlarını kullanarak uygulamalı projeler geliştirebilmektedir. Sensörler ve elektronik bileşenler hakkında çalışmalar yapılarak öğrencilerin teknik bilgileri desteklenmektedir. Otomasyon sistemleri üzerine yapılan projeler problem çözme becerilerinin gelişmesine katkı sağlamaktadır. Proje süreçlerinde öğrenciler ekip halinde çalışarak deneyim kazanmaktadır. Yapılan çalışmalar teorik bilgilerin uygulamaya aktarılmasına yardımcı olmaktadır. Kulüp etkinlikleri öğrencilerin teknoloji alanındaki meraklarını geliştirmektedir. Farklı projeler üzerinde çalışmak öğrencilerin yeni teknolojileri tanımasına olanak sağlamaktadır. Robotik ve Otomasyon Kulübü, mühendislik ve teknoloji alanında kendisini geliştirmek isteyen öğrenciler için faydalı bir çalışma ortamı sunmaktadır.</p>
    `
},

"elektrik-elektronik": {
    title: "⚡ Elektrik ve Elektronik Kulübü",
    text: `
        <p>Elektrik ve Elektronik Kulübü, elektronik ve mühendislik konularına ilgi duyan öğrencileri bir araya getirmektedir. Kulüp içerisinde elektronik devreler üzerine çeşitli çalışmalar yapılmaktadır. Öğrenciler mikrodenetleyiciler kullanarak farklı uygulamalar geliştirme fırsatı bulabilmektedir. Devre tasarımı konusunda yapılan çalışmalar teknik bilgilerin uygulamaya aktarılmasına yardımcı olmaktadır. Elektronik projeler öğrencilerin problem çözme becerilerini geliştirmektedir. Öğrenciler ekip halinde çalışarak proje geliştirme deneyimi kazanmaktadır. Yapılan uygulamalar sayesinde öğrenciler elektronik bileşenleri daha yakından tanıyabilmektedir. Kulüp etkinlikleri mühendislik eğitiminin uygulamalı yönünü desteklemektedir. Teknolojik gelişmeler takip edilerek öğrencilerin güncel konular hakkında bilgi edinmesi sağlanmaktadır. Elektrik ve Elektronik Kulübü, elektronik ve mühendislik alanında kendisini geliştirmek isteyen öğrenciler için yararlı bir ortam oluşturmaktadır.</p>
    `
},

"girisimcilik": {
    title: "🚀 Girişimcilik Kulübü",
    text: `
        <p>Girişimcilik Kulübü, kendi fikirlerini geliştirmek isteyen öğrencileri bir araya getiren sosyal ve akademik topluluklardan biridir. Kulüp kapsamında girişimcilik ve proje geliştirme üzerine çeşitli etkinlikler düzenlenmektedir. Öğrenciler kendi fikirlerini paylaşarak farklı bakış açıları kazanabilmektedir. İş fikirlerinin geliştirilmesi sırasında problem çözme ve planlama becerileri desteklenmektedir. Düzenlenen etkinlikler öğrencilerin girişimcilik dünyasını daha yakından tanımasına yardımcı olmaktadır. Takım çalışmaları öğrencilerin iletişim ve iş birliği becerilerini geliştirmektedir. Proje fikirleri üzerinde çalışmak öğrencilerin yaratıcı düşünme yeteneklerine katkı sağlamaktadır. Kariyer etkinlikleri sayesinde öğrenciler farklı sektörleri tanıma fırsatı bulabilmektedir. Girişimcilik konusunda deneyim kazanmak öğrencilerin gelecekteki kariyer planlarına katkı sağlayabilmektedir. Girişimcilik Kulübü, yeni fikirler üretmek ve projelerini geliştirmek isteyen öğrenciler için destekleyici bir ortam sunmaktadır.</p>
    `
},

"fotograf": {
    title: "📷 Fotoğrafçılık Kulübü",
    text: `
        <p>Fotoğrafçılık Kulübü, fotoğraf sanatına ve görsel çalışmalara ilgi duyan öğrencileri bir araya getirmektedir. Kulüp içerisinde fotoğrafçılığın temel teknikleri hakkında çeşitli çalışmalar yapılmaktadır. Öğrenciler farklı çekim tekniklerini deneyerek kendilerini geliştirme fırsatı bulabilmektedir. Şehir gezileri ve etkinlikler sırasında farklı fotoğraf çalışmaları gerçekleştirilebilmektedir. Fotoğraf çekmek öğrencilerin çevrelerine farklı bir bakış açısıyla yaklaşmalarına yardımcı olmaktadır. Kulüp etkinlikleri öğrencilerin yaratıcılıklarını geliştirmelerine katkı sağlamaktadır. Yapılan çalışmalar öğrencilerin görsel anlatım konusunda deneyim kazanmasını desteklemektedir. Öğrenciler çektikleri fotoğrafları paylaşarak birbirlerinden yeni bilgiler öğrenebilmektedir. Farklı mekanlarda yapılan çalışmalar öğrencilerin Elazığ ve üniversite çevresini daha yakından tanımasına yardımcı olabilir. Fotoğrafçılık Kulübü, sanat ve görsel üretimle ilgilenen öğrenciler için keyifli bir sosyal ortam oluşturmaktadır.</p>
    `
},

"muzik": {
    title: "🎵 Müzik Kulübü",
    text: `
        <p>Müzik Kulübü, müziğe ilgi duyan öğrencileri bir araya getirerek ortak çalışmalar yapılmasına olanak sağlamaktadır. Kulüp içerisinde farklı müzik türleri üzerine çalışmalar gerçekleştirilebilmektedir. Öğrenciler yeteneklerini geliştirmek ve müzik konusunda deneyim kazanmak için çeşitli etkinliklere katılabilmektedir. Konser ve müzik etkinlikleri öğrencilerin sahne deneyimi kazanmasına yardımcı olmaktadır. Grup çalışmaları öğrencilerin birlikte hareket etme ve iletişim becerilerini geliştirmektedir. Müzikle ilgilenmek öğrencilerin üniversite hayatındaki sosyal aktivitelerini çeşitlendirmektedir. Kulüp etkinliklerinde öğrenciler farklı müzik kültürlerini tanıma fırsatı bulabilmektedir. Ortak çalışmalar öğrenciler arasında arkadaşlık ve dayanışma ortamının oluşmasına katkı sağlamaktadır. Müzik etkinlikleri üniversite kampüsündeki sosyal yaşamın daha hareketli hale gelmesine yardımcı olmaktadır. Müzik Kulübü, müziği seven ve üniversite hayatında sanatsal faaliyetlere katılmak isteyen öğrenciler için güzel bir ortam sunmaktadır.</p>
    `
},

"spor": {
    title: "🏆 Spor Kulübü",
    text: `
        <p>Spor Kulübü, öğrencilerin sportif faaliyetlere katılmasını ve aktif bir üniversite yaşamı sürdürmesini desteklemektedir. Kulüp kapsamında farklı spor dallarına yönelik etkinlikler gerçekleştirilebilmektedir. Öğrenciler spor yaparak takım çalışması konusunda deneyim kazanabilmektedir. Takım halinde gerçekleştirilen faaliyetler iletişim ve iş birliği becerilerinin gelişmesine katkı sağlamaktadır. Spor etkinlikleri öğrencilerin ders dışındaki zamanlarını verimli şekilde değerlendirmelerine yardımcı olmaktadır. Yarışmalar öğrencilerin farklı takımlarla bir araya gelmesini sağlamaktadır. Kulüp içerisinde arkadaşlık ve dayanışma ortamı oluşması öğrencilerin sosyal yaşamına katkı sağlamaktadır. Düzenli sportif faaliyetlere katılmak öğrencilerin disiplinli çalışma alışkanlıklarını destekleyebilmektedir. Spor etkinlikleri üniversite hayatının daha hareketli ve sosyal geçmesine yardımcı olmaktadır. Spor Kulübü, sportif faaliyetlere ilgi duyan öğrenciler için eğlenceli ve sosyal bir ortam sunmaktadır.</p>
    `
},

"kultur": {
    title: "🎭 Kültür ve Sanat Kulübü",
    text: `
        <p>Kültür ve Sanat Kulübü, sanat ve kültür alanlarına ilgi duyan öğrencileri bir araya getirmektedir. Kulüp kapsamında tiyatro ve çeşitli sanatsal etkinlikler düzenlenebilmektedir. Öğrenciler farklı sanat dallarını tanıyarak ilgi alanlarını keşfetme fırsatı bulabilmektedir. Tiyatro çalışmaları öğrencilerin kendilerini ifade etme becerilerini geliştirmelerine yardımcı olmaktadır. Kültürel etkinlikler öğrencilerin farklı bakış açıları kazanmasını sağlamaktadır. Grup çalışmaları iletişim ve ekip çalışması becerilerinin gelişmesine katkı sağlamaktadır. Sanatsal faaliyetlere katılmak öğrencilerin yaratıcılıklarını geliştirmelerine yardımcı olabilir. Kulüp etkinlikleri üniversite ortamındaki sosyal ve kültürel yaşamı zenginleştirmektedir. Öğrenciler etkinlikler sırasında yeni arkadaşlıklar kurarak sosyal çevrelerini genişletebilmektedir. Kültür ve Sanat Kulübü, sanatla ilgilenen öğrenciler için yaratıcı ve sosyal bir çalışma ortamı sunmaktadır.</p>
    `
},
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