class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    insertBegin(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
            return
        }
        node.next=this.head
        this.head.prev=node
        this.head=node
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        let current=this.head
        let output=""
        while(current!==null){
            output+=current.value+" "
            current=current.next
        }
        console.log(output)
    }
}

const list=new DoublyLinkedList()
list.insertBegin(10)
list.insertBegin(8)
list.insertBegin(2)
list.print()