


function loadData(currentID)
{


    //currentID当前第几页
    $.ajax(
        {
            method:'GET',
            url:'http://127.0.0.1:5050/blog',
            data:`currentID=${currentID}`,
            success:function(data)
            {
               paginatFactory(data,currentID);                           
            }
    
    
    
    
        })
}



function paginatFactory(res,currentID)
{




    let html=''
    if(res)
    {
        for(let i=0;i<res.length;i++)
        {
        html+=`
        <div class="blog_item post-preview">
        <a href="blog_detail.html?bid=${res[i].bid}">
        <h2 id="title" class="post-title">
        "${res[i].title}"
        </h2>
        <h3 id="abstract" class="post-subtitle">
        "${res[i].abstract}"
        </h3>
    </a>
    <p><span class="meta"><a id="author">作者："${res[i].uname}"</a></span>&nbsp;&nbsp; &nbsp;<span class="meta" class="post_time">发表时间："${res[i].post_time}"</span>
    </p>
    </div> 
    <hr>  
        `
        }
    }
    
       
$('#blog_list').html(html);

    
    let pre=1//上一页
    if(currentID>1)
    {
        pre=currentID-1
    }
    
    let prv=currentID+1//下一页
    let frag=''
    let pagehtml=''
    pagehtml+=` <li data-pageid=${pre}><a><i class="fa fa-long-arrow-left"></i>上一页</a></li>`
    let total=parseInt(currentID/5)
    
    let i=total*5
    if(i==0)
    {
        i=1
    }
    for( i;i<=(total+1)*5;i++)
    {
        if(i==currentID)
        {
             frag='active'
        }
        else
        {
            frag=''
        }
        pagehtml+=`<li id="pli" data-pageid=${i} class="${frag}"><a>${i}</a></li>`
    }
    pagehtml+=` <li data-pageid=${prv} ><a><i class="fa fa-long-arrow-right"></i>下一页</a></li>`
    $('.pagination').html(pagehtml)
}

loadData(1);


$(document).on('click','.pagination li',function(){

    var pageId = $(this).data('pageid');
    console.log(pageId) 
    loadData(pageId);

    


})