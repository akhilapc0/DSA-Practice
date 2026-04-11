class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
   isEmpty(){
    return this.size===0
   }
   append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
    }
    this.size++
   }

   deleteFirst(){
        if(this.isEmpty()){
            return
        }
        if(this.head===this.tail){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
            this.head.prev=null

        }
        this.size--
   }

   deleteLast(){
    if(this.isEmpty()){
        return 
    }
    if(this.head===this.tail){
        this.head=null
        this.tail=null
        
    }else{
        this.tail=this.tail.prev
        this.tail.next=null

    }
    this.size--
   }
   deleteNode(node){
    if(node===null){
        return
    }
    if(node===this.head){
        return this.deleteFirst()
    }
    if(node===this.tail){
        return this.deleteLast()
    }
     node.next.prev=node.prev
    node.prev.next=node.next
   
    
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

const list=new DoublyLinkedList()
list.append(5)
list.append(8)
list.append(12)
list.append(20)
let nodeToDelete=list.head.next
list.print()
list.deleteNode(nodeToDelete)
list.print()