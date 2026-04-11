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

    findLCA(root,n1,n2){
        let current=root
        while(current!==null){
            if(n1 <current.value && n2 < current.value){
                current=current.left
            }
            else if(n1 >current.value  && n2>current.value){
                current=current.right
            }
            else{
                return current.value
            }
        }
    }
}


const tree=new BST()
tree.insert(10)
tree.insert(7)
tree.insert(5)
tree.insert(2)
tree.insert(15)
console.log(tree.findLCA(tree.root,2,5))