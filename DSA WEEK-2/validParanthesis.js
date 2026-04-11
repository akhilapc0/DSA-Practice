function isValid(str){
    let stack=[]
    for(let ch of str){
        if(ch==='('|| ch==='{' || ch==='['){
            stack.push(ch)
        }
        else{
            if(stack.length===0){
                return false
            }
            let top=stack.pop()
            if(ch===')'&& top!=='('||
                ch==='}'&& top!=='{'||
                ch===']'&& top!=='['
            ){
                return false
            }
        }
    }
    return stack.length===0
}
console.log(isValid('{[()]}'))