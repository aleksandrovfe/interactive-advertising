'use strict';

const renderOperation = (productsArr) => {
  let visibleProduct = [...productsArr];

  if (productsArr.length > 1) {
    visibleProduct = visibleProduct.slice(0, 1);
  };

  const productlayout = visibleProduct.map((product) =>
    `<section class="content__products">
      <div class="content__slider">
        <button class="content__slider-btn content__slider-btn-prev">&lang;</button>
        <img class="content__slider-watch ${product.animation} ${product.animationRight} ${product.animationleft}" src="${product.watch}" alt="clock">
        <button class="content__slider-btn content__slider-btn-next">&rang;</button>
      </div>
      <img class="content__shadow" src="./img/P_shadow.png" alt="">
      <div class="content__wrapper">
        <div class="content__change-color-list-btns">
        <input value="${product.id}" class="toggle-first" type="radio" name="color" id="1" checked><label class="content__change-color-btn content__change-color-btn-first ${product.firstColor}" for="1"></label>
        <input value="${product.id}" class="toggle-second" type="radio" name="color" id="2"><label class="content__change-color-btn content__change-color-btn-second ${product.secondColor}" for="2"></label>
        <input value="${product.id}" class="toggle-third" type="radio" name="color" id="3"><label class="content__change-color-btn content__change-color-btn-third ${product.thirdColor}" for="3"></label>
        </div>
        <h5 class="content__sign">${product.name}</h5>
        <p class="content__sign-information">${product.information}</p>
        <div class="content__product-price">
          <p class="content__product-price-text">desde</p>
          <b class="content__product-euro">${product.priceEuro}<sup class="content__product-price-cents">${product.priceCents}</sup>&#8364</b>
        </div>
      </div>
    </section>`
  );

  productlayout.forEach((item) => {
    contentParent.insertAdjacentHTML('beforeend', item);
  });
};

setTimeout(() => {
  renderOperation(productsArr)
}, 3000);

const nextItem = (arr) => {
  let transitionEl = arr.shift();
  arr.push(transitionEl);
  arr[0].animationleft = 'animation-left';
  arr[1].animation = null;
  arr[arr.length - 1].animation = null;
  arr[1].animationleft = null;
  arr[arr.length - 1].animationleft = null;
  arr[0].animationRight = null;
  arr[1].animationRight = null;
  arr[arr.length - 1].animationRight = null;
};

const prevItem = (arr) => {
  let transitionEl = arr.pop();
  arr.unshift(transitionEl);
  arr[0].animationRight = 'animation-right';
  arr[1].animation = null;
  arr[arr.length - 1].animation = null;
  arr[1].animationRight = null;
  arr[arr.length - 1].animationRight = null;
  arr[0].animationleft = null;
  arr[1].animationleft = null;
  arr[arr.length - 1].animationleft = null;
};

const rerenderOperation = () => {
  document.querySelectorAll('.content__products').forEach((prod) => {
    prod.parentElement.removeChild(prod);
  })

  renderOperation(productsArr);
};

contentParent.addEventListener('click', event => {
  const btnPrev = document.querySelector('.content__slider-btn-prev');

  if (event.target.matches('.content__slider-btn-prev')) {
    prevItem(productsArr);
    rerenderOperation();
  };

  if (event.target.matches('.content__slider-btn-next')) {
    nextItem(productsArr);
    rerenderOperation();
  };

  if (event.target.matches('.toggle-first')) {
    document.querySelector('.content__slider-watch').remove();
    const anotherStyle = productsArr.find(el => el.id === +event.target.value);
    const layout = [`<img class="content__slider-watch initial-animation" src="${anotherStyle.watch}" alt="clock">`];
      
    layout.forEach((item) => {
      btnPrev.insertAdjacentHTML('afterend', item);
    });
  };
  
  if (event.target.matches('.toggle-second')) {
    document.querySelector('.content__slider-watch').remove();
    const anotherStyle = productsArr.find(el => el.id === +event.target.value);
    const layout = [`<img class="content__slider-watch initial-animation" src="${anotherStyle.secondStyle}" alt="clock">`];
      
    layout.forEach((item) => {
      btnPrev.insertAdjacentHTML('afterend', item);
    });
  };

  if (event.target.matches('.toggle-third')) {
    document.querySelector('.content__slider-watch').remove();
    const anotherStyle = productsArr.find(el => el.id === +event.target.value);
    const layout = [`<img class="content__slider-watch initial-animation" src="${anotherStyle.thirdStyle}" alt="clock">`];
      
    layout.forEach((item) => {
      btnPrev.insertAdjacentHTML('afterend', item);
    });
  };
});