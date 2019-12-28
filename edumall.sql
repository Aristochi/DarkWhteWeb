-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2019-12-25 04:23:24
-- 服务器版本： 10.4.8-MariaDB
-- PHP 版本： 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `edumall`
--
CREATE DATABASE IF NOT EXISTS `edumall` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `edumall`;

-- --------------------------------------------------------

--
-- 表的结构 `edu_blog`
--

DROP TABLE IF EXISTS `edu_blog`;
CREATE TABLE IF NOT EXISTS `edu_blog` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `title` varchar(32) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `details` varchar(10240) DEFAULT NULL,
  `abstract` varchar(128) DEFAULT NULL,
  `post_time` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_blog`
--

INSERT INTO `edu_blog` (`bid`, `uid`, `uname`, `title`, `pic`, `details`, `abstract`, `post_time`) VALUES
(1, 1, 'test', '     Science has not yet mastere', 'images\\blog\\blog1.jpg', 'Science has not yet mastered prophecy\r\n                       ', '     Science has not yet mastered prophecy\r\n                       ', '2019'),
(2, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(3, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(4, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(5, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(6, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(7, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(8, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019'),
(9, 1, 'safd', 'asdffdsa', 'images\\blog\\blog1.jpg', 'adsfdfsadsfsagasdg', 'sdafdagasdg', '2019');

-- --------------------------------------------------------

--
-- 表的结构 `edu_cart`
--

DROP TABLE IF EXISTS `edu_cart`;
CREATE TABLE IF NOT EXISTS `edu_cart` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) DEFAULT NULL,
  `lesson_id` int(11) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL ,
   PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `edu_cart`
--

INSERT INTO `edu_cart` (`cid`, `uname`, `lesson_id`, `teacher_id`, `price`) VALUES
(, '1', 9, 1, 999),
(, 'zbt', 1, 1, 999),
(, 'zbt', 1, 1, 999),
(, 'zbt', 1, 1, 999),
(, 'zbt', 1, 1, 999);

-- --------------------------------------------------------

--
-- 表的结构 `edu_contact`
--

DROP TABLE IF EXISTS `edu_contact`;
CREATE TABLE IF NOT EXISTS `edu_contact` (
  `uname` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `company` varchar(16) DEFAULT NULL,
  `subject` varchar(64) DEFAULT NULL,
  `message` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_contact`
--

INSERT INTO `edu_contact` (`uname`, `email`, `phone`, `company`, `subject`, `message`) VALUES
('  adfssssadfssssafdssafsd', 'adfssssadfssssafdssafsd', '1111111111111', '  adfssssadfssss', '  adfssssadfssssafdssafsd', 'undefined'),
('TiMiE', '2519257105@qq.com', '13250374396', '华南师范大学', 'subject', 'undefined'),
('TiMiE', '2519257105@qq.com', '13250374396', '华南师范大学', 'subject', 'undefined'),
('TiMiE', '2519257105@qq.com', '12345678910', '华南师范', 'subject', 'subject');

-- --------------------------------------------------------

--
-- 表的结构 `edu_index_carousel`
--

DROP TABLE IF EXISTS `edu_index_carousel`;
CREATE TABLE IF NOT EXISTS `edu_index_carousel` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `detail` varchar(128) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `edu_index_carousel`
--

INSERT INTO `edu_index_carousel` (`cid`, `img`, `img2`, `title`, `detail`, `href`) VALUES
(1, 'images/slider/bg7.png', 'images/slider/img1.png', '编程语言', '我们紧跟市场需求与时代步伐，开设国内外热门编程语言课程满足你的不同需求。我们有名师教学，案例分析，带你从零基础入门编程语言的开发。\r\n                   ', 'lang.html'),
(2, 'images/slider/bg5.png', 'images/slider/img2.png', '移动开发', '也称为手机开发，或者移动互联网开发。我们有经验丰富的移动开发专业导师为你的学习之路保驾护航。    ', 'mobile.html'),
(3, 'images/slider/bg8.png', 'images/slider/img3.png', '人工智能', '带你走进人工智能技术前沿，把握时代脉搏，保持睿智且极具活力的大脑。全方位多角度剖析人工智能领域的方方面面。', 'ai.html');

-- --------------------------------------------------------

--
-- 表的结构 `edu_index_lesson`
--

DROP TABLE IF EXISTS `edu_index_lesson`;
CREATE TABLE IF NOT EXISTS `edu_index_lesson` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `seq_lang` tinyint(4) DEFAULT NULL,
  `seq_mobile` tinyint(4) DEFAULT NULL,
  `seq_ai` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `edu_index_lesson`
--

INSERT INTO `edu_index_lesson` (`lid`, `title`, `details`, `pic`, `href`, `seq_lang`, `seq_mobile`, `seq_ai`) VALUES
(1, 'Python', '带你学习python优质的文档、丰富的AI库、机器学习库、自然语言和文本处理库等。', NULL, 'lang.html', 1, -1, -1),
(2, 'Java', '多领域教学培养IT多面手，项目实战贯穿始终。带你从入到到精通。', NULL, 'lang.html', 2, -1, -1),
(3, 'PHP', '开发简单，入门快，操作简单，所见即所得，非常适合零基础的同学选择.', NULL, 'lang.html', 3, -1, -1),
(4, 'C语言', '语言地位四十多年未被撼动，不可替代；为学习其它语言打下基础，功能强大。', NULL, 'lang.html', 4, -1, -1),
(5, 'C++', '现代编程语言起点，跨行业跨平台开发神器。深耕一线实战讲师，传授多年行业经验', NULL, 'lang.html', 5, -1, -1),
(6, 'JavaScript', 'Web前端之本，进阶全栈基石。前端框架源于原生JS编写,是迈向前端的必备技能', NULL, 'lang.html', 6, -1, -1),
(7, 'iOS应用开发', '面向零基础的视频教学，从零开始打造你的第一个IOS app。真实项目案例实战教学，项目经理全程辅导。', 'images/portfolio/recent/mobile3.png', 'mobile.html', -1, 1, -1),
(8, 'Android应用开发', '从0搭建一款安卓应用，这是一款性价比超高的Android开发从初级到高级不断成长的教学。', 'images/portfolio/recent/mobile2.png', 'mobile.html', -1, 2, -1),
(9, '微信小程序应用开发', '本课程致力于打造一站式微信小程序开发全方位学习模式，微信小程序开发从入门到精通。从宝贵的“实战案例”总结经验，快速开发你的微信小程序。', 'images/portfolio/recent/mobile1.png', 'mobile.html', -1, 3, -1),
(10, 'Unity3D开发', 'Unity3D是一款强大的跨平台游戏开发引擎。Unity引擎占据手游开发的80%左右份额。学习本课程能助你掌握Unity游戏开发的大多数模块知识。', 'images/portfolio/recent/mobile4.png', 'mobile.html', -1, 4, -1),
(11, 'Android Studio入门到精通', '轻松学会Android ，带你零基础入门。我们的导师拥有7年Android开发经验，丰富的项目实战经验和知识体系，深受广大学生的好评。', 'images/portfolio/recent/mobile5.png', 'mobile.html', -1, 5, -1),
(12, '微信公众号开发', '本课程采用“理论+实战案例”教学形式，不仅讲解微信公众号开发的必备知识，大量真实开发案例和demo，而且手把手带你搭建微信公众号。', 'images/portfolio/recent/mobile6.png', 'mobile.html', -1, 6, -1),
(13, '数学基础', '本课程旨在为同学们快速打下数学基础，通俗讲解其中每一个知识点。课程内容涉及高等数学、线性代数等核心知识。', 'images/services/ai1.png', 'ai.html', -1, -1, 1),
(14, '语言基础', '本课程带大家对常用的Numpy进行使用讲解和形象演示，同时对深度学习需要用到的数学基础概念进行举例说明。', 'images/services/ai3.png', 'ai.html', -1, -2, 2),
(15, '算法基础', '本课程讲解TensorFlow深度学习的概念和使用方法，用通俗易懂的实例系统讲解TensorFlow的使用。', 'images/services/ai2.png', 'ai.html', -1, -3, 3),
(16, '深度学习', '本课程以简短高效的方式，从深度学习的多个角度向我们论述深度学习算法的原理和实现。', 'images/services/ai4.png', 'ai.html', -1, -4, 4),
(17, '自然语言处理实践', '课程旨在用最接地气的方式讲解复杂的算法原理，基于真实数据集，通过实践案例进行项目实战。', 'images/services/ai5.png', 'ai.html', -1, -5, 5),
(18, '人脸识别项目实战', '通过一个完整的案例系统的介绍人工智能关键技术，帮助大家深入了解人脸识别系统的工作原理与实现。', 'images/services/ai6.png', 'ai.html', -1, -6, 6);

-- --------------------------------------------------------

--
-- 表的结构 `edu_lesson`
--

DROP TABLE IF EXISTS `edu_lesson`;
CREATE TABLE IF NOT EXISTS `edu_lesson` (
  `lid` int(11) NOT NULL,
  `category` int(11) DEFAULT NULL,
  `lname` varchar(128) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `teacher_name` varchar(32) NOT NULL,
  `details` varchar(1024) DEFAULT NULL,
  `synopsis` varchar(1024) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `img` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `edu_lesson`
--

INSERT INTO `edu_lesson` (`lid`, `category`, `lname`, `teacher_id`, `teacher_name`, `details`, `synopsis`, `price`, `img`) VALUES
(1, 1, 'C++', 1, '张一', '课程详细信息介绍', '课程简介', 999, 'images/single/1.jpg'),
(2, 1, 'Java', 2, '张二', '课程详细信息介绍1', '课程简介1', 1234, 'images/single/2.jpg'),
(3, 1, 'python', 3, '张三', '课程详细信息介绍2', '课程简介2', 1234, 'images/single/3.jpg'),
(4, 1, 'PHP', 4, '张四', '课程详细信息介绍3', '课程简介3', 1234, 'images/single/4.jpg'),
(5, 2, 'C++', 1, '张一', '课程详细信息介绍', '课程简介', 999, 'images/single/1.jpg'),
(6, 2, 'Java', 2, '张二', '课程详细信息介绍1', '课程简介1', 1234, 'images/single/2.jpg'),
(7, 2, 'python', 3, '张三', '课程详细信息介绍2', '课程简介2', 1234, 'images/single/3.jpg'),
(8, 2, 'PHP', 4, '张四', '课程详细信息介绍3', '课程简介3', 1234, 'images/single/4.jpg'),
(9, 3, 'C++', 1, '张一', '课程详细信息介绍', '课程简介', 999, 'images/single/1.jpg'),
(10, 3, 'Java', 2, '张二', '课程详细信息介绍1', '课程简介1', 1234, 'images/single/2.jpg'),
(11, 3, 'python', 3, '张三', '课程详细信息介绍2', '课程简介2', 1234, 'images/single/3.jpg'),
(12, 3, 'PHP', 4, '张四', '课程详细信息介绍3', '课程简介3', 1234, 'images/single/4.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `edu_order`
--

DROP TABLE IF EXISTS `edu_order`;
CREATE TABLE IF NOT EXISTS `edu_order` (
  `oid` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `order_time` bigint(20) DEFAULT NULL,
  `pay_time` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `edu_student`
--

DROP TABLE IF EXISTS `edu_student`;
CREATE TABLE IF NOT EXISTS `edu_student` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(32) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `details` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_student`
--

INSERT INTO `edu_student` (`sid`, `sname`, `pic`, `details`) VALUES
(1, '吴伊凡', 'images/portfolio/man1.jpg', '在DarkWhite学习web前端三个月，找到月薪11k的工作'),
(2, '菜虚鲲', 'images/portfolio/man2.jpg', '在DarkWhite学习iOS三个月，找到月薪8k的工作'),
(3, '孙箫川', 'images/portfolio/man3.jpg', '在DarkWhite学习java三个月，找到月薪12k的工作');

-- --------------------------------------------------------

--
-- 表的结构 `edu_teacher`
--

DROP TABLE IF EXISTS `edu_teacher`;
CREATE TABLE IF NOT EXISTS `edu_teacher` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tname` varchar(32) DEFAULT NULL,
  `lessons_id` int(11) DEFAULT NULL,
  `tpic` varchar(128) DEFAULT NULL,
  `details` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_teacher`
--

INSERT INTO `edu_teacher` (`tid`, `tname`, `lessons_id`, `tpic`, `details`) VALUES
(1, '张三', 123456, 'images/teacher/man1.jpg', '这里是关于教师的详细介绍'),
(2, '张三', 123456, 'images/teacher/man2.jpg', '这里是关于教师的详细介绍'),
(3, '张三', 123456, 'images/teacher/man3.jpg', '这里是关于教师的详细介绍'),
(4, '张三', 123456, 'images/teacher/man4.jpg', '这里是关于教师的详细介绍');

-- --------------------------------------------------------

--
-- 表的结构 `edu_teacher_carousel`
--

DROP TABLE IF EXISTS `edu_teacher_carousel`;
CREATE TABLE IF NOT EXISTS `edu_teacher_carousel` (
  `tcid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`tcid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_teacher_carousel`
--

INSERT INTO `edu_teacher_carousel` (`tcid`, `img`, `title`) VALUES
(1, 'images/teacher_carousel/banner1.jpg', '教师轮播图片1'),
(2, 'images/teacher_carousel/banner2.jpg', '教师轮播图片2'),
(3, 'images/teacher_carousel/banner3.jpg', '教师轮播图片3'),
(4, 'images/teacher_carousel/banner4.jpg', '教师轮播图片4');

-- --------------------------------------------------------

--
-- 表的结构 `edu_user`
--

DROP TABLE IF EXISTS `edu_user`;
CREATE TABLE IF NOT EXISTS `edu_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `edu_user`
--

INSERT INTO `edu_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `avatar`, `user_name`, `gender`) VALUES
(1, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', 1),
(2, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', 1),
(3, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', 1),
(4, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', 0),
(5, 'zbt', '123456', 'sdalkjgk', '124564646', NULL, NULL, NULL),
(6, 'zbt', '123456', 'sdalkjgk', '124564646', NULL, NULL, NULL),
(7, 'zbt', '123456', 'sdalkjgk', '124564646', NULL, NULL, NULL),
(8, 'zbt', '123456', 'sdalkjgk', '124564646', NULL, NULL, NULL),
(10, '黄承书', '123456', '2519257105@aa.com', '12345678910', NULL, NULL, NULL),
(11, 'zbtt', '111111', '123', '11111111111', NULL, NULL, NULL),
(12, 'zbb', '111111', '1234', '11111111112', NULL, NULL, NULL),
(13, 'zbb5', '111111', '123455', '11111111122', NULL, NULL, NULL),
(14, 'zbb52', '111111', '1234552', '11111111222', NULL, NULL, NULL),
(15, 'zbtg', '000000', 'fasd', '11111122345', NULL, NULL, NULL),
(16, '555', '000000', '555', '12345678900', NULL, NULL, NULL),
(17, '5556', '000000', '5556', '12345678906', NULL, NULL, NULL),
(18, '444', '111111', '444444', '11111122222', NULL, NULL, NULL),
(19, '4445', '111111', '4444445', '11111122224', NULL, NULL, NULL),
(20, '111111', '000000', '111111', '11111114444', NULL, NULL, NULL),
(21, '1111114', '000000', '1111114', '11111114445', NULL, NULL, NULL),
(22, 'sss', '111111', 'sss', '11111111177', NULL, NULL, NULL),
(23, '888', '888888', '888', '88888888888', NULL, NULL, NULL),
(24, '8887', '888888', '8887', '88888888887', NULL, NULL, NULL),
(25, '777', '000000', '777', '77777777777', NULL, NULL, NULL),
(26, '666', '111111', '666', '66666666666', NULL, NULL, NULL),
(27, '999', '333333', '9999', '99999999999', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `edu_user_lesson`
--

DROP TABLE IF EXISTS `edu_user_lesson`;
CREATE TABLE IF NOT EXISTS `edu_user_lesson` (
  `uid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `lid` int(11) DEFAULT NULL,
  `oid` int(11) DEFAULT NULL,
  `ltime` bigint(20) DEFAULT NULL,
  `lname` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
