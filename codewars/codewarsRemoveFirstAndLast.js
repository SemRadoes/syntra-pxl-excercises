function removeChar(str){
    const arrayToRemoveFrom = str.split("");
    const slicedArray = arrayToRemoveFrom.slice(1,-1);
    return slicedArray.join("");
   };

console.log(removeChar('eloquent'))// 'loquen'));
console.log(removeChar('country'))// 'ountr'));
console.log(removeChar('person'))// 'erso'));
console.log(removeChar('place'))// 'lac'));
console.log(removeChar('ooopsss'))// 'oopss'));