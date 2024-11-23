// 这里文件夹的名字应该为main.ts,
// 因为这里是程序的入口，服务的监听在这里
// "start:dev": "tsc-watch --onSuccess \"node dist/expressPractice.js\" "
// 服务node 执行的程序也是这里






// express框架的使用，搭建web服务器
// const express = require("express");
// import express from "express";
// 使用别的模块导出的内容
import app from "./app";

// 拿取配置信息
import { APP_PORT } from "./app/app.config"

import { Request, Response } from "express";


// 导入数据库的连接测试是否连接服务成功
import {connection} from "./app/database/MySQL";


// const app = express();
const port = 3000;

// 前端post请求携带请求体JSON格式的参数，需要使用express.json()中间件转换一下
// 不使用这个插件request.body拿到的数据就是为undefined
// 使用这个插件将前端数据转换成JSON对象
// app.use(express.json());

app.listen(APP_PORT, () => {
    console.log(`HHH_Server is running on ${APP_PORT}---开启实时编译3`);
})



// 测试数据库服务的连接
connection.connect(err => {
    if (err) {
        console.log("数据库连接 失败no", err);
        return;
    }
    console.log("数据库连接 成功yes");
})


const goods = [
    {
        id: 1,
        name: "Apple",
        price: 1000
    },
    {
        id: 2,
        name: "Banana",
        price: 2000
    },
    {
        id: 3,
        name: "Cherry",
        price: 3000
    }
]


app.get("/queryGoodsById/:goodsID", (request, response) => {
    // 获取参数id
    const { goodsID } = request.params;

    const NewGoods = goods.filter(item => item.id == parseInt(goodsID,10));

    response.send(NewGoods[0]);

})


// 获取json数据
app.post("/saveGoods", (request: Request, response: Response) => {
    console.log(request.body);
    // 属性名还必须是小写，不同字母格式为：token-h
    console.log(request.headers["tokenh"]);

    // 设置响应头
    response.set("my-set-header","i set header HHHHH");


    // 设置响应状态码,201表示成功创建新内容
    response.status(201);

    response.send({
        "msg" : request.body
    });
})