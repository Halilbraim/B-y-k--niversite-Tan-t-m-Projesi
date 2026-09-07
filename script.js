// Scroll ile beliren bölümler
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// Modal içerikleri
const modalData = {
    "yemek-menu": {
        title: "Menü & Fiyatlandırma",
        text: "Menüler haftalık olarak değişiyor ve genellikle çorba, ana yemek, bir yardımcı yemek (pilav, makarna veya sebze) ve tatlı ya da meyve seçeneklerinden oluşuyor. Vejetaryen seçenekler bazı günlerde menüde yer alabiliyor. Fiyatlar devlet sübvansiyonlu olduğu için dışarıdaki lokantalara göre oldukça uygun; birçok öğrenci için yemekhane, aylık bütçeyi ciddi şekilde rahatlatan bir seçenek oluyor."
    },
    "yemek-saat": {
        title: "Çalışma Saatleri",
        text: "Öğle yemeği genellikle 11:30-14:00, akşam yemeği ise 17:00-19:00 aralığında hizmet veriyor (kesin saatler dönem içinde değişebilir, ilan panolarından teyit etmek en sağlıklısı). En yoğun dönem öğlen 12:00-13:00 arası — ders aralarının çakıştığı saat. Bu aralığı es geçip biraz erken ya da geç gitmek, sırada beklemeden yemek yemenin en pratik yolu."
    },
    "yemek-bakiye": {
        title: "Bakiye Sistemi",
        text: "Yemekhane, öğrenci kimlik kartına bağlı bir bakiye sistemiyle çalışıyor. Bakiye yüklemeyi kampüs içindeki yükleme noktalarından, banka kartıyla online otomasyon üzerinden ya da bazı dönemlerde mobil uygulama üzerinden yapabiliyorsun. Kartını kaybedersen öğrenci işlerine bildirerek bakiyeni yeni karta aktarabiliyorsun, bu yüzden kartı kaybettiğinde hemen haber vermek önemli."
    },
    "kutuphane-alan": {
        title: "Çalışma Alanları",
        text: "Kütüphanede farklı çalışma tarzlarına uygun alanlar var: sessiz bireysel çalışma için ayrılmış katlar, arkadaşlarınla proje çalışabileceğin grup çalışma odaları, ve daha rahat bir atmosferde kitap karıştırabileceğin okuma köşeleri. Grup odaları genellikle rezervasyon gerektiriyor, bu yüzden özellikle sınav dönemlerinde önceden ayırmak gerekebiliyor. Priz ve wifi erişimi neredeyse her masada mevcut."
    },
    "kutuphane-dijital": {
        title: "Dijital Kaynaklara Erişim",
        text: "Basılı kitap ve dergilerin yanında, kütüphane üzerinden akademik veritabanlarına (makale, tez, e-kitap arşivleri) erişebiliyorsun — bu kaynaklar kampüs dışından da öğrenci hesabınla giriş yaparak kullanılabiliyor. Ödev ve proje araştırmalarında bu veritabanları Google'dan çok daha güvenilir ve akademik olarak geçerli kaynaklar sunuyor. Kütüphane personeli, kaynak bulmakta zorlandığında yardımcı oluyor."
    },
    "kutuphane-sinav": {
        title: "Sınav Dönemi Saatleri",
        text: "Vize ve final haftalarında kütüphanenin çalışma saatleri genelde gece geç saatlere, hatta bazı dönemlerde 24 saate kadar uzatılıyor. Bu dönemlerde doluluk oranı ciddi şekilde artıyor, özellikle sabah erken saatlerde gidip yer kapmak mantıklı oluyor. Sınav döneminde kütüphane dışında fakülte binalarındaki boş derslikler de alternatif çalışma alanı olarak kullanılabiliyor."
    },
    "spor-tesis": {
        title: "Saha & Salon Çeşitleri",
        text: "Kampüste açık halı sahalar, tenis kortları, kapalı spor salonu (basketbol/voleybol için uygun), fitness salonu ve açık koşu/yürüyüş parkurları bulunuyor. Bazı tesisler rezervasyonla, bazıları ise serbest kullanım şeklinde işliyor. Spor Bilimleri Fakültesi'nin kendi tesisleri de zaman zaman öğrenci kullanımına açılıyor."
    },
    "spor-turnuva": {
        title: "Kulüp Turnuvaları",
        text: "Bölümler arası ve öğrenci toplulukları arası düzenlenen turnuvalar (futbol, basketbol, voleybol gibi) kampüs sosyal hayatının önemli bir parçası. Bu turnuvalar genelde dönem başı ve dönem sonu gibi belirli zamanlarda yoğunlaşıyor. FÜBET gibi topluluklara katılarak ya da fakülte spor temsilcilerine ulaşarak bu etkinliklere kolayca dahil olabilirsin — hem spor yapmış hem yeni arkadaşlar edinmiş oluyorsun."
    },
    "spor-kosul": {
        title: "Kullanım Koşulları",
        text: "Spor tesislerini kullanmak için genellikle öğrenci kimlik kartın yeterli oluyor; çoğu alan ücretsiz, bazı özel ekipman gerektiren alanlarda (fitness salonu gibi) sembolik bir ücret talep edilebiliyor. Kapalı salon ve sahalar için bazı saatlerde rezervasyon gerekebiliyor, yoğun saatlerde (akşamüstü) bekleme olabiliyor."
    },
    "ozellik-teknokent": {
        title: "Fırat Teknokent",
        text: "Teknokent, üniversite bünyesindeki Ar-Ge ve girişimcilik projelerini sanayiyle buluşturan bir yapı. Burada kurulan şirketler, akademisyenlerin ve öğrencilerin geliştirdiği projeleri gerçek ürünlere dönüştürüyor. Özellikle mühendislik ve bilgisayar bölümü öğrencileri için, staj ve proje ortaklığı imkanları açısından değerli bir kapı — bölümünde ilerledikçe teknokent bünyesindeki firmalarla tanışma fırsatın olabilir."
    },
    "ozellik-uluslararasi": {
        title: "Uluslararası Topluluk",
        text: "Üniversitenin uluslararası öğrenci sayısı her geçen yıl artıyor, bu da kampüste farklı kültürlerden insanlarla tanışma fırsatı yaratıyor. Uluslararası öğrenci ofisi (ISO), hem gelen yabancı öğrencilere hem de Erasmus/değişim programına gitmek isteyen Türk öğrencilere destek sağlıyor. Bu çok kültürlü ortam, yabancı dil pratiği yapmak isteyenler için de doğal bir avantaj."
    },
    "ozellik-dijital": {
        title: "Güçlü Dijital Altyapı",
        text: "Fırat Üniversitesi, 1987'de EARN ağına bağlanan ilk üniversitelerden biri olarak Türkiye'de dijitalleşmede öncü bir geçmişe sahip. Bugün öğrenci işlerinden kütüphaneye, ders kayıtlarından sınav sonuçlarına kadar birçok hizmet Öğrenci Bilgi Sistemi (OBS) üzerinden online yürütülüyor. Bu da bürokratik işlemlerin çoğunu fiziksel olarak sıraya girmeden, birkaç tıkla halledebilmen anlamına geliyor."
    },
    "ozellik-bolgesel": {
        title: "Bölgesel Etki",
        text: "Üniversite yalnızca Elazığ'da değil; Bingöl, Muş, Tunceli ve Erzincan'ın Kemaliye ilçesinde de meslek yüksekokulları ve eğitim birimleri işletiyor. Bu bölgesel ağ, Fırat Üniversitesi'ni Doğu Anadolu'nun yükseköğretim altyapısında geniş bir etkiye sahip kılıyor ve mezunların bölge genelinde tanınırlığını artırıyor."
    }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');

// Yemekhane/Kütüphane/Spor altındaki küçük etiketler (chip'ler)
document.querySelectorAll('.detail-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const key = chip.getAttribute('data-modal');
        const data = modalData[key];
        if (!data) return;
        modalTitle.textContent = data.title;
        modalText.textContent = data.text;
        modalOverlay.classList.add('active');
    });
});

// Ayrıcalıklar bölümündeki kartlar
document.querySelectorAll('.card[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-modal');
        const data = modalData[key];
        if (!data) return;
        modalTitle.textContent = data.title;
        modalText.textContent = data.text;
        modalOverlay.classList.add('active');
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Accordion (SSS)
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = header.classList.contains('active');

        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
            header.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px';
        }
    });
});