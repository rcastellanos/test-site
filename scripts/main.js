var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello fucking world';

myimg = document.querySelector('img');
myimg.onclick = function() {
    var mySrc = myimg.getAttribute('src');
    if(mySrc === 'images/vieja1.jpg') {
      myimg.setAttribute ('src','images/vieja2.jpg');
    } else {
      myimg.setAttribute ('src','images/vieja1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading= document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Esta vieja is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'Esta vieja is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}