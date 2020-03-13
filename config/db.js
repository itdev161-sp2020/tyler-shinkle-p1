import mongoose from 'mongoose';
import config from 'config';

//get url from our default json file
const db = config.get('mongoURI');

//connect to our db or display error
const connectDatabase = async () => {
    try{
        await mongoose.connect(db,{
            useUnifiedTopology:true
        });
        console.log("Connected to DB!");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDatabase;