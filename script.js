const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameover = document.querySelector('.game-over')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const StopCloud = clouds.offsetLeft;
    const gameoverHide = gameover.offsetLeft 
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80){
        //pausa o jogo
        pipe.style.animation= 'none';
        pipe.style.left = `${pipePosition}px`;
        //pausa as nuvens
        clouds.style.animation= 'none';
        clouds.style.left = `${StopCloud}px`;        
        //pausa o mario aonde morreu
        mario.style.animation= 'none';
        mario.style.bottom  = `${marioPosition}px`;
        //bota a imagem de morte do mario
        mario.src= 'imgs/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
        //Implementação do game-over na tela
        gameover.style.display = 'block';
        //limpa o console quando perde 
        clearInterval(loop)
    }
},10)


document.addEventListener('keydown',jump);