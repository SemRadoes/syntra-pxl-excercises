
function accum(s) {
	const arrayAccum = s.split("");
    let returnArray = [];
    let numberOfLetters = 1;
    for(let i = 0; i < s.length; i++){
        if (numberOfLetters === 1){
            returnArray.push(`${arrayAccum[i].toUpperCase()}`);
            numberOfLetters++;
        } else {
            if (arrayAccum[i] === arrayAccum[i].toUpperCase()){
                returnArray.push(`${arrayAccum[i].toUpperCase()}${arrayAccum[i].toLowerCase().repeat(numberOfLetters - 1)}`);
                numberOfLetters++;
            } else {
                returnArray.push(`${arrayAccum[i].toUpperCase()}${arrayAccum[i].repeat(numberOfLetters - 1)}`);
                numberOfLetters++;
            }
        }
    }
    return returnArray.join("-");
}

console.log(accum("abcd"));  //"A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty"));  //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"
console.log(accum("ZpglnRxqenU")); //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); //"N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")); //"M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")); //"E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")); //"H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"