function removeDuplicates(str){

    let seen={}
    let result=""
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(!seen[char]){
            result+=char
            seen[char]=true
        }
    }
    return result
}
console.log(removeDuplicates("aabbcd"))