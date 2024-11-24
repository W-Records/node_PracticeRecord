import {connection} from '../app/database/MySQL'
import { UserNoteModel } from './userModule.model';

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


// 插入数据
export const insertMsg = async (note: UserNoteModel) => {
    

    // 操作数据库
    // 注意这里的 set是node MySQL库独有的语法
    const statement = `
        INSERT INTO user_notes
        set ?
    `;

    const [MyData] = await connection.promise().query(statement, note);

    return MyData;
}