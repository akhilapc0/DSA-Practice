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

    isSubtree(root,subroot){
        if(root===null){
            return false
        }
        if(this.isIdentical(root,subroot)){
            return true
        }
        return this.isSubtree(root.left,subroot)||
               this.isSubtree(root.right,subroot) 
    }

    isIdentical(node1,node2){
        if(node1===null && node2===null){
            return true
        }
        if(node1===null || node2===null){
            return false
        }
        if(node1.value!== node2.value){
            return false
        }
        return this.isIdentical(node1.left,node2.left) &&
               this.isIdentical(node1.right,node2.right) 
    }

}


const tree=new BST()
const subtree=new BST()
tree.insert(10)
tree.insert(7)
tree.insert(5)
tree.insert(2)
tree.insert(15)
subtree.insert(7)

console.log(tree.isSubtree(tree.root,subtree.root))
