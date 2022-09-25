// fetch()
// fetch() is used to get data by making network requests to API's
// fetch() returns a promise that can either be in a resolved or rejected state
// fetch() rejects a promise only when client and server can't communicate with each other i.e
// either client or server or both are offline
// otherwise fetch() always returns promise in a resolved state even if the entered API is wrong

const fun = async function () {
  // await keyword blocks the execution of code inside async function until the promise is resolved
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');

  // using status codes
  // 200 implies data successfully fetched
  // 404 implies URL not found
  if (response.status === 200) {
    const data = await response.json(); // used to fetch data
    console.log(data);
  } else {
    console.log('Unable to fetch data');
  }
};

fun();
