function reverse(str){
    let stack=[]
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }

    let reversed=""
    while(stack.length>0){
        reversed+=stack.pop()
    }
    return reversed
}
console.log(reverse("dog"))