/*  Write a function that returns a nested key within an object:
{
  name:”Harry Potter”,
  age: 12,
  address: {
  details: [“4”, “Privet Drive”],
  area:”Little Whinging”,
  city: “Surrey”,
  state: “England”
  } 
}
getNestedKey(obj, “address.details.1”)

//This should return “Privet Drive” */

let object = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const findByKey = (newObject, key) => {
  for (const property in newObject) {
    console.log(property);
    if (property === key) {
      console.log("Key Match");
      return newObject[key];
    }
  }
};

const flatObject = (object) => {
  let newObject = {};

  for (const property in object) {
    if (
      typeof object[property] === "object" &&
      !Array.isArray(object[property])
    ) {
      const nestedObj = flatObject(object[property]);
      for (const nestedObject in nestedObj) {
        newObject[property + "." + nestedObject] = nestedObj[nestedObject];
      }
    } else if (
      typeof object[property] === "object" &&
      Array.isArray(object[property])
    ) {
      const nestedObj = flatObject(object[property]);
      for (const arrayElement in nestedObj) {
        newObject[property + "." + arrayElement] = nestedObj[arrayElement];
      }
    } else {
      newObject[property] = object[property];
    }
  }

  return newObject;
};

const newObj = flatObject(object);

console.log(newObj);

const keyValue = findByKey(newObj, "address.details.1");

console.log(keyValue);
