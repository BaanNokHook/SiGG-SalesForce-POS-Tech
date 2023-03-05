var express = require('express');
var router = express.Router();

var connection  = require('../database/db.js');
var pool   = require('../database/pool.js');

var mkdirp = require('mkdirp');
var rootParams = ':CompanyId/:BrandId/:OutletId';

var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.render('index', { title: 'Example NodeJS' });
});

router.get('/demo5', function(req, res, next) {
  res.sendFile('/nodejs/express/public/www/index.html', { root: __dirname });
});







router.post('/uploadImageSingle/'+ rootParams+'/:ItemId', async function (req, res, next) {
  //new varible
  var path_url = '/nodejs/express/public/' + req.params.CompanyId+'/'+req.params.BrandId+'/'+req.params.OutletId+'/';

  var image_name = ''+req.params.CompanyId+req.params.BrandId+req.params.OutletId+'_'+''+req.params.ItemId+'.jpg';
  var image_path = path_url+image_name;
  var base64Image = req.body.image;
  //new Folder of path
  mkdirp(path_url, function (err) {
    if (err){ console.error(err) } else { console.log('mkDir::') };
  });
  //Check File Exits
  try {
    if(fs.existsSync(path_url + image_path)){
      fs.unlinkSync(path_url + image_path);
    }
  } catch(err) {
    console.error(err)
  }
  //Write File
  fs.writeFile(path_url + image_name , base64Image, {encoding: 'base64'}, function(err) { /*console.log('File created');*/  });
  //Return

  var sql = "CALL pSetItemImageName('"+req.params.CompanyId+"','"+req.params.BrandId+"','"+req.params.OutletId+"','"+req.params.ItemId+"','"+image_name+"');";

  pool.query(""+sql,function(err,rows){
    if(err){
      req.flash('error', err); 
       //ERROR Render
      }else{

      }
    }
  );

  await res.send({result : 'mkDir:'+path_url});
})







router.get('/verify/:CODE',  async function(req, res, next) {
  // res.send('respond CODE=: '+req.params.CODE);
  //var patern_plite = '/verify/';
  var arrayCode = req.params.CODE.split(',');
  var sql ="SELECT fTableCanOrder('"+arrayCode[0]+"','"+arrayCode[1]+"','"+arrayCode[2]+"','"+arrayCode[3]+"','"+arrayCode[4]+"','"+arrayCode[5]+"') as IsCanOrder;";
  var result = 0;
  //res.redirect(url);
  (async () => {
    try {
      const rows = await pool.query(sql);
      //SELECT view_productdata.CompanyId, view_productdata.BrandId, view_productdata.OutletId, 
      await res.send(JSON.stringify(rows[0]));
    } finally {
    }
  })(); // await res.send({ result: "success", sql: sql, data : arrayCode });
});

router.get('/scanqr', function(req, res, next) {
  res.render('scanqr', { title: 'Express' });
});

router.get('/david', function(req, res, next) {
  res.sendFile('/nodejs/express/public/david/index.html', { root: __dirname });
});

router.get('/category', function(req, res, next) {

  connection.query("SELECT * FROM category order by seqNo",function(err,rows)     {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        //console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
    });
});

router.get('/product', function(req, res, next) {
  connection.query("SELECT *,(CONCAT('/default/', CASE WHEN picture IS NULL THEN 'default.png' ELSE picture END )) as 'fullpath' FROM product order by seqNo",function(err,rows)     {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        //console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
    });
});

module.exports = router;