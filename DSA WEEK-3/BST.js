class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return
        }
        let current=this.root
        while(true){
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode
                    return
                }
                current=current.left
            }
            else{
                if(current.right===null){
                    current.right=newNode
                    return
                }
                current=current.right
            }
        }
    }
    search(value){
        let current=this.root
        while(current!==null){
            if(value===current.value){
                return true
            }
            if(value < current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }
    
    
}

let tree=new BST()
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(7)
console.log(tree)
console.log(tree.search(210))