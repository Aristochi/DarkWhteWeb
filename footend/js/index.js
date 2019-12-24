
//页面加载完成，异步请求服务器端动态数据
$(window).load(function(){
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:5050/index',
      success: function(data){
        console.log('成功获取到服务器端异步返回的数据：')
        //1.处理轮播广告的动态数据
        let html = ''   //即将要放到轮播广告内的动态内
        for(let i in data.carouselItems){ //根据动态数据创建HTML字符串
          html += `
        <div class="item ${i==0 ? 'active' : ''}" style="background-image: url(${data.carouselItems[i].img})">
                      <div class="container">
                          <div class="row slide-margin">
                              <div class="col-sm-6">
                                  <div class="carousel-content">
                                      <h1 class="animation animated-item-1">${data.carouselItems[i].title}</h1>
                                      <h2 class="animation animated-item-2">${data.carouselItems[i].detail}</h2>
                                      <a class="btn-slide animation animated-item-3" href="${data.carouselItems[i].href}">了解更多</a>
                                  </div>
                              </div>
  
                              <!--div class="col-sm-6 hidden-xs animation animated-item-4">
                                  <div class="slider-img">
                                  <img src="${data.carouselItems[i].img2}" class="img-responsive"> 
                                  </div>
                              </div-->
  
                          </div>
                      </div>
                  </div><!--/.item-->
          `
        }
        $('.carousel .carousel-inner').html(html)
        //2.处理一楼的动态数据 
        let data1 = data.langItems  //一楼的动态数据  15:25
        let htmlF1 = $('#f1').html()  //一楼原有内容——即header
        htmlF1 += `
        <div class="row">
        <div class="features">
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" href="${data1[0].href}">
                <div class="feature-wrap">
                    <i class="fa fa-bullhorn"></i>
                    <h2>${data1[0].title}</h2>
                    <h3>${data1[0].details}</h3>
                </div>
            </div><!--/.col-md-4-->
  
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="feature-wrap">
                    <i class="fa fa-comments" ></i>
                    <h2>${data1[1].title}</h2>
                    <h3>${data1[1].details}</h3>
                </div>
            </div><!--/.col-md-4-->
  
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="feature-wrap">
                    <i class="fa fa-cloud-download"></i>
                    <h2>${data1[2].title}</h2>
                    <h3>${data1[2].details}</h3>
                </div>
            </div><!--/.col-md-4-->
        
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="feature-wrap">
                    <i class="fa fa-leaf"></i>
                    <h2>${data1[3].title}</h2>
                    <h3>${data1[3].details}</h3>
                </div>
            </div><!--/.col-md-4-->
  
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="feature-wrap">
                    <i class="fa fa-cogs"></i>
                    <h2>${data1[4].title}</h2>
                    <h3>${data1[4].details}</h3>
                </div>
            </div><!--/.col-md-4-->
  
            <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="feature-wrap">
                    <i class="fa fa-heart"></i>
                    <h2>${data1[5].title}</h2>
                    <h3>${data1[5].details}</h3>
                </div>
            </div><!--/.col-md-4-->
        </div><!--/.services-->
    </div><!--/.row-->  
        `
        $('#f1').html(htmlF1) //把修改后的内容赋值回一楼
  
         //2.处理二楼的动态数据 
      let data2 = data.mobileItems  //一楼的动态数据  15:25
      let htmlF2 = $('#f2').html()  //一楼原有内容——即header
      htmlF2 += `
      <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap" >
              <img class="img-responsive" src="${data2[0].pic}" alt="">
              <div class="overlay">
                  <div class="recent-work-inner">
                      <h3><a href="${data2[0].href}">${data2[0].title}</a> </h3>
                      <p>${data2[0].details}</p>
                     
                  </div> 
              </div>
          </div>
      </div>   
  
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap">
          <img class="img-responsive" src="${data2[1].pic}" alt="">
          <div class="overlay">
              <div class="recent-work-inner">
                  <h3><a href="${data2[1].href}">${data2[1].title}</a> </h3>
                  <p>${data2[1].details}</p>
                      
                  </div> 
              </div>
          </div>
      </div> 
  
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap">
          <img class="img-responsive" src="${data2[2].pic}" alt="">
          <div class="overlay">
              <div class="recent-work-inner">
                  <h3><a href="${data2[2].href}">${data2[2].title}</a> </h3>
                  <p>${data2[2].details}</p>
                    
                  </div> 
              </div>
          </div>
      </div>   
  
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap">
          <img class="img-responsive" src="${data2[3].pic}" alt="">
          <div class="overlay">
              <div class="recent-work-inner">
                  <h3><a href="${data2[3].href}">${data2[3].title}</a> </h3>
                  <p>${data2[3].details}</p>
                  </div> 
              </div>
          </div>
      </div>   
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap">
          <img class="img-responsive" src="${data2[4].pic}" alt="">
          <div class="overlay">
              <div class="recent-work-inner">
                  <h3><a href="${data2[4].href}">${data2[4].title}</a> </h3>
                  <p>${data2[4].details}</p>
                  </div> 
              </div>
          </div>
      </div>   
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="recent-work-wrap">
          <img class="img-responsive" src="${data2[5].pic}" alt="">
          <div class="overlay">
              <div class="recent-work-inner">
                  <h3><a href="${data2[5].href}">${data2[5].title}</a> </h3>
                  <p>${data2[5].details}</p>   
                 </div> 
              </div>
          </div>
      </div>   
     
  </div><!--/.row-->
  `
  $('#f2').html(htmlF2) //把修改后的内容赋值回一楼
  
     //2.处理三楼的动态数据 
     let data3 = data.aiItems  //一楼的动态数据  15:25
     let htmlF3 = $('#f3').html()  //一楼原有内容——即header
     htmlF3 += `
     <div class="row">
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
                 <img class="img-responsive" src="${data3[0].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[0].title}</h3>
                 <p>${data3[0].details}</p>
             </div>
         </div>
     </div>
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
             <img class="img-responsive" src="${data3[1].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[1].title}</h3>
                 <p>${data3[1].details}</p>
             </div>
         </div>
     </div>
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
             <img class="img-responsive" src="${data3[2].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[2].title}</h3>
                 <p>${data3[2].details}</p>
             </div>
         </div>
     </div>  
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
             <img class="img-responsive" src="${data3[3].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[3].title}</h3>
                 <p>${data3[3].details}</p>
             </div>
         </div>
     </div>
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
             <img class="img-responsive" src="${data3[4].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[4].title}</h3>
                 <p>${data3[4].details}</p>
             </div>
         </div>
     </div>
  
     <div class="col-sm-6 col-md-4">
         <div class="media services-wrap wow fadeInDown">
             <div class="pull-left">
             <img class="img-responsive" src="${data3[5].pic}">
             </div>
             <div class="media-body">
                 <h3 class="media-heading">${data3[5].title}</h3>
                 <p>${data3[5].details}</p>
             </div>
         </div>
     </div>                                                
  </div><!--/.row-->
  `
  $('#f3').html(htmlF3) //把修改后的内容赋值回一楼
  
      }
  
     
    })
  })
  