$('#btnSubmit').click(function(){
    let uname=''
    let isLogin=false
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:5050/user/sessiondata',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function(data)
        {
            
            uname=data.uname;
            isLogin=data.isLogin;
            if(isLogin)
            {
                let time=getTime();
                let title=$('#title').val()
                let abstract=$('#abstract').val()
                let detail=$('#detail').val()
                // let pic=$('#pic').val()
                let pic=null
                $.ajax({
                    method:'POST',
                    url:'http://127.0.0.1:5050/blog/write',
                    data:`uname=${uname}&title=${title}&abstract=${abstract}&detail=${detail}&pic=${pic}&post_time=${time}`,
                    success:function(data)
                    {
                        if(data.code==200)
                        {
                            $('#modalSubmitSucc').modal()
                        }
                        else
                        {
                            $('#serverErrMsg').html("请检查文章内容是否符合规范！")
                           $('#modalSubmitErr').modal()
                        }
                    }
            
            
                })
            
                
            }
            else
            {
                $('#serverErrMsg').html("请登录后发表文章！")
                $('#modalSubmitErr').modal()
            }
        
        },
       
        error: function(xhr, err){
            console.log('异步session失败：')
            console.log(xhr)
            console.log(err)
          }
          
    
    })

   
    
   

 


})

function getTime(){     	//获取时间
    var date=new Date();

    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();

    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();

    //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
    if (hour<10) {
        hour='0'+hour;
    }
    if (minute<10) {
        minute='0'+minute;
    }
    if (second<10) {
        second='0'+second;
    }


    var x=date.getDay();//获取星期


    var time=year+'/'+month+'/'+day+'/'+hour+':'+minute+':'+second;
    return time;
}




