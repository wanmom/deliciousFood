$(function(){

    var register = $('.register .register-btn');

    register.click(function(){
        var t = new Date().getTime();

        var tel = $("[type='tel']").val();
        var pwd = $("[type='password']").val();

        var patt = /^1[3-9]\d{9}$/;

        if(patt.test(tel)){
            var txt =  tel + "$" +pwd;
            console.log(txt);
            localStorage.setItem(t,txt);
        }

    })



})
