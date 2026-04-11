class HashTableLP{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        while(this.table[index]!==undefined && this.table[index][0]!==key){
            index=(index+1)%this.size
        }
        this.table[index]=[key,value]

    }
    get(key){
        let index=this.hash(key)
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+1)%this.size
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                this.table[index]=undefined
                return
            }
            index=(index+1)%this.size
        }
    }
        display(){
            console.log(this.table)
        }
    
}

const ht=new HashTableLP(5)
ht.set("age",22)
ht.set("city",33)
ht.set("dog",44)
ht.display()

console.log("Get age:", ht.get("age"))
console.log("Get city:", ht.get("city"))

ht.remove("city")

console.log("After removing city:")
ht.display()