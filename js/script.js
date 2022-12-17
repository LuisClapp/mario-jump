const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const cloud = document.querySelector('.clouds');

let accountant = 0;

let score = 0;

let level = 0;

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudPosition = cloud.offsetLeft;  

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        clearInterval(loop);
    } else {
        accountant++;
        document.getElementById("score").textContent = accountant
        if(accountant%125 == 2) {
            score++
            if(score%5 == 0) {
                level++
                document.getElementById("level").textContent = level
            }
        }
    };
}, 10);

document.addEventListener('keydown', (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump();
    }  
});