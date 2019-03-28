const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Event = require('./models/event');

app.set('view engine', 'ejs');
app.use(express.urlencoded());



app.get('/', function(req, res){
    
    Event.find({}, function(err, event
        ){
        return res.json(events);
            
    });
}); 

app.post("/create-event", function(req, res){
   Event.create({
       title: req.body.title,
       description: req.body.description,
       date: req.body.date
   },
   function(err, event){
       return res.redirect('/');
   });
});



app.listen(port, function(err){
    if (err) {
        console.log('Error in running the server');
        return;
    }

    console.log('Server is running on '+ port);

});
