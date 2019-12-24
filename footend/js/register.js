/*输入框失去焦点时进行验证*/
    $('#uname').blur(function(){
      let uname = $(this).val()
      if(uname.length<3){
        
        $('#unameMsg').html('用户名太短了').removeClass('alert-info').addClass('alert-danger')
      }
      //如果输入的用户名格式合法，则继续进行服务器端验证
      if(uname.length>=3)
      {
        $.ajax({
          method: 'GET',
          url: 'http://127.0.0.1:5050/user/check/uname',
          data:`uanme=${uname}`,
          success: function(data){  
              if(data.code==200)
              {
                  $('#unameMsg').html('用户名已被使用').removeClass('alert-info').addClass('alert-danger')
              }
              else 
              {
                  $('#unameMsg').html('用户名可使用').removeClass('alert-danger').addClass('alert-info')
              }
             
          }
        })
      }
     
    })
    $('#upwd').blur(function(){

      let upwd = $(this).val()
      //进行服务器端验证邮箱
      if(upwd.length<6){
        $('#upwdMsg').html('密码长度太短了').removeClass('alert-info').addClass('alert-danger')
      }else if(uname.length>12){
        $('#upwdMsg').html('密码长度太长了').removeClass('alert-info').addClass('alert-danger')
      }else {
        $('#upwdMsg').html('密码长度合理').removeClass('alert-danger').addClass('alert-info')
      }
     
    })

    $('#email').blur(function(){

        let email = $(this).val()
      // if(isPoneAvailable(email))
      // {
     //进行服务器端验证邮箱
       $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:5050/user/check/email',
      data:`email=${email}`,
    // data:{email:email},
       success: function(data){  
        if(data.code==200)
        {
            $('#emailMsg').html('此邮箱已注册').removeClass('alert-info').addClass('alert-danger')
        }
        else
        {
            $('#emailMsg').html('此邮箱可注册').removeClass('alert-danger').addClass('alert-info')
        }
       
      }
    })
      }
    

        
        
        
       
     
      )
      $('#phone').blur(function(){
        let phone = $(this).val()
        if(isPoneAvailable(phone))
        //进行服务器端验证号码
      {
        $.ajax({
          method: 'GET',
          url: 'http://127.0.0.1:5050/user/check/phone?phone',
          data:`phone=${phone}`,
          success: function(data){  
              if(data.code==200)
              {
                  $('#phoneMsg').html('此号码已注册').removeClass('alert-info').addClass('alert-danger')
              }
              else
              {
                  $('#phoneMsg').html('此号码可注册').removeClass('alert-danger').addClass('alert-info')
              }
             
          }
        })
      }
      else
      {
        $('#phoneMsg').html('此号码格式错误').removeClass('alert-info').addClass('alert-danger')
      }

      })



       
      

/**为btRegister按钮添加事件监听**/
$('#btRegister').click(function(){
    //读取所有的表单输入
    let uname = $('#uname').val()
    let upwd = $('#upwd').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
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
        if(data.code===200){
          //alert('注册成功')
          $('#modalRegisterSucc').modal()   //弹出模态对话框
          $('#backindex').click(function(){window.location.href="login.html"})
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


  // 验证电话号码
  function isPoneAvailable (pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
      return false;
    } else {
      return true;
    }
  }

  // 验证邮箱
  function isEmailAvailable(emailInput) {
		var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(reg.test(emailInput)){
		return true;
		}else{
			return false;
		}

 }