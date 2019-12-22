$('#btnLogin').click(function(){


    let uname = $('#uname').val()
    let upwd = $('#upwd').val()
    
    $.ajax({
        method: 'POST',
        url:'http://127.0.0.1:5050/user/login',
        data: `uname=${uname}&upwd=${upwd}`,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function(data,msg,xhr){
            if(data.code===200){
                //alert('登录成功')
                 //弹出模态对话框
                //  $('#modalLoginSucc').modal() 
            
               
                window.location.href ='index.html'
                
              }else {
                //alert('注册失败！服务器返回错误消息：' + data.msg)
                $('#serverErrMsg').html(data.msg)
                $('#modalLoginErr').modal()   //弹出模态对话框
              }
            },
        error: function(xhr, err){
            console.log('请求登录失败：')
            console.log(xhr)
            console.log(err)
            
        }

    })


})