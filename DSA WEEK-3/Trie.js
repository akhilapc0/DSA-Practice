class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
           node= node.children[char]
        }

        return node.isEnd
    }
    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(! node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }

   autoComplete(prefix){
    let node=this.root
    for(let char of prefix){
        if(!node.children[char]){
            return []
        }
        node=node.children[char]
    }
    let result=[]
    function dfs(currentNode,word){
            if(currentNode.isEnd){
                result.push(word)
            }
            for(let char in currentNode.children){
                dfs(currentNode.children[char],word+char)
            }
    }
   
   dfs(node,prefix)
   return result
}

wordSuggestion(prefix,limit=1){

    let node=this.root

    for(let char of prefix){
        if(!node.children[char]){
            return []
        }
        node=node.children[char]
    }

    let result=[]
    
    function dfs(currentNode,word){
        if(result.length===limit){
            return
        }
        if(currentNode.isEnd){
            result.push(word)
        }

        for(let char in currentNode.children){
            dfs(currentNode.children[char],word+char)
        }
    }
    dfs(node,prefix)
    return result
}

delete(word){

    function dfs(node,word,index){
        if(index === word.length){
            if(!node.isEnd) return false
            node.isEnd=false
            return Object.keys(node.children).length===0
        }
        let char=word[index]
        if(!node.children[char]) return false

        let shouldDelete=dfs(node.children[char],word,index+1)

        if(shouldDelete){
            delete node.children[char]
            return Object.keys(node.children).length === 0
        }
        return false
    }
  return  dfs(this.root,word,0)
}

longestPrefix(word){
    let node=this.root
    let prefix=""
    for(let char of word){
        if(!node.children[char]){
            break
        }
        prefix+=char
        node=node.children[char]
    }
    return prefix
}



}

let trie=new Trie()
trie.insert("cat")
trie.insert("car")
trie.insert("cap")
trie.insert("dog")


console.log(trie.search("cat"))      // true
console.log(trie.search("ca"))       // false
console.log(trie.startsWith("ca"))   // true
console.log(trie.startsWith("do"))   // false

console.log(trie.autoComplete("ca"))

console.log(trie.wordSuggestion("ca",1))
console.log(trie.wordSuggestion("do", 2))
console.log(trie.wordSuggestion("z", 2))
trie.delete("car")
console.log(trie.search("car"))
console.log(trie.longestPrefix("cattle"))