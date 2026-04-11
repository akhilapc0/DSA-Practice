class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class circularLinkedList{
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
            node.next=this.head
        }else{
            this.tail.next=node
            node.next=this.head
            this.tail=node
        }
        this.size++
        }
    print(){
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

const list=new circularLinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()