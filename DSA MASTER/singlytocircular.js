class Node{
    constructor(value){
        this.value=value
        this.next=null
        
    }
}

class singlyLinkedList{
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
            this.tail=node

        }
        this.size++
    }

    makeCircular(){
        if(this.isEmpty()){
            return
        }
        this.tail.next=this.head
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

const list =new singlyLinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.makeCircular()
list.printCircular()