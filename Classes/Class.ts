export {}
class Class{
    name:string="Arnab Dutta";
    constructor(names:string){
        console.log("Constructr Called")
        console.log(names)
    }
    getName():void{
        console.log(this.name)
    }
}
let a1=new Class("My name")
a1.getName()