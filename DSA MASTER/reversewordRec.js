let sentence="hello akhila"
let words=sentence.split(" ")
console.log(words)

function rev(word,i){
    if(i<0){
        return ""
    }

    return word[i]+rev(word,i-1)
}


let result=""
for(let i=0;i<words.length;i++){
    result+=`${rev(words[i],words[i].length-1)} `
}
console.log(result)
