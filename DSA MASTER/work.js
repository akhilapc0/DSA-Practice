
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
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
       
        if(this.isEmpty()){
            this.top=node
            
        }else{
           node.next=this.top
           this.top=node
        }
        this.size++
   
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        let removed=this.top.value;
        this.top=this.top.next
        this.size--
        return removed
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        else{
            return this.top.value
        }
    }

    print(){
        let current=this.top
        let result=""
        while(current!==null){
            result+=current.value+" "
            current=current.next
        }
        console.log(result)
    }
}

const s=new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.print()