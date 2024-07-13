/**
 * Test comment
 */
const activateVideo = () => {
  const movie = document.querySelector('.js-video');
  if (movie instanceof HTMLVideoElement) {
    movie.play().catch(error => {
      console.error('Error playing video:', error);
    });

    movie.addEventListener('ended', () => {
      movie.play().catch(error => {
        console.error('Error playing video:', error);
      });
    });
  } else {
    console.warn('No video element found with the class "js-video".');
  }
  document.addEventListener('DOMContentLoaded', activateVideo);
};

export default activateVideo;