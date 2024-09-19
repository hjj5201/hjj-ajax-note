const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send('heelo')
});
app.listen(8000,()=>{
    console.log("8000端口已启动");
})