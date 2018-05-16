'use strict';

import Slide from './components/slide.js';
import GamepadApi from './components/gamepad.js';
import { initSlides, nextSlide, prevSlide, navigate } from './libs/slidesRouter.js';
import { selector, url } from './libs/consts.js';

const gamepad = document.querySelector('gamepad-api');

const steps = [...document.querySelectorAll(selector)].map(e => e.id);

const state = {
  current: 0,
  steps,
}

!url.hash.length ? 
  setTimeout(() => url.hash = '/' + state.steps[0], 500) : null;

gamepad.addEventListener('button', evt => {
  evt.detail.button === 'prev' ? prevSlide(state) : nextSlide(state);
  navigate(state);
});

initSlides(state);
