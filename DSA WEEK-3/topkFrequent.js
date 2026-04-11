function topKFrequent(nums,k){
    let map={}

    for(let num of nums){
        
            map[num]=(map[num]||0)+1
        
    }
    let arr=Object.entries(map)
    arr.sort((a,b)=>b[1]-a[1])

    return arr.slice(0,k).map(item=>Number(item[0]))

}
console.log(topKFrequent([1,2,3,1,2,2,3,3,3],2))