document.addEventListener("DOMContentLoaded", function () {
    let bgMusic = document.getElementById("bgMusic");
    let currentMusic = bgMusic; // Musik aktif saat ini
    let originalMusicTime = 0; // Posisi terakhir sebelum ganti lagu

    function openGift() {
        let giftBox = document.getElementById('giftBox');
        let card = document.getElementById('card');

        bgMusic.play().catch(error => console.log("Error Play:", error));

        // Efek animasi sebelum menghilang
        giftBox.style.transform = 'scale(1.2)';

        // Spawn balon dengan jumlah random (20-25)
        for (let i = 0; i < Math.floor(Math.random() * 6) + 20; i++) {
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

        // Set properti random
        Object.assign(balloon.style, {
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 30 + 100}px`,
            width: `${Math.random() * 40 + 50}px`,
            height: `${(Math.random() * 40 + 50) * 1.5}px`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
            animation: `floatUp ${Math.random() * 3 + 3}s ease-in forwards`,
            animationDelay: `${Math.random() * 2}s`
        });

        balloonContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
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
        Object.assign(textElement.style, {
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`
        });

        textContainer.appendChild(textElement);
        setTimeout(() => textElement.remove(), 3000);
    }

    function playMusic() {
        // let startTime = 30;
        // let stopTime = 90;

        bgMusic.currentTime = startTime;
        bgMusic.play();

        setTimeout(() => bgMusic.pause(), (stopTime - startTime) * 1000);
    }

    function openEnvelope() {
        console.log("Amplop diklik");
        let popup = document.getElementById("popup");
        popup.style.display = "flex";

        if (!bgMusic.paused) {
            originalMusicTime = bgMusic.currentTime;
            bgMusic.pause();
        }

        // Hapus musik amplop sebelumnya jika ada
        let existingMusic = document.getElementById("newMusic");
        if (existingMusic) existingMusic.remove();

        // Tambahkan musik baru
        let newMusic = document.createElement("audio");
        newMusic.src = "Music/You Found Me.mp3";
        newMusic.id = "newMusic";
        newMusic.preload = "auto";
        newMusic.volume = 1.0;
        document.body.appendChild(newMusic);

        newMusic.play().then(() => console.log("Lagu amplop berhasil diputar!"))
            .catch(error => console.log("Gagal memutar lagu amplop:", error));

        currentMusic = newMusic;
    }

    function closePopup() {
        let popup = document.getElementById("popup");

        let newMusic = document.getElementById("newMusic");
        if (newMusic) {
            newMusic.pause();
            newMusic.remove();
            console.log("Lagu amplop dihentikan & dihapus");
        }

        if (bgMusic && originalMusicTime > 0) {
            bgMusic.currentTime = originalMusicTime;
            bgMusic.play().then(() => console.log("Lagu utama lanjut dari:", originalMusicTime))
                .catch(error => console.log("Gagal melanjutkan lagu utama:", error));
        }

        popup.style.display = "none";
    }

    // Buat fungsi bisa diakses dari HTML
    window.openGift = openGift;
    window.openEnvelope = openEnvelope;
    window.closePopup = closePopup;
});
