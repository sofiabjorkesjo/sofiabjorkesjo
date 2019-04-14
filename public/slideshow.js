'use strict';



let img = document.createElement('img');
img.setAttribute('class', 'imgSlide');
img.setAttribute('src', '/images/13.jpg');
let img2 = document.createElement('img');
img2.setAttribute('class', 'imgSlide');
img2.setAttribute('src', '/images/17.jpg');
let img3 = document.createElement('img');
img3.setAttribute('class', 'imgSlide');
img3.setAttribute('src', '/images/41.jpg');
let img4 = document.createElement('img');
img3.setAttribute('class', 'imgSlide');
img3.setAttribute('src', '/images/31.jpg');

let imgDiv = document.createElement('div');
imgDiv.setAttribute('id', 'imgDiv');

let wrapper = document.querySelector('#wrapper');
imgDiv.appendChild(img);
imgDiv.appendChild(img2);
imgDiv.appendChild(img3);
imgDiv.appendChild(img4);
wrapper.appendChild(imgDiv);

//första bilden
let slideIndex = 1;
showDivs(slideIndex);

/**
 * hämtar nästa bild
 * @param n = numret som står i plusDivs
 */

function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

//byter bild var tionde sekund
setInterval(function() {
    plusDivs(1);
}, 10000);


/**
 * gömmer alla bilderna och sätter display till block ovh visar en bild med det satta slideindex.
 * Om slideIndex är högre än numret av element så sätts de till noll.
 * Om slideIndex är mindre än 1 så sätts den till numret av element imgSlide.length.
 * @param x = slideindex
 */


function showDivs(x) {
    let i;
    let imgSlide = document.getElementsByClassName('imgSlide')
    if (x > imgSlide.length) {
        slideIndex = 1;
    }
    if (x < 1) {
        slideIndex = imgSlide.length;
    }
    for (i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = 'none';
    }
    imgSlide[slideIndex-1].style.display = 'block';
}

