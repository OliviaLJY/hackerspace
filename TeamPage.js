import React, {Component} from 'react';
import { Button, Container, Menu, Image, Header} from 'semantic-ui-react'
import "../css/Profile.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import zhangjiakai from "../assets/images/csss2019/主席团/张家恺.jpg"
import xushuhui from "../assets/images/csss2019/主席团/徐书卉.jpg"
import chenqiaohao from "../assets/images/csss2019/主席团/陈翘浩.jpg"
import tongyao from "../assets/images/csss2019/主席团/童瑶.jpg"
import guxinyan from "../assets/images/csss2019/主席团/顾欣妍.jpg"

import wangyilin from "../assets/images/csss2019/宣传部/王艺霖.jpg"
import zhangxinyue from "../assets/images/csss2019/宣传部/张馨月.jpg"
import bisiyao from "../assets/images/csss2020/council/毕思瑶.jpeg"
import guojinlin from "../assets/images/csss2020/council/郭锦琳.jpeg"
import jindi from "../assets/images/csss2019/宣传部/金荻.jpg"
import wangjinyi from "../assets/images/csss2019/宣传部/王金益.jpg"
import zhangningxin from "../assets/images/csss2019/宣传部/张宁欣.jpg"

import qihongyang from "../assets/images/csss2020/council/漆泓阳.jpeg"
import xiaozhiyue from "../assets/images/csss2019/活动部/肖芷玥.jpg"
import liyifan from "../assets/images/csss2019/活动部/李一凡.jpg"
import xunyuxin from "../assets/images/csss2020/council/郇宇欣.jpeg"
import wangyifan from "../assets/images/csss2019/活动部/王逸凡.jpg"
import heyiwei from "../assets/images/csss2020/council/贺逸惟.jpeg"
import huqiyuan from "../assets/images/csss2020/council/胡淇媛.jpeg"
import gaoshiyuan from "../assets/images/csss2019/活动部/高诗元.jpg"

import chenyuqian from "../assets/images/csss2020/council/陈羽芊.jpeg"
import liushuyang from "../assets/images/csss2019/外联部/刘舒扬.jpg"
import emilyfeng from "../assets/images/csss2019/外联部/Emily Feng.jpg"
import feiaiwen from "../assets/images/csss2019/外联部/费爱雯.jpg"
import lvchuyuan from "../assets/images/csss2019/外联部/陈羽芊.jpg"
import chouqiyun from "../assets/images/csss2020/council/仇启贇.jpeg"
import chenzhangchi from "../assets/images/csss2020/外联部/陈张驰.jpeg"
import yanghongjia from "../assets/images/csss2020/外联部/杨鸿嘉.jpeg"
import fengjialin from "../assets/images/csss2020/外联部/冯家琳.jpeg"
import shenyanwei from "../assets/images/csss2020/外联部/沈彦苇.jpeg"
import wangshiqi from "../assets/images/csss2020/外联部/王诗淇.jpeg"
import lirunjiu from "../assets/images/csss2020/外联部/李润玖Renny.jpeg"
import luojiayi from "../assets/images/csss2020/外联部/罗嘉仪.jpeg"

import dumengru from "../assets/images/csss2019/发财部/杜梦如.jpg"
import yangshuai from "../assets/images/csss2019/发财部/杨帅.jpg"
import wangmengchen from "../assets/images/csss2020/council/王梦辰.jpeg"
import miutianqi from "../assets/images/csss2019/发财部/缪天琪.jpg"
import shaoanqi from "../assets/images/csss2019/发财部/邵安琦.jpg"
import zhoujiayu from "../assets/images/csss2019/发财部/周佳羽.jpg"
import lvyongze from "../assets/images/csss2019/发财部/吕永泽.jpg"

import taochencheng from "../assets/images/csss2019/文化部/陶陈成.jpg"
import wangwenqian from "../assets/images/csss2020/council/汪文谦.jpeg"
import caomianchen from "../assets/images/csss2019/文化部/曹冕宸.jpg"
import zhangxiaoxuan from "../assets/images/csss2019/文化部/张笑瑄.jpg"
import suyiyue from "../assets/images/csss2019/文化部/苏怡月.jpg"
import nizhenbang from "../assets/images/csss2019/文化部/倪振邦.jpg"
import wangxiaopi from "../assets/images/csss2020/council/王小皮.jpeg"
import zhangdanyan from "../assets/images/csss2020/council/张丹妍.jpeg"
import yulinfei from "../assets/images/csss2019/文化部/虞林霏.jpg"
import dukeyan from "../assets/images/csss2020new/文化部/都柯言.jpg"
import huanyuxin from "../assets/images/csss2020new/文化部/郇宇欣 Jennifer.jpeg"
import liangnan from "../assets/images/csss2020new/文化部/梁楠.jpeg"
import sunjingyan from "../assets/images/csss2020new/文化部/孙敬言 Jack.jpg"

import tansijun from "../assets/images/csss2019/科技部/谭嗣俊.jpg"
import liuchenlin from "../assets/images/csss2019/科技部/刘辰琳.jpg"
import longwenjun from "../assets/images/csss2020/council/龙玟君.jpeg"
import fengjiaqi from "../assets/images/csss2020/council/冯家琪.jpeg"
import fengjialin from "../assets/images/csss2020/council/冯家琳.jpeg"
import zhouyancheng from "../assets/images/csss2020new/科技部/周彦铖.jpeg"
import songxiyuan from "../assets/images/csss2020new/科技部/宋希元.jpg"

class PresidentialTeam extends Component{
  presidential_boardProfile = []
  render(){
    const presidential_board = [
      {
        name : "张家恺",
        intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
        为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
        群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
        img : zhangjiakai,
      },
      {
        name : "徐书卉",
        intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
        为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
        群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
        img : xushuhui,
      },
      {
        name : "陈翘浩",
        intro : "Hi大家好！我来自广州，专业是Statistics和Economics，喜欢唱歌，篮球，做饭，\
        投资，看书。人生理想是创业并拥有属于自己的公司，然后不仅仅周游世界，还要体验太空旅游。\
        最爱喝各种老火靓汤和吃早茶。未来一年想带领CSSS变得更好，为夏村的华人群体带来更多有趣并难忘的经历！",
        img : chenqiaohao
      },
      {
        name : "童瑶",
        intro : "大家好我是徐书卉Daisy，来自南京，专业Commerce和Statistics. 喜欢足球，\
        喜欢C罗和皇马，喜欢看电影美剧韩剧，喜欢逛博物馆水族馆，喜欢旅游和被拍。最爱吃冻酸奶和\
        辣豆腐汤，未来一年希望跟CSSS的大家越来越亲密，碰撞出灵感和思维的火花！",
        img : tongyao
      },
      {
        name : "顾欣妍",
        intro : "来自上海，major数学和经济，minor法语，爱好马术和音乐还有吃喝玩乐，人生理想\
        是成为富婆，最爱吃的东西是糖醋小排，希望CSSS越来越好！",
        img : guxinyan
      },
    ]
    for(var i = 0; i < presidential_board.length; i++){
      this.presidential_boardProfile.push(
        <Profile {...presidential_board[i]} />
      )
    }
    return(
      <div>
        {this.presidential_boardProfile}
      </div>
    )
  }
}

class CouncilTeam extends Component{
  councilProfile = []
  render(){
    const council = [
      {
        title:"主席",
        name:"汪文谦",
        intro:"来自北京，阿森纳/摇滚/韩式料理，不擅长写论文的文科生，在经济与国际关系双专业压榨下努力生活。\
        非常感恩过去在csss中的成长与收获，希望同大家带领csss走到一个新的高度。",
        img:wangwenqian
      },
      {
        title:"内务副主席",
        name:"漆泓阳",
        intro:"大家好，我是2022届的漆泓阳，专业是国际关系以及经济，在csss任职内务副主席。\
        在过去的两年，我作为活动部的部员到部长，同csss的各位结下了深刻的友谊，\
        并一同举办了例如中秋游园会以及UVA好声音等各种丰富夏村华人的大型活动。\
        在获得宝贵经验的同时，自己也与csss的伙伴们一起收获了不少快乐以及认可。\
        今年，作为新一届内务副主席，我也希望自己可以在做好内务工作的同时，继续参与到各个活动的策划和筹办之中。\
        为各位献上更为精彩的活动的同时，努力提高自己的能力，并和大家一起玩的开心，认识更多优秀且有趣的新朋友！",
        img:qihongyang
      },
      {
        title:"外务副主席",
        name:"王梦辰",
        intro:"大家好，我是来自天津的王梦辰Veronique，CS和Statistics double major。\
        喜欢kpop和旅行。希望在新的一年里和CSSS一起带给大家更多更好的活动！",
        img:wangmengchen
      },
      {
        title:"秘书",
        name:"陈羽芊",
        intro:"来自杭州，major psyc, minor日语。喜欢看番看剧看电影，撸猫撸狗撸猫头鹰。\
        2022届养生第一人（自封）不吃洋葱和黑木耳。希望接下来的一年内能帮助csss做得更好！",
        img:chenyuqian
      },
      {
        title:"文化部部长",
        name:"冯家琪",
        intro:"大家好呀，我是冯家琪Sara，来自北京朝阳。专业是Computer Science 和 Statistics。\
        曾经的网瘾少女，但目前最喜欢的是窝在沙发上发呆喝ice tea，刷综艺动漫日剧。\
        擅长的事是熬夜肝码，拉着大家一起团建。喜欢读各种类型的书，更喜欢硬科幻。\
        希望新的一年大家学好玩好，和CSSS一起变得更好",
        img:fengjiaqi
      },
      {
        title:"文化部部长",
        name:"郇宇欣",
        intro:"Hihi～这里是郇宇欣Jennifer。是一个出生在山东的北京人。\
        马上大三，econ major。爱好-看剧追星研究烘焙。希望未来的一年可以跟大家一起举办好的活动💚",
        img:xunyuxin
      },
      {
        title:"活动部部长",
        name:"胡淇媛",
        intro:"大家好，我是今年的活动部部长胡淇媛。本人是准大二萌新，心理学专业，最大的爱好是吃和晒太阳，目前运势非常水逆。\
        我希望能在今后的工作中与大家共同努力，共同进步，为UVA的华人群体和对中华文化感兴趣的其他同学带来更多更有趣的活动。\
        P.S. 聚餐请叫我 我超爱洗碗",
        img:huqiyuan
      },
      {
        title:"活动部部长",
        name:"贺逸惟",
        intro:"大家好我叫贺逸惟，英文名叫richard，今年秋季开学大二。\
        在去年我在活动部当部员，积累了一些经验，并且想在未来跟CSSS一同进步，举办更好的活动！",
        img:heyiwei
      },
      {
        title:"宣传部部长",
        name:"毕思瑶",
        intro:"大家好，这里是毕思瑶Angelica，来自四川，可以叫我小妖。暂定专业是政治哲学相关+天文学。喜欢弹钢琴、画画、做手工。\
        很荣幸可以在加入CSSS的第二年担任宣传部长，希望大家集思广益，取长补短，一起成长，一起进步，一起让CSSS变得更好～",
        img:bisiyao
      },
      {
        title:"宣传部部长",
        name:"郭锦琳",
        intro:"来自厦门，梦想当咸鱼，希望新的一年能和csss一起冲🐛！",
        img:guojinlin
      },
      {
        title:"外联部部长",
        name:"冯家琳",
        intro:"大家好~我是Emily冯家琳，来自北京。目前的专业是CS。爱好打游戏、做攻略、逛街、看电影、做饭、追小说。\
        喜欢所有甜品（一杯奶茶可以快乐一天）！！未来的一年，希望CSSS越来越好，举办更多有趣的活动，也希望大家玩得开心！",
        img:fengjialin
      },
      {
        title:"外联部部长",
        name:"王小皮",
        intro:"大家好我是今年担任外联部部长的王小皮，是个不会说太粤语但喜欢喝早茶的深圳人。\
        平常的爱好有猫猫，摄影画画，烫头染头，看着我朋友做饭，听十年前的粤语歌，和坐过山车。\
        虽然照片里我头发花里胡哨（是@宣传部长bsy拍的），但我人很好相处的！希望能为csss贡献自己的力量啦，新的一年大家一起变得更好",
        img:wangxiaopi
      },
      {
        title:"科技部部长",
        name:"龙玟君",
        intro:"武汉人，专业CS+Psyc，喜欢音乐剧和动漫。\
        目前发量还撑得住，但为了日后考虑还是保持了一个不熬夜（肝code另算）的健康作息。\
        希望能拉到更多朋友一起进科技部写码和玩耍，科技改变生活不是句空话。期待和CSSS的各位一起更好的服务华人社区。",
        img:longwenjun
      },
      {
        title:"财务部部长",
        name:"张丹妍",
        intro:"大家好！我是张丹妍Jessica，来自北京，暂定数学和经济major。 \
        喜欢草莓味了蓝莓味的一切东西，还喜欢边吃螺狮粉边看电影。 希望未来一年我能把钱算明白，头发可以不炸毛。",
        img:zhangdanyan
      },
      {
        title:"职业发展部部长",
        name:"仇启贇",
        intro:"来自上海，在波士顿读了四年美高，现在已经是大三的阿姨了… \
        喜欢音乐和研究好吃的东西，欢迎大家来我家蹭饭！CSSS新的一年也要🐛🐛🐛",
        img:chouqiyun
      }
    ]
    for(var i = 0; i < council.length; i++){
      this.councilProfile.push(
        <Profile {...council[i]} />
      )
    }
    return(
      <div>
        {this.councilProfile}
      </div>
    )
  }
}
class PublicityTeam extends Component{
  publicityProfile = []
  render(){
    const publicity = [
      {
        name : "王艺霖",
        intro : "我来自上海，专业是media studies和econ，喜欢快乐养生，\
        希望新的一年在宣传部继续让CSSS冲出地球登上月球。",
        img : wangyilin
      },
      {
        name : "张馨月",
        intro : "大家好，我来自香港，专业是CS和Economics。\
        最大的爱好就是尝试新鲜的菜谱做饭给大家吃！\
        希望这一年可以和宣传部各位厉害的部员们，向大家呈现更多有趣创新的作品！",
        img : zhangxinyue
      },
      {
        name : "毕思瑶",
        intro : "来自四川，喜欢小裙子的猛男。日常就是打打架画画弹弹钢琴。\
        接下来的一年希望各位神仙带我打怪升级。",
        img : bisiyao
      },
      {
        name : "郭锦琳",
        intro : "我来自厦门，专业是统计，爱好是韩剧，\
        人生理想是一夜暴富，最爱吃的东西是猪排饭。\
        未来一年在csss希望能更多锻炼自己的工作能力，离一夜暴富更进一步。",
        img : guojinlin
      },
      {
        name : "金荻",
        intro : "我是一个住在广州的北京人，专业暂时是传媒。\
        爱好有唱 rap 篮球 没有跳，还喜欢健身足球跟体育有关的都喜欢！\
        吃麻麻香！这是我第一年加入CSSS的宣传部希望干一票大的！冲！",
        img : jindi
      },
      {
        name : "王金益",
        intro : "来自山东，建筑学院的MLA项目研究生。唱歌跳舞画画都喜欢，\
        未来一年希望在这里玩得开心，为社团做一些有价值的事情。",
        img : wangjinyi
      },
      {
        name : "张宁欣",
        intro : "深圳人，想学数学，喜欢打篮球网球羽毛球，大家喜欢的我都喜欢吃。\
        希望把csss变得更厉害！大半夜的我文笔不是很好…人生理想就是活得开心，希望你也开心。",
        img : zhangningxin
      },
    ]
    for(var i = 0; i < publicity.length; i++){
      this.publicityProfile.push(
        <Profile {...publicity[i]} />
      )
    }
    return(
      <div>
        {this.publicityProfile}
      </div>
    )
  }
}

class ActivityTeam extends Component{
  activityProfile = []
  render(){
    const activity = [
      {
        name : "漆泓阳",
        intro : "来自贵阳，专业Foreign Affair&Econ，爱好挺多，理想不少，\
        爱吃辣椒，祝CSSS越来越好。Peace。",
        img : qihongyang
      },
      {
        name : "肖芷玥",
        intro : "大家好我是大二的Cici肖芷玥\
        目前Double major ECON&STAT。我是个出生在深圳的但贼能吃辣的新苏州人。\
        喜欢唱歌跳舞打篮球做饭弹钢琴看韩剧韩综～喜欢吃吃了不胖的好吃的(比如我的自制减脂便当!)\
        希望未来一年大家可以学得开心吃得开心玩得更开心",
        img : xiaozhiyue
      },
      {
        name : "李一凡",
        intro : "Stats PhD一年级，家乡辽宁大连，爱好篮球，排球，游泳。",
        img : liyifan
      },
      {
        name : "郇宇欣",
        intro : "我来自北京，现在我的专业是Econ和Enviroments&Sustainability \
        最喜欢吃火锅和辣的食物 \
        希望在未来的一年里能在CSSS里跟大家一起学习和成长",
        img : xunyuxin
      },
      {
        name : "王逸凡",
        intro : "沈阳人，学cs，喜欢锅包肉",
        img : wangyifan
      },
      {
        name : "胡淇媛",
        intro : "我是Lizzy，来自湖北武汉，没错就是那个有热干面糊汤粉藕夹面窝豆皮糯米包油条的奇妙城市！\
        目前学习上专业不定啥都想学，生活上来者不拒啥都想吃（信吗 我觉得NC还挺好吃的）\
        短期目标是研究出corner一带最好吃的拉面！希望能够在CSSS好干活锻炼能力，顺便消耗掉吃掉的卡路里",
        img : huqiyuan
      },
      {
        name : "贺逸惟",
        intro : "大一，来自深圳。喜欢唱歌摄影篮球。希望未来能与csss一同进步",
        img : heyiwei
      },
      {
        name : "高诗元",
        intro : "我叫Millie，来自上海。喜欢边吃高能量美食边唠嗑，喜欢K歌。\
        未来一年在CSSS希望除了做好自己份内的事也要多多玩耍结交新朋友！",
        img : gaoshiyuan
      },
    ]
    for(var i = 0; i < activity.length; i++){
      this.activityProfile.push(
        <Profile {...activity[i]} />
      )
    }
    return(
      <div>
        {this.activityProfile}
      </div>
    );
  }
}

class OutreachTeam extends Component{
  outreachProfile = []
  render(){
    const outreach = [
      {
        name : "冯家琳",
        intro : "大家好～我是外联部部长Emily。北京妹子。\
        平时喜欢玩游戏、唱歌、逛街、喝奶茶、吃甜点、做美食攻略+打卡网红餐厅！\
        希望未来的一年能和CSSS一起组织更多有趣的活动(*¯︶¯*)",
        img : fengjialin
      },
      {
        name : "李润玖",
        intro : "大家好！我是来自大连的李润玖，喜欢吃米线和火锅，最喜欢的就是在各种地方躺着，\
        目前的专业是stat，擅长把自己的照片妙手回春，\
        希望在CSSS的时间里能帮到大家，和大家快乐相处！！",
        img : lirunjiu
      },
      {
        name : "杨鸿嘉",
        intro : "大家好！我是来自上海的杨鸿嘉，准备读国际关系和统计专业。\
        我的爱好是游泳、骑行、看书、还有逛博物馆&填词，是个星战粉。\
        希望未来能在外联部和夏村的华人群体以及驻美的中国使领馆多多联络，期待与大家的合作！",
        img :  yanghongjia
      },
      {
        name : "沈彦苇",
        intro : "大噶好，我是外联部的沈彦苇，来自上海。\
        意向专业是media studies/pre-comm/WGS，对humanities相关也都很感兴趣。\
        平时喜欢看展、看老电影看剧、戏剧、听英摇，有时也会打打网球练练琴，\
        最近多了一个新爱好是拍胶片，希望可以和小伙伴们在秋日的上海一起骑行一起扫街呀。\
        我也喜欢盘唱片，欢迎一起去淘碟！\
        很高兴可以加入CSSS这个大家庭，也期待和大家一起合作共同成长！",
        img : shenyanwei
      },
      {
        name : "王诗淇",
        intro : "大家好我是来自深圳的王小皮，热衷于喝无糖奶茶减肥瘦身，\
        最喜欢的电影是《布达佩斯大饭店》，爱好拍拍胶片画个画，还很喜欢坐过山车，\
        大二了依然还是undecided（大概是psyc+stats+art minor），\
        希望能跟CSSS的成员们一起做让大家和我们自己都喜欢的事！",
        img : wangshiqi
      },
      {
        name : "仇启赟",
        intro : "来自上海的美高+转学生… 在波士顿呆了四年纽约州呆了一年，\
        东部是我家嘻嘻🤭喜欢音乐，钢琴，唱歌，做饭（欢迎来我家蹭饭）希望世界和平 CSSS继续红红火火(?",
        img : chouqiyun
      },
    ]
    for(var i = 0; i < outreach.length; i++){
      this.outreachProfile.push(
        <Profile {...outreach[i]} />
      )
    }
    return(
      <div>
        {this.outreachProfile}
      </div>
    );
  }
}

class CareerFinanceTeam extends Component{
  careerProfile = []
  render(){
    const career  = [
      {
        name : "杜梦如",
        intro : "大家好，我是来自北京的Claire杜梦如。\
        专业Econ & Studio Art(Photography)，minor Astronomy. \
        平时喜欢做饭，拍照，肝游戏，玩手办，看电竞。\
        希望在csss可以把职业发展项目做大做好，真正服务到华人群体。",
        img : dumengru
      },
      {
        name : "杨帅",
        intro : "大家好 我来自北京 double comm和stat。人生理想是养很多猫猫狗狗。\
        未来一年想在csss办有意思的活动，更好地服务大家：）",
        img : yangshuai
      },
      {
        name : "王梦辰",
        intro : "大家好，我是来自天津的Veronique王梦辰，大二，\
        职业发展与金融管理部部长，现在是stat major，应该会double CS。喜欢kpop，音乐剧，跳舞。\
        希望在未来一年和大家相处的愉快，更好的为夏村华人服务。",
        img : wangmengchen
      },
      {
        name : "缪天琪",
        intro : "我来自江苏无锡，以后准备学东亚研究。喜欢看动漫。\
        曾经的理想是在东京或者上海开一家高级餐厅。现在暂时还不知道要不要坚持这个理想。\
        喜欢吃龟苓膏，薯片，拿破仑蛋糕，和喝奶茶。希望在csss与大家好好相处！",
        img : miutianqi
      },
      {
        name : "邵安琦",
        intro : "hello，大家好。我是邵安琦，来自江苏。我是一名大一新生，专业undecided。\
        希望在csss这个集体中和大家合作愉快！",
        img : shaoanqi
      },
      {
        name : "周佳羽",
        intro : "我叫周佳羽Katy，来自北京，专业是pre-comm&Econ。\
        爱好看剧看电影打拳做饭烘焙，人生理想之一是开一家吃了不会胖的甜品店。\
        希望未来一年能和csss的小伙伴们开心玩耍并更好的服务大家！",
        img : zhoujiayu
      },
      {
        name : "吕永泽",
        intro : "我的家在东北地区 松花江下啊～ 长春人 超喜欢大自然小动物\
        人生理想！复活恐龙！四川火锅！希望可以为华人团体提供更多接触工作的机会。",
        img : lvyongze
      },
    ]
    for(var i = 0; i < career.length; i++){
      this.careerProfile.push(
        <Profile {...career[i]} />
      )
    }
    return(
      <div>
        {this.careerProfile}
      </div>
    );
  }
}

class CultureTeam extends Component{
  cultureProfile = []
  render(){
    const culture = [
      {
        name : "都柯言",
        intro : "我来自重庆，专业暂定是pre-comm。喜欢的食物是巧克力和火锅。\
        希望在CSSS能够帮助到在夏村的华人。",
        img : dukeyan
      },
      {
        name : "冯家琪",
        intro : "大家好呀，我是冯家琪Sara，来自北京朝阳。专业是Computer Science 和 Statistics。\
        曾经的网瘾少女，但目前最喜欢的是窝在沙发上发呆喝ice tea，刷综艺动漫日剧。\
        擅长的事是熬夜肝码，拉着大家一起团建。喜欢读各种类型的书，更喜欢硬科幻。\
        希望新的一年大家学好玩好，和CSSS一起变得更好。",
        img : fengjiaqi
      },
      {
        name : "郇宇欣",
        intro : "大家好，我是郇宇欣 Jennifer 。来自北京 2022届 econ major。我的爱好是听Kpop 看物料。\
        我喜欢吃各种各样的美食。我喜欢小猫咪 可惜我家里不能养猫 \
        希望在接下来的一年里跟大家一起举办各种各样有趣有意义的活动。\
        谢谢大家～。",
        img : huanyuxin
      },
      {
        name : "梁楠",
        intro : "大家好，我是来自深圳的梁楠Noella。现在我就读UVA的文理学院，意向专业是心理学。\
        平时喜欢逛街，看动漫和画画，有时候也会去打打网球和飞盘。\
        作为一个火锅女孩，平时最爱吃辣，也中意日料和沙拉！我很高兴能加入CSSS文化部，\
        很高兴能有机会为UVA华人群体做一份贡献，让大家感受到海外的家乡情！！",
        img : liangnan
      },
      {
        name : "孙敬言",
        intro : "家乡：黑龙江 专业：建筑 爱好：读书、旅游、电影、设计 \
        喜欢的食物：其实我更喜欢做食物，东北菜重庆菜粤菜江苏菜都会点 \
        未来展望：希望大家一起办好活动， 让在美国的大学活动更加精彩",
        img : sunjingyan
      },
    ]
    for(var i = 0; i < culture.length; i++){
      this.cultureProfile.push(
        <Profile {...culture[i]} />
      )
    }
    return(
      <div>
        {this.cultureProfile}
      </div>
    );
  }
}

class TechTeam extends Component{
  techProfile = []
  render(){
    const tech = [
      {
        name : "龙玟君",
        intro : "武汉人，专业CS和Psyc，爱好二次元、音乐剧和涂鸦。\
        希望新的一年继续在CSSS快乐肝码和认识许多小伙伴！",
        img : longwenjun
      },
      {
        name : "周彦铖",
        intro : "来自南京，准备major cs，喜欢弹琴，打网乒乓球，\
        下棋，看电影，旅游。希望能在csss学新技术，积累经验，多多贡献。",
        img : zhouyancheng
      },
      {
        name : "宋希元",
        intro : "我来自北京，专业cs，准备double econ。爱好画画, \
        哲学思考，当精罗，吃烤肉串。我的人生理想是开发AI。希望未来一年可以尽情肝码, \
        服务夏村华人群体！Yeet！",
        img : songxiyuan
      },
    ]
    for(var i = 0; i < tech.length; i++){
      this.techProfile.push(
        <Profile {...tech[i]} />
      )
    }
    return(
      <div>
        {this.techProfile}
      </div>
    )
  }
}

class TeamMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Presidential Board'
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/presidential_board'
          />
          <Menu.Item
            name='Council'
            active={activeItem === 'Council'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/council'
          />
          <Menu.Item
            name='Activity'
            active={activeItem === 'Activity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/activity'
          />
          <Menu.Item
            name='Publicity'
            active={activeItem === 'Publicity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/publicity'
          />
          <Menu.Item
            name='Outreach'
            active={activeItem === 'Outreach'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/outreach'
          />
          <Menu.Item
            name='Technology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/technology'
          />
          <Menu.Item
            name='Culture'
            active={activeItem === 'Culture'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/culture'
          />
        <Menu.Item
            name='Career Finance'
            active={activeItem === 'Career'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/career'
          />
        </Menu>
      </div>
    )
  }
}

function TeamPage(){
  return (
      <Container>
        <Router>
          <TeamMenu />
          <Switch>
            <Route exact path='/team/technology' component={TechTeam}></Route>
            <Route exact path='/team/culture' component={CultureTeam}></Route>
            <Route exact path='/team/outreach' component={OutreachTeam}></Route>
            <Route exact path='/team/activity' component={ActivityTeam}></Route>
            <Route exact path='/team/presidential_board' component={PresidentialTeam}></Route>
            <Route exact path='/team' component={PresidentialTeam}></Route>
            <Route exact path='/team/publicity' component={PublicityTeam}></Route>
            <Route exact path='/team/career' component={CareerFinanceTeam}></Route>
            <Route exact path='/team/council' component={CouncilTeam}></Route>
          </Switch>
        </Router>
      </Container>
  );
}


const Profile = ({title, name, intro, img}) =>(
  <Container>
    <Header as='large'>{name}: {title}</Header>
    <Container id="border">
      <Row>
        <Col xs={4}><img src={img} id="img"/></Col>
        <Col id="content"><p>{intro}</p></Col>
      </Row>
    </Container>
  </Container>
);



export default TeamPage;
