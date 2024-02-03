// if the year is leap year it is divisible by 4.
// those year that is not divisible by 100, i the year is divisible by 4 then it will be leap year.
function isLeapYear(year){
    if(year % 4 === 0){
        return true;

    }
    else{
        return false;
    }
}

const isLeap = isLeapYear(2060);
console.log(isLeap);

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    }
else if(year % 100 === 0 && year % 400 === 0){
    return true;
}

else{
    return false;
}
   
}

const isLeap1 = isLeapYear2(2024);
const isLeap2 = isLeapYear2(2025);
const isLeap3 = isLeapYear2(2026);
const isLeap4 = isLeapYear2(2027);
const isLeap5 = isLeapYear2(2028);

console.log(isLeap1, isLeap2, isLeap3, isLeap4, isLeap5);
