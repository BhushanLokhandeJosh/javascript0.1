/* Complete the tasks with async/await that makes a fetch call,
 but resolves with the data only 2 seconds after the data has been 
 received in the fetch.  */

async function fetchData(Url) {
  try {
    console.log("In Asynchronous function...");

    const promise = fetch(Url, { method: "get" });

    let holdData = await promise;

    let result = await holdData.json();

    console.log("Wait for Few Seconds while data has been loading.....");

    let response = await setTimeout(requestPause, 2000, result);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

function requestPause(response) {
  console.log("Displaying the data", response);
}

const Url = "https://reqres.in/api/users";

fetchData(Url); //Calling the function for fetching data from passed URL.
