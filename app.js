const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');


	
//inicia o servidor
app.listen(port);
console.log('API funcionando!');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
	

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

app.post('/users', (req, res) => {
  res.json(users)
})


//MySQL
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'test'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

