//单例模式 es6 语法化。Singleton 作为类，当我们首次去实例化对象时，Singleton 会提供唯一的访问点。

class Singleton {

    constructor(options) {
        [this.name, this.age, this.sex] = [options.name, options.age, options.sex]; //es6 解构赋值
    }

    /**
     * Singleton 类的唯一实例化访问点
     * @param options  options 包含 Singleton 的配置信息，这里运用了 es6 默认值的特性
     * @returns {Singleton} 实例化对象
     */
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