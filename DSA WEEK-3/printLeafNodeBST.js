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
        let newNode=new Node(value)
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

    printLeafNodes(node){
        if(node===null){
            return
        }
        if(node.left===null && node.right===null){
            console.log(node.value)
            return
        }
        this.printLeafNodes(node.left)
        this.printLeafNodes(node.right)
    }

}

const tree=new BST()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(20)
tree.insert(30)
console.log(tree)
tree.printLeafNodes(tree.root)