function sumEven(arr,index){
    if(index>=arr.length){
        return 0
    }
    if(arr[index]%2===0){
        return arr[index]+sumEven(arr,index+1)
    }else{
        return sumEven(arr,index+1)
    }
}

console.log(sumEven([1,2,3,4,5,6],0))