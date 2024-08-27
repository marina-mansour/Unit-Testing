const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const isEven = (a) => {
  a % 2 == 0 ? (res = "Even") : (res = "Odd");
  return res;
};

const isPalindrome = (a) => {
  for (let i = 0, ii = a.length - 1; i < ii; i++, ii--) {
    if (!(a[i] === a[ii])) {
      return false;
    }
  }
  return true;
};

const factorial = (a) => {
  if (a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
};

const generator = (start = 0, end = 5, step = 1) => {
  let nextIndex = start;
  return {
    next() {
      if (nextIndex <= end) {
        let result = { value: nextIndex, done: false };
        nextIndex += step;
        return result;
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

class Human {
  constructor(name) {
    this.name = name;
  }
}

const reverse = (str) => str.split("").reverse().join("");

const Observable = () => {
  let subscribers = [];

  return {
    subscribe(callback) {
      subscribers.push(callback);
      return () => {
        subscribers = subscribers.filter(
          (subscriber) => subscriber !== callback
        );
      };
    },
    notify(data) {
      subscribers.forEach((subscriber) => subscriber(data));
    },
  };
};

module.exports = {
  sum,
  subtract,
  isEven,
  isPalindrome,
  factorial,
  generator,
  Human,
  reverse,
  Observable,
};
