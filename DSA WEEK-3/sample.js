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
     closestValue(root,target){
        let current=root
        let closest=root.value
        while(current!==null){
            if(Math.abs(target-current.value) < 
            Math.abs(target-closest)
        ){
            closest=current.value
        }
        if(target <current.value){
            current=current.left
        }else{
            current=current.right
        }
        }
        return closest
    }
}

const tree=new BST()
tree.insert(10)
tree.insert(7)
tree.insert(5)
tree.insert(2)
tree.insert(15)
console.log(tree.closestValue(tree.root,13))