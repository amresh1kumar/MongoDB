const dbConnect = require('./mongodb');

const updateData = async () => {
   let data = await dbConnect();
   let result = await data.updateMany(
      // for single or one data  update 
   // let result = await data.updateOne(  

      { name: 'note 5' }, {
      $set: { name: 'max pro 6', price : 600}
   }
   );
   console.log(result)
}


updateData();