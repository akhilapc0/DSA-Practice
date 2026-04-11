let arr=[10,3,4]
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
    arrayToLinkedlist(arr){
        if(arr.length===0){
            this.head=null
            this.size=0
            return 
        }
        this.head=new Node(arr[0])
        let current=this.head
        this.size=1
        for(let i=1;i<arr.length;i++){
           let node=new Node(arr[i])
            current.next=node
           current=node
            this.size++
             
        }


    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        let current=this.head
        let output=""
        while(current!==null){
            output+=current.value+" "
            current=current.next
        }
        console.log(output)
    }

}

const list=new LinkedList()
list.arrayToLinkedlist(arr)
list.print()