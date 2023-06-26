 // 要操作到的元素
 var login=document.getElementById('login');
 var register=document.getElementById('register');
 var form_box=document.getElementsByClassName('form-box')[0];
 var register_box=document.getElementsByClassName('register-box')[0];
 var login_box=document.getElementsByClassName('login-box')[0];




 // 去注册按钮点击事件
 register.addEventListener('click',()=>{
     form_box.style.transform='translateX(80%)';
     login_box.classList.add('hidden');
     register_box.classList.remove('hidden');
 })
 
 // 去登录按钮点击事件
 login.addEventListener('click',()=>{
     form_box.style.transform='translateX(0%)';
     register_box.classList.add('hidden');
     login_box.classList.remove('hidden');
 })


// 判断
function dianji(){
    var denglu_name=document.getElementById('name');
    var denglu_pwd=document.getElementById('pwd');
    if(denglu_name.value == ""){
        alert("用户名不能为空！");
    }else if(denglu_pwd.value == ""){
        alert("密码不能为空！");
    }else{
        alert("登陆成功");
    }
}

function dianji2(){
    var zhuce_name=document.getElementById('name2');
    var zhuce_email=document.getElementById('email');
    var zhuce_pwd2=document.getElementById('pwd2');
    var zhuce_pwd3=document.getElementById('pwd3');
    if(zhuce_name.value == ""){
        alert("用户名不能为空！");
    }else if(zhuce_email.value == ""){
        alert("邮箱不能为空！");
    }else if(zhuce_pwd2.value == ""){
        alert("密码不能为空！");
    }else if(zhuce_pwd3.value != zhuce_pwd2.value){
        alert("两次密码需为同样数字！");
    }else{
        alert("登陆成功");
    }
}