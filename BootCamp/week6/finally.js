fetch('https://www.error.www')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => {
    console.log('Hello');
    throw new Error('test');
  })
  .then((result) => { console.log(result); })
  .then(undefined, (error) => { })
  .catch((error) => { console.log('JS'); })
  .then((result) => { console.log(result); })
  .finally(() => { console.log('final'); });
