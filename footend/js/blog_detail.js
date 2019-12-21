$(window).load(function(){

    let bid=decodeURI(location.href).split('=')[1];

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