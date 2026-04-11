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

    deleteMiddle(){
        if(this.isEmpty()){
            return null
        }
        if(this.head.next===null){
            this.head=null
            this.size--
            return
        }
        let prev=null
        let slow=this.head
        let fast=this.head
        while(fast!==null&& fast.next!==null){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        this.size--
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
 list.append(30)
list.print()
list.deleteMiddle()
list.print()