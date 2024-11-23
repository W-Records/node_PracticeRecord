import dotenv from "dotenv";

// 作用是: 载入根目录的 .env 文件中的环境变量
dotenv.config();

// 拿取环境变量的值
export const { APP_PORT } = process.env;



// 拿取环境变量的值，MySQL的配置信息
export const {
    MYSQL_HOST,
    MYSQL_PORT  = '3306',
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env;