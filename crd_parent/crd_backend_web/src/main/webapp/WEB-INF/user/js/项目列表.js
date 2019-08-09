/*Vue.component('item_table',{
    template:`
        <div style="padding:30px">
            <table>
                <tr>
                    <td style="background:white;">编号</td>
                    <td style="background:#cccccc;">研究名称</td>
                    <td style="background:white;">样本量</td>
                    <td style="background:#cccccc;">是否随机</td>
                    <td style="background:white;">申办项目组织</td>
                    <td style="background:#cccccc;">设盲模式</td>
                    <td style="background:white;">实验类型</td>
                    <td style="background:#cccccc;">持续时间</td>
                    <td style="background:white;">项目状态</td>
                    <td style="background:#cccccc;">操作栏</td>
                </tr>
                <item_tr></item_tr>
            </table>
        </div>
    `
})

Vue.component('item_tr',{
    template:`
    <tr>
        <td style="background:white;">1</td>
        <td style="background:#cccccc;">阿司匹林</td>
        <td style="background:white;">50</td>
        <td style="background:#cccccc;">是</td>
        <td style="background:white;">广中医</td>
        <td style="background:#cccccc;">双盲</td>
        <td style="background:white;">？？</td>
        <td style="background:#cccccc;">30d</td>
        <td style="background:white;">破盲</td>
        <td style="background:#cccccc;"><label @click="alert">增</label></td>
    </tr>
    `,
    methods:{
        alert:function(){
            alert("test success");
        }
    }
})

*/
var main=new Vue({
    el:".main_right",
    data:{
        items:[
            {id:1,name:"",num:46,time:10,pos:""},
            {id:2,name:"",num:55,time:90,pos:""},
        ]
    },
    methods:{

    }
})