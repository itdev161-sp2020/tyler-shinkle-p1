import express from 'express';
import connectDatabase from './config/db';
import msg from './models/msg';


//initialize express app
const app = express();

//connect to database
connectDatabase();

//configure middleware
app.use(express.json({extended:false}));

//API endpoints
app.get('/',(req,res)=>
    res.send('http get request sent!')
);

app.post('/api/messages',(req,res)=>{
    var myData = new msg(req.body);
    myData.save();
    console.log(req.body);
    res.send(req.body);
})

//listen
app.listen(3000,()=>console.log(`Express server running on port 3000`));
