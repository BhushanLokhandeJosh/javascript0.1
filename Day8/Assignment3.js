/* 3. What will be printed to the console when the promise resolves 
and when it rejects?    */

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
CONCLUSION :
Response 1 ->
While executing promise object if it matches If condition then promise 
resolves and then. consumer function gets executed on resolved fulfilled 
state of promise.

Response 2 -> 
While executing promise object if it fails to matches If condition then 
promise gets rejected,executor calls reject callback function and message is
passed to .catch block in function and after that the function will return 
the promise object...In testAsyncFunction rejected error is already catched
so now no such error is there to execute so .catch block will not execute but
.then block will be executed which gives response as undefined.

*/
