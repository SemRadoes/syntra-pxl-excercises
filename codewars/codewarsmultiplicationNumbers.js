// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    let numOfMultiplications = 0;
    let multiplication = 0
    const nums = num.toString();
    arrayNums = nums.split("");
    let num1 = parseInt(arrayNums[0]);
    let num2 = parseInt(arrayNums[1]);
    multiplication += num1 * num2;
    numOfMultiplications++;
    while(nums.length > 1 && multiplication < num){
        multiplication += num1 * num2;
        numOfMultiplications++;
        
    } 
    return numOfMultiplications
}
