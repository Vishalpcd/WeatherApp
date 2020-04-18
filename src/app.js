const path=require('path');
const express=require('express');
const hbs=require('hbs');
const request=require('request');
const weather_info=require('./weather_info')
const app=express();
const port =process.env.PORT;
const viewDir=path.join(__dirname,'../views');
const partialPath=path.join(__dirname,'../views/partials')
//setting up the view engine
app.set('view engine','hbs');
//to load files will have add below  code 
app.use(express.static(viewDir));
hbs.registerPartials(partialPath);
app.get('',(req,res)=>{

    res.render('index',{
        title:'Home page',
        content:'Home content'
    })
})

app.get('/about',(req,res)=>{
//console.log(req);
    res.render('about',{
        title:'About page',
        content:'About content'
    })
})



//Weather page

app.get('/showWeather',(req,res)=>{
    weather_info.getWeatherInfo(req.query.loc,req.query.loc,(error,str)=>{
if(error){
    res.send('Error kindly contact admin');
}else{
    res.send(str);
}
       
    })

})

//if url doesnt match then call below
app.get('*',(req,res)=>{
res.render('404');
})

app.listen(port,()=>{
    console.log('App is running on '+port);
})