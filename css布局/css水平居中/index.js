// 水平居中
// 1.文本/行内元素/行内块级元素
// 原理：text-align只控制行内内容(文字、行内元素、行内块级元素)如何相对他的块父元素对齐
#parent{
  text-align: center;
}

// 2.单个块级元素
#son{
  width: 100px; /*必须定宽*/
  margin: 0 auto;
}

// 3.多个块级元素
// 原理：text-align只控制行内内容(文字、行内元素、行内块级元素)如何相对他的块父元素对齐
#parent{
  text-align: center;
}
.son{
  display: inline-block; /*改为行内或者行内块级形式，以达到text-align对其生效*/
}

// 4.使用绝对定位实现
// 原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到水平居中的目的
#parent{
  height: 200px;
  width: 200px;  /*定宽*/
  position: relative;  /*父相*/
  background-color: #f00;
}
#son{
  position: absolute;  /*子绝*/
  left: 50%;  /*父元素宽度一半,这里等同于left:100px*/
  transform: translateX(-50%);  /*自身宽度一半,等同于margin-left: -50px;*/
  width: 100px;  /*定宽*/
  height: 100px;
  background-color: #00ff00;
}

// 5.任意个元素(flex)
#parent{
  display: flex;
  justify-content: center;
}

// 小结：
// 1).优先考虑自带的居中效果的元素，比如 text-align:center，但是这个只对行内内容有效，所以使用它之前必须将子元素设置为 display: inline; 或者 display: inline-block;
// 2).其次就是考虑能不能用margin: 0 auto,因为这都是一两句代码能搞定的事，实在不行就是用绝对定位去实现了;
// 3).移动端能用flex就用flex，简单方便，灵活并且功能强大，无愧为网页布局的一大利器！
