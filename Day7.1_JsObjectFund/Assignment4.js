/*
    Given 2 arrays with related objects, return a new array where 
    objects having the same id from each of the arrays are merged. 
    Try to achieve it with a complexity - O(n).
Example:

● let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 4,
"first_name": "Amata",
}]

let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]
 
mergeById(userNames, userEmails) 
//This should return an array of users in the format: 
[{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
}]
 */

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

function mergeBYId(arr1, arr2) {
  arr1.sort((obj1, obj2) => {
    return obj1.id > obj2.id ? 1 : -1;
  });

  arr2.sort((obj1, obj2) => {
    return obj1.id > obj2.id ? 1 : -1;
  });

  let result = [];

  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i].id == arr2[j].id) {
      arr1[i].email = arr2[j].email;
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i].id < arr2[j].id) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i].id > arr2[j].id) {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

console.log(mergeBYId(userNames, userEmails));
