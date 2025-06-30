const dbConnect = require('./mongodb')

const insert = async ()=>{
   const db = await dbConnect();
   const result = await db.insertMany(
     [ 
      {name: 'max 1', brand:'micromax',price:3200, category:'mobile'},
      {name: 'max 2', brand:'vi',price:3200, category:'mobile'},
      {name: 'max 3', brand:'viv',price:3200, category:'mobile'},
      {name: 'max 4', brand:'viv',price:3200, category:'mobile'}
     ]
   )
   if(result.acknowledged)
      {
      console.log("data inserted");
     }
}
insert();