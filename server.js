const express = require('express');
const app = express();
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');  
    response.send('hello get')
});
app.post('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');  
    response.send('hello post')
});
// 任何请求都可以接受
app.all('/json-server',(request,response)=>{
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');  
    response.setHeader('Access-control-Allow-Headers','*');
    const data = {
        name: 'atguigu',
        age : '18'
    }
    // 字符串转换成json
    let str = JSON.stringify(data);
    // 穿进去一个json对象
    response.send(str)
    // console.log(str);
    
});
// 延时响应
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');  
    setTimeout(() => {
        //设置响应体
        response.send('延时响应')
    },3000)
});
// axios 服雾
app.all('/axios-server',(request,response)=>{
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');  
    response.setHeader('Access-control-Allow-Headers','*');
    const data = {
        name: 'atguigu',
        age : '18'
    }
    // 字符串转换成json
    let str = JSON.stringify(data);
    // 穿进去一个json对象
    response.send(str)
    // console.log(str);
    
});
// fetch服雾
app.all('/fetch-server',(request,response)=>{
    // 设置响应头 设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');  
    response.setHeader('Access-control-Allow-Headers','*');
    const data = {
        name: 'atguigu',
    }
    // 字符串转换成json
    let str = JSON.stringify(data);
    // 穿进去一个json对象
    response.send(str)
    // console.log(str);
    
});
app.listen(8000,()=>{
    console.log("8000端口已启动");
})
