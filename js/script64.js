var form = document.querySelector('#myForm'),
    link = document.querySelector('#showMessage');

form.addEventListener('submit', function(e) {
    if(this.firstName.value === "") {
        e.preventDefault();
        alert('Wpisz moje imie');
    }
}, false);

form.querySelector('#firstName').addEventListener('keypress', function(e) {
    e.preventDefault();

}, false);

link.onclick = function(e) {
    e.preventDefault();
    var message = document.querySelector(e.target.hash);
    message.style.display = 'block';
}