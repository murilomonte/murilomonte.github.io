let currentCount = 1;
let lastRun = false;
let devMessages = [
    '// -- Iniciando auto destruição da página -- //',
    'There are no easter eggs up here. Go away.',
    'Eu já disse, não precisa mais clicar.',
    'Você é insistente, gosto disso.',
    'Posso fazer isso o dia todo.',
    'Never gonna give you up',
    'Você ainda tá aqui?',
    'Você é teimoso.',
    '🐱',
    ':3'
];

function devMsgCounter() {
    if (currentCount > 12 && !lastRun) {
        document.getElementById('spotify-iframe').src = 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator';
        lastRun = true;

    } else if (currentCount > 12) {
        document.getElementById('popup').innerHTML = devMessages[(Math.floor(Math.random() * devMessages.length))];

    } else if (currentCount > 7) {
        document.getElementById('popup').innerHTML = 'Não é necessário. Você já é um desenvolvedor.';
        currentCount++;

    } else if (currentCount == 7) {
        document.getElementById('popup').innerHTML = 'Você agora é um desenvolvedor!';
        currentCount++;

    } else if (currentCount >= 3) {
        document.getElementById('popup').innerHTML = `Faltam ${7 - currentCount} etapas para você se tornar um desenvovedor`;
        document.getElementById('popup').style.display = 'block';
        currentCount++;

    } else {
        currentCount++;
    };
}

let musicList = [
    '39uLYYZytVUwcjgeYLI409',
]

document.addEventListener('DOMContentLoaded', musicChooser());

function musicChooser() {
    document.getElementById('spotify-iframe').src = `https://open.spotify.com/embed/track/${musicList[(Math.random() * musicList.length) | 0]}`
}