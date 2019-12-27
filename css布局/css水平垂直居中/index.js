// 1.行内/行内块级/图片
#parent{
  height: 150px;
  line-height: 150px;  /*行高的值与height相等*/
  text-align: center;
  font-size: 0;   /*消除幽灵空白节点的bug*/
}
#son{
  /*display: inline-block;*/  /*如果是块级元素需改为行内或行内块级才生效*/
  vertical-align: middle;
}

// 2.table-cell
#parent{
  height: 150px;
  width: 200px;
  display: table-cell;
  vertical-align: middle;
  /*text-align: center;*/   /*如果是行内元素就添加这个*/
}
#son{
  /*margin: 0 auto;*/    /*如果是块级元素就添加这个*/
  width: 100px;
  height: 50px;
}

// 3.绝对定位
#parent{
  position: relative;
}
#son{
  position: absolute;
  top: 50%;
  left: 50%;
  /*定宽高时等同于margin-left:负自身宽度一半;margin-top:负自身高度一半;*/
  transform: translate(-50%,-50%);
}

// 4.绝对居中
#parent{
  position: relative;
}
#son{
  position: absolute;
  margin: auto;
  width: 100px;
  height: 50px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

// 5.flex
#parent{
  display: flex;
}
#son{
  margin: auto;
}
// 或者
#parent{
  display: flex;
  justify-content: center;
  align-items: center;
}
// 或者
#parent{
  display: flex;
  justify-content: center;
}
#son{
  align-self: center;
}

// 6.视窗居中
#son{
	/*0如果去掉，则会多出滚动条并且上下都是50vh的margin。如果去掉就给body加上overflow:hidden;*/
    margin: 50vh auto 0;
    transform: translateY(-50%);
}

// 总结
// 1.一般情况下，水平垂直居中，我们最常用的就是绝对定位加负边距了，缺点就是需要知道宽高，使用transform倒是可以不需要，但是兼容性不好（ie9+）；
// 2.其次就是绝对居中，绝对定位设置top、left、right、bottom为0，然后margin:auto; 让浏览器自动平分边距以达到水平垂直居中的目的；
// 3.如果是行内/行内块级/图片这些内容，可以优先考虑line-height和vertical-align 结合使用，不要忘了还有text-align ，这个方法代码其实不多，就是理解原理有点困难，想要熟练应对各种情况还需好好研究；
// 4.移动端兼容性允许的情况下能用flex就用flex。

