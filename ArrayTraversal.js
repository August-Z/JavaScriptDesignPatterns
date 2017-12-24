/**
 * for 语句
 * 这是标准for循环的写法也是最传统的语句，字符串也支持，
 * 定义一个变量i作为索引，以跟踪访问的位置，len是数组的长度，条件就是i不能超过len。
 */
(function () {

    const arr = [1, 2, 4, 8];

    for (let i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i]);
    }

})();


/**
 * forEach 语句
 * 对数组的每个元素执行一次提供的 callback 函数，forEach 是一个数组方法，
 * 可以用来把一个函数套用在一个数组中的每一个元素上，forEach 为每个数组元素执行 callback
 * 函数只可用于数组，遍历一个数组让数组每个元素做一件事情，那些已删除（使用 delete 方法等）
 * 或者未初始化的选项将被跳过（但不包括那些值为 undefined 的项）（例如在稀疏数组上）；
 * 不想 map() 或者 reduce()，它总是返回 undefined 值，而且不可链式调用。
 */
(function () {

    const arr = [1, 3, 5, 7];

    arr.forEach((element, key) => {
        console.log(element, key);
    });

})();


/**
 * for-in 语句
 * 一般使用 for-in 来遍历对象的属性，不过属性需要 enumerable，才能被读取到，
 * for-in 循环只遍历可枚举属性。一般常用来遍历对象，包括非整数类型的名称和继承的那些原型链
 * 上面的属性也能被遍历。像 Array 和 Object 使用内置构造函数所创建的对象都会继续自己
 * Object.prototype 和  String.prototype 的不可枚举属性就不能被遍历了。
 */
(function () {

    const obj = {
        name: 'August',
        age: 21,
        hobby: 'JavaScript'
    };

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            console.log(element);
        }
    }

})();


/**
 * for-of 语句
 * 在可迭代对象（包括 Array、Map、Set、String、TypedArray、arguments 对象等等）
 * 上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。只要是一个 iterable 对象
 * 就可以通过 for-of 来迭代
 */
(function () {

    const arr = [{name: 'August'}, 5, 'test'];

    for (const iterator of arr) {
        console.log(iterator);
    }

})();


// for-of 与 for-in 区别
// for-in 语句以原始插入顺序迭代对象的可枚举属性。for-in 会把继承链的对象属性都遍历一次，所以会更花时间
// for-of 语句只遍历可迭代对象的数据


/**
 * Other循环方法
 */

/**
 * map 方法（不改变原数组）
 * map 方法会给原数组中的每一个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括
 * undefined）组合起来形成一个新数组。callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用
 * delete 删除的索引则不会被调用。让数组通过某种计算产生一个新数组，映射成一个新数组
 */
(function () {

    const arr = [1, 2, 3, 4, 5];
    const bigArr = arr.map((value, index, array) => value * 10);

    console.log(bigArr);    //形成的新数组
    console.log(arr);       //原本的 arr 并没有被改变

})();


/**
 * reduce 方法
 * 让数组中的前项和后项做某种计算，并累积最终值
 */
(function () {

    const wallets = [3, 4, 5, 6, 7];

    const totalMoney = wallets.reduce((countedMoney, wallet) => {
        return countedMoney += wallet;  //最常见的就是叠加计算
    }, 0);  //这里的 0 是 reduce() 的第二个参数，代表了计算的初始值

    console.log(totalMoney);

})();


/**
 * filter 方法（不改变原数组）
 * 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或是等价
 * 于 true 的值的元素创建一个新的数组。callback 只会在已经赋值的索引上被调用，对于那些已经
 * 被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含
 * 在新数组中。筛选过滤出来的数组中符合条件的项，组合成新数组
 */
(function () {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const eventNumbers = arr.filter((value, index, array) => {
        return value % 2 === 0;
    });

    console.log(eventNumbers);

})();


/**
 * every 方法（一假则假，全真则真，类似 && 运算符）
 * 为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可
 * 转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立刻返回 false。
 * 否则，callback 为每一个元素返回 true，every 就会返回 true。检测数组中的每一项是否符合条件，
 * 如果每一项都符合条件，就会返回 true，否则返回 false，有点像遍历数组且操作 callback。只会为
 * 那些已经被赋值的索引调用。不会为那些被删除从来没被赋值的索引调用
 */
(function () {

    const arr = [1, 2, 3, 4, 5];

    const result = arr.every((value, index, array) => {
        return value > 1;
    });
    console.log(result);    //返回 false

    const _result = arr.every(value => {
        return value > 0;
    });
    console.log(_result);   //返回 true

})();


/**
 * some 方法 （一真则真，全假则假，类似 || 运算符）
 * 为数组中的每一个元素执行一次 callback 函数，直到找到一个使用 callback 返回一个 true
 * （即可转换为布尔值 true 的值）。如果找到一个这样的值，some 将会立刻返回 true。否则，some
 * 将返回 false。callback 只会在那些"有值"的索引上被调用，不会在那些被删除或从来未被赋值的索引
 * 上调用。检查数组中是否有某些项符合条件，如果有一项就返回 true，否则返回 false，有点像遍历数组或者操作
 */
(function () {

    const arr = [1, 3, 5, 7, 9, 10];

    const result = arr.some(value => {
        return value % 2 === 0;
    });

    console.log(result);    //因为其中 10 为偶数，所以返回 true

})();
