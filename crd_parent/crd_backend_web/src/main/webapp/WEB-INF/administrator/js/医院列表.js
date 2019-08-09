
var main_right=new Vue({
    el:".main_right",
    data:{
        hospitals:[
            {id:1,name:"省中医",boss:"王院长",phone:"18344155555",fax:"020-*******",pos:"107554****@qq.com"},
            {id:2,name:"佛山中医院",boss:"陈医生",phone:"18341685556",fax:"020-*******",pos:"102464****@qq.com"},
            {id:3,name:"第一附属元",boss:"张院长",phone:"18344814555",fax:"020-*******",pos:"75064****@qq.com"},
        ]
    },
    methods:{
        change:function(obj){
            alert('已修改【'+obj.name+'】');
        },
        del:function(obj){
            for (let index = 0; index < this.hospitals.length; index++) {
                if(obj.id==this.hospitals[index].id){
                    obj.name=null;
                }
            }
            alert('已删除【'+obj.name+'】');
        }
    }
})