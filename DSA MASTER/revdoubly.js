class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
        
    }
    append(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
            this.tail=node
            this.size++
            return
        }
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
        this.size++
    }

    reverse(){
        let curr=this.head
        let temp=null
        while(curr!==null){
            temp=curr.next
            curr.next=curr.prev
            curr.prev=temp

            curr=curr.prev
        }
        temp=this.head
        this.head=this.tail
        this.tail=temp
    }
    print(){
        if(this.size===0){
            console.log("list is empty")
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues +=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        }
    }
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.reverse()
list.print()