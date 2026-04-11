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

    deleteNthFromEnd(n){
        let first=this.head
        let second=this.head
        
        for(let i=0;i<n;i++){
            if(first===null){
                return null
            }
            first=first.next
        }

        if(first===null){
            this.head=this.head.next
            this.size--
            return
        }

        while(first.next!==null){
            first=first.next
            second=second.next
        }
        second.next=second.next.next
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
list.print()
list.deleteNthFromEnd(1)
list.print()