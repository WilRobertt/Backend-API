const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(express.json());

app.post('/AddUsuario', urlencodedParser, (req, res) => {
    var nome=req.body.nome;
    var sobrenome=req.body.sobrenome;
    var senha= req.body.senha;
    var telefone= req.body.telefone;
    var endereço= req.body.endereço;
    var sexo=req.body.sexo;
    var adicionarUsuario={nome:nome,sobrenome:sobrenome,senha:senha,telefone:telefone,endereço:endereço,sexo:sexo}
     
    res.status(200).send(adicionarUsuario);
})
   app.listen(port, () => {
    console.log('Esta aplicação está escutando a porta '+port)
   })