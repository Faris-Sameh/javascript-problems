// Problem 1
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(array) {
    return array.filter(number => number % 2 === 0);
}

console.log(getEvenNumbers(array1));

// Problem 2

const array2 = [1, 2, 3, 4, 115, 6, 7, 812, 19, 10];

function getMax(array) {
    if (array.length === 0) return undefined;  // mesh n2sa edge case

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(getMax(array2));

// Problem 3

function reverser(str) {
    let reverse = "";
    for (let i= str.length-1; i>= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

const someString = "Some Text";
console.log(reverser(someString));

// Problem 4
const array4=[1,2,3,3,5,2,6,8,54,3,1,546,9,7,9,1,2,3,1,2,4,5,7,8];  // mesh a7sn 7l O(n^2) complexity
function noDuplicate(array){
    let resultArray=[];
    for(let i=0; i<array.length; i++){
        if (!resultArray.includes(array[i])) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}
console.log(noDuplicate(array4));

// Another solution for Problem 4 O(1) lw 22dr ast3ml el "Sets".
const array5=[1,2,3,3,5,2,6,8,54,3,1,546,9,7,9,1,2,3,1,2,4,5,7,8];

function noDuplicateSets(array) {
    return [...new Set(array)];
}

console.log(noDuplicateSets(array5));