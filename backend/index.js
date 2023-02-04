const express = require("express");
const { result } = require("lodash");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/product")
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result  = result.toObject();
  delete result.password;

  resp.send(result);
});

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-password");
  console.log(req.body);
  if (req.body.password && req.body.email) {
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User found" });
    }
  } else {
    resp.send({ result: "No User found" });
  }
});

app.post('/add-product',async (req,resp)=>{
   let product = new Product(req.body);
   let result = await product.save();
   resp.send(result);
})


app.get('/products',async (req,resp)=>{
  let produts = await Product.find();
  if ( produts.length >0) {
    resp.send(produts)
    
  }
  else{
    resp.send({reslut:"NO Products Found"})
  }
})
app.delete("/product/:id", async(req,resp)=>{
  // resp.send(req.params.id);
  const result = await Product.deleteOne({_id:req.params.id})
  resp.send(result)
})

app.get("/product/:id", async(req,resp)=>{
  let reslut = await Product.findOne({_id: req.params.id});
  resp.send( reslut) ; 
  //   if (result) {

  //   resp.send(result)  
  // } else{
  //   resp.send({reslut:"No Reacord Found."})
  // }  
})

app.put("/product/:id",async(req,resp)=>{
  let result = await Product.updateOne({_id: req.params.id} ,
    {
      $set: req.body
    }
    )
    resp.send(result);
});


app.get("/search/:key",async(req,resp)=>{
let result = await Product.find({
  "$or":[
    { name:{$regex:req.params.key}},
    { company:{$regex:req.params.key}},
    { category:{$regex:req.params.key}}
  ]
});
resp.send(result);
})

app.listen(5000, () => console.log("port runing on 5000"));



 