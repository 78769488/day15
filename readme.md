### 电子商务网站页面（动态）（仿京东）
1. 主页
2. 登陆
3. 注册
4. 购物车

### CSS补充
1. position:
    + fixed :固定在(父)页面的某个位置
    + relative + absolute (必须两个一起使用)
    `
    <div onclick="GoTop();" style="width: 50px;height: 50px;background-color: black;color: white;
    position: fixed;bottom: 20px;right: 20px;">
        返回顶部
    </div>
    <div style="height:200px; background-color: #dddddd"></div>`
   
2. opcity:
    
    透明度 0-1 (默认1, 完全不透明)
3. z-index 

    层级顺序, 越大越在前面
    
4. overflow:
   
   超过父页面大小,子页面处理原则
   + hidden 隐藏
   + auto 滚动条

5. hover

    当鼠标移动到当前标签上时，CSS生效
    
6. background-image 

    默认div大于图片大小时，图片重复访问
    
    
    `background-image: url(icon_18_118.png)`
    background-repeat: repeat-x repeat-y no-repeat
    background-position-x: 0;
    background-position-y: 0;
    `background: url(icon_18_118.png) no-repeat;`
    
### JavaScript    
1. 定时器


    `setInterval("func()", 1000)`
    
2. 定义函数
    
    
    `function func() {
             var l;
             // 根据ID获取指定标签的内容,定于局部变量接受
             var tag = document.getElementById("i1");
             // 获取标签内部的内容
             var content = tag.innerText;
             l = content.charAt(0);
             var r = content.substring(1, content.length);
             var new_content = r + l;
             tag.innerText = new_content
         }`