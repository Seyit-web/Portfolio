
// Nav__menu
document.addEventListener('DOMContentLoaded', () => {
    const navLine = document.querySelector('.nav__line'),
          navItem = document.querySelectorAll('.nav__item');

    navLine.style.width = `${navItem[0].offsetWidth}px`;

    navItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            navLine.style.width = `${e.currentTarget.offsetWidth}px`;
            navLine.style.left = `${e.currentTarget.offsetLeft}px`;
        });
        el.addEventListener('mouseleave', () => {
            navLine.style.width = `${navItem[0].offsetWidth}px`;
            navLine.style.left = `0px`;
        });
    });
});

// Choise theme
let arrayOne = ['#fff'];
function changeColorInitial() {
    document.body.style.background = arrayOne;
}

let arrayTwo = ['#7D7C7C'];
function changeColorWhite() {
    document.body.style.background = arrayTwo;
}

let arrayThree = ['rgba(47, 47, 47, 0.900)'];
function changeColorDark() {
    document.body.style.background = arrayThree;
}

// Buttons Hire me and See my rezume
// const buttons = document.querySelectorAll('a');
//     buttons.forEach(btn => {
        
//         btn.addEventListener('click', function(e) {
//             let x = e.clientX - e.target.offsetLeft;
//             let y = e.clientY - e.target.offsetTop;

//             let ripples = document.createElement('span');
//             ripples.style.left = x + 'px';
//             ripples.style.top = y + 'px';
//             this.appendChild(ripples);

//             setTimeout(() => {
//                 ripples.remove()
//             },1000);
//     })
// });

// button LoadMoreWork
function LoadMoreWork() {
    let hide = document.getElementById('hide');
    let adverb = document.getElementById('adverb');
    let noun = document.getElementById('noun');

    if (hide.style.display === 'none') {
        hide.style.display = 'inline';
        noun.innerHTML = 'Load more work';
        adverb.style.display = 'none';
    } else {
        hide.style.display = 'none';
        noun.innerHTML = 'Hide';
        adverb.style.display = 'inline';
    }
};

// Button for About__me
function readMore() {
    let dots = document.getElementById('dots');
    let more = document.getElementById('more');
    let btn = document.getElementById('moreWork');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Подробнее';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
};

// // Title-filter
// const btns = document.querySelectorAll('.hireMe');
//     btns.forEach((el) => {
//         el.addEventListener('click', (e) => {
//             e.preventDefault();
//             let hire = e.currentTarget.getAttribute('data-hire');
//             console.log(hire);
//     });
// });

// smooth scroll for header
const anchors = document.querySelectorAll('.scroll');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const blockId = anchor.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    };


//hight 
function stars() {
    let count = 150;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+duration+'s';
        star.style.animationDelay = duration+'s';
        
        scene.appendChild(star);
        i++
    }
}
stars();