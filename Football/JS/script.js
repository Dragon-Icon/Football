function play(){
    const messiImg = document.querySelector('.messi');
    const ronaldoImg = document.querySelector('.cr7');
    const neymarImg = document.querySelector('.neymar');
    const playBtn = document.querySelector('.play');
    const pauseBtn = document.querySelector('.pause');
    const audio = document.querySelector('audio');
    const argentina = document.getElementById('argentina');
    const portugal = document.getElementById('portugal');
    const brazil = document.getElementById('brazil')
    const audioCount = document.querySelector('h1');
    

    setInterval(() => {
        audioCount.innerHTML = `${audio.currentTime | 0}s` 
    }, 1);

    audio.play();
    playBtn.style = 'display: none;'
    pauseBtn.style = ' display:flex;'
    messiImg.style = `animation: players 6s ease;`
    ronaldoImg.style = `animation: players 6s ease;
    animation-delay: 6s;`
    neymarImg.style = `animation: players 6s ease;
    animation-delay: 12s;`
    argentina.style = `animation: flags 6s ease;`
    portugal.style = `animation: flags 6s ease;
    animation-delay: 6s;`
    brazil.style = `animation: flags 6s ease;
    animation-delay: 12s;`

    setTimeout(() => {
        window.location.reload();
    }, 18000)

   
    
    
}

function pause(){
    const audio = document.querySelector('audio');
    const playBtn = document.querySelector('.play');
    const pauseBtn = document.querySelector('.pause');
    const messiImg = document.querySelector('.messi');
    const ronaldoImg = document.querySelector('.cr7');
    const neymarImg = document.querySelector('.neymar');
    const argentina = document.getElementById('argentina');
    const portugal = document.getElementById('portugal');
    const brazil = document.getElementById('brazil')

    messiImg.style.animationPlayState = 'paused';
    ronaldoImg.style.animationPlayState = 'paused';
    neymarImg.style.animationPlayState = 'paused';
    argentina.style.animationPlayState = 'paused';
    portugal.style.animationPlayState = 'paused';
    brazil.style.animationPlayState = 'paused';
    pauseBtn.style = 'display: none;'
    playBtn.style = ' display: flex;'
    audio.pause();
}

function left(){
    const audio = document.querySelector('audio');
    audio.currentTime = audio.currentTime - 5;
}

function right(){
    const audio = document.querySelector('audio');
    audio.currentTime = audio.currentTime + 5;
}