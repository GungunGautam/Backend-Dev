const http=require("http")
const url=require("url")
const fs=require("fs");

const server=http.createServer((req,res)=>{
    const parsedUrl= url.parse(req.url);
    console.log(parsedUrl);
    const pathname=parsedUrl.pathname;
    const query=parsedUrl.query;
    const {name, issue, priority}=parsedUrl.query;
    if(req.method==="GET" && pathname ==="/complain"){
        if(!name || !issue || !priority){
            res.writeHead(400,{"Content-Type":"application/json"})
            return res.end(JSON.stringify({error: "Missing Required Fields"}))
        }
        const ticketId=Math.floor(Math.random()*10000);
        const complainData= `
        TicketId: ${ticketId}
        Name: ${name}
        Issue: ${issue}
        Priority:${priority}
        `
    }
    
    

        
})