checkTime = function() {
	let tag = document.querySelector('h1');
    	tag.innerHTML = "<p>" + Date() + "</p>";


		console.log(Date());}

document.addEventListener('DOMContentLoaded', function() { 

	var button = document.querySelector("button[data-control='logdatime']")
	button.addEventListener('click', checkTime)


})

