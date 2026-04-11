class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value){
        const node=new Node(value)
        node.next=this.top
        this.top=node
        this.size++
    }
    pop(){
        if(this.top===null){
            return "Stack underflow"
        }
        const removed=this.top.value
        this.top=this.top.next
        this.size--
        return removed
    }
    peek(){
        if(this.top===null){
            return "stack is empty"
        }
        return this.top.value
    }

    display(){
        if(this.top===null){
            console.log("stack is empty")
            return
        }
        let curr=this.top
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
}

const stack=new Stack()
stack.display()
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
stack.pop()
stack.display()
console.log(stack.peek())