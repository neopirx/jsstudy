var list = document.querySelector("#list");

var children = list.childNodes;
var elementChildren = list.children;

var first = list.firstChild;
var firstElement = list.firstElementChild;

var last = list.lastChild;
var lastElement = list.lastElementChild;

var link = document.querySelector(".class1")
    href = link.getAttribute('href');

link.setAttribute('href', 'https://google.com');

link.removeAttribute('class');

var button = document.querySelector("button");
button.setAttribute('disabled', true);
button.removeAttribute('disabled');

var img = document.createElement("img");
img.src = "https://images-na.ssl-images-amazon.com/images/I/91KvRF9bPKL._AC_SL1500_.jpg";
document.body.appendChild(img);

var link2 = document.querySelector('.link');

console.log( link2.className );

link2.classList.add('red', 'green');
link2.classList.remove('red');
link2.classList.toggle('green');

