function tijiao_jianyi(){
    var jianyi_name=document.getElementById('jianyi_name');
    var jianyi_email=document.getElementById('jianyi_email');
    var jianyi_age=document.getElementById('age');
    var jianyi_liuyan=document.getElementById('liuyan');
    var jianyi_phone=document.getElementById('jianyi_phone');

    if(jianyi_name.value == ""){
        alert("用户名不能为空！");
    }else if(jianyi_email.value == ""){
        alert("邮箱不能为空！");
    }else if(jianyi_age.value == ""){
        alert("年龄不能为空！");
    }else if(jianyi_liuyan.value == ""){
        alert("留言不能为空！");
    }else if(jianyi_phone.value == ""){
        alert("电话不能为空！");
    }else{
        alert("提交成功！感谢您的建议");
    }
}
