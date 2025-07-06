const dbConnect = require('./ConfigMongodb')


const deleteDate = async () => {
   let data = await dbConnect();

   let result = await data.deleteMany({
      name: "max pro 7"
   })
   console.warn(result);
   if(result.acknowledged){
      console.log("record deleted");
   }
}
deleteDate();