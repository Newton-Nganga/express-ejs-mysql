# Expressjs ,Ejs and Mysql
A simple startup project configuration using express js as the server, ejs for templating and mysql as the database.

## Preliquisites
Requirements  
👉: node version 18.16.x  
👉: npm package manager is used in this case  

## Usage and Installation
1. Clone this github repository
   ```sh
     git clone https://github.com/Newton-Nganga/express-ejs-mysql.git
   ```
3. Install the required dependencies
    ```sh
    cd express-ejs-mysql && npm install
    ```
5. Replace the creadentials in db.js with your creadentials
    - You may also need to replace localhost with the ip adress: 127.0.0.1
      
  ```js
const mysql = require('mysql')
//your credentials
//You could save the creadentials in a dotenv file
const connection = mysql.createConnection({
  host: 'mysql-117598-0.cloudclusters.net', //use localhost or 127.0.0.1
  user: 'admin',
  password: '1FnGiQYa',
  database: 'test',
  port:'10037' //The db port
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



module.exports = connection;

  ```
## Project Sructure

```sh
.
├── controllers
│   └── controller.js
├── db.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   ├── images
│   │   └── bird.jpg
│   └── js
├── README.md
├── routers
│   └── routers.js
├── server.js
├── Utils
└── views
    ├── 404.ejs
    ├── add.ejs
    ├── delete.ejs
    ├── partials
    │   ├── form-fields.ejs
    │   ├── form-styling.ejs
    │   └── head.ejs
    ├── update.ejs
    └── users.ejs


```
## Screensnaps
![users](https://github.com/Newton-Nganga/express-ejs-mysql/assets/93589514/b6529731-dc29-42c1-894a-f9597d6da921)
![users-add](https://github.com/Newton-Nganga/express-ejs-mysql/assets/93589514/5bd53fe9-9783-43a8-bed7-1442dd7bf863)
![users-update](https://github.com/Newton-Nganga/express-ejs-mysql/assets/93589514/cb1d2290-9f65-4b9a-9e39-9de729687bba)

## contributions
This project is entirely for use in starting a development server,Its open to contribution.  
Clone the repo and Boom! 🤯: 💥: 💥: You can now mess up things .




