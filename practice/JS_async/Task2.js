function getUser(username){
 return new Promise((resolve) =>{
    setTimeout(()=>{
        resolve({ name: "Rahul", type:
"Premium" })
    },1000)
    
 });
}

function checkSubscription(user){
    return new Promise((resolve,reject)=>{
        if(user.type==="Premium"){
            resolve("Access Granted to Netflix")
        }else{
            reject('Please Subscribe')
        }
    })
}

async function Consumer(username){
    try{
        const user=await getUser(username);
        const accessMeassage=await checkSubscription(user);
        console.log(accessMeassage);
    }catch(error){
        console.log(error);
    }
}

Consumer("gungun")