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

    isPalindrome(){
        if(this.head===null || this.head.next===null){
            return true
        }
        let slow=this.head
        let fast=this.head
        while(fast!==null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
        }

        let current=slow
        let prev=null
        while(current!==null){
            let next=current.next
            current.next=prev
            prev=current
            current=next
        }
        let first=this.head
        let second=prev
        while(second!==null){
            if(first.value !== second.value){
                return false
            }
            first=first.next
            second=second.next
        }
        return true

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
list.append(1)
list.append(2)
list.append(3)
list.append(2)
list.append(1)
list.print()
console.log(list.isPalindrome())