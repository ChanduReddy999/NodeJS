var mysql=require("mysql2");
var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodejs"
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE TABLE 360digrii(id int,name varchar(50))",function(err,result){
        if (err) throw err;
        console.log("Table created!");
    });
});