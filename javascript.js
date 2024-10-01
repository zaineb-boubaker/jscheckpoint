// let a = "zaineb";
// console.log(a[1]);
// let word = "zaineb";

// FUNCTION REVERSE
function reverse(word) {
  let rev = "";
  for (let i = word.length - 1; i >= 0; i--) {
    rev = rev + word[i];
  }
  return rev;
}

console.log(reverse("ZAINEB BOUBAKER"));

// FUNCTION COUNT

function count(word) {
  let nb = 0;
  for (let i = 0; i < word.length; i++) {
    nb = i;
  }
  return nb + 1;
}

console.log(count("zaineb is The QUEEN"));

// CAPITALIZE FUNCTION

function capitalize(word) {
  let cap = "";
  for (let i = 0; i < word.length; i++) {
    // word[0].toUpperCase();
    if (word[i] == " ") {
      cap = cap + " " + word[i + 1].toUpperCase();
      i++;
    } else if (i == 0) {
      cap = cap + word[i].toUpperCase();
    } else {
      cap = cap + word[i];
    }
  }

  return cap;
}
console.log(capitalize("this sentence will be changing"));

// MAXANDMIN FUNCTION
let numbers = [78, 758, 8, 74588, 155];

function maxandmin(num) {
  let max = num[0];
  let min = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
    if (num[i] < min) {
      min = num[i];
    }
  }
  return [min, max];
}
console.log(maxandmin(numbers));

// SUM FUNCTION
let numbers1 = [10, 5, 15, 20, 40];
function sum(num) {
  let somme = 0;
  for (let i = 0; i < num.length; i++) {
    somme = somme + num[i];
  }
  return somme;
}
console.log(sum(numbers1));

// FUNCTION FILTER
let words = ["omo", "srf", "madam", "zaineb", "level", "win", "ama", "love"];

function palindrome(word) {
  for (
    let i = 0, j = word.length - 1;
    i < word.length / 2 && j > word.length / 2;
    i++, j--
  ) {
    // for (let j = word.length; j > ((word.length) / 2) + 1; i--)
    {
      if (word[i] == word[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(palindrome("omo"));

function filter(num) {
  for (let i = 0; i < num.length; i++) {
    if (palindrome(num[i])) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

console.log(filter(words));

// FACTORIAL FUNCTION
function factorial(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorial(0));

// PRIME FUNCTION
function prime(num) {
  let pri = false;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i == 0) {
      pri = false;
      break;
    } else pri = true;
  }
  return pri;
}
console.log(prime(97));

//  Fibonacci FUNCTION

// function fibonacci(num) {
//     let fib = 0;
//     for (let i = 0; i < num; i++){
//         fib = fib +
//     }
// }

function fibonacci(num) {
  let arr = [0, 1];
  let sum = arr[1];
  for (let i = 1; i < num; i++) {
    sum = sum + arr[i - 1];
    arr.push(sum);
  }
  return sum;
}

console.log(fibonacci(20));
