// Q1 Falsy or Truthy
function filterOutFalsy(elem1, elem2) {
    return elem1 !== true ? elem1 : elem2;
}

console.log(filterOutFalsy(false, 100));


// Q2 Return the length of any given array
function arrLength(array) {
    return array.length;
}

console.log(arrLength([2, 3, 4]));


// Q3 Get the last element in an array
function lastElem(array) {
    return array[array.length - 1];
}

console.log(lastElem(['dog', 'cat']));


// Q4 Find the sum of an array
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        // This is how you loop through every element in an array
        sum = sum + arr[i];        
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));


// Q5 Add up the numbers from a single number
function progressiveSum(addNum) {
    let sum = 0;
    for (let i = 1; i <= addNum; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(4));


// Q6 Calculate the time
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds/ 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes;
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(50));


// Q7 Find the largest number
function getMax(listOfNum) {
    let max = listOfNum[0];

    for (let i = 0; i < listOfNum.length; ++i) {
        if (listOfNum[i] > max) {
            max = listOfNum[i];
        }
    }
    return max;
}

console.log(getMax([5, 100, 7]));


// Q8 Reverse a string
function reverseString(str) {
    let reversedString = '';
    
    for (let i = 0; i < str.length; ++i) {
        // This is how you loop through every character in a string
        reverseString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString('abc'));


function reverseString(str) {
    let list = '';

    for (let i = str.length - 1; i >= 0; --i) {
        list += str[i];
    }
    return list;
}

console.log(reverseString('asd'));


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('abcd'));


// Q9 Turn every element in an array into 0
function convertToZeros(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0;
    }    
    return newArr;
}

console.log(convertToZeros([5, 100, 0]));


function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6, 7]));


function convertToZeros(arr) {
    // .map converts everything in an array to what you have on the right 
    // side of the elem
    return arr.map(elem => 0);
}

console.log(convertToZeros([3, 4, 5, 6, 7]));


// Q10 Filter out all the apples
function removeApples(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeApples(['Banana', 'Apple', 'Orange']));


function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Banana', 'Apple', 'Orange']));


// Q11 Filter out all the falsy values
function filterOutFalsy(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterOutFalsy(["", 0, null, undefined, "0"]));


function filterOutFalse(arr) {
    return arr.filter(elem => !!elem === true);
}

console.log(filterOutFalse([0, null, undefined, "true"]));


// Q12 Truthy to true, Falsy to false
function convertToBoolean(arr) {
    return arr.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "Ameer", "", []]));