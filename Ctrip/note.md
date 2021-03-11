移动端
**  浏览器
**  手机屏幕
 px
**  移动端测试

**  视口(viewport)
浏览器显示页面内容的屏幕区域
1 布局视口 - layout viewport
  ios/andriod  基本上把这个布局视口分辨率设置980px
2 视觉视口 - visual viewport
  用户看到的网站区域
3 理想视口 - ideal viewport
  布局视口的宽度应该与理想视口的宽度一致

一般在移动开发中，会将布局视口设置为视觉视口

**  相关技术
1 考虑webkit兼容问题 浏览器的私有前缀添加webkit即可
  H5、CSS3放心用
2  移动端css初始化
   normalize.cs
   网站：http://necolas.github.io/normalize.css/
3 常用布局
  单独移动站点
  百分比布局(流式布局)
  flex布局 - 用的多，也推荐使用
     * 布局简单 移动端使用广泛
     * PC端浏览器支持不好，<=IE11支持，部分不支持，一般PC段还是用传统布局
     * PC端不考虑兼容或者移动端采用flex
  rem+less+媒体查询
  混合布局
  响应式
     媒体查询
     bootstrap

--------------------------------
flex布局
  给父盒子添加flex，控制子元素的位置和排列方式

  父项常用属性
  flex-direction 设置主轴的方向，默认主轴方向水平向右，侧轴垂直向下
  row - 水平向右(默认)  row-reverse - 水平向左  
  column - 竖直向下  column-reverse - 竖直向上
  子元素按照主轴方向排列

  justify-content  设置主轴上的子元素排列
  flex-start - 靠近主轴开始(默认)  flex-end - 靠近主轴末尾
  center - 主轴中间  space-around - 平分主轴空间  space-between - 两边对齐

  flex-wrap  flex布局中，默认子元素不换行，假如父元素空间不够，子元素会缩小
  nowrap - 不换行(默认)  wrap - 换行

  align-item  设置侧轴上子元素的排列方式(单行，4个属性)
  center - 中间对齐  flex-start - 上对齐  flex-end - 下对齐
  stretch - 不给子元素设置高度时，子元素会拉伸

  align-content  设置子元素在侧轴上的排列方式(多行，6个属性)
  center - 中间对齐  flex-start - 上对齐  flex-end - 下对齐
  stretch - 不给子元素设置高度时，子元素会拉伸
  space-around - 平分侧轴空间  space-between - 两边对齐

  flex-flow  复合属性 是flex-direction和flex-wrap的复合属性


  子项常用属性
  flex  子项目占的份数，定义在子元素上，表示子项目分配父亲的剩余空间(例：flex:1)
  align-self: flex-start/flex-end/center
  order  定义子项目的排列方式，数值越小，排列越靠前

  max-width - 最大宽度
  min-eidth - 最小宽度

  物理像素点 分辨率
  PC  1px = 1个物理像素点
  移动端  css 1px = 2个物理像素点(iphne8)