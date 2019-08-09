var menu=new Vue({
    el:".main_left",
    data:{

    },
    methods:{
        enter:function(){
            /*this.style.background='red'*/
            console.log('enter');
        },
        leave:function(){
            console.log('leave');
        }
    }
})