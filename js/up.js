'use strict';


let cont = document.getElementsByClassName('container')[0],
    imgArray = ['./img/image.jpeg'];

let start = Date.now(); // получаю время начала действия

let count = function() {

    let timePassed = Date.now() - start; // вычесляю сколько времени прошло

    line(timePassed);

};

setInterval(count, 10);


function line(timePassed) {
    cont.style.top  = -timePassed / 30 + 'px';
}

function one () {

    for (let i = 0; i < 2; i++) {

        let img = document.createElement('img');

        img.src = imgArray[0];
        cont.appendChild(img);
    }
}

setInterval(one, 10000)


function removeImg () {

    cont.removeChild(cont.getElementsByTagName('img')[0]);
}

setInterval(removeImg, 30000);
