//原型模式

let myFriend = {
    name: "Allen",
    playDota() {
        console.log("First blood  ～～");
    },
    learnJavaScript(){
        console.log("让我们每周掌握一种设计模式！");
    }
};

const yourFriend = Object.create(myFriend);

console.log(yourFriend.name);   // Allen

yourFriend.playDota();  // 输出 First blood  ～～
