interface userType{
    name:string,
    age:number,
    getName:()=>string
}

let users:userType={
    name:"Arnab Dutta",
    age:30,
    getName:function(){
        return "anil sidhu"
    }
}
console.log(users.getName())