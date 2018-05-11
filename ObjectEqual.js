// 通过对 js 对象进行各方面的比较来判断两个对象是否相等

const cmp = (a, b) => {
  // 如果两者均为 null 或 undefined，或者作为 Object 的指针相等，直接返回
  if (a === b) {
    return true
  }

  // 比较两者相等，首先判断是否为 Object
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false
  }

  // 比较构造函数，他们必须有相同的原型链
  if (a.constructor !== b.constructor) {
    return false
  }

  for (const item in a) {
    if (a.hasOwnProperty(item)) {
      // 如果 b 没有这一枚举属性
      if (!b.hasOwnProperty(item)) {
        return false
      }

      // 如果该属性相等，跳过
      if (a[item] === b[item]) {
        continue
      }

      // 如果属性为基础类型，那么必须相等
      if (typeof (a[item]) !== "object") {
        return false
      }

      // 复合类型属性，递归测试
      // if (!Object.equals(a[item], b[item])) {
      //   return false
      // }
    }
  }

  for (const item in b) {
    if (b.hasOwnProperty(item) && !a.hasOwnProperty(item)) {
      return false
    }
  }

  // 均通过返回真
  return true
}


const August = {
  name: 'August-Z',
  age: 22,
  doSomething: [1, 2, 3]
}

const Joyce = {
  name: 'Joyce-C',
  age: 25,
  doSomething: [1, 2, 3]
}

const AugustClone = {
  name: 'August-Z',
  age: 22,
  doSomething: [1, 2, 3]
}

console.log(cmp(August, Joyce))
console.log(cmp(August, AugustClone))
