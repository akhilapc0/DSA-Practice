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

    thirdLargest(){
        let count=0
        let result=null
        function reverseInorder(node){
            if(node===null || count>=3){
                return
            }
            reverseInorder(node.right)
            count++
            if(count===3){
                result=node.value
                return
            }
            reverseInorder(node.left)
        }
            reverseInorder(this.root)
    return result
    }

}

const tree=new BST()
tree.insert(90)
tree.insert(89)
tree.insert(5)
tree.insert(45)
tree.insert(67)
console.log(tree.thirdLargest())