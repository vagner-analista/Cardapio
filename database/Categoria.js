//CRIANDO TABELA CATEGORIA
const Sequelize = require ('sequelize');
const conexao = require('./conexao');

const tbcategoria = conexao.define('tb_categoria',{
    nomeCategoria:{
        type: Sequelize.STRING,
        allowNull : false
    },
    descricaoCategoria:{
        type: Sequelize.TEXT,
        allowNull:false
    }
});

tbcategoria.sync({
    force:false}).then(()=>{
    console.log('Tabela criada com sucesso');
}); //Após a criação da tabela, mudar para false - Este parâmetro serve para ficar excluindo a tablea e criando novamente

module.exports = tbcategoria;