const { cache } = require("ejs");

function configs(configs){

const configuracoes = require("./cache").configs
configuracoes.push(configs)
}

module.exports = {
    configs
};