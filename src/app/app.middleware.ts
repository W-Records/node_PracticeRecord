// 存放 中间件

import {Request, Response, NextFunction} from "express";


// 定义中间件
export const reuqestURL = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(req.url);
    // 调用下一个中间件或路由处理函数的函数。如果不调用 `next()`，请求会停止在这里。
    next();
}


// 默认异常处理器
// 错误处理中间件
export const defaultErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode: number, message: string;

    // 处理异常
    switch(err.message){
        default: 
            statusCode = 500;
            message = ` 服务器错误，被错误处理中间件捕获,默认处理: ${err.message} `;
            break;
    }

    res.status(statusCode).send({message});
}