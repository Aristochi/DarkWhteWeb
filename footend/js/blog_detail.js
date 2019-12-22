$(window).load(function(){

    let bid=decodeURI(location.href).split('=')[1];

    
    
    $.ajax({
	method:'GET',
    url:'http://127.0.0.1:5050/user/sessiondata',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
	success:function(data)
	{
		console.log(data)
		let uname=data.uname;
		let isLogin=data.isLogin;
		let html1=''
		console.log(uname)
		if(isLogin)
		{
			html1+=`               <nav class="navbar navbar-inverse" role="banner">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
				</div>
				
				<div class="collapse navbar-collapse navbar-right">
					<ul class="nav navbar-nav">
						<li><a href="index.html">首页</a></li>
						<li><a href="about-us.html">教师风采</a></li>
					
						<li><a href="portfolio.html">学生园地</a></li>
						<li><a href="services.html">服务</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">课程分类 <i class="fa fa-angle-down"></i></a>
							<ul class="dropdown-menu">
								 <li><a href="lang.html">编程语言</a></li>
								<li><a href="mobile.html">移动开发</a></li>
								<li><a href="ai.html">人工智能</a></li>
							</ul>
						</li>
						<li><a href="blog.html">论坛</a></li> 
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">欢迎您,${uname} <i class="fa fa-angle-down"></i></a>
							<ul class="dropdown-menu">
								<li  class=""><a href="myorders.html">我的订单</a></li>
								<li ><a href="cart.html">我的购物车</a></li>
								<li id="logout"><a>退出登录</a></li>
							
							</ul>
						</li>     
						<li> <div class="search">
							<form role="form">
								<input type="text" class="search-form" autocomplete="off" placeholder="Search">
								<i class="fa fa-search"></i>
							</form>
					   </div></li>                   
					</ul>
				</div>
			</div>
		</nav>`
		
		
        }
        else
        {
            html1+=`               <nav class="navbar navbar-inverse" role="banner">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
				</div>
				
				<div class="collapse navbar-collapse navbar-right">
					<ul class="nav navbar-nav">
						<li><a href="index.html">首页</a></li>
						<li><a href="about-us.html">教师风采</a></li>
					
						<li><a href="portfolio.html">学生园地</a></li>
						<li><a href="services.html">服务</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">课程分类 <i class="fa fa-angle-down"></i></a>
							<ul class="dropdown-menu">
								 <li><a href="lang.html">编程语言</a></li>
								<li><a href="mobile.html">移动开发</a></li>
								<li><a href="ai.html">人工智能</a></li>
							</ul>
						</li>
						<li><a href="blog.html">论坛</a></li> 
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">个人中心<i class="fa fa-angle-down"></i></a>
							<ul class="dropdown-menu">
								<li  class="active"><a href="register.html">注册</a></li>
								<li ><a href="login.html">登录</a></li>
								
							
							</ul>
						</li>     
						<li> <div class="search">
							<form role="form">
								<input type="text" class="search-form" autocomplete="off" placeholder="Search">
								<i class="fa fa-search"></i>
							</form>
					   </div></li>                   
					</ul>
				</div>
			</div>
		</nav>`
        }
       

        $('#main_header').html(html1)

    },
   
    error: function(xhr, err){
        console.log('异步session失败：')
        console.log(xhr)
        console.log(err)
      }
      

})




    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:5050/blog/details',
        data:`bid=${bid}`,
        success:function(data)
        {
           let html=``

           html+=`<h1 style="color:black" id="title">${data.title}</h1>
           <h2 id="abstract" class="subheading">${data.abstract}</h2>
           <span class="meta">作者：<a href="#">${data.uname}</a></span> <span class="meta" id="post_time">发布时间：${data.post_time}</span>`
           
           
        $('#article_head').html(html)

            let article=''
            article+=`${data.details}`
        $('#article').html(article)


        }




    })


})

$(document).on('click','#logout',function()
{
    $.ajax({
        method:'GET',
        url:'http://127.0.0.1:5050/user/logout',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function(data)
        {
			let html2=''
		
            
               
                html2+=`               <nav class="navbar navbar-inverse" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
                    </div>
                    
                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">首页</a></li>
                            <li><a href="about-us.html">教师风采</a></li>
                        
                            <li><a href="portfolio.html">学生园地</a></li>
                            <li><a href="services.html">服务</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">课程分类 <i class="fa fa-angle-down"></i></a>
                                <ul class="dropdown-menu">
                                     <li><a href="lang.html">编程语言</a></li>
                                    <li><a href="mobile.html">移动开发</a></li>
                                    <li><a href="ai.html">人工智能</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">论坛</a></li> 
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">个人中心<i class="fa fa-angle-down"></i></a>
                                <ul class="dropdown-menu">
                                    <li  class="active"><a href="register.html">注册</a></li>
                                    <li ><a href="login.html">登录</a></li>
                                    
                                
                                </ul>
                            </li>     
                            <li> <div class="search">
                                <form role="form">
                                    <input type="text" class="search-form" autocomplete="off" placeholder="Search">
                                    <i class="fa fa-search"></i>
                                </form>
                           </div></li>                   
                        </ul>
                    </div>
                </div>
            </nav>`
            
        $('#main_header').html(html2)
      }
     
      })
})

$('#logout').click(function(){





})