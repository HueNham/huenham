
function checkSymmetricalNumber(n){
    const strConvert = n.toString();
    const reverseNum = strConvert.split('').reverse().join('');
    if (strConvert === reverseNum){
        console.log(n," is a symmetrical number.")
    }
    else
    {console.log(n," isn't a symmetrical number.")}
}

checkSymmetricalNumber(1321);