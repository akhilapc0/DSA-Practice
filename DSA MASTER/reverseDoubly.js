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

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
            
        }
        this.size++
    }

    reverse(){
        if(this.isEmpty()){
            return
        }
        let current=this.head
        let temp=null
        while(current!==null){
            temp=current.prev
            current.prev=current.next
            current.next=temp

            current=current.prev
        }
        temp=this.head
        this.head=this.tail
        this.tail=temp
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
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.reverse()
list.print()