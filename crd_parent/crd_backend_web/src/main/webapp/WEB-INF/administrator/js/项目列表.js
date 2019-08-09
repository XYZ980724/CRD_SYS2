
var main=new Vue({
    el:".main_right",
    data:{
        items:[
            {id:1,exName:"某药物对脑梗的缓解",number:50,isRandom:"是",hos:"省中医",see:"双盲",exType:"随机实验",exDay:90,state:"未破盲"},
            {id:2,exName:"心脑疾病的神经治疗法",number:50,isRandom:"否",hos:"广中医",see:"单盲",exType:"随机实验",exDay:90,state:"破盲"},
            {id:3,exName:"某穴位对疼痛的缓解",number:50,isRandom:"是",hos:"省中医",see:"双盲",exType:"随机实验",exDay:90,state:"未破盲"},
        ]
    },
    methods:{
        nav_add:function(){
            window.location.href="新增项目.html";
        }
    }
})