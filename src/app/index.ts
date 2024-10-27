// 这里为 应用程序的 配置地方



import express from "express";

import userModuleRouter from "../userModule/userModule.router"

// 导入错误处理中间件
import {defaultErrorHandler} from "./app.middleware";

const app = express();

app.use(express.json());

// 配置路由
app.use(userModuleRouter)

// 配置全局的 错误处理中间件
app.use(defaultErrorHandler)

// 默认导出
export default app;