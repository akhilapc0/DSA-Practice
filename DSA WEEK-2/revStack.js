// function reverseStack(stack){
//     let tempStack=[]
//     while(stack.length>0){
//         tempStack.push(stack.pop())
//     }
//     return tempStack
// }
// let stack=[1,2,3,4]

// console.log(reverseStack(stack))


//recursive version

let stack=[1,2,3]

function insertAtBottom(stack,value){
    if(stack.length===0){
        stack.push(value)
        return
    }
    let top=stack.pop()
    insertAtBottom(stack,value)
    stack.push(top)
}
function reverseStack(stack){
    if(stack.length===0){
        return
    }
    let top=stack.pop()
    reverseStack(stack)
    insertAtBottom(stack,top)
}
reverseStack(stack)
console.log(stack)
