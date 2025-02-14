function openGift() {
    let giftBox = document.getElementById('giftBox');
    let card = document.getElementById('card');
    let audio = document.getElementById('bgMusic');
    audio.play().catch(error => console.log("Error Play:", error));

    // Efek pembesaran sebelum hilang
    giftBox.style.transform = 'scale(1.2)';

    // Spawn balon dengan jumlah random (20-25)
    let totalBalloons = Math.floor(Math.random() * 6) + 20;
    for (let i = 0; i < totalBalloons; i++) {
        setTimeout(spawnBalloon, Math.random() * 500);
    }

    setTimeout(() => {
        giftBox.style.display = 'none';
        card.style.display = 'block'; // Tampilkan kartu
        setInterval(spawnText, 200);  // Mulai teks animasi
        playMusic(); // Mainkan musik
    }, 300);
}

function spawnBalloon() {
    let balloonContainer = document.getElementById('balloon-container');
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Set posisi random
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.bottom = `-${Math.random() * 30 + 100}px`; // Antara 100px - 150px dari bawah

    // Set ukuran dan rotasi random
    let size = Math.random() * 40 + 50;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.5}px`;
    balloon.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    // Set animasi dengan durasi dan delay random
    let duration = Math.random() * 3 + 3;
    let delay = Math.random() * 2;
    balloon.style.animation = `floatUp ${duration}s ease-in forwards`;
    balloon.style.animationDelay = `${delay}s`;

    balloonContainer.appendChild(balloon);

    // Hapus balon setelah animasi selesai
    setTimeout(() => balloon.remove(), (duration + delay) * 1000);
}

function spawnText() {
    let textContainer = document.getElementById('text-container');
    let words = [
        "Happy Bday!", "Wish u the best!", "🎉🎂💖🐰", "Je t'aime!", 
        "Aishiteru!", "I Love You!", "Te Amo!", "Ich liebe dich!", 
        "Aku Sayang Kamu!", "Saranghaeyo!", "Wǒ ài nǐ!", "Ti amo!"
    ];

    let textElement = document.createElement('div');
    textElement.classList.add('floating-text');
    textElement.innerText = words[Math.floor(Math.random() * words.length)];

    // Set posisi random
    textElement.style.left = `${Math.random() * 90}%`;
    textElement.style.top = `${Math.random() * 90}%`;

    textContainer.appendChild(textElement);

    // Hapus setelah animasi selesai
    setTimeout(() => textElement.remove(), 3000);
}

function playMusic() {
    let music = document.getElementById('bgMusic');
    // let startTime = 30; // Mulai dari detik ke-30
    // let stopTime = 90;  // Berhenti di detik ke-90

    music.currentTime = startTime;
    music.play();

    // Stop musik setelah durasi tertentu
    setTimeout(() => music.pause(), (stopTime - startTime) * 1000);
}
