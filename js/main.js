/*
 * Dati tre array contenenti 
 * una lista ordinata di 5 immagini e 
 * una lista ordinata dei relativi 5 luoghi,
 * E una lista di 5 news.
 * Creare un carosello come nell'foto alegata e
 * al click dell'utente sulle frecce l'immagine attiva diventa 
 * visibile in formato grande a sinistra e nel suo angolo in basso a destra 
 * dovranno essere aggiunti il titolo e il testo.
*/

/* Hanno bisogno del: 
 * addEventListener
 * Manipolazione del DOM ---> getElementsByClassName querySelector classList remove add
 * ARRAY
 */

var app = new Vue({
    el: '#containerBox',
    data: {
        box: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                descr: 'Lorem ipsum.'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.' 
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                descr: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            }
        ],
        
    }
  })

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let item = '';
let thumb = '';
let active = 1;

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {                                                                   // Il ciclo INFINITO è BONUS
        active = items.length - 1; 

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } 
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) {                                             
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});