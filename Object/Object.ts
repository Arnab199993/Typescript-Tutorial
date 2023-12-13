export {}
interface usersTypedId{
    name:string,
    age:number,
    address:string,
    addressNum:any
}
let users:usersTypedId={
    name:"Bruce",
    age:30,
    address:"Gotham City",
    addressNum:100
}
users.name="Peter"

console.log(users);
