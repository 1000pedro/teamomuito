// Modal functionality
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
const modalAudio = document.getElementById('modal-audio');
const closeBtn = document.querySelector('.close');

function openModal(message, imageSrc = null, audioSrc = null) {
    modalText.textContent = message;
    if (imageSrc) {
        modalImage.src = imageSrc;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }
    if (audioSrc) {
        modalAudio.src = audioSrc;
        modalAudio.style.display = 'block';
        modalAudio.play();
    } else {
        modalAudio.style.display = 'none';
        modalAudio.pause();
        modalAudio.currentTime = 0;
    }
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Button interactions
document.getElementById('sendHug').addEventListener('click', function() {
    openModal('Que baxu gosotoso gente! 🤗 Como eu gostaria de poder te abraçar agora.', 'foto7.jpg.jpeg');
    createFloatingHearts();
});

document.getElementById('sendKiss').addEventListener('click', function() {
    openModal('Hm.. Que beijinho gostoso Pedjo! 😘 ', 'foto6.jpg.jpeg');
    createFloatingHearts();
});

document.getElementById('sendCoconutWater').addEventListener('click', function() {
    openModal('Ai que delicia essa agua de cocs 🥥 Como eu amo esse momento com o pedjo', 'foto1.jpg.jpeg');
    createFloatingHearts();
});

document.getElementById('playFootvolley').addEventListener('click', function() {
    openModal('Eu e pedjo somos os melhores nesse ftv! ⚽ Mesmo ele só sabendo reclamar kkkk', 'foto3.jpg.jpeg');
    createFloatingHearts();
});

document.getElementById('dinnerWithPedjo').addEventListener('click', function() {
    openModal('Amo quando o pedjo leva eu come comida gostosa! 🍽️ Esse dia foi tão especial!', 'foto4,jpg.jpeg');
    createFloatingHearts();
});

document.getElementById('showLetter').addEventListener('click', function() {
    const letter = `Minha querida Carolina,

Cada risada, abraço, beijo, foram e são tão unicos, cá estou eu, machucado e triste mais uma vez escrevendo para voce, se voce soubesse o quanto ja escrevi desde que voce se foi.. Serei para sempre seu maior fã, seu maior amante, seu melhor amigo e companheiro, mesmo que seja de longe, mesmo que seja só em pensamento, mesmo que seja só em sonhos.. Me desculpe por qualquer coisa, por qualquer palavra, por qualquer gesto, por qualquer momento que eu tenha te magoado, mesmo que sem querer, mesmo que sem perceber.. Eu te amo tanto, mais do que palavras podem expressar, mais do que ações podem mostrar..

Você é minha inspiração, meu amor, tudo para mim.  

Para sempre seu,
Com todo meu coração, estarei esperando por voce..`;
    openModal(letter);
});

document.getElementById('playMusic').addEventListener('click', function() {
    openModal('Toda vez que eu ouço nossa música, meu coração acelera. 🎵', null, 'Mac DeMarco ⧸⧸ ＂My Kind Of Woman＂.mp3');
    // Note: Add your music file as 'nossa_musica.mp3' in the project folder
});

// Photo interactions
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        const imageSrc = this.getAttribute('data-img');
        openModal(message, imageSrc);
        createFloatingHearts();
    });
});

// Floating hearts function
function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);

            setTimeout(() => {
                document.body.removeChild(heart);
            }, 3000);
        }, i * 100);
    }
}

// Auto-floating hearts every 10 seconds
setInterval(createFloatingHearts, 10000);

// Heartbeat animation enhancement
const heart = document.querySelector('.heart');
setInterval(() => {
    heart.style.transform = 'rotate(-45deg) scale(1.2)';
    setTimeout(() => {
        heart.style.transform = 'rotate(-45deg) scale(1)';
    }, 150);
}, 3000);

// Timeline de namoro (desde 20 de janeiro de 2022)
const relationshipStart = new Date('2022-01-20T00:00:00');
const timeTogetherEl = document.getElementById('time-together');

function updateTimeTogether() {
    const now = new Date();
    let diff = Math.max(0, now - relationshipStart);
    const seconds = Math.floor(diff / 1000);
    const dias = Math.floor(seconds / 86400);
    const horas = Math.floor((seconds % 86400) / 3600);
    const minutos = Math.floor((seconds % 3600) / 60);
    const segs = seconds % 60;

    timeTogetherEl.textContent = `Faz ${dias} dias, ${horas} horas, ${minutos} minutos e ${segs} segundos que sou apaixonado por você.`;
}

updateTimeTogether();
setInterval(updateTimeTogether, 1000);