// function loadblog(num)
// {
//     $.ajax(
//         {
//             method:'GET',
//             url:'http://127.0.0.1:5050/blog',
//             success:function(pager)
//             {
//                 var html='';
//                 for(var p of pager.data)
//                 {
//                     html+=`
//                     <div id="${p.bid}" class="post-preview">
//                     <a href="blog_detail.html">
//                         <h2  id="title" class="post-title">
//                             Science has not yet mastered prophecy
//                         </h2>
//                         <h3 id="abstract" class="post-subtitle">
//                             We predict too much for the next year and yet far too little for the next ten.
//                         </h3>
//                     </a>
//                     <p><span class="meta">Posted by <a id="author">Start Bootstrap</a></span> <span class="meta" id="post_time">On August 24, 2017</span>
//                     </p> 
//                  </div>
//                 }
               
                
//                 `







//                 $(".pager").createPage({
//                     pageCount:pager.pageCount,
//                     currend:pager.num,
//                     backFn:function (p) {
//                         loadblog(p)
//                       }
//                 })

//             }
    
    
    
    
//         })
// }




$(window).load(function(){

$.ajax(
    {
        method:'GET',
        url:'http://127.0.0.1:5050/blog',
        success:function(data)
        {
            console.log('异步请求成功')
            let html=''
            html+=`
            <a href="blog_detail.html">
            <h2 id="title" class="post-title">
            "${data.title}"
            </h2>
            <h3 id="abstract" class="post-subtitle">
            "${data.abstract}"
            </h3>
        </a>
        <p><span class="meta">Posted by <a id="author">Start Bootstrap</a></span> <span class="meta" id="post_time">On August 24, 2017</span>
        </p>  ` 
         $('.blog_item1') .html(html)  
                 

        }




    }
)





})