const dbConnect = require('./mongodb')

// For read data from database


//promise handle type 1
// dbConnect().then((resp) => {
//    resp.find().toArray().then((data) => {
//       console.warn(data)
//    })
// });


// promise handle type 2
const main = async ()=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.warn(data);
}
main();

// console.warn(dbConnect());

