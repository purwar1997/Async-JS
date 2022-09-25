const uno = () => 'I am One';

// an 'async' function always returns a promise object
const dos = async () => {
  // await keyword pause the execution of JS code until the promise gets resolved
  // await keyword waits for promise to get resolved
  // but it only blocks the code inside 'async' function and not of the main thread
  const response = await new Promise(resolve => {
    setTimeout(() => {
      resolve('I am two');
    }, 3000);
  });

  console.log('Await waits for promise to get resolved');
  return response;
};

const tres = () => 'I am three';
const cuatro = () => 'I am four';

console.log(uno());

dos().then(data => {
  console.log(data);
  console.log(tres());
  console.log(cuatro());
});
