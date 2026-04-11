class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=[]
        }
    }

    addEdge(v1,v2){
        this.addVertex(v1)
        this.addVertex(v2)

        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    print(){
        console.log(this.adjList)
    }
}

const g=new Graph()
g.addEdge(1,2)
g.addEdge(0,2)
g.addEdge(0,1)
g.print()