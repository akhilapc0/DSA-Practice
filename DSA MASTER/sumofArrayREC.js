function sum(arr,index){
    if(index>=arr.length){
        return 0
    }

    return arr[index]+sum(arr,index+1)

}
console.log(sum([2,4,6,8],0))