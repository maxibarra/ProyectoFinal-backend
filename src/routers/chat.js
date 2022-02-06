import express from 'express';

import app from '../server'

const mensajes= [
    { user:'estapagina@gmail.com',
    text:'Hola'
}
]


app.get('/',(req,res)=>{

    res.send('productos.html');
})


app.get('/mensajes',(req,res)=>{
    res.json(mensajes);
})


io.on('connection',(socket)=>{

    console.log("cliente conectado:" + socket.id);
        socket.emit('message',mensajes)

        socket.on('hello',(data)=>{
            console.log(data);
        })

        socket.on('keyup',(data)=>{
            console.log(data);
                io.emit('user_keyup',{...data,id:socket.id})
            mensajes.push({message:data.value});
        })

        socket.on('message',(data)=>{

        })

        socket.on('new-message',(data)=>{
            mensajes.push(data)
            io.emit("messages",mensajes)
        })
})
