import test from './components/test';
import headerNav from './components/header';
import footerYear from './components/footer';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    test();
    headerNav();
    footerYear();
  },
  false
);
