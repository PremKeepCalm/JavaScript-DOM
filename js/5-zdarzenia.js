let header = document.querySelector('header');
let parFirst = document.querySelector('#parFirst');
let parSecond = document.querySelector('.parSecond');
let link = document.querySelector('a[href="http://akademia108.pl"]');
let h1 = document.getElementById('main-header');

link.onclick = event => {
    event.preventDefault();     // blokuje przed odeslaniem do linku po kliknieciu
    console.log(event);  //.target-po event-    pokazuje w consoli jaki link
}




colorChange = () => {
    header.style.color = 'red';     
    console.log('click z <header></header>')                                      //funkcja start
}

h1.onclick = event => {
    event.stopPropagation();
    console.log('click z <h1></h1>')
}

ondblclick = () => {
    parSecond.style.backgroundColor = 'yellow';
}                                                   // funkcja end

parSecond.ondblclick = ondblclick;


najechanieMyszka = () => {
    // parFirst.style.backgroundColor = 'blue';
    parFirst.classList.toggle('toggle');
}
parFirst.addEventListener('click', najechanieMyszka);

// parFirst.removeEventListener('mouseover', najechanieMyszka);

// parFirst.classList.toggle('toggle');

