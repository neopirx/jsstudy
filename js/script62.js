var btn2 = document.querySelector('#btn2'),
    btn3 = document.querySelector('#btn3');


function sayHello() {
    alert('Hej!');
}

btn2.onclick = sayHello;

btn3.addEventListener('click', sayHello, false);