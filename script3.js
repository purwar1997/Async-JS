const fun = () => {
  return new Promise((resolve, reject) => {
    let value;
    if (value) {
      resolve('Resolved');
    } else {
      reject('Rejected');
    }
  });
};

// use of then(), catch() and finally() methods can be replaced by try, catch() and finally blocks

try {
  const data = fun();
  console.log(data);
} catch (err) {
  console.log(err.message);
} finally {
  console.log('Code will be executed in both the cases');
}
