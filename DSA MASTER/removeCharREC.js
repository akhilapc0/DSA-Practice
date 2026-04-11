function removeChar(str,char,i){
    if(i>=str.length){
        return ""
    }
    let rest=removeChar(str,char,i+1)
    if(str[i]===char){
        return rest
    }
    else{
        return str[i]+rest
    }

}

console.log(removeChar("akhila","k",0))