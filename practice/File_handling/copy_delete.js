const fs=require("fs");
// fs.copyFileSync("../JS_async/test.txt","copied.txt")

fs.copyFile("../JS_async/test.txt","copied.txt",(err)=>{
    if(err){
        console.log("error");
        return
    }
    console.log("File Copied")
})
try{
    fs.readFileSync("copied.txt","utf-8")
    console.log("File is copied")
}catch(err){
    console.log("Error while coping file")
}

fs.unlink("copied.txt",(err)=>{
    if(err){
        console.log("Error while deleting file")
    }
    console.log("FIle deleted")
})

fs.writeFile("newFile.txt","This is a new file", (err)=>{
    if(err){
        console.log("Error while writing file")
    }
    console.log("FIle is created")
})

fs.mkdir("folders/folder1/folder2",{recursive:true},(err)=>{
     if(err){
        console.log("Error while writing file")
    }
    console.log("Directory is created")
})

fs.readdir("file-handling",(err,files)=>{
     if(err){
        console.log("Error while reading directory")
    }
    console.log(files)
})