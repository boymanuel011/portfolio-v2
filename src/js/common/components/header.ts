/**
 * Test comment
 */
const headerNav = () => {
  const headerWrap = document.querySelector('.js-header') as HTMLElement;
  const headerMenu = document.querySelector('.js-header-menu') as HTMLElement;
  const spNav = document.querySelector('.js-sp-nav') as HTMLElement;
  const spLineWrap = document.querySelector('.js-line-wrap') as HTMLElement;
  const spNavLink = document.querySelectorAll('.js-nav-link');
  const spLogo = document.querySelector('.js-logo') as HTMLElement;
  const width = window.innerWidth;

  if (headerWrap) {
    window.addEventListener('scroll', () => {
      const documentHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;
      const scrollPositionY = window.scrollY;
      const totalScrollable = documentHeight - screenHeight;
      const scrollPercentage = Math.floor((scrollPositionY / totalScrollable) * 100);

      console.log(scrollPositionY);

      if (width >= 767) {
        if (scrollPositionY >= 80) {
          headerWrap.classList.add('header__srolled');
          headerWrap.style.setProperty('--after-width', `${scrollPercentage}%`);
        } else if (scrollPositionY === 0) {
          headerWrap.classList.remove('header__srolled');
          headerWrap.style.setProperty('--after-width', '0%');
        }
      } else {
        if (scrollPositionY >= 60) {
          headerWrap.classList.add('header__srolled');
          headerWrap.style.setProperty('--after-width', `${scrollPercentage}%`);
        } else if (scrollPositionY === 0) {
          headerWrap.classList.remove('header__srolled');
          headerWrap.style.setProperty('--after-width', '0%');
        }
      }


    });

    headerMenu.addEventListener('click', () => {
      spNav.classList.toggle('header__link-wrap--active');
      spLineWrap.classList.toggle('open');
      if (spNav.classList.contains('header__link-wrap--active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    spNavLink.forEach(link => {
      link.addEventListener('click', () => {
        document.body.style.overflow = '';
        spNav.classList.remove('header__link-wrap--active');
        spLineWrap.classList.remove('open');
      });
    });

    spLogo.addEventListener('click', () => {
      document.body.style.overflow = '';
      spNav.classList.remove('header__link-wrap--active');
      spLineWrap.classList.remove('open');
    });
  }
};

export default headerNav;