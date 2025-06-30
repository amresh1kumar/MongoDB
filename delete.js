const dbConnect = require('./mongodb')


const deleteDate = async () => {
   let data = await dbConnect();

   let result = await data.deleteMany({
      name: "max 4"
   })
   console.warn(result);
   if(result.acknowledged){
      console.log("record deleted");
   }
}
deleteDate();