<%@page contentType="text/html; charset=utf-8" language="java" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>中央随机分配系统</title>
    <style type="text/css">
        *{
            font-size: 18px;
            font-weight: bolder;
            padding: 0;
            margin: 0;
        }
        body{
            display: flex;
            flex-direction: row;
            justify-content: center;
            background-position: center,center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100vw;
            height: 100vh;
            background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565257124395&di=5b1070c45d39a23697fef62b32fd42ad&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160515%2F5f64d7aba1924c36a8b5aa4e7c3d6cea_th.jpg');
        }
        .main{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .center{
            width: 500px;
            background: rgba(216, 215, 215,0.5);
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .login tbody tr{
            height: 50px;
        }
        #find{
            font-size: 12px;
        }
        .login_btn{
            width: 120px;
            background: rgb(34, 199, 34);
            color: white;
            font-family: 'KaiTi';
            font-size: 20px;
        }
    </style>
</head>
<body>
<div class="head"></div>
<div class="main">
    <div class="center">
        <h1 style="font-size: larger;">中央随机分配系统</h1>
    </div>
    <div class="center">
        <table class="login">
            <tbody >
            <tr>
                <td>账号：</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>密码：</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>验证码：</td>
                <td><input type="text"></td>
                <td><img :src="img_src" alt="" style="height: 40px;"></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input class="login_btn" type="submit" value="立即登录" @click="nav_1()">
                    <input class="login_btn" type="submit" value="立即登录" @click="nav_2()">
                </td>
                <td><a href="" id="find">忘记密码？</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="foot"></div>

<script src="config/js/vue.js"></script>
<script>

    new Vue({
        el:".main",
        data:{
            img_src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565253812764&di=35bde99644753be0f886adf629890e54&imgtype=0&src=http%3A%2F%2Fwww.xiaobaixitong.com%2Fd%2Ffile%2Fhelp%2F2018-08-06%2Ff15ce5d652d8da38e9e0e384f35b39d7.png',
            nav_to_1:'administrator/ad首页.jsp',
            nav_to_2:'user/ad首页.jsp'
        },
        methods:{
            nav_1:function(){
                window.location.href=this.nav_to_1;
            },
            nav_2:function(){
                window.location.href=this.nav_to_2;
            }
        }
    })
</script>
</body>
</html>