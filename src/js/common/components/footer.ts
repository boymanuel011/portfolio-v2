  /**
 * Copyright Year
 */

const footerYear = () => {
  const copyRightYear = document.querySelector('.js-current-year') as HTMLElement;
  const currentYear = new Date().getFullYear();
  copyRightYear.innerHTML = currentYear.toString();
};

export default footerYear;