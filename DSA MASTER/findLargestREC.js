function largest(arr,index){
    if(index===arr.length-1){
        return arr[index]
    }
    let  restLargest=largest(arr,index+1)
    if(arr[index]>restLargest){
        return arr[index]
    }else{
        return restLargest
    }
}
console.log(largest([2,77,9,3],0))