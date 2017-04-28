var dots = document.querySelector('.dots');

setInterval(function(){
	dots.innerHTML += '.';
	if(dots.innerHTML == '....'){
		dots.innerHTML = '';
	}
}, 1000);