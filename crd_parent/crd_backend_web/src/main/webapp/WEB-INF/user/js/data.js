

var main=new Vue({
    el:".main_left",
    data:{
        btns:[
            {id:1,name:"首页",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:2,name:"项目列表",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:3,name:"受试者登记",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:4,name:"所有受试者",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:5,name:"破盲申请列表",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:6,name:"破盲情况",bg:"rgb(135, 183, 255)",fc:"#292929"},
            {id:7,name:"进度报告",bg:"rgb(135, 183, 255)",fc:"#292929"},
        ],
        tempbg:'',
        tempfc:'',

    },
    methods:{
        enter:function(obj){
            this.tempbg=obj.bg;
            this.tempfc=obj.fc;
            obj.bg='rgb(71, 55, 219)';
            obj.fc='white';
        },
        leave:function(obj){
            obj.bg=this.tempbg;
            obj.fc=this.tempfc;
        },
        nav:function(obj){
            for (let index = 0; index < this.btns.length; index++) {
                if(this.btns[index].id!=obj.id){
                    this.btns[index].bg="rgb(135, 183, 255)";
                    this.btns[index].fc="#292929";
                }
            }
            window.location.href=obj.name+".html";
        }
    }
}) 