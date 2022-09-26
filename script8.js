const findUser = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const Users = ['userOne', 'userTwo', 'userThree', 'userFour'];
      const user = 'userFive';

      Users.includes(user) ? resolve('User found') : reject('User not found');
    }, 3000);
  });
};

findUser()
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('Code will be executed in both the cases'));
