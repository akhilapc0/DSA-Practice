class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.items.length===0){
            return "Stack Underflow"
        }
        return this.items.pop()
    }
    peek(){
        if(this.items.length===0){
            return "Stack is empty"
        }
        return this.items[this.items.length-1]
    }
    display(){
        console.log(this.items)
    }
}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
stack.pop()
stack.display()
console.log(stack.peek())