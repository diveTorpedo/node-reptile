const mysql = require('mysql')

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node-express'

})


module.exports = (sql, value, callback) => {
    connection.query(sql, value, (err, result) => {
        // if (err) {
        //     console.log('[SERLECT ERR]-', err.message);
        // }
        // console.log('-----------------------------------------------');
        // console.log(result);
        // console.log('-----------------------------------------------');
        callback(err, result)
    })
}
// let sql = 'SELECT * FROM img_link'
// let insertsql = 'INSERT INTO img_link (name,link) VALUES ("name1","link1")'
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.log('[SERLECT ERR]-', err.message);
//     }
//     console.log('-----------------------------------------------');
//     console.log(result);
//     console.log('-----------------------------------------------');
// })