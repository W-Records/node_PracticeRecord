// 这层的作用是 将URL请求转发到对应的处理器，并返回结果

import express from "express";

// 导入处理器
import * as userModuleController from "./userModule.controller"

// 导入中间件
import {reuqestURL} from "../app/app.middleware";

const router = express.Router();

// url打到这里
router.get("/getUserMsg", reuqestURL, userModuleController.Myindex);


// 给插入数据url绑定处理器
router.post("/saveUserNote", reuqestURL, userModuleController.saveMsg);


export default router;