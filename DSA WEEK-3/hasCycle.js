// const graph = {
//     A: ["B", "C"],
//     B: ["A", "C"],
//     C: ["A", "B"]
// }

// function hasCycle(graph,node,visited=new Set(),parent=null){

//     visited.add(node)

//     for(let neighbor of graph[node]){
//         if(!visited.has(neighbor)){
//             if(hasCycle(graph,neighbor,visited,node)){
//                 return true
//             }
//         }
//         else if(neighbor!==parent){
//             return true
//         }
//     }
//         return false
    
// }

// console.log(hasCycle(graph,'A'))



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

        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    hasCycle(node, visited = new Set(), parent = null) {
        visited.add(node)

        for (let neighbor of this.adjList[node]) {
            if (!visited.has(neighbor)) {
                if (this.hasCycle(neighbor, visited, node)) {
                    return true
                }
            }
            else if (neighbor !== parent) {
                return true
            }
        }

        return false
    }
}


const g = new Graph()

g.addEdge("A","B")
g.addEdge("B","C")
g.addEdge("C","A")

console.log(g.hasCycle("A")) // true