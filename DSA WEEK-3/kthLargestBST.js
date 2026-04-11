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

    kthLargest(root,k){
        
        let count=0
        let result=null
        function reverseInorder(node){
            if(node===null || result!==null){
                return
            }
            reverseInorder(node.right)
            count++
            if(count===k){
                result=node.value
                return
            }
            reverseInorder(node.left)
        }
        reverseInorder(root)
        return result
    }
}

const tree=new BST()
tree.insert(10)
tree.insert(7)
tree.insert(5)
tree.insert(2)
tree.insert(15)
console.log(tree.kthLargest(tree.root,3))