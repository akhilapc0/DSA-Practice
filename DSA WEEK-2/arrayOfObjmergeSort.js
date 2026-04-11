// let arr=[
//     {name:"A",age:30},
//     {name:"B",age:20},
//     {name:"C",age:25}
// ]

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))

// }

// function merge(left,right){
//     let result=[]
//     let i=0
//     let j=0
//     while(i<left.length && j<right.length){
//         if(left[i].age <= right[j].age){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[j])
//             j++
//         }
//     }
//     while(i<left.length){
//         result.push(left[i])
//         i++
//     }
//     while(j<right.length){
//         result.push(right[j])
//         j++
//     }

//     return result
// }
// console.log(mergeSort(arr))




let arr=[
    {name:"A",age:30},
    {name:"B",age:20},
    {name:"C",age:25}
]

function mergeSort(arr,key){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left,key),mergeSort(right,key),key)

}

function merge(left,right,key){
    let result=[]
    let i=0
    let j=0
    while(i<left.length && j<right.length){
        if(left[i][key] <= right[j][key]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    while(i<left.length){
        result.push(left[i])
        i++
    }
    while(j<right.length){
        result.push(right[j])
        j++
    }

    return result
}
console.log(mergeSort(arr,"age"))