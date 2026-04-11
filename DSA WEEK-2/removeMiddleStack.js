//using recursion

// let stack=[1,2,3]

// function deleteMiddle(stack,k){
//     if(k===0){
//         stack.pop()
//         return
//     }
//     let top=stack.pop()
//     deleteMiddle(stack,k-1)
//     stack.push(top)
// }
// function removeMiddle(stack){
//     let n=stack.length
//     let middleIndex=Math.floor(n/2)
//     deleteMiddle(stack,middleIndex)
// }
// removeMiddle(stack)
// console.log(stack)



//using extra stack

let stack=[1,2,3,4]
function removeMiddle(stack){
    let n=stack.length
    let middleIndex=Math.floor(n/2)
    let temp=[]

    for(let i=0;i<middleIndex;i++){
        temp.push(stack.pop())
    }
    stack.pop()

    while(temp.length>0){
        stack.push(temp.pop())
    }
    return stack
}
console.log(removeMiddle(stack))