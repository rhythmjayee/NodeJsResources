const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    console.log(re.body);
})


app.listen(3000,()=>{
    console.log("server started")
});