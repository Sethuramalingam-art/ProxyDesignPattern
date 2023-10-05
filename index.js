var obj = {
  name: "sethu",
  age: 30,
  gender: "male",
};

const proxyObj = new Proxy(obj, {
  get(obj, prop) {
    // return obj[prop]; //same with reflect
    return Reflect.get(obj, prop);
  },
  set(obj, prop, value) {
    if (prop === "gender") {
      if (typeof value !== "string") {
        console.log(`the value for ${[prop]} should be a string`);
      } else {
        // obj[prop] = value //same with reflect
        Reflect.set(obj, prop, value);
      }
    }
    return true;
  },
});

proxyObj.gender = 3;

console.log(proxyObj);
// the value for gender should be a string because it is string type
// { name: 'sethu', age: 30, gender: 'male' }
