const uno = () => 'I am one';

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I am two');
    }, 3000);
  });
};

const tres = () => 'I am three';

async function callMe() {
  let valueOne = uno();
  console.log(valueOne);

  let valueTwo = await dos();
  console.log(valueTwo);

  let valueThree = tres();
  console.log(valueThree);
}

callMe()
  .then(() => console.log('Promise resolved'))
  .catch(err => console.log(err));
