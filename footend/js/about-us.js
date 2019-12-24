
$(window).load(function(){
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:5050/about-us',
      success: function(data){
        //console.log('成功获取到服务器端异步返回的数据：')
        //1.处理教师轮播广告的动态数据
        let html = ''   //即将要放到轮播广告内的动态内容
      for(let i in data.carouselItems){ //根据动态数据创建HTML字符串
        html += `
          <div class="item ${i==0 ? 'active' : ''}">
            <img src="${data.carouselItems[i].img}">
          </div>
        `
      }
        $('.carousel .carousel-inner').html(html)

    //2.处理一楼的动态数据
          let data1 = data.teacherItems  //
          let htmlF1 = $('#f1').html()  //一楼原有内容——即header
          htmlF1 += `
          <div class="row clearfix">
					<div class="col-md-4 col-sm-6">	
						<div class="single-profile-top wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
							<div class="media">
								<div class="pull-left">
									<a href="#"><img class="media-object" src="${data1[0].tpic}" alt=""></a>
								</div>
								<div class="media-body">
									<h4>徐大sao</h4>
									<h5>金牌讲师</h5>
									<ul class="tag clearfix">
										<li class="btn"><a href="#">Web</a></li>
										<li class="btn"><a href="#">Ui</a></li>
										<li class="btn"><a href="#">Ux</a></li>
										<li class="btn"><a href="#">Photoshop</a></li>
									</ul>
									
									<ul class="social_icons">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li> 
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div><!--/.media -->
							<p>十五年互联网从业经验，曾担任Domob高级工程师，中国云计算职业教育产业领军人物。</p>
						</div>
					</div><!--/.col-lg-4 -->
					
					
					<div class="col-md-4 col-sm-6 col-md-offset-2">	
						<div class="single-profile-top wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
							<div class="media">
								<div class="pull-left">
									<a href="#"><img class="media-object" src="${data1[1].tpic}" alt=""></a>
								</div>
								<div class="media-body">
									<h4>Van Darkholme</h4>
									<h5>金牌讲师</h5>
									<ul class="tag clearfix">
										<li class="btn"><a href="#">Web</a></li>
										<li class="btn"><a href="#">Ui</a></li>
										<li class="btn"><a href="#">Ux</a></li>
										<li class="btn"><a href="#">Photoshop</a></li>
									</ul>
									<ul class="social_icons">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li> 
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div><!--/.media -->
							<p>16年行业及教学经验;Adobe委员会委员、Adobe交互设计TOP100认证设计师;16年数字艺术设计及培训经验，擅长UI设计、网站设计。全国计算机职业技能考试(NIT-Pro)认证讲师。</p>
						</div>
					</div><!--/.col-lg-4 -->					
				</div> <!--/.row -->
				<div class="row team-bar">
					<div class="first-one-arrow hidden-xs">
						<hr>
					</div>
					<div class="first-arrow hidden-xs">
						<hr> <i class="fa fa-angle-up"></i>
					</div>
					<div class="second-arrow hidden-xs">
						<hr> <i class="fa fa-angle-down"></i>
					</div>
					<div class="third-arrow hidden-xs">
						<hr> <i class="fa fa-angle-up"></i>
					</div>
					<div class="fourth-arrow hidden-xs">
						<hr> <i class="fa fa-angle-down"></i>
					</div>
				</div> <!--skill_border-->       

				<div class="row clearfix">   
					<div class="col-md-4 col-sm-6 col-md-offset-2">	
						<div class="single-profile-bottom wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
							<div class="media">
								<div class="pull-left">
									<a href="#"><img class="media-object" src="${data1[2].tpic}" alt=""></a>
								</div>

								<div class="media-body">
									<h4>华农兄弟</h4>
									<h5>金牌讲师</h5>
									<ul class="tag clearfix">
										<li class="btn"><a href="#">Web</a></li>
										<li class="btn"><a href="#">Ui</a></li>
										<li class="btn"><a href="#">Ux</a></li>
										<li class="btn"><a href="#">Photoshop</a></li>
									</ul>
									<ul class="social_icons">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li> 
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div><!--/.media -->
							<p>16年设计工作与教学经验，首师大设计类专业硕士研究生，Adobe首批认证讲师。</p>
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-md-offset-2">
						<div class="single-profile-bottom wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
							<div class="media">
								<div class="pull-left">
									<a href="#"><img class="media-object" src="${data1[3].tpic}" alt=""></a>
								</div>
								<div class="media-body">
									<h4>Ricardo Milos</h4>
									<h5>金牌讲师</h5>
									<ul class="tag clearfix">
										<li class="btn"><a href="#">Web</a></li>
										<li class="btn"><a href="#">Ui</a></li>
										<li class="btn"><a href="#">Ux</a></li>
										<li class="btn"><a href="#">Java</a></li>
									</ul>
									<ul class="social_icons">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li> 
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div><!--/.media -->
							<p>精通Java与.NET 技术， 熟练的跨平台面向对象开发经验，技术功底深厚。</p>
						</div>
					</div>
        </div>	<!--/.row-->
        `
        $('#f1').html(htmlF1) //把修改后的内容赋值回一楼
    }
  })
})
