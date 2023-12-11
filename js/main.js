const bodyArea = document.body;
const block = bodyArea.querySelector('.block');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor () {
    block.style.background = getRandomColor();
}

setInterval(changeColor, 500);

function movingBlockRandom() {
    const bodyHeight = bodyArea.clientHeight;
    const bodyWidth = bodyArea.clientWidth;
    const blockHalfHeight = block.clientHeight;
    const blockHalfWidth = block.clientWidth;

    const randomTopPosition = Math.ceil(Math.random() * (bodyHeight - block.clientHeight))
    const randomLeftPosition = Math.ceil(Math.random() * (bodyWidth - block.clientWidth))

    block.style.top = randomTopPosition + 'px';
    block.style.left = randomLeftPosition + 'px';
}

setInterval(movingBlockRandom, 1000);

















