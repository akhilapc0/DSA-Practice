
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
        let node=new Node(value)
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

    swapAdjacent(){
        let current=this.head
        while(current!==null && current.next!==null){
            let first=current
            let second=current.next
            let previous=first.prev
            let nextPair=second.next

            second.next=first
            first.prev=second

            first.next=nextPair
            if(nextPair !==null){
                nextPair.prev=first
            }
            second.prev=previous
            if(previous!==null){
                previous.next=second
            }
            else{
                this.head=second
            }
            current=nextPair
        }
    }

    print(){
        let current=this.head
        let result=""
        while(current!==null){
            result+=current.value+" "
            current=current.next
        }
        console.log(result)
    }
}

const list=new DoublyLinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.swapAdjacent()
list.print()