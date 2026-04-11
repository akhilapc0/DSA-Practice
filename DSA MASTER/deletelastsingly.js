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
    deleteLast(){
        if(this.isEmpty()){
            return null
        }
        if(this.size===1){
            const removedValue=this.head.value
            this.head=null
            this.size--
            return removedValue
        }
        let current=this.head
        while(current.next.next!==null){
            current=current.next
        }
        const removedValue=current.next.value
        current.next=null
        this.size--
        return removedValue
    }

    getSize(){
        return this.size
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
list.print()
list.deleteLast()
list.print()
console.log(list.isEmpty())
console.log(list.getSize())