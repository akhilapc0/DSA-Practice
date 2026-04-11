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
    deleteAllValue(value){
        if(this.isEmpty()){
            return
        }
        while(this.head!==null && this.head.value === value){
            this.head=this.head.next
            this.size--

        }
        let current=this.head
        while(current!==null && current.next!==null){
            if(current.next.value ===value){
                current.next=current.next.next
                this.size--
            }else{
                current=current.next
            }
        }
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

list.append(20)

list.append(20)
list.append(20)
list.print()
list.deleteAllValue(20)
list.print()