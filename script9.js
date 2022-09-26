const findUser = async () => {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const Users = ['userOne', 'userTwo', 'userThree', 'userFour'];
        const user = 'userFour';

        Users.includes(user)
          ? resolve(console.log('User found'))
          : reject('User not found');
      }, 3000);
    });
  } catch (err) {
    console.log(err);
  }
};

findUser();
