/*******************************************/
/************创建数据库连接池****************/
/*******************************************/
//导入第三方提供的数据库驱动包
let mysql = require('mysql')

//使用mysql包提供的函数和对象，创建数据库连接池
let pool = mysql.createPool({
    host:       '127.0.0.1',
    port:       '3306',
    user:       'root',
    password:   '',
    database:   'edumall',
    connectionLimit: 30     //连接池大小限制   
})


/*******************************************/
/*************创建Web服务器******************/
/*******************************************/
//导入第三方模块：express，创建基于Node.js的Web服务器
let  express = require('express')
let cookieParser=require('cookie-parser')
let session=require('express-session')


//调用第三方模块提供的功能
let server = express()

//运行Web服务器监听特定的端口
let port = 5050
server.listen(port, function(){
    console.log('服务器启动成功，正在监听端口：', port)
})



/*******************************************/
/***************后台API*********************/
/*******************************************/

//使用Express提供的中间件：处理POST请求中的主体数据，保存在req.body属性中
//处理application/x-www-form-urlencoded类型的请求数据
server.use(express.urlencoded({
    extended: false     //是否使用扩展工具解析请求主体
}))
//自定义中间件：允许指定客户端的跨域访问
server.use(function(req, res, next){
    res.set('Access-Control-Allow-Origin',  'http://127.0.0.1:5000') //当前服务器允许来自任何客户端的跨域访问
    res.set("Access-Control-Allow-Headers", "X-Requested-With");
    res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.set("X-Powered-By",' 3.2.1');
    res.set("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", true);
   
    next() //放行，让后续的请求处理方法继续处理
})

let name="edumall"
server.use(cookieParser());
server.use(session({
    name:name,
    secret: "12345",
    resave: false,
    rolling:true,
    saveUninitialized: true,
    cookie: {maxAge: 60*60*1000}
}));

/**
 * 1.1商品列表
 * 接口地址：接口地址：http://127.0.0.1:5050/lang
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/lang
 */
server.get('/lang',function(req,res){
    let output = {
        carouselItems: [],
        productItems: [],
    }
    let loadedCount = 0 
    //执行数据库查询1：轮播广告条目
    let sql1 = 'SELECT * FROM edu_index_carousel'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
        if(loadedCount===2){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    let sql2='SELECT * FROM edu_lesson WHERE category=1'
    pool.query(sql2,function(err,result){
        if(err)throw err
        output.productItems = result
        loadedCount++
        if(loadedCount===2)
        {
            res.json(output)
        }
        
    })
})
server.get('/mobile',function(req,res){
    let output = {
        carouselItems: [],
        productItems: [],
    }
    let loadedCount = 0 
    //执行数据库查询1：轮播广告条目
    let sql1 = 'SELECT * FROM edu_index_carousel'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
        if(loadedCount===2){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    let sql2='SELECT * FROM edu_lesson WHERE category=2'
    pool.query(sql2,function(err,result){
        if(err)throw err
        output.productItems = result
        loadedCount++
        if(loadedCount===2)
        {
            res.json(output)
        }
        
    })
})
server.get('/ai',function(req,res){
    let output = {
        carouselItems: [],
        productItems: [],
    }
    let loadedCount = 0 
    //执行数据库查询1：轮播广告条目
    let sql1 = 'SELECT * FROM edu_index_carousel'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
        if(loadedCount===2){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    let sql2='SELECT * FROM edu_lesson WHERE category=3'
    pool.query(sql2,function(err,result){
        if(err)throw err
        output.productItems = result
        loadedCount++
        if(loadedCount===2)
        {
            res.json(output)
        }
        
    })
})

/**
 * 1.2商品详情
 * 接口地址：http://127.0.0.1:5050/footend/single
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/footend/single?lid=2
 */
server.get('/single',function(req,res){
    let lid = req.url.split('=')[1];
    if(!lid){
        res.json({})
        return
    }
    let sql = 'SELECT * FROM edu_lesson WHERE lid =?'
    pool.query(sql,[lid],function(err,result){
        if(err)throw err
        if(result.length>0){
            res.json(result)
        }
    })
})

/**
 * 1.3删除商品
 * 接口地址：http://127.0.0.1:5050/footend/cart/delete
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/footend/cart/delete
 */
server.get('/cart/delete',function(req,res){
    // let cid = req.body.cid
    let cid = req.url.split('=')[1];
    let sql = 'DELETE FROM edu_cart WHERE cid=?'
    pool.query(sql,[cid],function(err,result){
        console.log(result);
        if(err)throw err
        if(result.length>0){
            res.json({code:200,msg:'delete succ'})
        }
    })
})

/**
 * API 1.5、首页数据
 */
server.get('/index', function(req, res){
    let output = {
        carouselItems: [],
        langItems: [],
        mobileItems: [],
        aiItems: [],
    }
    let loadedCount = 0    //有几类数据已经加载完成——如果等于4说明四类数据全部加载完成

    //执行数据库查询1：轮播广告条目
    let sql1 = 'SELECT * FROM edu_index_carousel'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
        if(loadedCount===4){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    //执行数据库查询2：编程语言
    let sql2 = 'SELECT lid,title,details,pic,href FROM edu_index_lesson WHERE seq_lang>0 ORDER BY seq_lang LIMIT 6'
    pool.query(sql2, function(err, result){
        if(err)throw err
        output.langItems = result
        loadedCount++
        if(loadedCount===4){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    //执行数据库查询3：移动开发
    let sql3 = 'SELECT lid,title,details,pic,href FROM edu_index_lesson WHERE seq_mobile>0 ORDER BY seq_mobile LIMIT 6'
    pool.query(sql3, function(err, result){
        if(err)throw err
        output.mobileItems = result
        loadedCount++
        if(loadedCount===4){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
    //执行数据库查询4：人工智能
    let sql4 = 'SELECT lid,title,details,pic,href FROM edu_index_lesson WHERE seq_ai>0 ORDER BY seq_ai LIMIT 6'
    pool.query(sql4, function(err, result){
        if(err)throw err
        output.aiItems = result
        loadedCount++
        if(loadedCount===4){  //所有的四类数据全部加载完成
            res.json(output)
        }
    })
})
/**
 * 2.1用户注册
 * 接口地址：http://127.0.0.1:5050/user/register
返回格式：JSON
请求方式：POST
请求示例：http://127.0.0.1:5050/user/register

 */
server.post('/user/register', function(req, res){
    //读取客户端提交的请求数据
    let n = req.body.uname
    let p = req.body.upwd
    let m = req.body.email
    let h = req.body.phone

    if(!n){
        res.json( {code:401, msg: 'uname required'} ) 
        return
    }
    if(!p){
        res.json( {code:402, msg: 'upwd required'} )
        return
    }
    if(!m){
        res.json( {code:403, msg: 'email required'} )
        return
    }
    if(!h){
        res.json( {code:404, msg: 'phone required'} )
        return
    }
    //执行数据库操作——SELECT
    let sql1 = 'SELECT uid FROM edu_user WHERE uname=? OR email=? OR phone=?'
    pool.query(sql1, [n, m, h], function(err, result){
        if(err)throw err
        if(result.length>0){
            res.json({code:500, msg:'user already exists'})
            return
        }
        //执行数据库操作——INSERT
        let sql2 = 'INSERT INTO edu_user(uname, upwd, email, phone) VALUES(?, ?, ?, ?)'
        pool.query(sql2, [n, p, m, h], function(err, result){
            if(err)throw err
            //向客户端输出响应消息——返回数据中附加了新增的用户自增编号
            res.json({code:200, msg:'register succ', uid:result.insertId})
        })
    }) 
    
})



/**
 * 2.1用户登录
 * 接口地址：http://127.0.0.1:5050/user/login
返回格式：JSON
请求方式：POST
请求示例：http://127.0.0.1:5050/user/login

 */
server.post('/user/login', function(req, res){
    //读取客户端提交的请求数据
    let n = req.body.uname
    let p = req.body.upwd
   
    if(!n){
        res.json( {code:401, msg: 'uname required'} ) 
        return
    }
    if(!p){
        res.json( {code:402, msg: 'upwd required'} )
        return
    }
    //执行数据库操作——SELECT
    let sql1 = 'SELECT uid FROM edu_user WHERE uname=? and upwd=?'
    pool.query(sql1, [n, p], function(err, result){
        if(err)throw err
        if(result.length>0){
            req.session.uname=n;
            req.session.isLogin=true;
           
            res.json({code:200, msg:'user login succ'})
            return
        }
        else
        {
            res.json({code:403, msg:'uname or upwd err'})
            return
        }
       
    }) 
    
})





/**
 * API 2.7检测邮箱是否存在
 * 接口地址：http://127.0.0.1:5050/user/check/email
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/user/check/email?email=ya@qq.com

 */
server.get('/user/check/email',function(req,res){
    let email=req.url.split('=')[1]
    let sql='SELECT uid FROM edu_user WHERE email=?'
    pool.query(sql,[email],function(err,result)
    {
        if(err) throw err
        if(result.length>0)
        {
            res.json({code:200,msg:"email already exists"})
            return;
        }
        else
        {
            res.json({code:201,msg:"email non-exists "})
        }
    })



})

/**
 * API 2.8检测手机是否存在
 * 接口地址：http://127.0.0.1:5050/user/check/phone
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/user/check/phone?phone=18111111111
 */
server.get('/user/check/phone',function(req,res){
    let phone=req.url.split('=')[1];
    let sql='SELECT uid FROM edu_user WHERE phone=?'
    pool.query(sql,[phone],function(err,result)
    {
        if(err) throw err
        if(result.length>0)
        {
            res.json({code:200,msg:"phone already exists"})
        
        }
        else
        {
            res.json({code:201,msg:"phone non-exists "})
        }
    })



})


/**
 * API 2.9、检测用户名是否存在
接口地址：http://127.0.0.1:5050/user/check/uname
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/user/check/uname?uname=ding

 */
server.get('/user/check/uname',function(req,res){
    let uname=req.url.split('=')[1];
    let sql='SELECT uid FROM edu_user WHERE uname=?'
    pool.query(sql,[uname],function(err,result)
    {
        if(err) throw err
        if(result.length>0)
        {
            res.json({code:200,msg:"uname already exists"})
            return
        }
        else
        {
            res.json({code:201,msg:"uname non-exists "})
            return
        }
    })



})


/**
 * 2.10、退出登录
接口地址：http://127.0.0.1:5050/user/logout
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/user/logout

JSON返回示例
{ "code":200, "msg":"logout succ" }

 */
server.get('/user/logout',function(req,res){

//    req.session.destroy(function(err){
//     if(err)throw err
    
//      res.clearCookie(name); 
//      res.redirect('/');
//      res.json({"code":200,"msg":"logout succ"})
//      return
//    })
    req.session.uname=''
    req.session.isLogin=false
    res.json({"code":200,"msg":"logout succ"})
    return
})



/**
 * 2.11、获取当前用户会话信息
接口地址：http://127.0.0.1:5050/user/sessiondata
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/user/sessiondata

JSON返回示例
{  "uname":"dingding","isLogin":false }

 */
server.get('/user/sessiondata',function(req,res){
   
   
    // res.send({"uname":req.session.uname,"isLogin":req.session.isLogin})
    res.json({"uname":req.session.uname,"isLogin":req.session.isLogin})
    return
})

/**
 * API3.1 联系我们
接口地址：http://127.0.0.1:5050/contact
返回格式：JSON
请求方式：POST
请求示例：http://127.0.0.1:5050/contact
 */
server.post('/contact',function(req,res){

    let uname=req.body.name
    let email=req.body.email
    let phone=req.body.phone
    let company=req.body.company
    let subject=req.body.subject
    let message=req.body.message

    let sql="INSERT INTO edu_contact(uname, email, phone, company,subject,message) VALUES(?,?,?,?,?,?)"

    pool.query(sql,[uname,email,phone,company,subject,message],function(err,result){

        if(err)throw err

        res.json({"code":100,"msg":"contact succ"})

    })


})

/**
 * 3.1搜索
 * 接口地址:http://127.0.0.1:5050/search
 * 请求方式：GET
 * 请求示例：http://127.0.0.1:5050/search?keyword=?
 */
server.get('/search',function(req,res){
    let keyword=req.url.split("=")[1];
    
    let sql="SELECT * FROM edu_lesson WHERE CONCAT_WS(' ',lname,teacher_name,synopsis) REGEXP ?"
    pool.query(sql,[keyword],function(err,result){
        if (err) throw err
        if(result.length>0)
        {
            res.json(result)
        }
        else
        {
            res.json({"code":404,"msg":"not thing"})
        }

    })



})


/**
 * 3.2 添加商品至购物车
 * 接口地址：http://127.0.0.1:5050/single
返回格式：JSON
请求方式：POST
请求示例：http://127.0.0.1:5050/single
 */
server.post('/single',function(req,res){
    let uname=req.body.uname;
    let lesson_id=req.body.lesson_id;
    let teacher_id=req.body.teacher_id;
    let price=req.body.price;
    let sql='INSERT INTO edu_cart(uname,lesson_id,teacher_id,price) VALUES(?,?,?,?)'
    pool.query(sql,[uname,lesson_id,teacher_id,price],function(err,result){
        if(err)throw err
        res.json({code:200,msg:'submit succ'})
    })
})

/**
 * 3.3 购物车项列表
 * 接口地址：http://127.0.0.1:5050/cart
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/cart?uname=?
 */
server.get('/cart',function(req,res){
    let uname=req.url.split('=')[1]
    let sql='SELECT * FROM edu_lesson,edu_cart,edu_teacher WHERE edu_cart.uname=? AND edu_lesson.lid=edu_cart.lesson_id AND edu_teacher.tid=edu_cart.teacher_id'
    pool.query(sql,[uname],function(err,result){
        if(err)throw err
        if(result.length>0){
            res.json(result)
        }
    })
})

/***
 * 3.4删除购物车项
 * 接口地址：http://127.0.0.1:5050/cart/item/delete
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/cart/item/delete?iid=2

 */

/**
 * API 4.1 获取博客数据
接口地址：http://127.0.0.1:5050/blog/currentID
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/blog/currentID=1
 */
server.get('/blog',function(req,res){
    let currentID=req.url.split('=')[1]
    let list=currentID*6
    let sql='SELECT bid, uname,title,post_time,abstract FROM edu_blog LIMIT ?,?'
    pool.query(sql,[list-6,6],function(err,result){
        if(err)throw err

        if(result)
        {
            res.json(result)
            return
        }
        else
        {
            res.json({})
            return
        }
            
        
       


    })

})


/**
 * API 4.2获取博文详情
 * 接口地址：http://127.0.0.1:5050/blog/detail
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/blog/detail?bid=1
 */
server.get('/blog/details',function(req,res){
    let bid=req.url.split('=')[1];
    let sql='SELECT title,abstract,uname,details,pic,post_time FROM edu_blog WHERE bid=?'
    pool.query(sql,[bid],function(err,result){
        if(err)throw err
        res.json(result[0]);
        return
    })




})


/**
 *  * API 4.3 写文章
 * 接口地址：http://127.0.0.1:5050/blog/write
返回格式：JSON
请求方式：POST
请求示例：http://127.0.0.1:5050/blog/write
 */
server.post('/blog/write',function(req,res){

    let author=req.body.uname;
    let pic=req.body.pic;
    let title=req.body.title;
    let abstract=req.body.abstract;
    let details=req.body.detail;
    let post_time=req.body.post_time;

    let sql='INSERT INTO edu_blog(uname, title, pic, details,abstract,post_time) VALUES(?, ?, ?, ?,?,?)'

    pool.query(sql,[author,title,pic,details,abstract,post_time],function(err,result){
        if(err)throw err
        res.json({code:200,msg:'submit succ'})
    })
    return
})




/**
 * API 5.1 教师数据
 */
server.get('/about-us', function(req, res){
    let output = {
        carouselItems: [],
        teacherItems: [],
    }
    let loadedCount = 0    //有几类数据已经加载完成——如果等于2说明二类数据全部加载完成

    //执行数据库查询1：教师轮播广告条目
    let sql1 = 'SELECT img FROM edu_teacher_carousel'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
         if(loadedCount===2){  //所有的二类数据全部加载完成
            res.json(output)
         }
    })
    // 执行数据库查询2：教师信息条目
    let sql2 = 'SELECT tpic From edu_teacher'
    pool.query(sql2, function(err, result){
        if(err)throw err
        output.teacherItems = result
        loadedCount++
        if(loadedCount===2){  //所有的二类数据全部加载完成
            res.json(output)
        }
    })

})

/**
 * API 6.1 获取学生数据
 */
server.get('/portfolio', function(req, res){
    let output = {
        carouselItems: [],
        nameItems: [],
        introductionItems: [],

    }
    let loadedCount = 0    //有几类数据已经加载完成——如果等于3说明三类数据全部加载完成

    //执行数据库查询1：学生风采轮播条目
    let sql1 = 'SELECT pic FROM edu_student'
    pool.query(sql1, function(err, result){
        if(err)throw err
        output.carouselItems = result
        loadedCount++
         if(loadedCount===3){  //所有的三类数据全部加载完成
            res.json(output)
         }
    })
    //执行数据库查询2：学生风采姓名条目
    let sql2 = 'SELECT sname FROM edu_student'
    pool.query(sql2, function(err, result){
        if(err)throw err
        output.nameItems = result
        loadedCount++
        if(loadedCount===3){  //所有的三类数据全部加载完成
            res.json(output)
        }
    })
    //执行数据库查询3：学生风采自我介绍条目
    let sql3 = 'SELECT details FROM edu_student'
    pool.query(sql3, function(err, result){
        if(err)throw err
        output.introductionItems = result
        loadedCount++
        if(loadedCount===3){  //所有的三类数据全部加载完成
            res.json(output)
        }
    })


})


/**
 * 聊天室server设置
 */

var app = express();
var http = require('http').Server(app);
// 思考：socket.io作为一个函数，当前http作为参数传入生成一个io对象
// io-server
var io = require("socket.io")(http);

var users = []; // 储存登录用户
var usersInfo = [];  // 存储用户姓名和头像

// 路由为/默认footend静态文件夹
app.use('/', express.static(__dirname + '/footend'));
 
// 每个连接的用户都有专有的socket
/* 
   io.emit(foo); //会触发所有用户的foo事件
   socket.emit(foo); //只触发当前用户的foo事件
   socket.broadcast.emit(foo); //触发除了当前用户的其他用户的foo事件
*/
io.on('connection', (socket)=> {
    // 渲染在线人员
    io.emit('disUser', usersInfo);

    // 登录，检测用户名
    socket.on('login', (user)=> {
        if(users.indexOf(user.name) > -1) { 
            socket.emit('loginError');
        } else {
            users.push(user.name);
            usersInfo.push(user);

            socket.emit('loginSuc');
            socket.nickname = user.name;
            io.emit('system', {
                name: user.name,
                status: '进入'
            });
            io.emit('disUser', usersInfo);
        
        }
    });

    // 发送窗口抖动
    socket.on('shake', ()=> {
        socket.emit('shake', {
            name: '您'
        });
        socket.broadcast.emit('shake', {
            name: socket.nickname
        });
    });

    // 发送消息事件
    socket.on('sendMsg', (data)=> {
        var img = '';
        for(var i = 0; i < usersInfo.length; i++) {
            if(usersInfo[i].name == socket.nickname) {
                img = usersInfo[i].img;
            }
        }
        socket.broadcast.emit('receiveMsg', {
            name: socket.nickname,
            img: img,
            msg: data.msg,
            color: data.color,
            type: data.type,
            side: 'left'
        });
        socket.emit('receiveMsg', {
            name: socket.nickname,
            img: img,
            msg: data.msg,
            color: data.color,
            type: data.type,
            side: 'right'
        });
    });  

    // 断开连接时
    socket.on('disconnect', ()=> {
        var index = users.indexOf(socket.nickname); 
        if(index > -1 ) {  // 避免是undefined
            users.splice(index, 1);  // 删除用户信息
            usersInfo.splice(index, 1);  // 删除用户信息

            io.emit('system', {  // 系统通知
                name: socket.nickname,
                status: '离开'
            });
            
            io.emit('disUser', usersInfo);  // 重新渲染
          
        }
    });
});

http.listen(5000, function() {
    console.log('listen 5000 port.');
});