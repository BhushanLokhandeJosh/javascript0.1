/* 
        Write a function mapBy to convert an array of objects into 
        an object mapped by the specified key:
            Example: 
        Let users = [{
                "id": 1,
                "first_name": "Nicki",
                "email": "ncrozier0@squarespace.com",
                "date_of_birth": "2009/05/09"
                }, {
                "id": 2,
                "first_name": "Raychel",
                "email": "rmcgrady1@cpanel.net",
                "date_of_birth": "1996/11/05"
                }];
            mapBy(users, “first_name”) 
 
            This should return
            {
             “Nicki”:{id:1, first_name:”Nicki”, ...},
             “Raychel”:{id:2, first_name:”Raychell”, ...},
            }

*/
let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
];

console.log();

const mapByFirstName = (users, key) => {
  return users.reduce((emptyObject, item) => {
    return Object.assign(emptyObject, {
      [item[key]]: item,
    });
  }, {});
};

console.log(mapByFirstName(users, "first_name"));
