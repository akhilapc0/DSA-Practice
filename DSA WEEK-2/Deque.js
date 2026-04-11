class Deque{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    addFront(value){
        this.items.unshift(value)
    }
    addRear(value){
        this.items.push(value)
    }
    removeFront(){
        if(this.isEmpty()){
            return "Deque is empty"
        }
        return this.items.shift()
    }
    removeRear(){
        if(this.isEmpty()){
            return "Deque is empty"
        }
        return this.items.pop()
    }
    print(){
        console.log(this.items.join(" "))
    }
}

const d=new Deque()
d.addRear(10)
d.addRear(20)
d.addFront(5)
d.print()
d.removeFront()
d.print()
d.removeRear()
d.print()