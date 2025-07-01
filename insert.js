const dbConnect = require('./mongodb')

// const InsertData = async () => {
//   const db = await dbConnect();

//   //insert single data into database use insertOne() method 
//   //and create an object
//   const result = await db.insertOne(
//     { name: 'note 5', brand: 'Redmi', price: '10080', category: 'mobile' }
//   )
//   console.log(result)
//   if (result.acknowledged) {
//     console.log('Data Inserted')
//   }
// }
// InsertData()



//for insert multiple data 


const insert = async ()=>{
  const db = await dbConnect();
//  insert single data into database use insertOne() method 
  // and create an object
  const result = await db.insertMany(
    [ 
      {name: 'max 1', brand:'micromax',price:3200, category:'mobile'},
      {name: 'max 2', brand:'vivo',price:3200, category:'mobile'},
      {name: 'max 3', brand:'vivo',price:3200, category:'mobile'},
      {name: 'max 4', brand:'vivo',price:3200, category:'mobile'}
    ]
  )
  if(result.acknowledged)
      {
      console.log("data inserted");
    }
}
insert();
