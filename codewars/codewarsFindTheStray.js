function stray(numbers) {
    let stray;
    for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] === numbers[i + 1]){
            continue;
        } else {
            if(i === 0){
                stray = numbers[i];
                break;
            } else {
                stray = numbers[i + 1];
                break;
            }
        }
    }
    return stray;
    // let i = true;
    // let stray;
    // while(i === true){
    //     if (numbers[i] === numbers[i + 1]){
    //         i;
    //     } else {
    //         if( indexOf(numbers) === 0){
    //             stray = numbers[i];
    //             i = false;
    //         } else {
    //             stray = numbers[i + 1];
    //             i = false;
    //         }
    //     }
    // }
    // return stray;
}

console.log(stray([1,1,1,1,1,2]));
console.log(stray([2,2,2,2,2,2,2,2,5]));
console.log(stray([5,5,5,5,5,5,5,5,5,5,5,10]));
console.log(stray([4,4,4,4,5,4,4,4,4,4]));
console.log(stray([1,5,5,5,5,5,5,5,5,5]));
