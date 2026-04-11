// let graph={
//     A:["B","C"],
//     B:["A","D"],
//     C:["D"],
//     D:["A"]
// }

// function dfs(graph,node,visited=new Set()){
//     visited.add(node)
//     console.log(node)

//     for(let neighbor of graph[node]){
//         if(!visited.has(neighbor)){
//             dfs(graph,neighbor,visited)
//         }
//     }

// }
// dfs(graph,'A')



class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1)
        this.addVertex(v2)

        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    dfs(start, visited = new Set()) {
        visited.add(start)
        console.log(start)

        for (let neighbor of this.adjList[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited)
            }
        }
    }
}


const g = new Graph()

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")

g.dfs("A")






