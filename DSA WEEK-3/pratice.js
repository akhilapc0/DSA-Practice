class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]>this.heap[index]){
                [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
                index=parentIndex
            }else{
                break
            }
        }
    }
    extractMin(){
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return min
    }
    heapifyDown(){
        let index=0
        let length=this.heap.length
        while(true){
            let left=2*index+1
            let right=2*index+2
            let smallest=index
            if(left<length && this.heap[left]<this.heap[smallest]){
                smallest=left
            }
            if(right<length && this.heap[right]<this.heap[smallest]){
                smallest=right
            }
            if(smallest!==index){
                [this.heap[index],this.heap[smallest]]=
                [this.heap[smallest],this.heap[index]]
              index=  smallest
            }else{
                break
            }
        }
    }
}

const heap=new minHeap()
heap.insert(5)
console.log(heap.heap)
heap.insert(10)
console.log(heap.heap)
heap.insert(3)
console.log(heap.heap)
heap.insert(8)
console.log(heap.heap)
console.log(heap.extractMin())
console.log(heap.heap)