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

    getsize(){
        return this.size
    }
    clear(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
            this.size++
            return
        }
        node.next=this.head
        this.head=node
        this.size++
    }

    insertAtIndex(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index" )
            return
        }
        if(index===0){
            return this.prepend(value)
        }
        const node=new Node(value)
        let current=this.head
        let count=0
        while(count<index-1){
            current=current.next
            count++
        }
        node.next=current.next
        current.next=node
        this.size++
    }

    print(){
        if(this.head===null){
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
list.print()
list.insertAtIndex(10,0)
list.insertAtIndex(20,1)
list.insertAtIndex(30,5)
list.print()
console.log(list.isEmpty())
console.log(list.getsize())
list.clear()
list.print()
console.log(list.isEmpty())
console.log(list.getsize())
list.insertAtIndex(10,0)
list.print()
console.log(list.isEmpty())
console.log(list.getsize())