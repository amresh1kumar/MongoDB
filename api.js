const express = require('express');
const dbConnect = require('./ConfigMongodb');
const mongodb = require('mongodb');
const app = express();


// middeleware   for post req
app.use(express.json());


// app.get('/', async (req, resp) => {
//    let data = await dbConnect();
//    data = await data.find().toArray();
//    console.log(data)
//    resp.send({ data });
// })


// app.post('/', async (req, resp) => {
//    console.log(req.body)
//    resp.send(req.body)
// })

// app.post("/", async (req, resp) => {
//    let data = await dbConnect();
//    let result = await data.insertOne(req.body);
//    resp.send(result);
// })




//for update
// app.put("/", async (req,resp)=>{
//    // console.log(req.body)
//    let data = await dbConnect();
//    let result= data.updateOne(
//       {name:'Iphone SE'},  // static data
//       {$set:{price:40000}} // static data
//    )
//    resp.send({result:"update"})
// })

// app.put("/:name", async (req, resp) => {
//    //console.log(req.body); //for print in console
//    let data = await dbConnect();
//    let result = await data.updateOne(
//       // {name:"c4 lite"}, // for static  
//       // {$set:{price:17888}}, //for static 
//       { name: req.params.name }, //for dynamic
//       { $set: req.body } //for dynamic
//    )
//    resp.send({result: "update" });
// })


app.delete("/:id", async (req, resp) => {
   console.log(req.params.id)
   const data = await dbConnect();
   const result = await data.deleteOne(
      { _id: new mongodb.ObjectId(req.params.id) })
   resp.send(result)
})

app.listen('5000', () => {
   console.log("Server is running on Port 5000");
})