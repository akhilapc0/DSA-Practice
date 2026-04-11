// let graph={
//     A:['B'],
//     B:['C'],
//     C:['A']
// }

// function isCycleDirected(graph,node,visited=new Set(),stack=new Set()){

//     visited.add(node)
//     stack.add(node)

//     for(let neighbor of graph[node]){
//         if(!visited.has(neighbor)){
//             if(isCycleDirected(graph,neighbor,visited,stack)){
//                 return true
//             }
//         }
//             else if(stack.has(neighbor)){
//                 return true
//             }
//         }
       
    
//      stack.delete(node)
//     return false
// }

// console.log(isCycleDirected(graph,'A'))


class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(v) {
        if (!this.adjList[v]) {
            this.adjList[v] = []
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1)
        this.addVertex(v2)

        this.adjList[v1].push(v2) // directed
    }

    isCycleDirected(node, visited = new Set(), stack = new Set()) {

        visited.add(node)
        stack.add(node)

        for (let neighbor of this.adjList[node]) {
            if (!visited.has(neighbor)) {
                if (this.isCycleDirected(neighbor, visited, stack)) {
                    return true
                }
            }
            else if (stack.has(neighbor)) {
                return true
            }
        }

        stack.delete(node)
        return false
    }
}


const g = new Graph()

g.addEdge("A","B")
g.addEdge("B","C")
g.addEdge("C","A")

console.log(g.isCycleDirected("A")) 