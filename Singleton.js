//单例模式。在JavaScript中，Singleton充当共享资源命名空间，全局命名空间中隔离出代码实现，从而为函数提供单一访问点。

const SingletonTester = (function () {

    function Singleton(options) {
        //options 包含 Singleton 的配置信息
        options = options || {};
        this.name = options.name || "SingletonTester";
        this.age = options.age || 20;
        this.sex = options.sex || "男";
    }

    let instance;   //函数的唯一访问点！！！

    return {
        name: "SingletonTester",
        getInstance(options = {}) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };

})();

const SingletonTest = SingletonTester.getInstance({
    name: "August",
    age: 21,
    sex: "男"
});
console.log(SingletonTest); //输出 { name: 'August', age: 21, sex: '男' }

const SingletonTest_clone = SingletonTester.getInstance({
    name: "Allen",
    age: 19,
    sex: "女"
});
console.log(SingletonTest_clone);  //依然输出 { name: 'August', age: 21, sex: '男' } ！