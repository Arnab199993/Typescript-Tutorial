/// <reference path="./Utils.ts"/>
 namespace userUtils{
    export class Users extends Parent{
        getName(){
            return this.name
        }
    }
}
let a1=new userUtils.Users()
a1.setName("Bruce")
console.log(a1.getName())