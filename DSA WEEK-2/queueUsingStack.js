class QueueUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
            
        }
        if(this.stack2.length===0){
                return "Queue is empty"
            }
        return this.stack2.pop()
    }
    print(){
        let result=""
        for(let i=this.stack2.length-1;i>=0;i--){
            result+=this.stack2[i]+" "
        }
        for(let i=0;i<this.stack1.length;i++){
            result+=this.stack1[i]+" "
        }
        console.log(result)
    }
}

const q=new QueueUsingStack()
q.enqueue(1)
q.enqueue(3)
q.enqueue(6)
q.print()
console.log(q.dequeue())
q.print()
q.enqueue(90)
q.print()