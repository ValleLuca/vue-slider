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
        contatore: 0,
        clock: null,
    },
    mounted : function(){
        this.playclock();
    },
    methods: {
        aggClasse: function(i){
            if(i == this.contatore){
                return "active";
            };
        },
        bottonePrev: function(){
            if(this.contatore <= 0){
                this.contatore = this.box.length - 1;
            }
            else
            {
                this.contatore --;
            }
            
        },
        bottoneNext: function(){
            if(this.contatore >= this.box.length - 1){
                this.contatore = 0;
            }
            else
            {
                this.contatore ++;
            }
            
        },
        previewClick: function(iclick){
            this.contatore = iclick;
        },
        playclock: function(){
            this.clock = setInterval(this.bottoneNext, 3000);
        },
        stopclock: function(){
            clearInterval(this.clock);
            this.clock = null;
        }
    },
    
  })
