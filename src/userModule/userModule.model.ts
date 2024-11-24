
// UserNoteModel { title: '标题，此时，此对象默认会有此属性', content: '内容啊!' }
// noteid?: number;
// 属性名称后面加? 表示此属性可有可无
// 默认情况下此对象 只有 title 和 content 属性，并且这2个属性是必须的
// 加了?号的属性，给就有，不给那么此对象就和没有这个属性一样
export class UserNoteModel {
    noteid?: number;  // 创建时，不给此属性的话，此对象就和没有noteid属性一样
    title: string = "标题，此时，此对象默认会有此属性";
    userno?: number;
    content: string = "内容啊!"; // 此对象一定有此属性
}