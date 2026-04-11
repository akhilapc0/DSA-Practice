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

    hasCycle(node, visited, parent) {
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

    countCycles() {
        let visited = new Set()
        let count = 0

        for (let node in this.adjList) {
            if (!visited.has(node)) {
                if (this.hasCycle(node, visited, null)) {
                    count++
                }
            }
        }

        return count
    }
}

const g = new Graph()

g.addEdge("A","B")
g.addEdge("B","C")
g.addEdge("C","A") // cycle 1

g.addEdge("D","E") // no cycle

console.log(g.countCycles()) // 1