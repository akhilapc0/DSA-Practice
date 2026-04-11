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
    isBalanced(){

        function checkHeight(node){
            if(node===null){
                return 0
            }
            let leftHeight=checkHeight(node.left)
            if(leftHeight===-1){
                return -1
            }
            let rightHeight=checkHeight(node.right)
            if(rightHeight===-1){
                return -1
            }
            if(Math.abs(leftHeight-rightHeight)>1){
                return -1
            }
            return 1+Math.max(leftHeight,rightHeight)
        }
        return checkHeight(this.root)!==-1
    }
}


let tree=new BST()
tree.insert(3)
tree.insert(1)
tree.insert(18)
tree.insert(45)
tree.insert(7)
tree.insert(6)
console.log(tree.isBalanced())
