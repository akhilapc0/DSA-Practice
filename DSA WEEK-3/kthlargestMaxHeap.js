let arr=[6,2,3,1,9]
function kthLargest(arr,k){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>=n-k+1;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr[0]
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

console.log(kthLargest(arr,4))