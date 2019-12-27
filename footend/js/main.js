
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
					html1+=`    <nav class="navbar navbar-inverse" role="banner">
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
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">分类 <i class="fa fa-angle-down"></i></a>
									<ul class="dropdown-menu">
										 <li><a href="lang.html">编程语言</a></li>
										<li><a href="mobile.html">移动开发</a></li>
										<li><a href="ai.html">人工智能</a></li>
									</ul>
								</li>

								<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">交流<i class="fa fa-angle-down"></i></a>
								<ul class="dropdown-menu">
									 <li><a href="blog.html">博客</a></li>
									<li><a href="blog_write.html">写博客</a></li>
									<li><a href="chat.html">聊天</a></li>
									<li><a href="contact-us.html">联系我们</a></li>
								</ul>
							</li>

								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">欢迎您,${uname} <i class="fa fa-angle-down"></i></a>
									<ul class="dropdown-menu">
										<li><a href="404.html">我的订单</a></li>
										<li ><a href="cart.html">我的购物车</a></li>
										<li id="logout"><a>退出登录</a></li>
									
									</ul>
								</li>     
								<li> <div class="search">
									<form role="form">
										<input type="text" id="search" class="search-form" autocomplete="off" placeholder="Search">
										<i id="searchbtn" class="fa fa-search"></i>
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
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">分类 <i class="fa fa-angle-down"></i></a>
									<ul class="dropdown-menu">
										 <li><a href="lang.html">编程语言</a></li>
										<li><a href="mobile.html">移动开发</a></li>
										<li><a href="ai.html">人工智能</a></li>
									</ul>
								</li>
								<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">交流<i class="fa fa-angle-down"></i></a>
								<ul class="dropdown-menu">
									 <li><a href="blog.html">博客</a></li>
									 <li><a href="contact-us.html">联系我们</a></li>
									<li><a href="login.html">登录查看更多哦~</a></li>
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
										<input type="text"  id="search"  class="search-form" autocomplete="off" placeholder="Search">
										<i  id="searchbtn" class="fa fa-search"></i>
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

	let html4=''
	html4+=`
	
	<div class="row">
		<div class="col-md-3 col-sm-6">
			<div class="widget">
				<h3>公司团队</h3>
				<ul>
					<li><a href="about-us.html">关于我们</a></li>
					<li><a href="recruit.html">招聘信息</a></li>
					<li><a href="404.html">认识团队</a></li>
					<li><a href="404.html">版权</a></li>
					<li><a href="404.html">使用条款</a></li>
					<li><a href="404.html">隐私政策</a></li>
					<li><a href="contact-us.html">联系我们</a></li>
				</ul>
			</div>    
		</div>

		<div class="col-md-3 col-sm-6">
			<div class="widget">
				<h3>服务支持</h3>
				<ul>
					<li><a href="404.html">常见问题</a></li>
					<li><a href="blog.html">博客</a></li>
					<li><a href="404.html">课程</a></li>
					<li><a href="404.html">文献资料</a></li>
					<li><a href="404.html">退款政策</a></li>
					<li><a href="404.html">票务系统</a></li>
					<li><a href="404.html">计费说明</a></li>
				</ul>
			</div>    
		</div>

		<div class="col-md-3 col-sm-6">
			<div class="widget">
				<h3>培养精英</h3>
				<ul>
					<li><a href="services.html">服务特色</a></li>
					<li><a href="lang.html">编程语言</a></li>
					<li><a href="mobile.html">移动开发</a></li>
					<li><a href="ai.html">人工智能</a></li>
					<li><a href="404.html">Web设计</a></li>
					<li><a href="404.html">系统架构</a></li>
					<li><a href="404.html">运营维护</a></li>
				</ul>
			</div>    
		</div>

		<div class="col-md-3 col-sm-6">
			<div class="widget">
				<h3>合作伙伴</h3>
				<ul>
					<li><a href="http://www.tedu.cn/">达内科技</a></li>
					<li><a href="http://ss.scnu.edu.cn/">华南师大软院</a></li>
					<li><a href="http://www.scholat.com/xjzhang">张晓基</a></li>
					<li><a href="http://www.scholat.com/zhengbaitao">郑柏涛</a></li>
					<li><a href="http://www.scholat.com/cshuang">黄承书</a></li>
					<li><a href="http://www.scholat.com/yman">杨满</a></li>
					<li><a href="http://www.scholat.com/luoyanfen">罗艳芬</a></li>
				</ul>
			</div>    
		</div>
	</div>`


$('#bottom2').html(html4)

$(document).on('click','#searchbtn',function(){
	let keyword=$('#search').val()
	window.location.href="search.html?keyword="+keyword
	


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
                        <a class="navbar-brand" href="index.html"><img src="images/logo2.png" alt="logo"></a>
                    </div>
                    
                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">首页</a></li>
                            <li><a href="about-us.html">教师风采</a></li>
                        
                            <li><a href="portfolio.html">学生园地</a></li>
                            <li><a href="services.html">服务</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">分类 <i class="fa fa-angle-down"></i></a>
                                <ul class="dropdown-menu">
                                     <li><a href="lang.html">编程语言</a></li>
                                    <li><a href="mobile.html">移动开发</a></li>
                                    <li><a href="ai.html">人工智能</a></li>
                                </ul>
                            </li>
							<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">交流<i class="fa fa-angle-down"></i></a>
							<ul class="dropdown-menu">
								 <li><a href="blog.html">博客</a></li>
								 <li><a href="contact-us.html">联系我们</a></li>
								 <li><a href="login.html">登录查看更多哦~</a></li>
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
                                    <input type="text"  id="search"  class="search-form" autocomplete="off" placeholder="Search">
                                    <i  id="searchbtn" class="fa fa-search"></i>
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

