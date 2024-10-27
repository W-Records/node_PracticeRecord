// 这里为 接口处理器，但并没有绑定URL

// 导入数据类型
import { Request, Response, NextFunction } from "express";

// 导入服务层代码
import {getMsg} from "./userModule.service";

export const Myindex = (
    request: Request,
    response: Response,
    next: NextFunction
) =>{
    const MyData = getMsg();
    response.send(MyData);

}