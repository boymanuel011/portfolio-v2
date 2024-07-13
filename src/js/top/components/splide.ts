/**
 * Works Slider
 */
  const worksSlider = () => {
    const worksSlider1 = document.querySelector('.js-works-slider1');
    const worksSlider2 = document.querySelector('.js-works-slider2');
    if (worksSlider1) {
      // @ts-ignore
      Splide.defaults = {
        type: 'loop',
        focus: 'center',
        autoWidth: true,
        pagination: false,
        arrows: false,
        perPage: 5,
        gap: 10,
        autoScroll: {
          speed: .3,
          pauseOnHover: true,
        },
      };
      // @ts-ignore
      const portfolioSlider1 = new Splide(worksSlider1, {}); 
      // @ts-ignore
      portfolioSlider1.mount(window.splide.Extensions);
    }

    if (worksSlider2) {
      // @ts-ignore
      Splide.defaults = {
        type: 'loop',
        focus: 'center',
        autoWidth: true,
        pagination: false,
        arrows: false,
        perPage: 5,
        gap: 10,
        direction: 'rtl',
        autoScroll: {
          speed: .3,
          pauseOnHover: true,
        },
      }; 
      // @ts-ignore
      const portfolioSlider2 = new Splide(worksSlider2, {}); 
      // @ts-ignore
      portfolioSlider2.mount(window.splide.Extensions);
    }
  };
export default worksSlider;