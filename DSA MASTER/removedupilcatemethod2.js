// unsorted list

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
        const node=new  Node(value)
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

    removeDuplicateUnsorted(){
        let set=new Set()
        let current=this.head
        let prev=null
        while(current!==null ){
            if(set.has(current.value)){
                prev.next=current.next
                this.size--
            }else{
                set.add(current.value)
                prev=current
            }
            current=current.next
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
            output+=current.value+" "
            current=current.next
        }
        console.log(output)
    }
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(10)
list.append(20)
list.append(5)
list.append(30)
list.append(30)
list.print()
list.removeDuplicateUnsorted()
list.print()