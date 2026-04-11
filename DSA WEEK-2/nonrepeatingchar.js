function firstNonRepeating(str){
    let freq={}

    for(let i=0;i<str.length;i++){
        let ch=str[i]
        if(freq[ch]){
            freq[ch]++
        }else{
            freq[ch]=1
        }
    }
    for(let i=0;i<str.length;i++){
        if(freq[str[i]]===1){
            return str[i]
        }
    }
    return null
}
console.log(firstNonRepeating("aabbcdd"))