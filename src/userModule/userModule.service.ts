import {connection} from '../app/database/MySQL'

export const getMsg = async () =>{
    // 模拟的数据
    // const MyData = {
    //     name: '小米哈哈哈哈哈',
    //     age: 18
    // }

    // 操作数据库
    const statement = `select * from user_notes`;

    const [MyData] = await connection.promise().query(statement);


    return MyData;
}