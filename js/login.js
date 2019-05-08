$(function(){

    var login = $(".login .login-btn ");

    login.click(function(){
        for(var i = 0;i < localStorage.length;i++){
            var key = localStorage.key(i);
            var val = localStorage.getItem(key);
            var ls = val.split("$");

            if($("[type='tel']").val()==ls[0]&&$("[type='password']").val()==ls[1]){

                localStorage.setItem(1,'ok');
                alert("登陆成功");

            }
        }
    })

})
