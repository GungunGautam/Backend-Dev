const fs = require("fs")
fs.writeFileSync("./test.txt", "This is test file")

fs.writeFile("./test.txt", "this is Async file content",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file is created")
    }

    fs.appendFileSync("test.txt", new Date().toLocaleString())
    const file=fs.readFileSync("test.txt","utf-8")
})

//task
const logActivity=require("./logger");
logActivity("User1 logged in");
logActivity("User search for nodejs ");
logActivity("User1 logged out");

//http
const http= require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200, {"Context-Type" :"application/json"})
    res.end("response is closed")
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

