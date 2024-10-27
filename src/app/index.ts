// 这里为 应用程序的 配置地方



import express from "express";

import userModuleRouter from "../userModule/userModule.router"

const app = express();

app.use(express.json());

// 配置路由
app.use(userModuleRouter)

// 默认导出
export default app;