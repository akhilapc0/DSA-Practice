// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([7,3,9,1]))
// console.log(bubbleSort([1,2,3,4]))
// console.log(bubbleSort([5,4,3,2]))


function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let swapped=false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp

                swapped=true
            }
        }

        if(swapped===false){
            break
        }
    }

    return arr
}

console.log(bubbleSort([5,2,4,9]))