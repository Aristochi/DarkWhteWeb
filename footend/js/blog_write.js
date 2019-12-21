$('#btnSubmit').click(function(){
    let uname='test'
    let time=getTime();
    let title=$('#title').val()
    let abstract=$('#abstract').val()
    let detail=$('#detail').val()
    // let detail=document.getElementById('detail').innerHTML
    console.log(detail)
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
               $('#modalSubmitErr').modal()
            }
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