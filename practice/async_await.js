setTimeout(() => {
    console.log("task 2")
}, 0);
Promise.resolve().then(()=>console.log("task 4"))
console.log("task 2")

const fetchUser=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const users={1:{name:"xyz",phone:6354672890,address :"Agra"},2:{name:"abc",phone:9876543210,address :"Indore"}};
            const user=users[id];
            if(user){
                resolve(user);
            }
            else{
                reject("user not found")
            }

        }, 2000);
    })
}

console.log(fetchUser(5)
.then((user)=>console.log(user))
.catch((error)=>console.log(error)))
console.log(fetchUser(1))