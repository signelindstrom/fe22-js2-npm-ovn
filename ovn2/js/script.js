import anime from '../node_modules/animejs/lib/anime.es.js';
import underScore from '../node_modules/underscore/underscore-esm-min.js';

const form = document.querySelector('form');
form.addEventListener('submit', event=>{
    event.preventDefault();

    const input = document.querySelector('input').value;

    fetchData(input);
})

async function fetchData(lang){
    const url = `https://restcountries.com/v3.1/lang/${lang}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
    const sorted = underScore.sortBy(data, 'population');
    console.log(sorted[sorted.length-1], sorted[sorted.length-2], sorted[sorted.length-3]);

    const first = sorted[sorted.length-1];
    const second = sorted[sorted.length-2];
    const third = sorted[sorted.length-3]

    const div = document.querySelector('div');
    div.innerHTML = '';

    const firstCountry = document.createElement('h1')
    const secondCountry = document.createElement('h1');
    const thirdCountry = document.createElement('h1');
    div.append(firstCountry, secondCountry, thirdCountry);

    firstCountry.innerText =`${first.name.common}, ${first.population}`;
    secondCountry.innerText = `${second.name.common}, ${second.population}`;
    thirdCountry.innerText = `${third.name.common}, ${third.population}`;
        
}

anime({
    targets: 'button',
    rotate: 360,
    loop: true,
    easing: 'linear'
})