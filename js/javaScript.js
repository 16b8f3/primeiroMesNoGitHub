let btn = document.querySelector('.btn');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
let confe = document.querySelector('#my-canvas');
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
const txt = document.querySelector('.texto');
let contador = 0;
let music = document.querySelector('.musicaDeFundo');

music.volume = 0.25; 
musicMute = false

btn.onclick = function() {
	popup.classList.add('active');
	confe.classList.add('active');
	music.play();
	if(musicMute == false){
		music.muted = false;
	} else {
		music.muted = true;
	}
}

close.onclick = function() {
	popup.classList.remove('active');
	confe.classList.remove('active');
	music.pause();
	music.currentTime = 0;
	musicMute = true;
}

function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
		setTimeout(function() {
			if(letra == '&'){
				contador = 4;
			}
			if(contador > 0){
				if(letra != '&'){
					letra = '';
					contador--;
				}
			}
			elemento.innerHTML += letra;
		}, 75 * i);
	})
}

typeWriter(txt);
confetti.render();