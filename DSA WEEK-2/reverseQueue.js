 //linked list version

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     isEmpty(){
//         return this.front===null
//     }
//     enqueue(value){
//         const newNode=new Node(value)

//         if(this.isEmpty()){
//             this.front=newNode
//             this.rear=newNode
//         }else{
//             this.rear.next=newNode
//             this.rear=newNode
//         }

//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }

//         const removed=this.front
//         this.front=this.front.next
//         if(this.front===null){
//             this.rear=null
//         }
//         return removed.value
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("empty")
//             return
//         }
//         let current=this.front
//         let result=""
//         while(current!==null){
//             result+=current.value+" "
//             current=current.next
//         }
//         console.log(result)
//     }

// }

// function  reverseQueue(queue){
//     let stack=[]
//     while(!queue.isEmpty()){
//         stack.push(queue.dequeue())
//     }
//     while(stack.length>0){
//         queue.enqueue(stack.pop())
//     }
// }

// const q=new Queue()
// q.enqueue(5)
// q.enqueue(8)
// q.enqueue(12)
// console.log("before reverse:")
// q.print()

// reverseQueue(q)
// console.log("after reverse:")
// q.print()

//array


class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length ===0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.items.shift()
    }
    print(){
        console.log(this.items.join(" "))
    }
}

function reverseQueue(queue){
    let stack=[]
    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    while(stack.length>0){
        queue.enqueue(stack.pop())
    }
}
const q=new Queue()
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log("before reverse:")
q.print()
reverseQueue(q)
console.log("after reverse:")
q.print()