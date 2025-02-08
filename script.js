function openGift() {
    let giftBox = document.getElementById('giftBox');
    let card = document.getElementById('card');
    let balloonContainer = document.getElementById('balloon-container');

    giftBox.style.transform = 'scale(1.2)';

    // Spawn 10-15 balon dengan posisi acak
    let totalBalloons = Math.floor(Math.random() * 6) + 20; // Antara 10-15 balon
    for (let i = 0; i < totalBalloons; i++) {
        setTimeout(spawnBalloon, Math.random() * 500); // Delay random tiap balon muncul
    }

    setTimeout(() => {
        giftBox.style.display = 'none';
        card.style.display = 'block'; // Munculin card

        // Mulai teks random setelah hadiah dibuka
        setInterval(spawnText, 350);
    }, 300);
}

function spawnBalloon() {
    let balloonContainer = document.getElementById('balloon-container');
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Random posisi X (0-100%)
    let posX = Math.random() * 100;
    balloon.style.left = `${posX}%`;

    // Random posisi Y (mulai dari bawah tapi agak acak)
    let startY = Math.random() * 30 + 100; // Antara 100px - 150px dari bawah
    balloon.style.bottom = `-${startY}px`;

    // Random ukuran balon
    let size = Math.random() * 40 + 50; // 50px - 90px
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.5}px`;

    // Random rotasi awal
    balloon.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    // Random durasi terbang (biar beda-beda kecepatan)
    let duration = Math.random() * 3 + 3; // 3s - 6s
    balloon.style.animation = `floatUp ${duration}s ease-in forwards`;

    // Random delay biar ga naik barengan
    let delay = Math.random() * 2; // 0s - 2s
    balloon.style.animationDelay = `${delay}s`;

    balloonContainer.appendChild(balloon);

    // Hapus balon setelah animasi selesai
    setTimeout(() => {
        balloon.remove();
    }, (duration + delay) * 1000);
}

function spawnText() {
    let textContainer = document.getElementById('text-container');
    let words = ["Happy Bday!", "Wish u the best!", "🎉🎂💖🐰", "Stay awesome!", "Much love!", "I Love You!", "Te Amo!", "Ich liebe dich!", "Aku Sayang Kamu!"]; // Kata-kata random
    
    let textElement = document.createElement('div');
    textElement.classList.add('floating-text');
    textElement.innerText = words[Math.floor(Math.random() * words.length)];

    // Posisi random
    textElement.style.left = `${Math.random() * 90}%`;
    textElement.style.top = `${Math.random() * 90}%`;

    textContainer.appendChild(textElement);

    // Hapus setelah animasi selesai biar gak numpuk
    setTimeout(() => {
        textElement.remove();
    }, 3000);
}


