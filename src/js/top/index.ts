import test from './components/test';
import worksSlider from '../top/components/splide';
import activateVideo from '../top/components/video';
import animateOnHover from '../top/components/animateHover';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    test();
    worksSlider();
    activateVideo();
    animateOnHover();
  },
  false
);
