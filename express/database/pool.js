'user strict';

var mysql = require('mysql')
var util = require('util')

var pool = mysql.createPool({
    connectionLimit: 100,
    host: '127.0.0.1',
    user: 'root',
    password: 'Clexpert',
    database: 'selforder'
})
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database Selforder connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database Selforder has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database Selforder connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

pool.query = util.promisify(pool.query) // Magic happens here.

module.exports = pool