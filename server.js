const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = new express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

 hbs.registerHelper('pageTitlefn',(title)=>{ return 'hey'+title;});
hbs.registerHelper('currentYear',()=>new Date().getFullYear());

app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{

    //res.render('maintenance');
    next();
})


app.get('/',(req,res)=>{


    res.render('home', {pageTitle: "Home Page"});

});

app.get('/bad',(req,res)=>{

    res.send({errormessage:'unable to fulfill the request'});
})

app.listen(port,()=>{

    console.log(`Application started on port ${port}`);
});
