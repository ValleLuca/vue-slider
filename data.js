var app = new Vue({
    el: '#container',
    data: {
        box: {
            boxImage: [
                    {image: 'img/01.jpg' },
                    {image: 'img/02.jpg' },
                    {image: 'img/03.jpg' },
                    {image: 'img/04.jpg' },
                    {image: 'img/05.jpg' }
            ],
            boxTitle: [
                {Title: 'Svezia' },
                {Title: 'Svizzera' },
                {Title: 'Gran Bretagna' },
                {Title: 'Germania' },
                {Title: 'Paradise' }
            ],
            boxDescr: [
                {Descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                {Descr: 'Lorem ipsum.' },
                {Descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
                {Descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.' },
                {Descr: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam' }
            ]
        },
      
    }
  })


let cont = 0;
const imgGrandi = document.querySelector(`.img-grandi`)

for(let isx = 0; isx < imgArr.length; isx++)
{
    imgGrandi.innerHTML += `
    <div class="imgFunction" id="item-${isx+1}">
        <img class="imgFunction" src="${imgArr[isx]}">
        <h2 class"testoimggrande position-absolute">${titoloArr[isx]}</h2>
        <p class"testoimggrande position-absolute">${paragrafoArr[isx]}</p>
    </div>`;
}

const imgPiccole = document.querySelector(`.img-piccole`)

for(let idx = 0; idx < imgArr.length; idx++)
{
    imgPiccole.innerHTML += `
    <div id="item-${idx+1}">
        <img class="imgFunction" src="${imgArr[idx]}">
    </div>`;
}


