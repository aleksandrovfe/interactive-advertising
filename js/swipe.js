'use strict';

const gesuredZone = document.querySelector('#content');
let initialPoint;
let finalPoint;

setTimeout(() => {
  gesuredZone.addEventListener('touchstart', event => {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
  }, false);
  
  gesuredZone.addEventListener('touchend', event => {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    
    if (finalPoint.pageX < initialPoint.pageX){
      nextItem(productsArr);
      rerenderOperation();
    } else {
      prevItem(productsArr);
      rerenderOperation();
    }
  }, false);
}, 3000);

