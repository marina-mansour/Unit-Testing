const {
  sum,
  subtract,
  isEven,
  isPalindrome,
  factorial,
  generator,
  Human,
  reverse,
  Observable,
} = require("./math");

//1
test("adds two number", () => {
  expect(sum(1, 2)).toBe(3);
});
//2
test("subtract two number", () => {
  expect(subtract(3, 2)).toBe(1);
});
//3
test("Even number or Odd number", () => {
  expect(isEven(2)).toBe("Even");
});
//4
test("this String is not Palindrome", () => {
  expect(isPalindrome("hOoOh")).toBe(true);
});
//5
test("Factorial of number", () => {
  expect(factorial(5)).toBe(120);
});
//6
test("Iterator from x to y", () => {
  expect([...generator(1, 4)]).toEqual([1, 2, 3, 4]);
});
//7
test("should create an instance of Human", () => {
  const person = new Human("Marina");
  expect(person instanceof Human).toBe(true);
});
//8
expect.extend({
  toBeInstanceOfHuman(received) {
    const pass = received instanceof Human;
    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            actual
          )} not to be within range ${this.utils.printExpected(
            `${floor} - ${ceiling}`
          )}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            actual
          )} to be within range ${this.utils.printExpected(
            `${floor} - ${ceiling}`
          )}`,
        pass: false,
      };
    }
  },
});

test("should create an instance of Human", () => {
  const p = new Human("Mans");
  expect(p).toBeInstanceOfHuman();
});
//9
test("reverse string", () => {
  expect(reverse("hello")).toBe("olleh");
});
//10
describe("Observable", () => {
  test("should notify all subscribers when an event occurs", () => {
    const observable = Observable();
    const callback = jest.fn();

    observable.subscribe(callback);
    observable.notify("event data");

    expect(callback).toHaveBeenCalledWith("event data");
  });

  test("should allow subscribers to unsubscribe", () => {
    const observable = Observable();
    const callback = jest.fn();

    const unsubscribe = observable.subscribe(callback);
    unsubscribe();
    observable.notify("event data");

    expect(callback).not.toHaveBeenCalled();
  });

  test("should notify multiple subscribers", () => {
    const observable = Observable();
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    observable.subscribe(callback1);
    observable.subscribe(callback2);
    observable.notify("event data");

    expect(callback1).toHaveBeenCalledWith("event data");
    expect(callback2).toHaveBeenCalledWith("event data");
  });
});
