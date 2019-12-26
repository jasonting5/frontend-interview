// 垂直居中

// 1.单行文本/行内元素/行内块级元素
#parent{
  height: 150px;
  line-height: 150px;  /*与height等值*/
}

// 2.多行文本/行内元素/行内块级元素
#parent{  /*或者用span把所有文字包裹起来，设置display：inline-block转换成图片的方式解决*/
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
