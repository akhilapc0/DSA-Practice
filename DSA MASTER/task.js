// let arr=[1,23,3,4,5,6,7]
// function evenZeros(arr){
    
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0 && arr[i]%2===0){
//         for(let j=arr.length;j>i+1;j--){
//             arr[j]=arr[j-1]
//         }
//         arr[i+1]=0
//     }
// }
// }

// evenZeros(arr)
// console.log(arr)


// let arr=[1,2,3,4,5]


// function is(){
//     for(let j=arr.length;j>0;j--){
//             arr[j]=arr[j-1]
//     }
//     arr[0]=0
    
    
// }
// is()
// console.log(arr)

let arr=[1,2,3,4,5,6,7,8,9,10]

function rev(){
    
    let left=0;
    let right=arr.length-1
    let mid=Math.floor((left+right)/2)
    console.log(mid)

    while(left<=mid){
        let temp=arr[left]
        arr[left]=arr[mid]
        arr[mid]=temp

        left++
        mid--
    }
   let res1=5
   while(res1<=right){
    let temp=arr[res1]
    arr[res1]=arr[right]
    arr[right]=temp

    res1++
    right--
   }
}
rev()
console.log(arr)