const User = require('./model/userSchema');

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation:{
    createUser: async (_,{input})=>{
        try{
        const {name,email,password} = input;
        if(!name || !email || !password){
            throw new Error("enter all the feilds")
        }
        const newUser=new User({name,email,password});
        return await newUser.save();
       }catch(err){
        throw Error(err);
       }
    },
    changePass:async(_,{id,password})=>{
        try{
            const userNew =await User.findByIdAndUpdate(id,{password:password},{new:true});
            if(!userNew){
                throw new Error('User Not Found')
            }
            return userNew;
        }catch(err){
            throw(err)
        }
    },
},
  User: {
    email: (parent) => parent.email || ' ',
    name:(parent)=>parent.name ||' ',
    password:(parent)=>parent.password ||' '
  },
};

module.exports = resolvers;