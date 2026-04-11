// const graph={
//     A:["B","D"],
//     B:["A","C"],
//     C:["B"],
//     D:["A"]
// }

// function bfs(graph,start){
//     let visited=new Set()
//     let queue=[start]
//     visited.add(start)

//     while(queue.length>0){
//         let node=queue.shift()
//         console.log(node)
        
//         for(let neighbor of graph[node]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push(neighbor)
//             }
//         }
//     }


// }
// bfs(graph,"A")


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
    bfs(start) {
        if(!this.adjList[start]){
            console.log("start node not found")
            return
        }
    let visited = new Set()
    let queue = [start]

    visited.add(start)

    while (queue.length > 0) {
        let node = queue.shift()
        console.log(node)

        for (let neighbor of this.adjList[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
}
}

const g = new Graph()

g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)

g.bfs(0)