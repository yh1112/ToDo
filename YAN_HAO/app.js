const express = require("express");
const app = express();
const router = require("./router/router.js");
const cookie = require("cookie-parser");
const session = require("express-session");

app.set("view engine","ejs");
app.use(cookie());
app.use(session({ secret: '12345', cookie: { maxAge: 1000*60*30 }}));

app.use(express.static("./public"));

app.get("/login",router.Get_login);
app.post("/login",router.Post_login);

app.get("/",router.Get_index);
app.get("/index",router.Get_index);

app.post("/addThing",router.Post_addThing);
app.post("/addList",router.Post_addList);

app.get("/delete",router.Get_delete);
app.get("/remove",router.Get_remove);

app.post("/search",router.Post_search);

app.get("/deleteList",router.Get_deleteList);

app.get("/logout",router.Get_logout);

app.use((request,response,next)=>{
	response.render("404");
});

app.listen(3000);
console.log("服务器已经启动,请在浏览器输入 ‘127.0.0.1:3000’或‘localhost:3000’ 查看");
