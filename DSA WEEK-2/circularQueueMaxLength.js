class circularQueue{
    constructor(size){
        this.size=size
        this.items=new Array(size)
        this.front=0
        this.rear=0
        this.count=0
    }
    isEmpty(){
        return this.count ===0
    }
    isFull(){
        return this.count===this.size
    }
    enqueue(value){
        if(this.isFull()){
            console.log("queue is full")
            return
        }
        this.items[this.rear]=value
        this.rear=(this.rear+1)%this.size
        this.count++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        const removed=this.items[this.front]
        this.front=(this.front+1)%this.size
        this.count--
        return removed
    }
    print(){
        if(this.isEmpty()){
            console.log("empty")
            return
        }
        let i=this.front
        let result=""
        for(let c=0;c<this.count;c++){
            result+=this.items[i]+" "
            i=(i+1)%this.size
        }
        console.log(result)
    }
}

const q=new circularQueue(3)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.print()
q.dequeue()
q.print()