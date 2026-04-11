class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return
        }
        let current=newNode

        while(true){
            if(current.left===null){
                current.left=newNode
                return
            }else if(current.right===null){
                current.right=newNode
                return
            }else{
                current=current.left
            }
        }
    }
}

const tree=new BinaryTree()
tree.insert(10)
tree.insert(20)
console.log(tree)