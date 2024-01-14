// A execução da função só irá ocorrer 1.5s depois dela ser chamada, já que estamos encadeando 3 delas
// O valor dela é armazenada nos callback

function delayedSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 500);
  });
}

delayedSum(2, 2).then((a) => {
  delayedSum(4, 4).then((b) => {
    delayedSum(a, b).then((result) => {
      console.log(result);
    });
  });
});
