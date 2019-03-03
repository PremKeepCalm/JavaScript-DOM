let element;  

// po id

element = document.getElementById('parFirst');  // po id
element = document.getElementsByClassName('link superlink') ;  // po class
element = document.getElementsByTagName('p') [0];  //  po tagu, [0-pierwszy elem]

element = document.querySelector('#sectionFirst .parSecond .par2');  // konkretny paragraf etc. .innerHTML-jezeli chcesz sam tekst
element = document.querySelectorAll('#sectionFirst a');  // 

element = document.getElementById('main-header').parentElement;
element = document.getElementById('main-header').parentElement.children;

element = document.querySelector('header').firstElementChild;
element = document.querySelector('header').lastElementChild;

console.log(element);