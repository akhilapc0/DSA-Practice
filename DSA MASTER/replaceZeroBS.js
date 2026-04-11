let arr = [2,4,6,8,10]
let target = 18

function binarySearch(arr,target){
        let left=0
        let right=arr.length-1
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]===target){
                arr[mid]=0
                 return arr 
            }
            else if(arr[mid]<target){
                 left=mid+1
            }
            else{
                right=mid-1
            }
        }
        return arr
      
}
console.log(binarySearch(arr,target))