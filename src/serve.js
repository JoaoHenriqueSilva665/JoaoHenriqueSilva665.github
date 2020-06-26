//Import
const express = require("express")
const nunjucks = require("nunjucks")
const AppServer = express()

//take DataBase
const db = require('./dataBase/db')

nunjucks.configure("src/pages", {
    express: AppServer,
    noCache: true
})
//habilitar o uso do req.body
AppServer.use(express.urlencoded({extended: true}))

//config Past to public
AppServer.use(express.static("public"))

//config router the my aplicattion
//initialize pages
// req : requisição, res : resposta

AppServer.get("/", (req, res) =>{
    return res.render("index.html")
})
AppServer.get("/createPoint", (req, res) =>{
    /* console.log(req.query) */
    return res.render("createPoint.html")
})
AppServer.post("/savePoint", (req, res) =>{
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
        }
        /* console.log("deu certo, cadastro com sucesso!!")
        console.log(this) */
        return res.render("createPoint.html", {saved: true})
    }
    db.run(query, values, afterInsertData)
})

AppServer.get("/search-result", (req, res) =>{
    const search = req.query.search
    if (search == "") {
        //pesquisa vazia 
        return res.render("search-result.html", {total: 0})
    }

    //take data in the DATA BASE
    db.all(`SELECT * FROM places WHERE city LIKE'%${search}%'`, function(err, rows){
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        /* console.log("Seus registros fdc")
        console.log(rows) */
        //view page HTML with data at a DATABASE
        return res.render("search-result.html", {places: rows, total})
    })
})
// ligar o servidor
AppServer.listen(3000)
