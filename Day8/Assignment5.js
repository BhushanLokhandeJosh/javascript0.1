//5. What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction : ", err);
    throw new Error("Forced error...");
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/* CONCLUSION 
Response 1 ->
If (Math.random() > 0.5) condition pass, then executor calls resolve 
callback function which delegates control to .then method and resulting 
in logging the message passed by resolve callback function.

Response 2 ->
If (Math.random() > 0.5) condition fails, then executor calls reject 
callback function thus promise object .catch method will be called but
there after logging message passed by callback function,now promise will
not returning anything so when we call .then method it will print 
undefined. 

  */
