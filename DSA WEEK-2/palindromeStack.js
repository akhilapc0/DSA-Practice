function isPalindrome(str){
        let stack=[]
        for(let ch of str){
            stack.push(ch)
        }

        for(let ch of str){
            if(ch!==stack.pop()){
                return false
            }
        }
        return true
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("madai"))

