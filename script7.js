const chuck = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');

  if (response.status === 200) {
    const data = await response.json();
    const joke = data.value;
    console.log(joke);
  } else {
    console.log('URL not found');
  }
};

chuck().then(
  () => {},
  err => console.log(`${err.name}: ${err.message}`)
);
