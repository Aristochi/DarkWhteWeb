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
    res.set('Access-Control-Allow-Origin',  '*') //当前服务器允许来自任何客户端的跨域访问
    next() //放行，让后续的请求处理方法继续处理
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
 * API 4.1 获取博客数据
接口地址：http://127.0.0.1:5050/blog
返回格式：JSON
请求方式：GET
请求示例：http://127.0.0.1:5050/blog
 */
server.get('/blog',function(req,res){
    let sql='SELECT title,abstract FROM edu_blog'
    pool.query(sql,function(err,result){
        if(err)throw err
        if(result.length>0)
        {
            res.json(result[0])
            
        }
        else
        {
            res.json({})
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
            console.log(users.length + ' user connect.');
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
            console.log('a user left.');
        }
    });
});

http.listen(5000, function() {
    console.log('listen 5000 port.');
});