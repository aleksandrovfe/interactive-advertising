'use strict';

const contentParent = document.querySelector('.content');
const loadingLayout = [`<section class="loading">
  <img class="loading-first-watch" src="./img/P_Versa_Pink.png" alt="clock">
  <img class="loading-second-watch" src="./img/P_Charge3_Lilac.png" alt="clock">
  <img class="loading-third-watch" src="./img/P_HR_White.png" alt="clock">
  <img class="shadow" src="./img/P_shadow.png" alt="">
  <div class="loading-price">
    <p>desde <br> <b class="loading-price-euro">149<sup class="loading-price-cents">95</sup>&#8364</b></p>
  </div>
  </section>`];

loadingLayout.forEach((item) => {
  contentParent.insertAdjacentHTML('beforeend', item);
});

setTimeout(() => {
  document.querySelector('.loading').remove();
}, 3000);