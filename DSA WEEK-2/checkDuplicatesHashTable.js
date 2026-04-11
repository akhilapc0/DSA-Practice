function  checkDuplicates(str){
    let seen={}
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(seen[char]){
            return true
        }
        seen[char]=true
    }
        return false
}
console.log(checkDuplicates("abcd"))