$(window).load(function(){
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:5050/portfolio',
      success: function(data){
        console.log('成功获取到服务器端异步返回的数据：')
        //1.处理轮播广告的动态数据
        let html = ''   //轮播广告内的动态内容
        let html1 = ''  //个人介绍的动态内容
        let data1 = data.nameItems
        let data2 = data.introductionItems
        for(let i in data.carouselItems){ //根据动态数据创建HTML字符串
          html += `
            <div class="item ${i==0 ? 'active' : ''}">
              <img src="${data.carouselItems[i].pic}">
              <div class="col-sm-6">
                  <div class="carousel-content">
                        <h1 style="color:black" class="animation animated-item-1">${data1[i].sname}</h1>
                        <h2 class="animation animated-item-2">${data2[i].details}</h2>    
                  </div>
              </div>
            </div>
           `
         
      //     html1 += `
       
      //     <div class="animation-container animation-fade-down" data-animation-delay="0">
         
      //        <h1>${data1[i].sname}</h1>
         
      //    </div>
      //     <div class="animation-container animation-fade-left" data-animation-delay="300">
              
      //          <p class="subline">${data2[i].details}</p>
          
      //     </div>
      

      
      //  </div>
      //     `

        }
        $('.carousel .carousel-inner').html(html)
        // $('.content-name').html(html1)
    

    }
    })
})

$('#sendemail').click(function(){
  $('#modalEmailSucc').modal()
})