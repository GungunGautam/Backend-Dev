const http =require("http")
const url=require("url")

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/html"});
    // console.log(req);
    // res.end("Server is running");
    const parsedUrl= url.parse(req.url)
    console.log(parsedUrl)
    const name=parsedUrl.query;
    
    const method=req.method
    switch(req.url){
        case "/":
            res.end(`Welcome ${name} home page`)
            break;
        case "/about-us":
            res.end(`welcome ${name} about-us page`)
            break;
        default:
            res.writeHead(404,{"Content-Type":"text/html"})    
            res.end("Page not found")

    }

})
server.listen(8000,()=>{
    console.log("server is running on port 8000");
})




// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const method = req.method;

//   switch (req.url) {
//     case "/":
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           message: "Welcome to home page",
//           status: "success",
//         })
//       );
//       break;

//     case "/about-us":
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({
//           message: "Welcome to about-us page",
//           status: "success",
//         })
//       );
//       break;

//     default:
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end("Page not found");
//   }
// });

// server.listen(8000, () => {
//   console.log("server is running on port 8000");
// });
