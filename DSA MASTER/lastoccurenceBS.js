let arr=[1,1,1,1,1]
let target=1




function binarySearch(arr,target){
        let left=0
        let right=arr.length-1
        let ans=-1
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(arr[mid]===target){
                ans=mid
                left=mid+1
            }
            else if(arr[mid]<target){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
        return ans
}
console.log(binarySearch(arr,target))