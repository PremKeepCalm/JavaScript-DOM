let header = document.querySelector('header');
// header.innerHTML = '<a href="#">Nowy kontent w header</a>';

header.lastElementChild.textContent += '!';

// console.log(document.querySelector('.parSecond').outerHTML);

let link = document.querySelector('.link.superlink');

link.classList.add('nowa-klasa');
link.classList.remove('nowa-klasa');

console.log(link.classList);

