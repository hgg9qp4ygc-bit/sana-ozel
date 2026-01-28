
// ÖNEMLİ: Tanışma tarihini (Yıl, Ay-1, Gün, Saat, Dakika) buraya gir
// Örnek: 15 Ocak 2024 ise (2024, 0, 15, 12, 0, 0)
const baslangicTarihi = new Date(2025, 5, 18, 12, 0, 0); 

function guncelleSayac() {
    const simdi = new Date();
    const fark = simdi - baslangicTarihi;

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
    const saat = Math.floor((fark / (1000 * 60 * 60)) % 24);
    const dakika = Math.floor((fark / (1000 * 60)) % 60);
    const saniye = Math.floor((fark / 1000) % 60);

    const sayacElemani = document.getElementById("sayac");
    if (sayacElemani) {
        sayacElemani.innerHTML = 
            gun + " Gün " + saat + " Saat " + dakika + " Dakika " + saniye + " Saniye";
    }
}

// Sayfa yüklendiği gibi sayacı başlat ve her saniye güncelle
setInterval(guncelleSayac, 1000);

function surpriz() {
    // Konfeti fırlat
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ff80ab', '#f48fb1']
    });
    
    setTimeout(() => {
        alert("Seni çok seviyorum ❤️");
    }, 500);
}
// Sayfa yüklendiğinde kalpleri oluşturmaya başla
function kalpleriUcur() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5 sn arası
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(kalpleriUcur, 300); // 300ms'de bir kalp fırlat

function sifreyiKontrolEt() {
    const input = document.getElementById("sifre-input").value;
    const dogruSifre = "1806"; // Şifren neyse buraya yaz

    if (input === dogruSifre) {
        const ekran = document.getElementById("sifre-ekrani");
        ekran.style.transition = "opacity 1s ease, visibility 1s";
        ekran.style.opacity = "0";
        ekran.style.visibility = "hidden";
        
        setTimeout(() => {
            document.getElementById("ana-icerik").style.display = "block";
            havaiFisekBastir(); // Önceki yazdığımız havai fişek fonksiyonu
        }, 500);
    } else {
        alert("mal oglu mal, sifre yanlış!");
    }
}

function havaiFisekBastir() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function butonuKacir() {
    const btn = document.getElementById("hayir-butonu");
    
    // Ekranın genişlik ve yüksekliğinden butonun kendi boyutunu çıkarıyoruz ki ekrandan dışarı kaçmasın
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    
    // Butonu yeni koordinatlara ışınla
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

const sozler = [
    "Seninle her şey daha güzel",
    "Dünyadaki en güzel manzara senin gülüşün.",
    "İyi ki yolumuz kesişmiş.",
    "Mühendislik hesaplar, ama kalbim sadece seni bilir!"
];
let sozIndex = 0;

function sozDegistir() {
    const alan = document.getElementById("soz-alani");
    sozIndex = (sozIndex + 1) % sozler.length;
    alan.style.opacity = 0; // Yumuşak geçiş için
    setTimeout(() => {
        alan.innerText = sozler[sozIndex];
        alan.style.opacity = 1;
    }, 500);
}
setInterval(sozDegistir, 4000); // 4 saniyede bir değişir

// Galeri fotoğraflarına tıklama özelliği ekle
document.querySelectorAll('.galeri-foto').forEach(foto => {
    foto.onclick = () => {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('tam-ekran-foto').src = foto.src;
    };
});

document.addEventListener('mousemove', function(e) {
    const parilti = document.createElement('div');
    parilti.className = 'parilti';
    parilti.style.left = e.clientX + 'px';
    parilti.style.top = e.clientY + 'px';
    
    // Rastgele renkler (pembe tonları)
    const renkler = ['#ff4081', '#ff80ab', '#f48fb1', '#ffffff'];
    parilti.style.background = renkler[Math.floor(Math.random() * renkler.length)];
    
    document.body.appendChild(parilti);
    
    setTimeout(() => {
        parilti.remove();
    }, 800);
});

const slider = document.getElementById("loveRange");
const result = document.getElementById("loveResult");
const scaleHeart = document.getElementById("love-heart-scale");

slider.oninput = function() {
    let val = this.value; // 1 ile 100 arası değer
    
    // 1. Yazıyı Güncelle
    if (val < 20) {
        result.innerText = "bu kadar mı??? ";
    } else if (val < 50) {
        result.innerText = "daha çok seviyon beni";
    } else if (val < 80) {
        result.innerText = "çok seviyon beni! ❤️";
    } else if (val < 100) {
        result.innerText = "dünyalar kadar! 🌍";
    } else {
        result.innerText = "SONSUZA KADAR! ♾️💖";
        // 100 olunca konfeti patlatalım (eğer kütüphanen ekliyse)
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
    }

    // 2. Kalbi Büyüt/Küçült
    // Değer arttıkça kalbin boyutunu (scale) 0.5 ile 3.0 katı arası yapıyoruz
    let scale = (val / 50) + 0.5; 
    scaleHeart.style.transform = `scale(${scale})`;
    
    // 3. Kalbin rengini koyulaştır
    let opacity = (val / 100) + 0.2;
    scaleHeart.style.opacity = opacity;
};

const sebepler = [
    "Gülüşün tüm dünyayı aydınlatıyor.",
    "Bana her zaman destek olduğun için.",
    "En saçma şakalarıma bile güldüğün için.",
    "Gözlerinin içindeki o ışık için.",
    "Beni ben olduğum için sevdiğin için...",
    "Sabah uykulu halin bile çok güzel olduğu için.",
    "Erkekleri dövdüğün için.",
    "Beraber geçirdiğimiz her an için.",

    // Buraya istediğin kadar (50-100 tane) ekle
];

function yeniSebep() {
    const metin = document.getElementById("sebep-metni");
    const rastgele = sebepler[Math.floor(Math.random() * sebepler.length)];
    metin.style.opacity = 0;
    setTimeout(() => {
        metin.innerText = rastgele;
        metin.style.opacity = 1;
    }, 300);
}

function saatlikSelamlama() {
    const now = new Date();
    const hour = now.getHours();
    let mesaj = "";

    if (hour >= 5 && hour < 12) {
        mesaj = "Günaydın Aşkım ❤️";
    } else if (hour >= 12 && hour < 17) {
        mesaj = "İyi öğlenler Danam 🥰";
    } else if (hour >= 17 && hour < 22) {
        mesaj = "İyi Akşamlar Sevgilim ✨";
    } else {
        mesaj = "İyi Geceler Tatlım 😴";
    }
    document.getElementById("selamlama-mesaji").innerText = mesaj;
}

// Sayfa yüklendiğinde selamlamayı göster
saatlikSelamlama();