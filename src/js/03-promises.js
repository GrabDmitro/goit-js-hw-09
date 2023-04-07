const refs = {
  buttonRef: document.querySelector('button'),
  delayRef: document.querySelector('[name="delay"]'),
  stepRef: document.querySelector('[name="step"]'),
  amountRef: document.querySelector('[name="amount"]'),
};

refs.buttonRef.addEventListener('click', e => {
  e.preventDefault();

  for (let position = 1; position <= refs.amountRef.value; position++) {
    const delay =
      Number(refs.delayRef.value) + (position - 1) * refs.stepRef.value;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
