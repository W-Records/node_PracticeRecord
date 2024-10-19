// 基础演练





// 字符模板
const name19 = "PJ";
const conformity = `帅气的${name19}`; 
console.log(conformity);


// 箭头函数
const funName01 = (arg) => {
    return `你好${arg}`;
}
console.log(funName01("PJ"));
// 箭头函数简写
const funName02 = arg => `你好${arg}`;
console.log(funName01("PJ"));


// 定义对象
const book = {
    title: "当下的力量",
    author: "PJ",
    say(){
        return `《${this.title}》`;
    }
};
console.log(book.say());


//解构对象
console.log("结构对象用{}");
const {title, author, say} = book;
console.log(title);
console.log(author);
// 解构数组
console.log("解构数组用[]");
const fruits = ["apple", { name: "banana" , price: 3.12}, "orange"];
const [a1,a2,a3] = fruits;
console.log(a1);
console.log(a2);
console.log(a3);


// 展开对象
console.log("展开对象，就是把对象里面的东西拿出来");
const msj = {
    title: "当下的力量",
    price: 96
}
const authorMsj = {
    name: "Tom",
    age: 18
}
const conformityMSJ01 = {
    ...msj,
    ...authorMsj
}
console.log(conformityMSJ01);
const conformityMSJ02 = {
    ...msj,
    authorMsj
}
console.log(conformityMSJ02);

// 展开数组
console.log("展开数组，就是把数组里面的东西拿出来");
const arr01 = ["Tom",{age: 19},3.14926];
const arr02 = [78,9,6];
const arrConformity = [...arr01, ...arr02]
console.log(arrConformity);



