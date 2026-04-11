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
            }else{
                if(current.right===null){
                    current.right=newNode
                    return
                }
                current=current.right
            }
        }
    }

    findMin(node){
    if(node.left===null){
        return node.value
    }
    return this.findMin(node.left)
}
}


let tree=new BST()
tree.insert(50)
tree.insert(30)
tree.insert(20)
tree.insert(40)
tree.insert(79)
console.log(tree.findMin(tree.root))