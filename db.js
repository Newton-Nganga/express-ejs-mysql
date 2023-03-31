const mysql = require('mysql')
//your credentials
const connection = mysql.createConnection({
  host: 'mysql-117598-0.cloudclusters.net',
  user: 'admin',
  password: '1FnGiQYa',
  database: 'test',
  port:'10037'
});
//try to make a connection
connection.connect((err) => {
  console.log('==== TRYING TO CONNECT TO THE DB ====')
  if(!err) {
    console.log('Connected to MySQL database');
  }
  else {
    console.log("==== COULDN'T CONNECT TO THE DB",err);
  }
});
//import { MongoClient } from "mongodb";

//const connectionString = process.env.ATLAS_URI || "";

//const client = new MongoClient(connectionString);

//let conn;
//try {
//  conn = await client.connect();
//} catch(e) {
//  console.error(e);
//}

//let db = conn.db("sample_training");

export default db;
module.exports = connection;
