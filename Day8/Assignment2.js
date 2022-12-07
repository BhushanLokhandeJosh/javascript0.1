/* 2.  Using promises - write a function that fetches data from 
an API endpoint (GET https://reqres.in/api/users ). Log the data 
into the console once it is received. */

const promises = fetch("https://reqres.in/api/users", { method: "get" });

promises
  .then((data) => {
    return data.json();
  })
  .then((users) => console.log(users))
  .catch((err) => console.log("Error occurs Here", err));

console.log("---------------------");

const url = "https://reqres.in/api/users";

const asyncFn = async () => {
  const response = await fetch(url).then((res) => res.json());
  return response;
};

asyncFn();
