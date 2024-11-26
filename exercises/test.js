/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the '' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

 function iterate(arg) {
  console.log(arg);
  return arg += 1;
  
}
 function alwaysThrows() {
  throw new Error("OH NOES");

}
 function onReject(arg) {
  if (typeof arg === Object) {
    console.log(arg.message)
  } else {
    console.log(arg);
  }

}


 const promise =  Promise.resolve(iterate(1))
                          .then(val => iterate(val))
                          .then(val => iterate(val))
                          .then(val => iterate(val))
                          .then(val => iterate(val))
                          .then(() => alwaysThrows())
                          .catch(err => onReject(err));
console.log(promise);
