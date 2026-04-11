function removeEven(arr,i){
    if(i>=arr.length){
        return []
    }
    
    let rest=removeEven(arr,i+1)
    if(arr[i]%2===0){
        return rest
    }
    else{
        return [arr[i],...rest]
    }
}
console.log(removeEven([1,2,3,4,5,6],0))