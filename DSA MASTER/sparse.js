//in sparse array most of the elements are zero

// let arr = [0, 0, 0, 5, 0, 0, 0]

// let arr = [0, 0, 3, 0, 0, 1, 0]
// let zeroCount=0
// let nonZeroCount=0
// for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             zeroCount++
//         }else{
//             nonZeroCount++
//         }
// }

// if(zeroCount>nonZeroCount){
//     console.log("Sparse Array")
// }else{
//     console.log("Not Sparse Array")
// }


//Convert a 1D normal array into sparse representation

// let arr = [0, 0, 5, 0, 0, 8]
// let result=[]
// for(let i=0;i<arr.length;i++){
    
//     if(arr[i]!==0){
    
//       result.push( [i,arr[i]])
//     }
    
    
// }
// console.log(result)

//Convert sparse representation → normal array.

// let sparse = [
//   [2, 5],
//   [5, 8]
// ]
// let length = 6
//[0, 0, 5, 0, 0, 8]

// let result=[]
// for(let i=0;i<length;i++){
//     result.push(0)
// }
// console.log(result)
// result[2]=5
// result[5]=8
// console.log(result)

//correct method

// let result=[]
// for(let i=0;i<length;i++){
//     result.push(0)
// }

// for(let i=0;i<sparse.length;i++){
//     let index=sparse[i][0]
//     let value=sparse[i][1]
//     result[index]=value
// }
// console.log(result)