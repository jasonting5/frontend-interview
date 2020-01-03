// new
// 1.新生成一个对象
// 2.链接到原型
// 3.绑定this
// 4.返回新对象

// 模拟new方法
function simulationNew () {
  // 创建一个新对象
  let obj = new Object()
  // 获取构造函数
  let Con = [].shift.call(arguments)
  // 连接到构造函数的原型
  obj.__proto__ = Con.prototype
  // 绑定this, 调用构造函数
  // Con.apply(obj, arguments)
  // 构造函数返回一个对象的情况
  let result = Con.apply(obj, arguments)

  // 返回新对象(确保返回的是一个对象)
  return typeof result === 'object' ? result : obj
}

