function tailRecursion(n){
    if(n===0){
        return
    }
    console.log(n)
    tailRecursion(n-1)
}
tailRecursion(4)