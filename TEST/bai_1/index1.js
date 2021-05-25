// C1
const findOppositeNumber  = (n,inputNumber) => {
    let result;
    if( n%2 !== 0) {
        alert("Số n sai");
    } else {
        if(inputNumber < n/2) {
            result = inputNumber + n/2;
        } else {
            result = inputNumber - n/2;
        }
    }
    return result;
}
console.log(findOppositeNumber(10,2));
console.log(findOppositeNumber(10,6));

// C2
const findOppositeNumber_2 = (a,inputNumber_2) => {
    let result_2;
    space = a/2;
    if(inputNumber_2 < space) {
        result_2 = inputNumber_2 + space;
    }else{
        result_2 = inputNumber_2 - space;
    }
    return result_2;
} 
console.log(findOppositeNumber_2(16,5));
