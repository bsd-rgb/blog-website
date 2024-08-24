import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//code stuff here
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res)=>{
    res.render("index.ejs", {posts: posts})

});

app.post("/create", (req, res)=>{
    const newPost ={
        title: req.body.title,
        body: req.body.body
    };
    var isSubmited = true;
    console.log(`Test post body: ${req.body.body}`);
    posts.push(newPost);
    res.render("index.ejs",{create: isSubmited, posts: posts} )
    console.log(posts);
    //res.redirect("/");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});