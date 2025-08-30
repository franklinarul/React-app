import express from "express"
import cors from "cors"

const app = express()
 app.use(cors());

app.get("/login",function(req,res){
    console.log("logined")
    let email="franklinarul@gmail.com"
    let pass=1234

    if(email == req.query.useremail && pass == req.query.userpass ){
        res.send(true)
    }else{
        res.send(false)
    }

})

app.listen(5000,function(){
    console.log("express started")
})

