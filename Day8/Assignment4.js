// 4.  What will be printed to the console?

const testAsyncFunction = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block : ", res);
  })
  .catch((err) => console.log("Error in catch block : ", err));

/* 
  CONCLUSION :
  Response 1 ->
  Here the promise object is rejected so straight away executor will call 
  reject callback function and thus promise returns error message which 
  will be handled by catch block code in which rejected message will be 
  logged on console.

*/
