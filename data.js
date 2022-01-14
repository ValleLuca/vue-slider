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
                {title: 'Svezia' },
                {title: 'Svizzera' },
                {title: 'Gran Bretagna' },
                {title: 'Germania' },
                {title: 'Paradise' }
            ],
            boxDescr: [
                {descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
                {descr: 'Lorem ipsum.' },
                {descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
                {descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.' },
                {descr: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam' }
            ]
        },
        boxProva: [
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
        ]
    }
  })

