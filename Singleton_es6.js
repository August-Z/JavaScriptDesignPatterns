//单例模式 es6 语法化。在JavaScript中，Singleton充当共享资源命名空间，全局命名空间中隔离出代码实现，从而为函数提供单一访问点。

class Singleton {

    constructor(options) {
        [this.name, this.age, this.sex] = [options.name, options.age, options.sex];
    }

    static getInstance(options = {name: "SingletonTester", age: 20, sex: "男"}) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(options);
        }
        return Singleton.instance;
    }

}

const SingletonTest = Singleton.getInstance({
    name: "August",
    age: 21,
    sex: "男"
});
console.log(SingletonTest); //输出 { name: 'August', age: 21, sex: '男' }

const SingletonTest_clone = Singleton.getInstance({
    name: "Allen",
    age: 19,
    sex: "女"
});
console.log(SingletonTest_clone);  //依然输出 { name: 'August', age: 21, sex: '男' } ！