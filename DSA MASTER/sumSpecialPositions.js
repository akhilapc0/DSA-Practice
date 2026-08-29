
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }

    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
            return
        }
        let current=this.head
        while(current.next!==null){
            current=current.next
        }
        current.next=node
        this.size++
    }

    sumSpecialPositions(){
        let current=this.head
        let sum=0
        let position=0
        let targetPosition=0

        while(current!==null){
            if(position===targetPosition){
                sum+=current.value
                if(targetPosition===0){
                    targetPosition=2
                }
                else{
                    targetPosition=targetPosition*2
                }
            }

            position++
            current=current.next
        }
        return sum
    }


    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        let result=""
        let current=this.head
        while(current!==null){
            result+=current.value+ " "
            current=current.next
        }
        console.log(result)
    }
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
console.log(list.sumSpecialPositions())



