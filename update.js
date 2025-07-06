const dbConnect = require('./ConfigMongodb');

const updateData = async () => {
   let data = await dbConnect();
   let result = await data.updateMany(
      // for single or one data  update 
      // let result = await data.updateOne(  

      { name: 'max pro 7' },
      {
         $set: { name: 'max pro 7', price: 10000 }
      }
   );
   console.log(result)
}


updateData(); 
