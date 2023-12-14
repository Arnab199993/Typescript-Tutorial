class Parents{
    // name:string="Arnab Dutta"
    name:string;
    setName(name){
        this.name=name
    }
}
class Inheritance extends Parents{
    getName(){
        return this.name
    }
}
const a1 = new Inheritance()
a1.setName("Kiran")
console.log(a1.getName());



