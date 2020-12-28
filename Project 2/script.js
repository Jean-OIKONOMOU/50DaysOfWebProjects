const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
var progressBarWidth = 0;

checkButtons(progress.style.width)

nextBtn.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    progressBarWidth += 33;
    progress.style.width = progressBarWidth+'%';

    checkButtons(progress.style.width)
    update()
})

prevBtn.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1
    }

    progressBarWidth -= 33;
    progress.style.width = progressBarWidth+'%';

    checkButtons(progress.style.width)
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        console.log(idx, currentActive);
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}

function checkButtons(width) {
    if (width === '0%' || width === '') {
        prevBtn.disabled = true
        nextBtn.disabled = false
    } else if (width === '99%') {
        prevBtn.disabled = false
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}