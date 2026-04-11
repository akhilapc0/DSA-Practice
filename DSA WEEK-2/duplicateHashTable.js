// function hasDuplicate(arr){
//     let table={}
//     for(let value of arr){
//         if(table[value]){
//             return true
//         }
//         table[value]=true
//     }
//     return false

// }
// hasDuplicate([1,2,3,2])



function hasDuplicate(arr){
    let set=new Set()
    for(let value of arr){
        if(set.has(value)){
            return true
        }
        set.add(value)
    }
    return false
}
console.log(hasDuplicate([2,3,1,4,2]))