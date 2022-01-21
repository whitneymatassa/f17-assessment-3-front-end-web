console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert('You are something special!');
}

let imageOver = document.querySelector('.image');

imageOver.addEventListener('mouseover', compliment)