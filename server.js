var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome TO IET");});
app.get("/product",(req, res)=>{var p={"id":45, "Title":"Gerbera","Description":"Wedding Flower", "unitprice":14, "quantity":7000};
res.send(p);
});
app.listen(7000);
console.log("App Is Listening On Port 7000");