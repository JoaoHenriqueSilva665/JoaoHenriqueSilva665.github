//import
const sqlite3 = require('sqlite3').verbose()
//create the object will make operations in a Data Base
const Database = new sqlite3.Database("./src/dataBase/database.db")
module.exports = Database
//utilizar o objto de banco de dados para nossas operações
/* Database.serialize(() => {
    //create table with comands SQL:
    // 1. create table
    Database.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2. insert data table
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2, 
            state, 
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);`
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos eletronicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("deu certo, cadastro com sucesso!!")
        console.log(this)
    }
    Database.run(query, values, afterInsertData)
    
    //3. view data table
    Database.all(`SELECT name FROM places`, function(err, rows){
        if (err) {
            return console.log(err)
        }
        console.log("Seus registros fdc")
        console.log(rows)
    })

    //4. delet a data table
    Database.run(`DELETE FROM places WHERE id = ?`, [], function(err){
        if (err) {
            return console.log(err)
        }
        console.log("Registro Deletado com sucesso")
    })
}) */