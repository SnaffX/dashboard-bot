const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");

const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const http = require("http").createServer(app);
const path = require("path")
app.set('views', path.join(__dirname, './views'));
app.use(flash());
app.use(session({ secret: 'keyboard cat', cookie: { }, resave: true,saveUninitialized: true,}))
app.use(express.static('./src/public'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", require("./routes/routes"));

app.listen(3000, () =>
  console.log("Rodando com sucesso na porta " + 80)
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

module.exports = {
  Configuracoes: require("./build/configs").configs
}
