class Node{
    constructor(value){
    this.value=value
    this.next=null
}
}

class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    isEmpty(){
        return this.front===null
    }
    enqueue(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.front=newNode
            this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        let removed=this.front.value
         this.front=this.front.next
         if(this.front===null){
            this.rear=null
         }
         return removed
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        let current=this.front
        let result=""
        while(current!==null){
            result+=current.value+" "
            current=current.next
        }
        console.log(result)
    }
}

const q=new Queue()
q.enqueue(10)
q.enqueue(12)
q.enqueue(17)
q.print()
console.log(q.dequeue())
q.print()