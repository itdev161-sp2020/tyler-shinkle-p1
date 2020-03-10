import mongoose from 'mongoose';

const msgSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
        unique:false
    }
});

const msg = mongoose.model('msg',msgSchema);

export default msg;