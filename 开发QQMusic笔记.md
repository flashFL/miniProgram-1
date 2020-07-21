1.原QQ音乐TabBar为左图右字，小程序默认样式为上图下字，此处需要自定义TabBar，待学习相关知识后回头完成。

2.小程序的单位rpx,可根据屏幕宽度进行自适应，这个单位在iPhone6上刚好是px的一半，如100rpx=50px!

3.使用"@import 'path'; "来在一个wxss文件中导入另一个wxss文件

4.mustache使用三目运算：{{age >= 18 ? "成年人" : "未成年人"}}

5.wx:if可以决定元素显示或隐藏，如<view wx:if="{{true}}">fafa</view>
hidden:将一个组件隐藏起来时，wxml该组件依然存在(display:none)
wx:if :将一个组件隐藏起来时，wxml该组件根本不存在(未创建)
如果显示和隐藏切换的频率非常高，建议使用hidden，反之使用wx:if--提高性能

6.block标签，不是一个组件，仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性

7.item/index名称，wx:for-item = "fafa",在多层遍历时，解决名称重复的问题

8.在使用wx:for时官方建议添加wx:key属性提高性能，此时key可以给遍历的每个节点做一个唯一标识，在数据变化时可以根据这个唯一标识进行diff算法，以此提高更新效率。wx:key = "*this", 这里的*this代表在for循环中的item本身

9.小程序wxml导入文件
import: <import src="path"/>,主要导入template，注意wxml中不能递归导入，也就是导入A,但不会导入A中的B
include: <include src="path" />,该方法可以将除了template和wxs外的整个代码导入，相当于是拷贝到include位置。可以递归导入。

10.自定义组件的标签名只能包含小写字母、中划线、下划线。不能以wx-为前缀，否则会报错。组件内不能使用ID选择器，属性选择器，标签选择器。

11.自定义组件和页面之间的样式可以相互影响，需要在组件的js文件中配置options属性，属性值为isolated/apply-shared/shared
   * isolated 不影响
   * apply—shared 页面样式影响组件样式
   * shared 相互影响

12.页面中获取组件对象
<searchBar class="searchBar" id="searchBar"/>
const my-searchBar = this.selectComponent("#searchBar")
或 const my-searchBar = this.selectComponent(".searchBar")
my-searchBar.method()  //调用组件内方法

13.多个插槽的使用注意事项：
给每一个插槽起一个名字：name属性  定义时<slot name="test"/>
必须在component对象中添加一个选项：options -> multipleSlots: true
使用时<slider slot="test"/>

14.component构造器
<!-- 让使用者可以给组件传入数据 -->
*properties: {
   title: {
      type: String,
      value: init
   }
}
<!-- 定义内部初始化数据 -->
*data: {
   currentIndex: 0,
   counter: 0
}
<!-- 定义组件内部函数 -->
*methods: {
   itemClick(){
      console.log("click")
   }
}
<!-- 定义组件的配置选项 -->
options: {
   styleIsolation: "isolated",
   multipleSlots: true
}
<!-- 外界给组件传入额外的样式 -->
externalClass: [],
<!-- 可以监听属性(properties/data)的改变 -->
observers: {
   counter: function(newValue){
      console.log(newValue)
   }
}
<!-- 组件中监听生命周期函数 -->
监听所在页面的生命周期
pageLifetimes: {
   show(){

   },
   hide(){

   },
   resize(){
      console.log("监听页面尺寸改变")
   }
}
监听组件自己的生命周期
lifetimes: {
   created(){

   },
   attached(){

   },
   ready(){

   },
   moved(){

   },
   detached(){

   }
}

15.wxs(weixin script),与js基本一致
定义：<wxs>var name="fafa"</wxs>
导入：<wxs src="相对路径" module="test"/>
<view>{{test.name}}</view>

16.小程序事件
tap: 手指触摸后马上离开
longpress: 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发。当未监听该事件时，长按也会触发tag事件。

17.事件对象的解析
touches和changetouches的区别
touches用来记录当前有几个手指在小程序中触摸的以及对应的触摸点的信息，该数组内可以有多个触摸点信息
changetouches用来记录变化，该数组只有一个触摸点信息
当监听touchesend事件时，touches没有触摸点信息，changetouches有一个触摸点信息
target和currentTarget的区别
在组件嵌套时，由于事件冒泡，target记录产生事件的组件，currentTarget记录触发事件的组件，如A内嵌套B，点击B，target记录B，currentTarget记录A。

18.事件参数的传递,将视图层的参数传递到执行的函数中
<block wx:for="{{array}}">
   <view data-index="{{index}}" data-item="{{item}}">{{item}}</view>
</block>
获取：event.currentTarget.dataset.index/item