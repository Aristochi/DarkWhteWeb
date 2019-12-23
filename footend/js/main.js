






jQuery(function($) {
	'use strict',



	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){
		$.ajax({
			method:'GET',
			url:'http://127.0.0.1:5050/user/sessiondata',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success:function(data)
			{
				let uname=data.uname;
				let isLogin=data.isLogin;
				let html1=''	
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

								<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">沟通交流<i class="fa fa-angle-down"></i></a>
								<ul class="dropdown-menu">
									 <li><a href="blog.html">博客</a></li>
									<li><a href="blog_write.html">写博客</a></li>
									<li><a href="chat.html">聊天</a></li>
								</ul>
							</li>

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
								<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">沟通交流<i class="fa fa-angle-down"></i></a>
								<ul class="dropdown-menu">
									 <li><a href="blog.html">博客</a></li>
									<li><a href="blog_write.html">写博客</a></li>
									<li><a href="chat.html">聊天</a></li>
								</ul>
							</li>
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


		'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});

	


	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

	
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

});

