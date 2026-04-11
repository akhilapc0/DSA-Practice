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
        this.size++;
    }
    swapFirstLast(){
        if(this.head===null || this.head.next===null){
            return
        }
        if(this.head.next.next===null){
            let second=this.head.next
            second.next=this.head
            this.head.next=null
            this.head=second
            return
        }

        let prev=null
        let current=this.head
        while(current.next!==null){
            prev=current
            current=current.next
        }
        let first=this.head
        let last=current
        prev.next=first
        last.next=first.next
        first.next=null
        this.head=last
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
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
list.swapFirstLast()
list.print()