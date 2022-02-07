import app from './server';
const express = require('express');
const session = require('express-session');
// const MongoStore = require('connect-mongo');


app.use(express.json());
app.use(express.text());

// app.use(session({
//     store: MongoStore.create({mongoUrl: 'mongodb://localhost:8080/sesiones',ttl:600}),
//     secret:'asdfg',
//     resave:false,
//     saveUninitialized:false,
//     rolling:true,
//     cookie:{
//         maxAge:600000
//     }
// }))


// app.get('/',(req,res) => {
//   res.render();  
// })

app.get('/',(req,res) => {
    if(req.session.nombre){
        res.render()
    }else{
        res.redirect('/');
    }
})

app.post('/login',(req,res) => {
    const {nombre} = req.body;
    req.session.nombre = nombre,
    res.redirect('/');
})

const getSession = req => req.session.nombre ? req.session.nombre : "";

app.get('/logout',(req,res)=>{
    const {nombre} = getSession(req);
    if(nombre)
    req.session.destroy(err =>{
        if(!err) res.send('Error')
        else
        res.redirect('/');
    })
})


app.use(express.json())

let arr = []

app.use((req,res,next) => {
    if(arr.length)
    return next();
})


let count = 0;

app.get('/mem-count', (req, res) => {
    res.send({count:count++})
})

app.post('/login', (req, res) => {
    const {user,password} = req.body;
})

app.get("/", (req, res) => {
    res.send("Express-session server");
})

app.get('/my-session',(req, res)=>{
    const {nombre} = req.query;
    if(req.session.count){
        req.session.count++;
        res.send(`{nombre} el numero de visitas es ${req.session.count}`);
    }else{
        req.session.count = 1;
        req.session.mivariable = "test";
        req.session['mivariable2'] = 1234;
        res.send(`Welcome to my server ${nombre}`);
    }
});

app.get('/destroy',(req, res)=>{
    req.session.destroy((err)=>{
        if(!err) res.send("ok");
        else res.send({error: err});
    });
});

app.get('/info',(req, res)=>{
    console.log(req.session);
    res.json(req.session);
});

