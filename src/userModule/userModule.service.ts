import {connection} from '../app/database/MySQL'

export const getMsg = async () =>{
    // 模拟的数据
    // const MyData = {
    //     name: '小米哈哈哈哈哈',
    //     age: 18
    // }

    // 操作数据库
    const statement = `
        SELECT 
        note.noteid, note.title, note.content, note.userno, u.id, u.uname, 
        JSON_OBJECT('id', u.id, 'name', u.uname) AS userMsg
        FROM user_notes note
        JOIN system_user u
        ON note.userno = u.id
    `;

    const [MyData] = await connection.promise().query(statement);

    console.log(MyData);

    return MyData;
}