// Module 模式的实现，定义的变量会返回一个公用 API 的对象，从而调用你需要的方法并保护了私有属性的安全性

let testModule = (function () {
    let count = 0;//私有变量

    return {
        incrementCounter: function () {
            return ++count;
        },
        reset: function () {
            console.log("counter value prior to reset:" + count)
            count = 0;
        }
    }
})();

testModule.incrementCounter();
testModule.reset();


// Module 实现购物车

let basketModule = (function () {

    //私有属性、函数
    let basket = []; //存放物品的购物车
    function doSomethingPrivate(obj) {
        //TODO 需要执行的私有方法
        console.log('购物车加入了' + obj.item + ",价格是" + obj.price + "元");
    }

    //返回一个公有的对象
    return {
        //添加 item 到购物车
        addItem: function (item) {
            basket.push(item); //添加至购物车
            doSomethingPrivate(item); //在函数中才能调用的私有方法
        },
        getItemCount: function () {
            return basket.length;
        },
        getTotalMoney: function () {
            let total = 0;
            for (let i = 0, itemCount = this.getItemCount(); i < itemCount; i++) {
                total += basket[i].price;
            }
            return total;
        }
    }
})();

basketModule.addItem({
    item: 'tomato',
    price: 2.3
});
basketModule.addItem({
    item: 'egg',
    price: 1.0
});

let totalMoney = basketModule.getTotalMoney();
console.log(totalMoney);
console.log(basketModule);
