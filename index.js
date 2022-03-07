const express = require("express");
const { route } = require("express/lib/application");
const app = express();


app.use(logger);

app.get("/books",(req, res)=>{
    return res.send({route:"/books"})
});

app.listen(6000,()=>{
    console.log("working for books")
});



app.use(checkPermission);


app.get("/libraries",(req,res)=>{

    return res.send({route:"/libraries",permission: true})
});

app.listen(4000,()=>{
    console.log("working for libraries")
});

app.get("/authors",(req,res)=>{
    return res.send({route:"/authors",permission:true})
});

app.listen(3000,()=>{
    console.log("working for authors")
});



function logger(req,res,next){
    if(req.path=="/books"){
        req.role="books"
    }
    else if (req.path=="/libraries"){
        req.role="libraries"
    }
    else if (req.path=="/authors"){
        req.role="authors"
    }
    else{
        req.role="Unknown Server"
    }
    console.log("You called me");
    next()
}
app.listen(7000,()=>{
    console.log("working")
})

app.get("/libraries",checkPermission,function(req,res){
    res.send({route :"/libraries",permission:true})
})

app.get("/authors",checkPermission,function(req,res){
    res.send({route :"/authors",permission:true})
})
app.listen(4800,()=>{
    console.log("work done")
})


function checkPermission(req,res,next){
    if(req.path=="/libraries"){
        req.role="permission:true"
    }
    else if(req.path=="/authors"){
        req.role="permission:true"
    }
    
}

app.listen(4500,()=>{
        console.log("checkpermission")
    });

