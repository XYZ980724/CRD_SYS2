<%@page contentType="text/html; charset=utf-8" language="java" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
</head>
<body>
    <div class="head">
            <p id="news">研究员，欢迎您！目前有{{ItemNumber}}个项目正在研究，{{BreakNumber}}个项目已破盲</p>
    </div>
    <div class="main">
        <!--导航-->
        <div class="main_left">
            <div style="display: flex;flex-direction: column;width: 150px;">
                <button v-for="btn in btns" @mouseenter="enter(btn)" @mouseleave="leave(btn)" :style="{background:btn.bg}" @click="nav(btn)">
                    <font :style="{color:btn.fc}">{{btn.name}}</font>
                </button>
            </div>
        </div>
        
        <div class="main_right"></div>
    </div>
    <div class="foot"></div>
    <script src="${pageContext.request.contextPath}/config/js/vue.js"></script>
    <script src="js/data.js"></script>
    <script src="js/首页.js"></script>
    <style type="text/css">@import url("${pageContext.request.contextPath}/config/css/all.css");</style>
</body>
</html>