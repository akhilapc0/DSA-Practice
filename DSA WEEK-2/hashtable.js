class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
    
            this.table[index]=[key,value]
        
    }
    get(key){
        let index=this.hash(key)
        if(this.table[index]){
            return this.table[index][1]
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        if(this.table[index]){
            this.table[index]=undefined
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i])
        }
    }
}
const ht=new HashTable(5)
ht.set("name","akhila")
ht.set("age",22)
ht.set("city","kochi")
ht.display()
