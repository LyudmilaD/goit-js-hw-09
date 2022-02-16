
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const firstDelay = Number(`${delayEl.value}`);
  const stepDelay = Number(`${stepEl.value}`);
  console.log(stepDelay);
  const promiseCount = Number(`${amountEl.value}`);

  console.log(promiseCount);

  let currentDelay = firstDelay;
  for (let i = 0; i < promiseCount; i += 1) {
    if (currentDelay !== 0) {
      currentDelay += stepDelay;
    }

    createPromise(i + 1, currentDelay);
  
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  }
}
