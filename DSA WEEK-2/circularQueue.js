class circularQueue{
    constructor(size){
        this.items=new Array(size)
        this.front=-1
        this.rear=-1
        this.size=size
    }
    isEmpty(){
        return this.front===-1
    }
    isFull(){
        return (this.rear+1)%this.size===this.front
    }
    enqueue(value){
        if(this.isFull()){
           console.log("Queue is full") 
            return 
        }
        if(this.isEmpty()){
            this.front=0
        }
        this.rear=(this.rear+1)%this.size
        this.items[this.rear]=value
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        const removed=this.items[this.front]
        if(this.front===this.rear){
            this.front=-1
            this.rear=-1
        }else{
            this.front=(this.front+1)%this.size
        }
        return removed
    }

    print(){
        if(this.isEmpty()){
            console.log("Empty")
            return
        }
        let i=this.front
        let result=""
        while(true){
            result+=this.items[i]+" "
            if(i===this.rear) break
            i=(i+1)%this.size
        }
        console.log(result)
    }

}

const q=new circularQueue(5)
q.enqueue(2)
q.enqueue(3)
q.enqueue(5)
q.print()

q.dequeue()
q.print()

q.enqueue(40)
q.enqueue(50)
q.print()
q.enqueue(60)
q.print() 