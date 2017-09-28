const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));


app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
		res.sendfile('public/index.html');
});


function addStdErrorHandling(stream,res){
  stream.on('error',function(error){
    res.writeHead(404,'Not Found');
    res.end();
  });
}

function logRequest(req){
  console.log( " Request received " + reqToString(req));
}

function reqToString(req){
 return `url:${req.url}`;
}

const server = app.listen(3000,function(){
  const host = server.address().address
  const port = server.address().port
})
