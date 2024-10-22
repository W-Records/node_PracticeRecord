// express框架的使用，搭建web服务器
const express = require("express");
const app = express();
const port = 3000;

// 前端post请求携带请求体JSON格式的参数，需要使用express.json()中间件转换一下
// 不使用这个插件request.body拿到的数据就是为undefined
// 使用这个插件将前端数据转换成JSON对象
app.use(express.json());

app.listen(port, () => {
    console.log(`HHH_Server is running on ${port}`);
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

    const NewGoods = goods.filter(item => item.id == goodsID);

    response.send(NewGoods[0]);

})


// 获取json数据
app.post("/saveGoods", (request, response) => {
    console.log(request.body);
    response.send({
        "msg" : request.body
    });
})