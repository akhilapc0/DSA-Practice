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

    isValidBST(){
        let prev=-Infinity
        function inOrder(node){
            if(node===null){
                return true
            }
            if(!inOrder(node.left)){
                return false
            }
            if(node.value <=prev){
                return false
            }
            prev=node.value
           return inOrder(node.right)
        }
       return inOrder(this.root)
    }
}


const tree=new BST()
tree.insert(90)
tree.insert(89)
tree.insert(5)
tree.insert(45)
tree.insert(67)
console.log(tree.isValidBST())