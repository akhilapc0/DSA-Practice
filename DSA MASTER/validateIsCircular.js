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
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    makeCircular(){
        if(this.head===null){
            return
        }
        this.tail.next=this.head

    }
    isCircular(){
        if(this.head===null){
            return false
        }
        let current=this.head.next
        while(current!==null && current!==this.head){
            current=current.next
        }
        return current===this.head
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

const list=new singlyLinkedList()

list.append(23)
list.append(50)
list.append(90)
list.makeCircular()
list.printCircular()
console.log(list.isCircular())