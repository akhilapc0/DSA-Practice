let arr=[1,2,3,4,5,6]
function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

for(let i=0;i<arr.length;i++){
    if(isPrime(arr[i])){
        console.log(arr[i])
    }
}