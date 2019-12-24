$(window).load(function(){

    let html=`        <div class="container">
    <div class="center">        
        <h2>留下你的联系方式</h2>
        <p class="lead">contact us to get more information.</p>
    </div> 
    <div class="row contact-wrap"> 
        <div class="status alert alert-success" style="display: none"></div>
        <form id="main-contact-form" class="contact-form" name="contact-form" method="post">
            <div class="col-sm-5 col-sm-offset-1">
                <div class="form-group">
                    <label>您的称呼 *</label>
                    <input type="text" id="yname" name="name" class="form-control" required="required">
                </div>
                <div class="form-group">
                    <label>邮箱 *</label>
                    <input type="email" id="yemail" name="email" class="form-control" required="required">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="number" id="yphone" class="form-control">
                </div>
                <div class="form-group">
                    <label>学校/企业名称</label>
                    <input type="text" id="ycompany" class="form-control">
                </div>                        
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label>专业 *</label>
                    <input type="text" name="subject" id="ysubject" class="form-control" required="required">
                </div>
                <div class="form-group">
                    <label>信息 *</label>
                    <textarea name="message" id="ymessage" required="required" class="form-control" rows="8"></textarea>
                </div>                        
                <div class="form-group">
                    <button type="button"  id="btnContact" class="btn btn-primary btn-lg">提交留言</button>
                </div>
            </div>
        </form> 
    </div>
</div>`

let html2=` <div class="center">                
<h2>如何联系我们</h2>
<p class="lead">We are here waiting you</p>
</div>
<div class="gmap-area">
<div class="container">
    <div class="row">
        <div class="col-sm-5 text-center">
            <div class="gmap">
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://map.baidu.com/@12583586.77385,2633673.398135,17z"></iframe>

            </div>
        </div>

        <div class="col-sm-7 map-content">
            <ul class="row">
                <li class="col-sm-6">
                    <address>
                        <h5>总公司</h5>
                        <p>华南师范大学南海校区<br>
                        学生公寓A座</p>
                        <p>电话:123-456-78910 <br>
                        邮箱:info@edu.cn</p>
                    </address>

                    <address>
                        <h5>2区办公室</h5>
                        <p>华南师范大学南海校区<br>
                            学生公寓A座</p>
                            <p>电话:123-456-78910 <br>
                            邮箱:info@edu.cn</p>
                    </address>
                </li>


                <li class="col-sm-6">
                    <address>
                        <h5>3区办公室</h5>
                        <p>华南师范大学南海校区<br>
                            学生公寓A座</p>
                            <p>电话:123-456-78910 <br>
                            邮箱:info@edu.cn</p>
                    </address>

                    <address>
                        <h5>3区办公室</h5>
                        <p>华南师范大学南海校区<br>
                            学生公寓A座</p>
                            <p>电话:123-456-78910 <br>
                            邮箱:info@edu.cn</p>
                    </address>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
`


$('#contact-page').html(html)
$('#contact-info').html(html2)
$('#btnContact').click(function()
{

    let name=$('#yname').val()
    let email=$('#yemail').val()
    let phone=$('#yphone').val()
    let company=$('#ycompany').val()
    let subject=$('#ysubject').val()
    let message=$('#ymessage').val()
   
    $.ajax({

        method:'POST',
        url:'http://127.0.0.1:5050/contact',
        data:`name=${name}&email=${email}&phone=${phone}&company=${company}&subject=${subject}&message=${message}`,
        success:function(data)
        {
            if(data.code==100)
            {
                $('#modalcontactSucc').modal()
            }
        },
        error:function(xhr,err)
        {
            console.log('异步post失败：')
            console.log(xhr)
            console.log(err)
        }


    })




})
})





