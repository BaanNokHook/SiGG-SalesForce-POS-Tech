var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// var mongo   = require('./database/mongo.js');

var mysql = require('mysql');
var sql   = require('./database/db.js');
var pool   = require('./database/pool.js');

var nano = require('nano')('http://admin:25983741@localhost:5984');
var couchdb = require('./database/couchdb.js');


var indexRouter = require('./routes/index');
var selforder   = require('./routes/selforder');

var cors = require('cors');




var app = express();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(express.json({inflate: true,
  limit: '100Mb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}));

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*",'http://192.168.0.45:3000');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(session({ 
  secret: 'Alaskdoiadns9do3irw9fspfw39iw[fk[spif[fkapdosPODUFSDKjf9wfpdjfpos',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(flash());
app.use(expressValidator());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/david')));

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/', indexRouter);

app.post('/uploadImageSingle', async function(req, res) {
  console.dir(req);
 await res.send({result : 'upload'});
});

app.get('/uploadImageSingle', async function(req, res) {
  await res.render('uploadImageSingle');
});


app.use('/selforder', selforder);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('500');
  res.status(err.status || 404);
  res.render('404');
});


io.on('connection', function(socket){
  console.log(`Socket ${socket.id} connected.`);
  socket.on('disconnect', function(){
     console.log(`Socket ${socket.id} disconnected.`);
  });
  
  var nCalC = 0;
  var cStatus = setInterval(() => {
    socket.emit('Check-Status', {action : true});
    console.log('Emit', 'Check-Status:: ' + new Date());
  }, 15000);

  socket.on('Call-C', function(msg){
      io.emit('Recive-C', msg);
      nCalC= nCalC + 1;
      console.log('Call-C:: ' + nCalC +' / '+ msg);
  });
  
  socket.on('Call-W', function(msg){
    io.emit('Recive-W', msg);
    console.log('Call-W:: ' + msg);
  });

  socket.on('Recive-W', function(msg){
    io.emit('Recive-W', msg);
    console.log('Recive-W:: ' + msg);
  });

  socket.on('Recive-C', function(msg){
    io.emit('Recive-C', msg);
    console.log('Recive-C:: ' + msg);
  });

  socket.on('Reset-C', function(msg){
    console.log('Reset-C:: ' + msg);
  });

  socket.on('Reset-W', function(msg){
    console.log('Reset-W:: ' + msg);
  });

  socket.on('Check-Status', function(msg){
    console.log('Check-Status:: ' + msg);
  });

  socket.on('Active-Status', function(msg){
    socket.CompanyId = msg.CompanyId;
    socket.BrandId   = msg.BrandId;
    socket.OutletId  = msg.OutletId;
    socket.SystemDate= msg.SystemDate;
    socket.TableNo   = msg.TableNo;
    socket.StartTime = msg.StartTime;
    socket.Date      = msg.Date;
    console.log('Check-Status:: ' + socket.id + ' , ' + socket.CompanyId + ',' + socket.BrandId +','+ socket.OutletId +','+ socket.SystemDate +','+ socket.TableNo +','+ socket.StartTime );
  });

  socket.on('ReActive-Status', function(msg){
    //socket.emit('ReActive-Status', {action: true})
  });

  // io.emit('get message', msg); 
});


var port = process.env.PORT || 3000
http.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
	console.log('Server started!!!');
});