//console.log("Bai 1");
function printNumber(n) { 
  for(let i = 1; i<=n; i++){
   console.log(i);
  }
}
printNumber(10);

// console.log("Bai 2");
function printOddNumber(n){
  for (let i = 1; i <= n; i+=2){
    if (i%2!=0){
      console.log(i);
    }
  }
}
printOddNumber(10);

// console.log("Bai 3");
 function printEvenNumber(n){
  for (let i = 2; i <= n; i+=2){
    if (i%2==0){
      console.log(i);
    }
  }
}
printEvenNumber(10);

//  console.log("Bai 4");
//tạo 1 funtion vừa kiểm tra và in ra số nguyên tối, lấy hai biến i,j. check điều kiện nếu isPrime false, TH true thì in ra số đó.
function printPrimeNumber(n){
  let i = 2;
  while(i <= n){
    let isPrime = true;
    let j = 2;
    while(j <= Math.sqrt(i)) {
    if(i % j ===0){
      isPrime = false;
      break;
    }
      j++;
  }
    if(isPrime) 
      console.log(i);
    i++;
}
}

printPrimeNumber(20);

cách 2: Tạo hai function: isPrime và printPrime

function isPrime(n){
  if(n < 2)
    return false;
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0)
      return false;
  }
  return true;
}

function printPrime(n) {
  for(let i = 1; i <= n; i++){
    if(isPrime(i))
      console.log(i);
  }
}
printPrime(10);

// console.log("Bai 5: Tính tổng từ 1 đến n");

function sumCount(n){
  let sum = 0;
  for(let i = 1;i <= n; i++){
    sum = sum + i;
  }
  return sum;
}
console.log(sumCount(10));

//console.log("Bai 6: Kiem tra mot so n co la toan so le hay khong");
function checkOddDigit (n){
    while(n>0){
      if (n%2==0){
        return false;
      }
      n = Math.floor(n/10);
    }
    return true;
  }
  const isOddDigit= checkOddDigit(n)
  if (isOddDigit = true){console.log(n," co toan chu so le")}
  else(console.log())
  checkOddDigit(397)
  
  
  
  
  
  