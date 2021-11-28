var gimme = function (inputArray) {
    const originalArray = [...inputArray];
    const sortedArray = inputArray.sort((a,b)=>a-b);
    const middleOfTuplet = sortedArray[1];
    console.log(sortedArray);
    console.log(middleOfTuplet);
    const indexOfMiddleValue = originalArray.indexOf(middleOfTuplet);
    console.log(indexOfMiddleValue);
    // const indexOfMiddle = (inputArray) => {
    //     for(let i = 0; i < sortedArray;i++){
    //         if (middleOfTuplet === inputArray[i]){
    //             return inputArray.indexOf(middleOfTuplet);
    //         }
    //     }
    // }
    // return indexOfMiddle;
};

gimme([1,3,6]);
gimme([10,20,15]);
gimme([6,16,8]);