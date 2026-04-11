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
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
            return
        }
        let current=this.head
        while(current.next!==null){
            current=current.next 
        }
        current.next=node
        this.size++
    }

    deleteFirst(){
        if(this.isEmpty()){
            return null
        }
        const removedValue=this.head.value
        this.head=this.head.next
        this.size--
        return removedValue
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        let current=this.head
        let output=""
        while(current!==null){
            output+=current.value + " "
            current=current.next
        }
        console.log(output)
    }
}

const list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.append(10)
list.append(20)
list.append(30)
list.deleteFirst()
list.deleteFirst()
console.log(list.deleteFirst())
list.deleteFirst()
list.print()
console.log(list.isEmpty())
console.log(list.getSize())