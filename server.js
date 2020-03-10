import express from 'express';

//initialize express app
const app = express();

//API endpoints
app.get('/',(req,res)=>
    res.send('http get request sent!')
);

//listen
app.listen(3000,()=>console.log(`Express server running on port 3000`));
