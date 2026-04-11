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

    printForward(){
        let current=this.head
        let output=""
        while(current!==null){
            output+=current.value+" "
            current=current.next
        }
        console.log(output)
    }


    printReverse(){
        let current=this.tail
        let output=""
        while(current!==null){
            current+=current.value+" "
            current=current.prev
        }
        console.log(output)
    }

}