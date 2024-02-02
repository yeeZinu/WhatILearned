fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // throw new Error('too long');
  })
  .then((result) => {
    console.log(result);
    // throw new Error('no required field');
  })
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });

/*
 instanceof 연산자를 사용하여 에러를 구분할 수 있다.
  .catch((error) => { 
    if(error instanceof TypeError){

    }else if(error instanceof CustomErrorType_A){

    }else if(error instanceof CustomErrorType_B){

    }else{

    }
  });

*/