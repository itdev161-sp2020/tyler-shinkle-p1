import mongoose from 'mongoose';

//define document schema
const msgSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
        unique:false
    }
});

//define exported constant with name msg and schema
//this is a model.
const msg = mongoose.model('msg',msgSchema);

export default msg;