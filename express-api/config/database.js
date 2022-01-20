// import library mysql
let mysql = require('mysql');

//konfigurasi mysql
let connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '',
    database:   'db_express_api'
});

//membuat kondisi mysql jalan gak
connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connection Succesfully');
    }
})

//export conection agar bisa digunakan di file lainnya
module.exports = connection;