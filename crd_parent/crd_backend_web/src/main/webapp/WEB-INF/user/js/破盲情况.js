var main=new Vue({
    el:".main_right",
    data:{
        show:0,
        people:[
            {id:1,itemName:"糖尿病",name:"李四",pos:"已破盲"},
            {id:2,itemName:"白血病",name:"张三",pos:"破盲中"}
        ]
    },
    methods:{
        nav_detial:function(obj){
            for (let index = 0; index < this.people.length; index++) {
                if(obj.id==this.people[index].id){
                    this.show=1;
                    break;
                }
                else{
                    this.show=0;
                }
            }
        }
    }
})