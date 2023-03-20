console.log("Viet chuong trinh tinh tong binh phuong 1 den n")

function tinhBinhPhuong(n){
    let sum = 0;
    for (let i=1; i<=n; i++){
        sum=sum+Math.pow(i,2);
    }
    return sum;
}
console.log(tinhBinhPhuong(3));