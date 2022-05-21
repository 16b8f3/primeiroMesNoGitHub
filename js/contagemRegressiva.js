const gitHubCriadoEm = 2022;
let idadeDoGitHub = 0;

const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const loading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`April 20 ${nextYear} 00:00:00`);

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
	secondsContainer.textContent = getTimeUnit(seconds);
	minutesContainer.textContent = getTimeUnit(minutes); 
	hoursContainer.textContent = getTimeUnit(hours);
	daysContainer.textContent = getTimeUnit(days); 
}

const updateCountdown = () => {
	const currentTime = new Date();
	const difference = newYearTime - currentTime;
	const days = Math.floor(difference / 1000 / 60 / 60 / 24);
	const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(difference / 1000 / 60) % 60;
	const seconds = Math.floor(difference / 1000) % 60;

	insertCountdownValues({ days, hours, minutes, seconds });
}

const handleCountdownDisplay = () => {
	loading.remove();
	countdownContainer.style.display = 'flex';
}

setInterval(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);














let idade = document.querySelector('.idade');
let ano = document.querySelector('.ano');







idadeDoGitHub = nextYear - gitHubCriadoEm;

function escrevendoQuantosAnosMeuGitHubVaiFazer() {
	idade.textContent = idadeDoGitHub;
}

function escreverAnoOuAnos(idadeDoGitHub) {
	if(idadeDoGitHub > 1){
		ano.textContent = 'anos';
	} else {
		ano.textContent = 'ano';
	}
}

escrevendoQuantosAnosMeuGitHubVaiFazer();
escreverAnoOuAnos();