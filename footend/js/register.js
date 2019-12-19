/*输入框失去焦点时进行验证
    $('#uname').blur(function(){
      let uname = $(this).val()
      if(uname.length<3){
        $('#unameMsg').html('用户名太短了').removeClass('alert-info').addClass('alert-danger')
      }
      //如果输入的用户名格式合法，则继续进行服务器端验证
      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:5050/user/check/uname?uname'+xxx
        success: function(data){  data.code===201提示“用户名已被占用”}
      })
    })
    */



/**为btRegister按钮添加事件监听**/
$('#btRegister').click(function(){
    //读取所有的表单输入
    let uname = $('#uname').val()
    let upwd = $('#upwd').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
    console.log(uname, upwd, email, phone)
    //验证表单输入的合法性
    if(uname.length<3){
      $('#unameMsg').html('用户名长度太短了').removeClass('alert-info').addClass('alert-danger')
    }else if(uname.length>12){
      $('#unameMsg').html('用户名长度太长了').removeClass('alert-info').addClass('alert-danger')
    }else {
      $('#unameMsg').html('用户名长度合法').removeClass('alert-danger').addClass('alert-info')
    }

    //异步提交用户的输入给后台API  
    $.ajax({
      method: 'POST',
      url:'http://127.0.0.1:5050/user/register',
      data: `uname=${uname}&upwd=${upwd}&email=${email}&phone=${phone}`,
      success: function(data, msg, xhr){
        console.log('异步请求注册API成功：', data)
        if(data.code===200){
          //alert('注册成功')
          $('#modalRegisterSucc').modal()   //弹出模态对话框
        }else {
          //alert('注册失败！服务器返回错误消息：' + data.msg)
          $('#serverErrMsg').html(data.msg)
          $('#modalRegisterErr').modal()   //弹出模态对话框
        }
      },
      error: function(xhr, err){
        console.log('异步请求注册API失败：')
        console.log(xhr)
        console.log(err)
      }
    })
  })