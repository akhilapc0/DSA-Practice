//recursive call first ,work after recursive call

function headRecursion(n){
        if(n===0){
            return
        }
        headRecursion(n-1)
        console.log(n)
}

headRecursion(3)