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
            if(value <current.value){
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
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return null
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(root.left===null && root.right===null){
                return null
            }
            if(root.left===null){
                return root.right
            }
            if(root.right===null){
                return root.left
            }
            let min=this.findMin(root.right)
            root.value=min
            root.right=this.deleteNode(root.right,min)
        }
        return root
    }
    findMin(node){
        while(node.left!==null){
            node=node.left
        }
        return node.value
    }
}

const tree=new BST()
tree.insert(2)
tree.insert(4)
tree.insert(10)
tree.insert(89)
tree.insert(3)
tree.delete(3)
console.log(tree)