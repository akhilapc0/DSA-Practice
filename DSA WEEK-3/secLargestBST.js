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

    secondLargest(){
        if(this.root===null){
            return null
        }
        let current=this.root
        let parent=null
        while(current.right!==null){
            parent=current
            current=current.right
        }
        if(current.left!==null){
            current=current.left
            while(current.right!==null){
                current=current.right
            }
            return current.value
        }
        return parent.value
    }
}

const tree=new BST()
tree.insert(10)
tree.insert(4)
tree.insert(8)
tree.insert(90)
tree.insert(55)
console.log(tree.secondLargest())