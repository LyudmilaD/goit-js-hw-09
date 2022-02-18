
// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, 
//сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) и задержку 
//учитывая введенную пользователем первую задержку(delay) и шаг(step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется
//через delay времени.Значением промиса должен быть объект, в котором будут свойства position и delay 
//со значениями одноименных параметров.Используй начальный код функции для выбора того, что нужно сделать 
//с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(`${delayEl.value}`);
  const stepDelay = Number(`${stepEl.value}`);
  const promiseCount = Number(`${amountEl.value}`);
  
  console.log(firstDelay);
  console.log(stepDelay);
  console.log(promiseCount);

  let currentDelay = firstDelay;
  for (let i = 0; i < promiseCount; i += 1) {
    if (currentDelay !== 0) {
      currentDelay += stepDelay;
    }

    createPromise(i + 1, currentDelay);
  }
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({ position, delay });
        }
        
        else {
          reject({ position, delay });
        }

      }, delay);
    });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}

