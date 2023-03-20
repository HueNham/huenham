console.log("Tính tổng các số lẻ từ 1 đến n")

// function sumOddNumber(n){
//     let sum = 0
//     for (let i = 1; i <= n; i++){
//         if (i % 2 != 0){
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNumber(10));


function sumOddNumbers(n){
    let sum = 0;
    for (let i = 1; i<=n; i+=2){
        sum += i;
    }
    return sum;
}
console.log(sumOddNumbers(6));