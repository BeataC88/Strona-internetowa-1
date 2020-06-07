const slajdList = [{
        img: 'img/slajd1.jpeg'
    },
    {
        img: 'img/slajd2.jpg'
    },
    {
        img: 'img/slajd3.jpg'
    }
];

const image = document.querySelector('img');
const time = 3000;
let active = 0;

const changeSlajd = () => {
    active++;
    if (active === slajdList.length) {
        active = 0;
    }
    image.src = slajdList[active].img;
    console.log(active);
}

setInterval(changeSlajd, time);