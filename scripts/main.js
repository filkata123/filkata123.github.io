let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/diplo.jpg'){
        myImage.setAttribute('src', 'images/diplo2.jpg');
    }else{
        myImage.setAttribute('src', 'images/diplo.jpg');
    }           
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {setUserName();}
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Diplodocus for, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Diplodocus for ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }