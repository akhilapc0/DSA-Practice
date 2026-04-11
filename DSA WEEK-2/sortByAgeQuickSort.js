let students = [
 {name:"A", age:23},
 {name:"B", age:19},
 {name:"C", age:21},
 {name:"D", age:25}
]

// function quickSortStudents(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].age <pivot.age){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSortStudents(left),pivot,...quickSortStudents(right)]
// }

// console.log(quickSortStudents(students))


//in-place

function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1

    for(let j=low;j<high;j++){
        if(arr[j].age < pivot.age){
            i++
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

        }
    }
    let temp=arr[i+1]
    arr[i+1]=arr[high]
    arr[high]=temp

    return i+1
}

function quickSortStudents(arr,low,high){
    if(low<high){
    let pivotIndex=partition(arr,low,high)
    quickSortStudents(arr,low,pivotIndex-1)
    quickSortStudents(arr,pivotIndex+1,high)
}
}

quickSortStudents(students,0,students.length-1)
console.log(students)