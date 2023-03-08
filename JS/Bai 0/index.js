// chia từ 2 đến n-1


function numberCheck(n) {
   
    if(n <2) {
        console.log(n +" là số nguyên tố.");
    }
    else{
        for (let i = 2; i < n-1; i++)
        {
            if(n % i == 0) {
                console.log(n +" không là số nguyên tố.")
                break;
            }
            else {
                console.log(n + " là số nguyên tố")
                break;
            }
        }
    }
}
numberCheck(21);git