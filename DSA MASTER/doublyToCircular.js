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
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node

        }
        this.size++
    }

    makeCircular(){
        if(this.isEmpty()){
            return
        }
        this.tail.next=this.head
        this.head.prev=this.tail
    }

    printCircular(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        let current=this.head
        let output=""
        do{
            output+=current.value+" "
            current=current.next
        }while(current!==this.head)

    console.log(output)
    }
}

const list=new DoublyLinkedList()
list.append(3)
list.append(5)
list.append(8)
list.append(10)
list.makeCircular()
list.printCircular()