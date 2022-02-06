document.addEventListener("DOMContentLoader", function () {

    const socket = io()
  
    const addMessage = () =>{
      let message = {
          user:document.querySelector('#username').value,
          text:document.querySelector('#text').value,
      };
      console.log("mensaje enviado");
      socket.emit('new-message',message)
      return false;
  }
  
  document.querySelector('#chat').addEventListener("submit",function(e){
      e.preventDefault();
      addMessage();
  })
  const render = (data)=> {
  
      let msjs = data.map(e=>
          (`<div>
          <em style="color:blue;font-weight:700;">${e.user}</em>:
          <strong style="font-family:italic;color:green;"> ${e.text}</strong>
          </div>
          `
          )).join(" ")
  
          document.querySelector('#messages').innerHTML = msjs;
  }
  
    socket.on('messages',(data)=>{
      render(data);
    })

})

