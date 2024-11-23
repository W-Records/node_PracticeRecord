// 这里为 接口处理器，但并没有绑定URL

// 导入数据类型
import { Request, Response, NextFunction } from "express";

// 导入服务层代码
import {getMsg} from "./userModule.service";

export const Myindex = async (
    request: Request,
    response: Response,
    next: NextFunction
) =>{

    if( request.headers.authorization !== "secret" ){
        return next(new Error("Unauthorized"))
    }

    const MyData = await getMsg();
    response.send(MyData);

}