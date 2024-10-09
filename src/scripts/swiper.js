// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiperOptions =  {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
export const swiper = new Swiper('.swiper', swiperOptions);