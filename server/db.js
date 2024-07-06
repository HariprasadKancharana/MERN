const url = "mongodb+srv://hariprasadkancharana:xiKcxbmTiEhZOlBI@cluster0.4b8ps78.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const  mongoose  = require('mongoose');
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
  console.log("connected to db");
}).catch((err) => console.log(err));   

const conn=mongoose.connection
module.exports=conn