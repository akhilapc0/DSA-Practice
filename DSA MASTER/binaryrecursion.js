//in binary recursion in one function 2 recursive function call happen

// function fib(n){
//     if(n<=1){
//         return n
//     }
//    return fib(n-1)+fib(n-2)
// }
// console.log(fib(4))


function printBinary(){
    if(n===0){
        return
    }
    printBinary(n-1)
    printBinary(n-1)
    console.log(n)
}
printBinary(2)