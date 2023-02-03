// Import stylesheets
import './style.css';

function fib(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }
  return fib(n - 1) + fib(n - 2);
}
//[5,2,4,3,1]
function bubbleSort(arr) {
  let startIndex = 0;
  for (let i = 0; i < arr.length - startIndex; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
//0 1 1 2 3 5 8 13
function fib1(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let result = 0;
  let firstValue = 0;
  let secondValue = 1;
  let startIndex = 0;
  while (startIndex < n - 1) {
    result = firstValue + secondValue; //1
    firstValue = secondValue; // 1
    secondValue = result; // 1
    startIndex++; //1
  }
  return result;
}
//console.log(fib1(12));
// console.log('a');

// new Promise((res) => {
//   console.log('b');
//   setTimeout(() => res(console.log('d')));
// });

// console.log('c');

const incrementCounter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

const searchInput = document.getElementById('searchText');

const debounce = (fn) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, 1000);
  };
};

// const debouncedFn = debounce((event) => {
//   console.log("fetch data");
// });

const throttledFn = throttle((event) => {
  console.log(event.target.value);
});

function throttle(fn) {
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      fn.call(this, ...args);
      isCalled = true;
      setTimeout(() => {
        isCalled = false;
      }, 1000);
    }
  };
}

searchInput.addEventListener('input', (event) => throttledFn(event));

function pipe(...fns) {
  return function (value) {
    return fns.reduce((currentValue, currentFn) => {
      return currentFn(currentValue);
    }, value);
  };
}

const sum = (val) => {
  return val + 2;
};

const mult = (val) => {
  return val * 2;
};

console.log('pipe', pipe(sum, mult)(3));

function add(a) {
  return function (b) {
    if (!b) {
      return a;
    } else {
      return add(a + b);
    }
  };
}

console.log(add(2)(3)(4)());

function myFlat(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...myFlat(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(myFlat([1, 2, 3, [4, 5, 6]]));

function compose(...funs) {
  return function (value) {
    return funs.reduceRight((currentValue, currentFn) => {
      return currentFn(currentValue);
    }, value);
  };
}

console.log('compose', compose(sum, mult)(3));

function Vehicle(tyreCount) {
  this.noOfTyre = tyreCount;
}

Vehicle.prototype.honk = function () {
  console.log('horn honk with ' + this.noOfTyre);
};

const v1 = new Vehicle(4);
v1.honk();
const v2 = new Vehicle(3);
v2.honk();

const obj = {
  a: 2,
  b: 3,
  getCount: function () {
    return 3;
  },
};
const obj2 = Object.create({}, obj);
delete obj.a;

console.log(obj, obj2);
