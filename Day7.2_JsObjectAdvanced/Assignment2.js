//Write a recursive function to create a deep clone of a nested object.

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

const deepCopy = (object) => {
  let newObject = Array.isArray(object) ? [] : {};
  for (let property in object) {
    let value = object[property];
    if (typeof value === "object") {
      newObject[property] = deepCopy(value);
    } else {
      newObject[property] = value;
    }
  }
  return newObject;
};

const deepCloningObject = deepCopy(object);

console.log(deepCloningObject === object);

console.log(deepCloningObject.address === object.address);
