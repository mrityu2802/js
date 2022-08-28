
const http=require('http')
const todo=require('./todo')
const PORT=process.env.PORT || 4000
const server=http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plain"})
    response.end("hello")
})

server.listen(PORT,()=>{console.log("server is ready and listening at port",PORT)})
server.on('error',(error)=>{
    if(error.code==='EADRINUSE'){
        console.log('Port already in use')
    }
})
