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
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
            
        }
        this.size++
    }

    insertEnd(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
        }
        this.size++
    }

    insertAtIndex(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            return this.insertBegin(value)
        }
        if(index===this.size){
            return this.insertEnd(value)
        }
        const node=new Node(value)
        let current=this.head

        for(let i=0;i<index-1;i++){
            current=current.next
        }
        node.prev=current
        node.next=current.next
        current.next.prev=node
        current.next=node
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
list.insertAtIndex(12,0)
list.insertAtIndex(1,1)
list.insertAtIndex(8,2)
list.insertAtIndex(78,2)
list.insertAtIndex(32,1)
list.print()