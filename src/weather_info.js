const request=require('request')

const getWeatherInfo=(locationName,actName,callback)=>{
   // let wth='';
    const url='http://api.weatherstack.com/current?access_key=be3c314d1d42448ce7a052d978805f0e&query='+locationName;
    request({url:url,json:true},(error,response)=>{

        //console.log(wth);
        callback(undefined,'Weather at '+actName+' is '+response.body.current.temperature);
    });
    
}
module.exports={getWeatherInfo};
