'use strict';

import { selector, url } from './consts.js';

const changeSlide = (evt) => {
  const current = url.hash.slice(1).replace('/', '') || '';
  const slides = document.querySelectorAll(selector);

  slides.forEach(e => {
    e.id === current ?
      e.style.transform = 'scale(1)' :
      e.style.transform = 'scale(0)';
  });
}



export const nextSlide = (state) => {
  state.current++;
  const max = state.steps.length - 1;
  state.current > max ? state.current = max : null;
  return state;
}

export const prevSlide = (state) => {
  state.current--;
  state.current < 0 ? state.current = 0 : null;
  return state;
}

export const navigate = (state) => {
  url.hash = '/' + state.steps[state.current];
  return state;
}

export const initSlides = (state) => {
  window.addEventListener('hashchange', changeSlide);
  window.addEventListener('load', changeSlide);

  document.addEventListener('keyup', (evt) => {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
      case 39: // -->
        nextSlide(state);
        break;
      case 37: // <--
        prevSlide(state);
        break;
    }

    navigate(state);
  });
}