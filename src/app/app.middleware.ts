// 中间件

import {Request, Response, NextFunction} from "express";


// 定义中间件
export const reuqestURL = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(req.url);
    next();
}