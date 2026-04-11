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

    deleteByValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            const removedValue=this.head.value
            this.head=this.head.next
            this.size--
            return removedValue
        }
        let current=this.head
        while(current.next!==null && current.next.value!==value){
            current=current.next
        }
        if(current.next===null){
            return null
        }
        const removedValue=current.next.value
        current.next=current.next.next
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
list.append(10)
list.append(20)
list.append(10)
list.append(30)

list.print()
 console.log(list.isEmpty())
console.log(list.getSize())
console.log(list.deleteByValue(10))
console.log(list.deleteByValue(10))
console.log(list.deleteByValue(100))
list.print()
