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

    removeDuplicateMethod(){
        let current=this.head
        while(current!==null){
            let runner=current
            while(runner.next!==null){
                if(runner.next.value===current.value){
                    runner.next=runner.next.next
                    this.size--
                }else{
                    runner=runner.next
                }
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
list.append(3)
list.append(3)
list.append(10)
list.append(20)
list.append(10)
list.append(20)
list.append(50)
list.print()
list.removeDuplicateMethod()
list.print()