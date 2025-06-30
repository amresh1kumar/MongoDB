
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017/';
// const databaseName = 'e-comm'
// const con = new MongoClient(url)



//  async function dbConnect() {
//    let result = await con.connect();
//    let db = result.db(databaseName);
//    return db.collection('products');
// }

// function dbConnect() {
//    return con.connect().then((result) => {
//       let db = result.db(databaseName);
//       return db.collection('products');
//    });
// }


// console.log(dbConnect())
// dbConnect().then((resp)=>{
// console.warn(resp.find().toArray())
// })

// dbConnect().then((collection) => {
//    collection.find().toArray().then((data)=>{
//       console.log(data)
//    })
// });

// const main = async () => {
//    let data = await dbConnect();
//    data = await data.find().toArray();
//    console.log(data)
// }

// main();