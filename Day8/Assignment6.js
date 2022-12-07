/* Create a promise that makes a fetch call, but resolves with
 the data only 2 seconds after the data has been received in the fetch. */

const promise = fetch("https://reqres.in/api/users", { method: "get" });

promise
  .then((data) => data.json())
  .then((response) => {
    console.log("Wait for Few Seconds while data has been loading.....");
    setTimeout(requestPause, 2000, response);
  })
  .catch((err) => console.log("Error Occurs while fetching", err));

function requestPause(response) {
  console.log(response);
}
