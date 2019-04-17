const express = require('express');
const app = express()
/*method 1*/

app.get(
    "/getinfo",
    function(request,response){
        console.log(request.query);
        response.status(200);  // status 200 is for "OK"
        response.send(`
        Hello! 
        your name is :${request.query.name}
        and your age is :${request.query.age}`);
    }
);

  /*method 2*/
app.get(
    "/getinfo/:name/:age",
    function(request,response){
        console.log(request.query);
        response.status(200);  // status 200 is for "OK"
        response.send(`
        Hello! 
        your name is :${request.params.name}
        and your age is :${request.params.age}`);
    }
);
  app.listen(
      9000,
      function(){
          console.log("Ok");});
    