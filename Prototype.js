//原型模式

const myFriend = {
    name: "Allen",
    playGame() {
        console.log("First blood  ～～");
    },
    learnJavaScript() {
        console.log("让我们每周掌握一种设计模式！");
    }
};

const yourFriend = Object.create(myFriend);

console.log(yourFriend.name);   // Allen
yourFriend.playGame();  // 输出 First blood  ～～

//如果你的朋友 jay 现在想玩别的游戏，比如 LOL，我们可以修改一下
myFriend.name = "jay";
myFriend.playGame = game => console.log(myFriend.name + " 正在玩 " + game + " ！");

yourFriend.playGame("lol"); //输出 jay 正在玩 lol ！


