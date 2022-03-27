const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app =express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set('view engine','ejs');


let options ={
    weekday: 'long', month: 'long', day: 'numeric'
};
let day = new Date().toLocaleDateString('en-US',options);

let items = ["Eat Breakfast","Study"];

app.get('/',(req,res)=>{
    res.render('list',{day: day,items: items});
});


app.post('/',(req,res)=>{
    items.push(req.body.newItem);
    res.redirect('/');
});

app.listen('3000',()=>{
    console.log('started');
});