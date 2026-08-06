

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
    let node=new Node(value)

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

reverseBetween(left,right){
    if(this.isEmpty()){
        return null
    }
    let prev=null
    let current=this.head
    let position=1

    while(position<left){
        prev=current
        current=current.next
        position++
    }
    let connection=prev
    let tail=current

    for(let i=0;i<right-left+1;i++){
        let next=current.next
        current.next=prev
        prev=current
        current=next
    }
   
    if(connection!==null){
        connection.next=prev
    }else{
        this.head=prev
    }
     tail.next=current
}


print(){
    if(this.isEmpty()){
        console.log("list is empty")
        return
    }

    let current=this.head
    let result=""
    while(current!==null){
        result+=current.value+" "
        current=current.next
    }
    console.log(result)
}
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.reverseBetween(2,4)
list.print()