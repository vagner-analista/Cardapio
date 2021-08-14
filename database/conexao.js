const Sequelize = require('sequelize');
const conexao = new Sequelize('cardapio','vagneradm', 'P@ssw0rd', {
    host:'10.14.4.192',
    dialect:'mysql'
});

module.exports = conexao;