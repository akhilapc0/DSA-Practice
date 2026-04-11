// function quickSort(arr){
//         if(arr.length<=1){
//             return arr
//         }
//         let pivot=arr[arr.length-1]
//         let left=[]
//         let right=[]

//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([2,6,3,9,0,8]))


//quickSort in-place version


function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    let temp=arr[i+1]
    arr[i+1]=arr[high]
    arr[high]=temp

    return i+1
}
function quickSort(arr,low,high){
    if(low<high){
        let pivotIndex=partition(arr,low,high)

        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
}
let arr=[2,9,3,6,8,5,0,4]
quickSort(arr,0,arr.length-1)
console.log(arr)