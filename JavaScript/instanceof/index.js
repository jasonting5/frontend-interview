// instanceof 用于判断对象的类型，其实现原理是通过判断对象的原型链中能否找到类型的prototype

function simulateInstanceof (left, right) {
  // 获得类型的原型
  let proto_type = right.prototype
  // 获得对象的原型
  left = left.__proto__
  // while (true) {
  //   if (left === null) {
  //     return false
  //   }
  //   if (proto_type === left) {
  //     return true
  //   }
  //   left = left.__proto__
  // }
  while (left) {
    if (proto_type === left) {
      return true
    }
    left = left.__proto__
  }
  return false
}


function Person () {
  this.name = '2020'
}

let boy = new Object()

let boyInstance = simulateInstanceof(boy, Person)
console.log('boyInstance', boyInstance)
