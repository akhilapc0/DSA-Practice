// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }

//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }
//        return this.items.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[0]
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const q=new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// q.print()
// console.log(q.dequeue())
// q.print()
// console.log(q.peek())

//using circular queue

class Queue{
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
        return (this.rear+1)%this.size ===this.front
    }
    enqueue(value){
        if(this.isFull()){
            return "Queue is full"
        }
        if(this.isEmpty()){
            this.front=0
        }
        
            this.rear=(this.rear+1)%this.size
            this.items[this.rear]=value
        
    }

    dequeue(){
        if(this.isEmpty()){
            return "queue empty"
        }
          let removed=this.items[this.front]
        if(this.front===this.rear){
            this.front=-1
            this.rear=-1
        }
        else{
          
            this.front=(this.front+1)%this.size
      

        }
              return removed
    }

    print(){
        if(this.isEmpty()){
            console.log("empty")
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

const q=new Queue(5)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.print()
console.log(q.dequeue())
q.print()

q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
console.log(q.enqueue(90))
q.print()  