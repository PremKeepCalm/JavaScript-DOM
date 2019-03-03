let header = document.querySelector('header');
// header.innerHTML = '<a href="#">Nowy kontent w header</a>';

header.lastElementChild.textContent += '!';

console.log(document.querySelector('.parSecond').outerHTML);