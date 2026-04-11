
// let arr=[4,2,9,5,3,6]
// class Heap{
//     heapSort(arr){
//         let n=arr.length
//         for(let i=Math.floor(n/2)-1;i>=0;i--){
//             this.heapify(arr,n,i)
//         }

//         for(let i=n-1;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapify(arr,i,0)

//         }
//         return arr
//     }
//     heapify(arr,n,i){
//         let largest=i
//         let left=2*i+1
//         let right=2*i+2

//         if(left<n && arr[left]>arr[largest]){
//             largest=left
//         }
//         if(right<n && arr[right]>arr[largest]){
//             largest=right
//         }
//         if(largest !==i){
//             [arr[i],arr[largest]]=[arr[largest],arr[i]]
//             this.heapify(arr,n,largest)
//         }
//     }
// }

// const h=new Heap()
// console.log(h.heapSort(arr))




let arr = [4, 10, 3, 5, 1]


function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

function heapify(arr,n,i){
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

console.log(heapSort(arr))
