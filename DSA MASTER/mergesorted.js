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

    mergeSorted(list1,list2){
        let dummy=new Node(0)
        let tail=dummy
        let p1=list1.head
        let p2=list2.head
        while(p1!==null && p2!==null){
            if(p1.value < p2.value){
                tail.next=p1
                p1=p1.next
            }
            else{
                tail.next=p2
                p2=p2.next
            }
            tail=tail.next
        }
        if(p1!==null){
            tail.next=p1
        }
        if(p2!==null){
            tail.next=p2
        }
        return dummy.next

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

const list1=new LinkedList()
const list2=new LinkedList()
list1.append(2)
list1.append(4)
list1.append(8)
list1.print()
list2.append(1)
list2.append(3)
list2.append(10)
list2.print()
const mergedHead=list1.mergeSorted(list1,list2)
let current=mergedHead
let output=""
while(current!==null){
    output+=current.value+" "
    current=current.next
}
console.log(output)