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


    inOrder(root){
        if(root!==null){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    preOrder(root){
        if(root!==null){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root!==null){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        if(this.root===null) return 
        
        let queue=[]
        queue.push(this.root)
        while(queue.length>0){
            let current=queue.shift()
            console.log(current.value)
            if(current.left!==null){
                queue.push(current.left)
            }
            if(current.right!==null){
                queue.push(current.right)
            }

        }
    }
}


let tree=new BST() 
tree.insert(3)
tree.insert(1)
tree.insert(18)
tree.insert(45)
tree.insert(7)
tree.insert(6)
tree.inOrder(tree.root)
// tree.preOrder(tree.root)
// tree.postOrder(tree.root)
tree.levelOrder()