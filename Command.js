//Command 模式  
//主要思想：提供一种分离职责的手段，这些职责包括从执行命令的任意地址发布的命令以及将该职责转而委托给不同对象

(function () {

    let CarManager = {
        requestInfo: (model, id) => {
            return "The information for " + model + " with Id " + id;
        },
        buyCar: (model, id) => {
            return "You have successfully buy Item " + id + " a " + model;
        },
        arrangeView: (model, id) => {
            return "You have successfully booked a viewing of " + model + " ( " + id + " )";
        }
    };

    CarManager.execute = function (name) {
        return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
    };

    const test1 = CarManager.execute('requestInfo', 'Audi', 'zd911');
    const test2 = CarManager.execute('buyCar', 'Audi', 'zd911');
    const test3 = CarManager.execute('arrangeView', 'Audi', 'zd911');

    console.log(test1);
    console.log(test2);
    console.log(test3);

})();