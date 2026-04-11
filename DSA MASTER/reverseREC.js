let str="akhila"
function rev(i){
    if(i<0){
        return ""
    }
    return str[i]+rev(i-1)
}
console.log(rev(str.length-1))