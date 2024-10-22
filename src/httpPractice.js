// 创建web服务器
const http = require("http");

const server = http.createServer((request,response) =>{
    // 解决响应中文乱码问题，设置响应头，指定字符编码为 UTF-8
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    response.write("web后端服务，返回的自定义信息");
    response.end();
})

server.listen(3000, () => {
    console.log("服务启动成功");
})
