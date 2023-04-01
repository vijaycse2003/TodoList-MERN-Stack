const mongoose=require('mongoose');
const database="mongodb://127.0.0.1:27017/office"

const  db=mongoose.connect(database,
    {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
},
err=>{
    if(err)console.log(`Error in Db Connection ${err}`);
    console.log('MongoDb Connection successfully..');
}
    
    );
 



module.exports={db};
