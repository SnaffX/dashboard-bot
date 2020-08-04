const router = require("express").Router();
router.get("/",function(req, res, next) {
    const configuracoes = require("../build/cache.js").configs
    res.render("index.ejs",{
        configuracoes
    })
});

module.exports = router;