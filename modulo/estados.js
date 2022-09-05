/*=========================================================
* Objetivo: Obter uma lista de estados;
* Data: 29/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
*/

var estados = [
    {
        sigla: 'SP',
        nome: 'São Paulo'
    },
    {
        sigla: 'AC',
        nome: 'Acre'
    },
    {
        sigla: 'AM',
        nome: 'Amazonas'
    },
    {
        sigla: 'PA',
        nome: 'Pará'
    },
    {
        sigla: 'AP',
        nome: 'Amapá'
    },
    {
        sigla: 'TO',
        nome: 'Tocantins'
    },
    {
        sigla: 'RR',
        nome: 'Roraima'
    },
    {
        sigla: 'RO',
        nome: 'Rondonia'
    },
    {
        sigla: 'GO',
        nome: 'Goiás'
    },
    {
        sigla: 'MT',
        nome: 'Mato Grosso'
    },
    {
        sigla: 'MS',
        nome: 'Mato Grosso do Sul'
    },
    {
        sigla: 'RS',
        nome: 'Rio Grande do Sul'
    },
    {
        sigla: 'SC',
        nome: 'Santa Catarina'
    },
    {
        sigla: 'PR',
        nome: 'Paraná'
    },
    {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    },
    {
        sigla: 'MG',
        nome: 'Minas Gerais'
    },
    {
        sigla: 'ES',
        nome: 'Espírito Santo'
    },
    {
        sigla: 'BA',
        nome: 'Bahia'
    },
    {
        sigla: 'CE',
        nome: 'Ceará'
    },
    {
        sigla: 'MA',
        nome: 'Maranhão'
    },
    {
        sigla: 'PI',
        nome: 'Piauí'
    },
    {
        sigla: 'AL',
        nome: 'Alagoas'
    },
    {
        sigla: 'SE',
        nome: 'Sergipe'
    },
    {
        sigla: 'PB',
        nome: 'Paraíba'
    },
    {
        sigla: 'PE',
        nome: 'Pernambuco'
    },
    {
        sigla: 'RN',
        nome: 'Rio Grande do Norte'
    }
        
];

//Retorna todos os estados pela sigla
const getListEstados = function(){
    let listaEstados = [];
    let erro = true;
    estados.forEach(item => {
        listaEstados.push(item.sigla);
        erro = false;
    });

    if(erro){
        return false;
    } else {
        return listaEstados;
    }
};

const getEstados = function(siglaEstado){
    let estado = {};
    let erro = true;
    let sigla = siglaEstado;

    if(sigla != undefined){
        if(sigla != '' && sigla.length == 2){
            estados.forEach(item => {
                //Localiza um item no array
                if(item.sigla.indexOf(sigla.toUpperCase()) == 0){
                    //Guardar sigla e nome do estado
                    estado.sigla = item.sigla;
                    estado.nome = item.nome;
                    erro = false;
                }
            })
        }
    }

    if(erro){
        return false;
    } else {
        return estado;
    }
};

//console.table(getListEstados());
//console.table(getEstados());

module.exports = {
    getListEstados, getEstados
}