
const graph = {
    0: [1,2],
    1: [0,3],
    2: [0,3],
    3: [1,2]
}


function shortestPath(graph,start,target){

    let queue=[[start,0]]
    let visited=new Set()
    visited.add(start)

    while(queue.length>0){
        let [node,dis]=queue.shift()
        if(node===target){
            return dis
        }

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push([neighbor,dis+1])
            }
        }
    }
    return -1
}

console.log(shortestPath(graph,0,3))