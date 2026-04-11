


class UndoRedo{
    constructor(){
        this.undoStack=[]
        this.redoStack=[]
    }
   performAction(action){
        this.undoStack.push(action)
        this.redoStack=[]
        console.log("performed:",action)
   } 
   undo(){
    if(this.undoStack.length===0){
        console.log("nothing to undo")
        return
    }
    let action=this.undoStack.pop()
    this.redoStack.push(action)
    console.log("undo:",action)
   }

   redo(){
    if(this.redoStack.length===0){
        console.log("nothing to redo")
        return
    }
    let action=this.redoStack.pop()
    this.undoStack.push(action)
    console.log("redo:",action)
   }

   display(){
    console.log("undo stack:",this.undoStack)
    console.log("redo stack:",this.redoStack)
   }

}

let editor=new UndoRedo()
editor.performAction("type a")
editor.performAction("type b")
editor.performAction("type c")
 editor.undo()
editor.undo()
editor.redo()
editor.display()