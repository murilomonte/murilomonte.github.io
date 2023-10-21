let currentCount = 1;
let devMessages = [
    '// -- Iniciando auto destruição da página -- //',
    'There are no easter eggs up here. Go away.',
    'Eu já disse, não precisa mais clicar.',
    'Você e insistente, gosto disso.',
    'Posso fazer isso o dia todo.',
    'Never gonna give you up',
    'Você ainda tá aqui?',
    "What're ya sellin'?",
    'Você é teimoso.',
    '🐱',
    ':3'
];

function devMsgCounter() {
    if (currentCount > 12) {
        document.getElementById('popup').innerHTML = devMessages[(Math.floor(Math.random() * devMessages.length))];
        document.getElementsByClassName('header-presentation-image')[0].src = 'img/qr-code.png';
        
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