const fun = () => {
  // promise constructor will be called and a promise object will be returned
  // promise object can exist in either of two states: 1) resolved state  2) rejected state
  return new Promise((resolve, reject) => {
    const value = true;
    if (value) {
      // if resolve function is called, promise object will be in a resolved state
      resolve('Promise resolved');
    } else {
      // if reject function is called, promise object will be in a rejected state
      reject('Promise rejected');
    }
  });
};

// promise resolved => callback inside then() will be executed
// promise rejected => callback inside catch() will be executed
fun()
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('Code will be executed in both the cases'));
