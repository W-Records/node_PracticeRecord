// 关于类和继承的演练




// 创建类
class Car{

    engine;
    color;

    drive(){
        console.log("汽车启动");
    }

    constructor(engine, color){
        this.engine = engine;
        this.color = color;
        console.log("初始化汽车");
    }

}

// 继承
// JavaScript引擎会自动为子类提供一个默认的构造函数。这个默认的构造函数会调用父类的构造函数。
class Bmw extends Car{
    name;
}

const MyCar = new Bmw("V8", "black");
MyCar.drive();
console.log(MyCar); // Bmw { engine: 'V8', color: 'black', name: undefined }