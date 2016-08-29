var url ='http://ipinfo.io';
var request=require('request');

module.exports=function(callBack){
    request({
        url:url,
        json:true
    }, function (error, response, body){
        if(error){
            callBack('can not find data');
        }
        else{
            callBack(body);
        }
    })
}