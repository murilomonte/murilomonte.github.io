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
    '4Wvm4frCN6Td43ojkodXmG',
    '05iGUAsS3BZPe6WTPpClwd',
    '4H7WNRErSbONkM06blBoGc',
    '35SbrfbaSpGUBX7e5BPega',
    '0rnGYYBw32ALUIiuEgwv2c',
    '6TRjT37UyRUVrGg3gTlIqb',
    '6FR410XjipcpHIsmv1bYKA',
    '6gudDpl4qpCrgx70yXYHii0',
    '0R7l4W5thmI0D8gyVk4IcS',
]

document.addEventListener('DOMContentLoaded', musicChooser);

function musicChooser() {
    document.getElementById('spotify-iframe').src = `https://open.spotify.com/embed/track/${musicList[(Math.random() * musicList.length) | 0]}`
}