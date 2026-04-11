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
    append(value){
        const node=new Node(value)
        if(this.head===null){
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

print(){
    if(this.head===null){
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
list.print()
list.append(10)
list.append(20)
list.append(30)
list.print()