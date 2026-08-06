

let arr=[6,2,1,9,3];
let target=2
function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr,target))