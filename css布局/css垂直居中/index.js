// 垂直居中

// 1.单行文本/行内元素/行内块级元素
#parent{
  height: 150px;
  line-height: 150px;  /*与height等值*/
}

// 2.多行文本/行内元素/行内块级元素
#parent{  /*或用span把所有文字包裹起来，设置display：inline-block换成图片的方式解决*/
  height: 150px;
  line-height: 30px;  /*元素在页面呈现为5行,则line-height的值为height/5*/
}

// 3.图片
#parent{
  height: 150px;
  line-height: 150px;
  font-size: 0; // 必须添加font-size: 0; 才可以实现图片的完全垂直居中
}
img#son{vertical-align: middle;} /*默认是基线对齐，改为middle*/

// 4.单个块级元素
#parent{
  display: table-cell;
  vertical-align: middle;
}

// 5.使用绝对定位实现
#parent{
  height: 150px;
  position: relative;  /*父相*/
}
#son{
  position: absolute;  /*子绝*/
  top: 50%;  /*父元素高度一半,这里等同于top:75px;*/
  transform: translateY(-50%);  /*自身高度一半,这里等同于margin-top:-25px;*/
  height: 50px;
}
// 或者
#parent{
  position: relative;
}
#son{
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: 50px;
}

// 6.使用flex
#parent{
  display: flex;
  align-items: center;
}
// 或者
#parent{
  display: flex;
}
#son{
  align-self: center;
}

// 小结
// 1.对于垂直居中，最先想到的应该就是 line-height 了，但是这个只能用于行内内容；
// 2.其次就是考虑能不能用vertical-align: middle;
// 3.然后便是绝对定位，虽然代码多了点，但是胜在适用于不同情况；
// 4.移动端兼容性允许的情况下能用flex就用flex
