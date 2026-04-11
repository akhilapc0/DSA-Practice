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

    isIdentical(node1,node2){
        if(node1===null && node2===null){
            return true
        }
        if(node1===null || node2===null){
            return false
        }
        if(node1.value!==node2.value){
            return false
        }
        return this.isIdentical(node1.left,node2.left)&&
                this.isIdentical(node1.right,node2.right)
        }
}

const tree1=new BST()
const tree2=new BST()
tree1.insert(3)
tree1.insert(9)
tree1.insert(8)

tree2.insert(5)
tree2.insert(8)
tree2.insert(7)

console.log(tree1.isIdentical(tree1.root,tree2.root))
