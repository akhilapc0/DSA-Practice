
let arr=[1,2,3,4,5,6]
let target=3
function binarySearch(arr,target,left,right){

    
    if(left >right){
        return -1
    }
    let mid=Math.floor((left+right)/2)


    if(arr[mid]===target){
        return mid
    }
    if(arr[mid]<target){
        return binarySearch(arr,target,mid+1,right)
    }
    else{
        return binarySearch(arr,target,left,mid-1)
    }


}
console.log(binarySearch(arr,target,0,arr.length-1))