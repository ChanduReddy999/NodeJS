var mysql=require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    con.query("SHOW DATABASES",function(err,result){
        if (err) throw err;
        console.log(result);
    });
});