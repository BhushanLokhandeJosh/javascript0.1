// Write a function to check deep equality of two nested objects/arrays. //

let object = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: { Id: "4", name: "Privet Drive" },
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
    numbers: [1, 2, 3, 4],
  },
};

let deepCloning = JSON.parse(JSON.stringify(object));

let shallowCloning = { ...object };

function checkCloning(clonedObject, Object) {
  let flag = true;
  for (const props in clonedObject) {
    if (typeof clonedObject[props] === "object" || Array.isArray(props)) {
      flag = false;
    }
  }

  if (flag == true) {
    console.log("No More Nested Objects...");
    return;
  } else {
    for (const property in clonedObject) {
      if (
        typeof clonedObject[property] === "object" &&
        clonedObject[property] === object[property]
      ) {
        console.log("It's a shallow copy");
        console.log(clonedObject[property]);
        console.log(clonedObject[property] === object[property]);
        console.log("------------------------");
        return;
      } else if (
        typeof clonedObject[property] === "object" &&
        clonedObject[property] !== object[property]
      ) {
        console.log("In Deep Cloning");
        console.log(clonedObject[property]);
        console.log(clonedObject[property] === object[property]);
        console.log("------------------------");
        checkCloning(clonedObject[property], object[property]);
      }
    }
  }
}

checkCloning(shallowCloning, object);
checkCloning(deepCloning, object);
