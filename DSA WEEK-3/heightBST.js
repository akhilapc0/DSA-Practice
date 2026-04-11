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

    height(node){
        if(node===null){
            return -1
        }
        let leftHeight=this.height(node.left)
        let rightHeight=this.height(node.right)

        return 1+Math.max(leftHeight,rightHeight)
    }
}

let tree=new BST()
tree.insert(3)
tree.insert(6)
tree.insert(89)
tree.insert(45)
tree.insert(4)
console.log(tree.height(tree.root))