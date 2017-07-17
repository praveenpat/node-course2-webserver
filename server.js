const express = require('express');
const hbs = require('hbs');

var app = new express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('pageTitle',()=>{ return 'Page Title';});
hbs.registerHelper('currentYear',()=>new Date().getFullYear());

app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{

    res.render('maintenance');
})


app.get('/',(req,res)=>{


    res.render('home', {currentYear: new Date().getFullYear()});

});

app.get('/bad',(req,res)=>{

    res.send({errormessage:'unable to fulfill the request'});
})

app.listen(3000);
