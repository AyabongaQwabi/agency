var express = require('express'),
	app = express();
	exphbs = require('express-handlebars'),
	mysql = require('mysql'),
	bcrypt = require('bcrypt'),
	bodyParser = require("body-parser"),
	Contracts = require("./Routes/Contracts"),
	users = require("./Routes/users"),
	myConnection = require("express-myconnection");


 
	 dbOptions = {
     host : "localhost",
     user : "root",
     password : "ayabonga",
     port : 3306,
     database : "agency"
 };
 
app.engine("handlebars", exphbs({defaultLayout : "main"}));
app.set("view engine", "handlebars"); 
app.use(express.static(__dirname + "/public")); 

app.use(myConnection(mysql, dbOptions, "single")); 



app.get('/home', function (req, res){
  res.render('home');
});

 
app.get('/Contracts',Contracts.showContracts);
app.post('/Contracts/update/:id',Contracts.updateContracts);
app.post('/Contracts/add',Contracts.addContracts);
app.get('/edit_Contracts/:id', Contracts.showContracts);
app.get('/Contracts/delete/:id',Contracts.deleteContracts);

 
var port = process.env.PORT || 8080;       
   
var server = app.listen(port, function() {
   var host = server.address().address;
   var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
});