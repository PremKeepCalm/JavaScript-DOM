let footer = document.createElement('footer'); // <footer></footer>

let footerText = document.createTextNode('Stopka strony');  // 'Stopka strony'  

footer.appendChild(footerText);  //  <footer>Stopka strony</footer>

footer.setAttribute('class', 'custom-footer') // <footer class='custom-footer'>Stopka strony</footer>

document.querySelector('section').insertAdjacentElement('afterend', footer);

// console.log(footer);

let parSecond = document.querySelector('.parSecond');

document.body.firstElementChild.removeChild(parSecond);



let parFirst = document.querySelector('#parFirst');

document.body.firstElementChild.removeAttribute(parFirst);


