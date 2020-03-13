import express from 'express';
import connectDatabase from './config/db';
import msg from './models/msg';
import cors from 'cors';


//initialize express app
const app = express();

//connect to database
connectDatabase();

//configure middleware
app.use(express.json({extended:false}));
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)

//API endpoints
//any get request will send this in response
//the sort will sort our messages in descending 
//order according to their _id value. This way 
//our newest messages will sit on top...
app.get('/messages',async (req,res) =>{
    const messages = await msg.find({}).sort({_id:-1});
    console.log("GET REQUEST SENT!");
    try{
        res.send(messages);
    }catch(err){
        res.status(500).send(err);
    }
});

//any post to this url will try to form a new 
//msg instance and the save() function will save to whichever
//database we're connected to .
app.post('/api/messages',(req,res)=>{
    var myData = new msg(req.body);
    myData.save();
    console.log(req.body);
    res.send(req.body);
});

//listen
const port = 5000;
app.listen(port,()=>console.log(`Express server running on port ${port}`));
