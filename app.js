/*
    Bibliotecas necessáris para a criação de uma API
    express -  npm indtsll express --save
    *express: Uma biblioteca para criar aplicações em NODE no formato de API
    
    
    É uma biblioeca para mnipular as permissões do protocolo HYYP
    cors - npm install cors --save
    
    É uma biblioteca que permite manipular o corpo do providente HTTP
    body-parser - npm install body-parser --save
*/

//import da biblioteca da express para criar a API
const express = require("express");

//import da biblioteca do cors para manipular as permissões de protocolo HTTP
const cors = require("cors");

//import da bibliotexa do body-parser que irá manipular o corpo das requisições do protocolo HTTP
const bodyParser = require("body-parser");

//import do getListEstados
const {getListEstados, getEstados} = require("./modulo/estados");

//Cria um objeto chamado app que será especialista nas funções do express
const app = express();

//request - receber dados
//response - devolve dados
app.use((request, response, next) => {
    //Permite especificar quem serão os IPs que podem acessar a API (* -> ssignifica todos)
    response.header('Access-Control-Allow-Origin', '*');

    //Permite especificar quais serão os verbos ou métodos que a API irá reconhecer
    response.header('Access-Control-Allow-Methodos', 'GET, POST, PUT, DELETE, OPTIONS');

    //Estabelece que as permissões acima serão representadas pelo cors
    app.use(cors());

    next();
});

//Endpoint busca a sigla do estado
app.get('/estado/:sigla', cors(), async function(request, response, next){
    //recebe a sigla enviada por parametro no endpoint
    let sigla = request.params.sigla;

    //Chama a função qie vai procurar o estado pela sigla
    let estado = getEstados(sigla);

    if(estado){
        response.status(200);
        response.json(estado);
    } else{
        response.status(404);
    }

})



//EndPoint: listagem de cidades
app.get('/cidades', cors(), async function(request, response, next){
    let message = {mensagem : 'Bem vindo a API de cidades'};
    
    response.status(200);
    response.json(message);


});

//EndPoint: listagem de estados
app.get('/estados', cors(), async function(request, response, next){
    let estados = getListEstados()
    let estadosJson = {};

    if(estados){
        //Criamos uma chave chamada uf, 
        estadosJson.uf = estados;
        response.status(200);
        response.json(estadosJson);
    }else{
        response.status(400);
        response.json('message: "Nenhum item encontrado"')
    }
});

//Para que os EndPoints possam estar funcionando, precisamos obrigatoriamente finalizar a API nessa  function, que representa o start da API
app.listen(8080, function(){
    console.log('Servidor aguardando requisições...')
});
