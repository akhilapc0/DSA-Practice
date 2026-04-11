
// function deleteElement(stack,target){
//         let temp=[]
//         while(stack.length>0){
//             let value=stack.pop()
//             if(value!==target){
//                 temp.push(value)
//             }
//         }
//         while(temp.length>0){
//             stack.push(temp.pop())
//         }
//         return stack
// }
// console.log(deleteElement([1,2,3,4,5],4))


function deleteElement(stack,target){
       if(stack.length===0){
        return
       }
       let top=stack.pop()
       deleteElement(stack,target)
       if(top!==target){
        stack.push(top)
       }
}
let stack=[1,2,3,4,45]
deleteElement(stack,2)
console.log(stack)

