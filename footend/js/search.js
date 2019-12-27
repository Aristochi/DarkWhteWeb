$(window).load(function(){

    let keyword=decodeURI(location.href).split('=')[1]
    console.log(keyword)
    $.ajax({

        method:"GET",
        url:"http://127.0.0.1:5050/search",
        data:`keyword=${keyword}`,
        success:function(data)
        {
            console.log(data)
            let htmllesson=''
           if(data.code==404)
            {
                htmllesson+=`<h2>无查询结果，请换一个关键词<h2>`
            }
            else
            {
                for(let i=0;i<data.length;i++){
                    htmllesson +=`
                    <div class="col-xs-12 col-sm-3 col-md-3">
                      
                        <div class="viewed-courses-box">
                            <div class="viewed-courses-img">
                                <a href="/single.html?lid=${data[i].lid}">
                                <img  src="${data[i].img}" width="100px" height="100px" alt="coureses-img1">
                                </a>
                            </div>
                            <div class="viewed-courses-text">
                                <a href="/single.html?lid=${data[i].lid}">        
                                        <h6>${data[i].lname}</h6>
                                        <h6>${data[i].details}</h6>
                                </a>
                                <p>By : ${data[i].teacher_name}</p>
                                <div class="star">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div class="price">
                                    ￥${data[i].price} 
                                </div>
                             </div>
                        </div>
                    
                    </div>
                    `
                   
         
            }
            }
            $('#lesson').html(htmllesson)
               
              }






    })




})