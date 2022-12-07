/* Create a promise that makes a fetch call, but resolves with
 the data only 2 seconds after the data has been received in the fetch. */

const promise = new Promise((resolve, reject) => {
  const data = fetch("https://reqres.in/api/users", { method: "get" });
  resolve(data);
});

promise
  .then((data) => data.json())
  .then((response) => {
    console.log("Wait for Few Seconds while data has been loading.....");
    const start = Date.now();
    console.log(start - Date.now());
    setTimeout(requestPause, 2000, response, start);
  })
  .catch((err) => console.log("Error Occurs while fetching", err));

function requestPause(response, start) {
  console.log(response);
  const diff = Date.now() - start;
  console.log(diff);
}
