var express = require('express');
var router = express.Router();

var connection  = require('../database/db.js');
var pool   = require('../database/pool.js');

var rootParams = ':CompanyId/:BrandId/:OutletId';


// deleteSentOrderUrl
router.post('/deleteSentOrderUrl', async function(request, response){
  var JSON_ARRAY = request.body;  // echo the result back Array's
  var CompanyId =  JSON_ARRAY._CompanyId;
  var BrandId   =  JSON_ARRAY._BrandId;
  var OutletId   = JSON_ARRAY._OutletId;
  var SystemDate = JSON_ARRAY._SystemDate;
  var TableNo    = JSON_ARRAY._TableNo;
  var StartTime  = JSON_ARRAY._StartTime;
  var ItemNo     = JSON_ARRAY._ItemNo;

  var sql = "SELECT fOrderingItemDelete('"+CompanyId+"','"+BrandId+"','"+OutletId+"','"+SystemDate+"','"+TableNo+"','"+StartTime+"','"+ItemNo+"');";
  pool.query(""+sql, function(err,rows) {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        console.log(JSON.stringify(rows));
      }
  });
  await response.send(request.body);    // echo the result back Array's
})


//saveSentOrderUrl
router.post('/saveSentOrderUrl', async function(request, response){
  var JSON_ARRAY = request.body;  // echo the result back Array's
  var CompanyId =  JSON_ARRAY.CompanyId;
  var BrandId   =  JSON_ARRAY.BrandId;
  var OutletId   = JSON_ARRAY.OutletId;
  var SystemDate = JSON_ARRAY.SystemDate;
  var TableNo    = JSON_ARRAY.TableNo;
  var StartTime  = JSON_ARRAY.StartTime;

  var sql = "CALL pMoveOrderingToOrderDetail('"+CompanyId+"','"+BrandId+"','"+OutletId+"','"+SystemDate+"','"+TableNo+"','"+StartTime+"');";
  pool.query(""+sql, function(err,rows) {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        //console.log(JSON.stringify(rows));
      }
  });
  await response.send(request.body);    // echo the result back Array's
})



router.post('/saveOrdering', function(request, response){
  //console.log(request.body);      // your JSON
  var JSON_ARRAY = request.body;  // echo the result back Array's

  var CompanyId =  JSON_ARRAY[0].CompanyId;
  var BrandId   =  JSON_ARRAY[0].BrandId;
  var OutletId   = JSON_ARRAY[0].OutletId;
  var SystemDate = JSON_ARRAY[0].SystemDate;
  var TableNo    = JSON_ARRAY[0].TableNo;
  var StartTime  = JSON_ARRAY[0].StartTime;

  console.log('input Header:: ',[CompanyId,BrandId,OutletId,SystemDate,TableNo,StartTime]); 

  //`pCompanyId` VARCHAR(4),`pBrandId` VARCHAR(4),`pOutletId` VARCHAR(4),`pSystemDate` VARCHAR(10),`pTableNo` VARCHAR(10),`pStartTime` VARCHAR(8)
  var Query_ItemNo = "SELECT getNewItemNO('"+CompanyId+"','"+BrandId+"','"+OutletId+"', '"+SystemDate+"','"+TableNo+"','"+StartTime+"') as ItemNo;";
console.log('SQL NewItemNO:: ', Query_ItemNo);

  pool.query(""+Query_ItemNo,function(err,rows){
    if(err){
      req.flash('error', err); 
       //ERROR Render
      }else{
        var ItemNo = rows[0].ItemNo;
        var sql = "";
        JSON_ARRAY.forEach( function(object, index){
          //MYSQL SAVE ORDERING
          sql = "INSERT INTO `ordering` ";
          sql += " (`CompanyId`, `BrandId`, `OutletId`, `TableNo`,`SystemDate`, `StartTime`, `ItemNo`, `ItemId`,`ReferenceId`, `ItemName`, `localName`, `EnglishName`, `OtherName`, `SizeName`, `SizeLocalName`, `SizeEnglishName`, `SizeOtherName`, `SizeId`, `OrgSize`, `DepartmentId`, `CategoryId`, `AddModiCode`, `TotalAmount`, `Quantity`, `OrgQty`, `UnitPrice`, `Free`, `noService`, `noVat`, `Status`, `PrintTo`, `NeedPrint`, `localPrint`, `KitchenLang`, `Parent`, `Child`, `OrderDate`, `OrderTime`, `KitchenNote`,`MainItem`) VALUES ";
          sql += "(";
          sql += "'"+(object.CompanyId === 'undefined' || object.CompanyId ===''? '' : object.CompanyId)+"',";
          sql += "'"+(object.BrandId === 'undefined' || object.BrandId ===''? '' : object.BrandId)+"',";
          sql += "'"+(object.OutletId === 'undefined' || object.OutletId ===''? '' : object.OutletId)+"',";
          sql += "'"+(object.TableNo === 'undefined' || object.TableNo ===''? '' : object.TableNo)+"',";
          sql += "'"+(object.SystemDate === 'undefined' || object.SystemDate ===''? '' : object.SystemDate)+"',";
          sql += "'"+(object.StartTime === 'undefined' || object.StartTime ===''? '' : object.StartTime)+"',";
          sql +="'"+(ItemNo)+"',";
          sql += "'"+(object.ItemId === 'undefined' || object.ItemId ===''? '' : object.ItemId)+"',";
          sql += "'ReferenceId',";
          sql += "'"+(object.localName === 'undefined' || object.localName ===''? '' : object.localName)+"',";
          sql += "'"+(object.localName === 'undefined' || object.localName ===''? '' : object.localName)+"',";
          sql += "'"+(object.EnglishName === 'undefined' || object.EnglishName ===''? '' : object.EnglishName)+"',";
          sql += "'"+(object.OtherName === 'undefined' || object.OtherName ===''? '' : object.OtherName)+"',";
          sql += "'"+(object.SizeLocalName === 'undefined' || object.SizeLocalName ===''? '' : object.SizeLocalName)+"',";
          sql += "'"+(object.SizeLocalName === 'undefined' || object.SizeLocalName ===''? '' : object.SizeLocalName)+"',";
          sql += "'"+(object.SizeEnglishName === 'undefined' || object.SizeEnglishName ===''? '' : object.SizeEnglishName)+"',";
          sql += "'"+(object.SizeOtherName === 'undefined' || object.SizeOtherName ===''? '' : object.SizeOtherName)+"',";
          sql += "'"+(object.SizeId === 'undefined' || object.SizeId ===''? '' : object.SizeId)+"',";
          sql += "'0',";//OrgSize
          sql += "'"+(object.DepartmentId === 'undefined' || object.DepartmentId ===''? '' : object.DepartmentId)+"',";
          sql += "'"+(object.CategoryId === 'undefined' || object.CategoryId ===''? '' : object.CategoryId)+"',";
          sql += "'"+(object.AddModiCode === 'undefined' || object.AddModiCode ==='' || object.AddModiCode ==='AddModiCode' ? '' : object.AddModiCode)+"',";//AddModiCode
          sql += "'0.0000',";//TotalAmount
          sql += "'"+(object.Quantity)+"',";//Quantity
          sql += "'"+(object.OrgQty)+"',";
          sql += "'"+(object.UnitPrice)+"',";//UnitPrice
          sql += "'"+(object.Free)+"',";//Free
          sql += ""+(object.noService)+",";//noService
          sql += ""+(object.noVat)+",";//noVat
          sql += "'"+(object.Status === 'undefined' || object.Status ===''? '*' : object.Status)+"',"; //Status
          sql += "'"+(object.PrintTo === 'undefined' || object.PrintTo ===''? '' : object.PrintTo)+"',";
          sql += "'"+(object.NeedPrint === 'undefined' || object.NeedPrint ===''? '' : object.NeedPrint)+"',"; //NeedPrint
          sql += ""+(object.localPrint === 'undefined' || object.localPrint ===''? '' : object.localPrint)+",";//localPrint
          sql += "'"+(object.KitchenLang === 'undefined' || object.KitchenLang ===''? '' : object.KitchenLang)+"',";//KitchenLang
          sql += ""+(object.Parent === 'undefined' || object.Parent ===''? '' : object.Parent)+",";//Parent
          sql += ""+(object.Child === 'undefined' || object.Child ===''? '' : object.Child)+",";//Child
          sql += "CURRENT_DATE(),";
          sql += "CURRENT_TIME(),";
          sql += "'"+(object.KitchenNote === 'undefined' || object.KitchenNote ===''? '' : object.KitchenNote)+"',";//KitchenNote
          sql += ""+(object.MainItem === 'undefined' || object.MainItem ===''? '' : object.MainItem)+"";// MainItem
          sql += " ); ";
      
          pool.query(""+sql,function(err,rowss){
            if(err){
            //req.flash('error', err); 
              //ERROR Render
              }else{
                //console.log(JSON.stringify(rows));
              }
          });
        });

      }
  });
  response.send(request.body);    // echo the result back Array's
});


router.get('/getOutletSetting/'+rootParams, function(req, res, next) {
  pool.query("SELECT * FROM view_outletsetting WHERE `CompanyId` = '"+req.params.CompanyId+"' AND `BrandId` = '"+req.params.BrandId+"' AND `OutletId` = '"+req.params.OutletId+"'",function(err,rows)     {
    if(err){
     req.flash('error', err); 
       //ERROR Render
       var sql = '';

      }else{
        //console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
    });
});

router.get('/getCategory/'+rootParams, function(req, res, next) {
  pool.query("SELECT * FROM category WHERE `CompanyId` = '"+req.params.CompanyId+"' AND `BrandId` = '"+req.params.BrandId+"' AND `OutletId` = '"+req.params.OutletId+"'",function(err,rows)     {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        //console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
    });
});

//SELECT * FROM `view_ordering`
router.get('/getOrdering/', function(req, res, next) {
  pool.query("SELECT * FROM `view_ordering`",function(err,rows)     {
    if(err){
     req.flash('error', err); 
       //ERROR Render
      }else{
        //console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
    });
});

router.get('/getProduct/'+rootParams, function(req, res, next) {

  (async () => {
      try {
        const rows = await pool.query("SELECT * FROM view_productdata WHERE view_productdata.CompanyId = '"+req.params.CompanyId+"' AND view_productdata.BrandId = '"+req.params.BrandId+"' AND view_productdata.OutletId = '"+req.params.OutletId+"' ");
        //SELECT view_productdata.CompanyId, view_productdata.BrandId, view_productdata.OutletId, 
        res.send(JSON.stringify(rows));
      } finally {
      }
    })();
});



router.get('/getproductsize', function(req, res, next) {
  (async () => {
      try {
        const rows = await pool.query('select * from view_productsizeall');
        res.send(JSON.stringify(rows));
      } finally {
      }
    })();
});


router.get('/getproductsize/'+rootParams, function(req, res, next) {
  (async () => {
      try {
        const rows = await pool.query("SELECT * FROM view_productsizeall WHERE view_productsizeall.CompanyId = '"+req.params.CompanyId+"' AND view_productsizeall.BrandId = '"+req.params.BrandId+"' AND view_productsizeall.OutletId='"+req.params.OutletId+"';");
        res.send(JSON.stringify(rows));
      } finally {
      }
    })();
});

router.get('/clearOrder/:TABLENO', function(req, res, next) {
  console.log(req.params);
  (async () => {
      try {
        const rows = await pool.query("CALL clearOrdering('"+req.params.TABLENO+"')");
        res.send(JSON.stringify(rows));
      } finally {
      }
    })();
});



router.get('/getmodifylistall/', function(req, res, next) {
  (async () => {
      try {
        const rows = await pool.query('SELECT * FROM `view_modifylistall`');
        res.send(JSON.stringify(rows));
      } finally {
      }
    })();
});

// getorderingall
router.get('/getorderingall/'+rootParams+'/:TableNo/:SystemDate/:StartTime', async function(req, res, next) {

  //':CompanyId/:BrandId/:OutletId';
  var sql = ""
        sql += " SELECT * ";
        sql += " FROM ";
        sql += " view_ordering ";
        sql += " WHERE ";
        sql += " view_ordering.CompanyId = '"+req.params.CompanyId+"' AND ";
        sql += " view_ordering.BrandId = '"+req.params.BrandId+"' AND ";
        sql += " view_ordering.OutletId = '"+req.params.OutletId+"' AND";
        sql += " view_ordering.TableNo = '"+req.params.TableNo+"' AND ";
        sql += " view_ordering.SystemDate = '"+req.params.SystemDate+"' AND ";
        sql += " view_ordering.StartTime = '"+req.params.StartTime+"'; ";

        (async () => {
          try {
            const rows = await pool.query(sql);
            //SELECT view_productdata.CompanyId, view_productdata.BrandId, view_productdata.OutletId,
            var Result = []
            rows.forEach((value, index) => {
              Result.push(value);
            });
            await res.send(JSON.stringify(Result));
          } finally {
          }
        })();
});


// getorderdetailall
// getorderingall
router.get('/getorderdetailall/'+rootParams+'/:TableNo/:SystemDate/:StartTime', async function(req, res, next) {
  //':CompanyId/:BrandId/:OutletId';
  var sql = ""
        sql += " SELECT * ";
        sql += " FROM ";
        sql += " view_orderdetail ";
        sql += " WHERE ";
        sql += " view_orderdetail.CompanyId = '"+req.params.CompanyId+"' AND ";
        sql += " view_orderdetail.BrandId = '"+req.params.BrandId+"' AND ";
        sql += " view_orderdetail.OutletId = '"+req.params.OutletId+"' AND";
        sql += " view_orderdetail.TableNo = '"+req.params.TableNo+"' AND ";
        sql += " view_orderdetail.SystemDate = '"+req.params.SystemDate+"' AND ";
        sql += " view_orderdetail.StartTime = '"+req.params.StartTime+"'; ";

        (async () => {
          try {
            const rows = await pool.query(sql);
            //SELECT view_productdata.CompanyId, view_productdata.BrandId, view_productdata.OutletId, 
            await res.send(JSON.stringify(rows));
          } finally {
          }
        })();
});



// router.get('/category', function(req, res, next) {
//     pool.query("SELECT * FROM category",function(err,rows)     {
//       if(err){
//        req.flash('error', err); 
//          //ERROR Render
//         }else{
//           //console.log(JSON.stringify(rows));
//           res.send(JSON.stringify(rows));
//         }
//       });
// });


// router.get('/product', function(req, res, next) {

//   (async () => {
//       try {
//         const rows = await pool.query('SELECT * FROM view_productdata');
//         res.send(JSON.stringify(rows));
//       } finally {
//       }
//     })();
// });



// router.get('/getproductsize/:ItemId', function(req, res, next) {
//   console.log(req.params);
//   (async () => {
//       try {
//         const rows = await pool.query("select * from view_productsizeall WHERE `ItemId` = '"+req.params.ItemId+"'");
//         res.send(JSON.stringify(rows));
//       } finally {
//       }
//     })();
// });


module.exports = router;
