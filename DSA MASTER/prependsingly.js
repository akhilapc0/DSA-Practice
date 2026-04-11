class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
            this.size++
            return
        }
        node.next=this.head
        this.head=node
        this.size++
    }
    print(){
        if(this.head===null){
            console.log("list is empty")
            return
        }
        let output=""
        let current=this.head
        while(current!==null){
            output+=current.value +" "
            current=current.next
        }
        console.log(output)
    }
}

const list=new LinkedList()
list.print()
list.prepend(2)
list.prepend(3)
list.prepend(45)
list.print()