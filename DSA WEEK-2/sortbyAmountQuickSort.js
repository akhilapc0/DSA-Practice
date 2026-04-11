let items=[
 {item:"Pen", amount:40},
 {item:"Book", amount:120},
 {item:"Bag", amount:80}
]

// function quickSortItems(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
    
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].amount< pivot.amount){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSortItems(left),pivot,...quickSortItems(right)]
// }

// console.log(quickSortItems(items))


//in-place

function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1

    for(let j=low;j<high;j++){
        if(arr[j].amount< pivot.amount){
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
function quickSortItems(arr,low,high){

        if(low<high){
            let pivotIndex=partition(arr,low,high)
            quickSortItems(arr,low,pivotIndex-1)
            quickSortItems(arr,pivotIndex+1,high)
        }
}

quickSortItems(items,0,items.length-1)
console.log(items)

