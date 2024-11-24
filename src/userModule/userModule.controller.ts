// 这里为 接口处理器，但并没有绑定URL

// 导入数据类型
import { Request, Response, NextFunction } from "express";

// 导入服务层代码
import {getMsg, insertMsg} from "./userModule.service";

export const Myindex = async (
    request: Request,
    response: Response,
    next: NextFunction
) =>{

    if( request.headers.authorization !== "secret" ){
        return next(new Error("Unauthorized"))
    }

    // 出问题就交给全局的异常处理器
    try{
        const MyData = await getMsg();
        response.send(MyData);
    }catch(error){
        // 错误处理中间件会在某个中间件或路由处理函数调用 `next(err)` 时被调用 或者 抛出错误。
        next(error); // 将错误传递给错误处理中间件
    }

}



// 插入数据 处理器
export const saveMsg = async (
    request: Request,
    response: Response,
    next: NextFunction
) =>{
    // 获取参数
    const {title, content, userno} = request.body;

    try {
        // 插入数据
        const result = await insertMsg({title, content, userno});
        // 返回结果
        response.send(result);
    } catch (error) {
        // throw new Error('看看throw走不走全局异常处理器'); // 不走全局异常
        next(error);
    }

}