class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2)

            if(this.heap[parentIndex] < this.heap[index]){
                [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]]

                index = parentIndex
            }else{
                break
            }
        }
    }

    extractMax(){
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        let max = this.heap[0]

        this.heap[0] = this.heap.pop()

        this.heapifyDown()

        return max
    }

    heapifyDown(){
        let index = 0
        let length = this.heap.length

        while(true){
            let left = 2*index + 1
            let right = 2*index + 2
            let largest = index

            if(left < length && this.heap[left] > this.heap[largest]){
                largest = left
            }

            if(right < length && this.heap[right] > this.heap[largest]){
                largest = right
            }

            if(largest !== index){
                [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]]

                index = largest
            }else{
                break
            }
        }
    }
}



const heap=new MaxHeap()
heap.insert(10)
heap.insert(5)
heap.insert(20)


console.log(heap.heap)
console.log(heap.extractMax())
console.log(heap.heap)