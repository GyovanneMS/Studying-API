/*=========================================================
* Objetivo: Obter uma lista de cidades;
* Data: 29/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

const { qualEstado } = require('./modulos/cidades_estados')
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite qual estado prefere achar as cidades(sigla): ', function(valor1){
    let sigla = valor1;
    let cidades = qualEstado(sigla)
    if(cidades == false)
        console.log('ERROR');
    else
        console.table(cidades);
    process.exit(0)
});
