const express = require('express');
const mongoose=require('mongoose')
const {ApolloServer}=require('apollo-server-express')
const typeDefs=require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes')
const app = express();
const port = 3001;
const conn = require('./db.js');  // Add this line
app.use(express.json());
const server=new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.listen(port, () => {
      console.log(`server is live at ${port}`);
  })
  }
  function TESTING(){
    return 0;
  }
  TESTING();
  StartServer();
  