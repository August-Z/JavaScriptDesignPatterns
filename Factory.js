//工厂模式，可以提供一个通用的接口来创建对象，它并不显示的要求需要一个构造函数

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'red';
}

function Truck(options) {
    this.state = options.state || 'user';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
}

//定义工厂
function VehicleFactory() {
    VehicleFactory.prototype.vehicleClass = Car;
    VehicleFactory.prototype.createVehicle = function (options) {
        if (options.vehicleType === 'Car') {
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }
    }
}

let carFactory = new VehicleFactory();
let car = carFactory.createVehicle({
    vehicleType: 'war',
    color: 'black',
    doors: 4
});

console.log(car);
