/**
 * Created by Administrator on 2017/9/13 0013.
 */
//全局变量
var divGame=document.getElementById("game");
//数组类
var arrGuaiTu=["冒险岛/enemy/bird/move.gif","冒险岛/enemy/ghost/move.gif","冒险岛/enemy/plane/move.gif","冒险岛/enemy/boss/move.gif"];
var arrZiDanTu=["冒险岛/dragon/small/att.gif","冒险岛/dragon/middle/att.gif","冒险岛/dragon/large/att.gif"];
// var arrYingXiong=["冒险岛/dragon/small/stand.gif","冒险岛/dragon/middle/stand.gif","冒险岛/dragon/large/stand.gif"];
var arrYingXiong=["冒险岛/dragon/small/stand.gif","冒险岛/dragon/middle/move.gif","冒险岛/dragon/large/move.gif","冒险岛/dragon/small/magicmissile.gif"];
var arrZiBoom=["冒险岛/dragon/small/hit.gif","冒险岛/dragon/middle/hit.gif","冒险岛/dragon/large/hit.gif"];//存放爆炸图片
var jiMiao=["冒险岛/num/9.gif","冒险岛/num/8.gif","冒险岛/num/7.gif","冒险岛/num/6.gif","冒险岛/num/5.gif","冒险岛/num/4.gif","冒险岛/num/3.gif","冒险岛/num/2.gif","冒险岛/num/1.gif","冒险岛/num/0.gif"];
var jiMiao2=["冒险岛/num/5.gif","冒险岛/num/4.gif","冒险岛/num/3.gif","冒险岛/num/2.gif","冒险岛/num/1.gif","冒险岛/num/0.gif"];
var jif=["冒险岛/num/1.gif","冒险岛/num/0.gif"];
var arrneng=["冒险岛/ui/exp0.png","冒险岛/ui/expFull.gif","冒险岛/ui/expMax.gif"];
var arrGuai=[];//存放出现的怪兽
var arrYingX=[];//存放出现的英雄
var arrGuaiSuDu=[2,8,12];//怪兽速度
var arrGuaiZi=[];//存放怪兽子弹
var arrGuaiPing=[500,300,100];//怪兽出线的频率
var arrGuaixue=[2,3,5,10];//怪兽血量,第三个是大怪兽的血量
var arrBleed=[2,3,4];//英雄血量
var arrYingSuDu=[10,15,20];//英雄移动速度
var arrYingZi=[]//存放英雄子弹
var selfYing;//定义英雄
var keyUp=false;//键盘上默认关闭
var keyDown=false;//键盘下默认关闭
var keyLeft=false;//键盘左默认关闭
var keyRight=false;//键盘右默认关闭
var keyZi=false;//键盘上默认关闭
var jiFen=0;//积分全局定义
var bleed=3;//英雄血量
var tOverji=document.getElementById("tOver1");//时间结束游戏积分
var tOverX=document.getElementById("tOver");//时间结束显示结束页面
var gOverji=document.getElementById("gOver1");//时间结束游戏积分
var gOverX=document.getElementById("gOver");//时间结束显示结束页面
var jifen=document.getElementById("jifen");
var k=0;
var tOver=document.getElementById("tOver");//时间结束节点
var neng=document.getElementById("neng");//获取能量条节点
var play=document.getElementById("play");//获取play节点
var zhuye=document.getElementById("zhuye");
var youxi=document.getElementById("youxi");
var fanhui=document.getElementById("fanhui");



//计时器
var guaiMoveTime=setInterval(moveGuai,50);         //怪兽移动
var guaiTime=setInterval(guaiShouChuXian,arrGuaiPing[k]);  //怪兽出现
var guaiBossTime=setInterval(moveZiDanGuai,200);  //大怪兽移动
var moveZiDanTime=setInterval(moveZiDan,100);            //英雄子弹移动
var movePlayPlantime=setInterval(movePlay,100);
var pengZhuangtime=setInterval(pengZhuang,100);//判断碰撞计时器
var pengZhuangtime2=setInterval(pengZhuang2,200);//判断碰撞计时器
var shouShi=setInterval(shuoShi,500);
var shouShi2=setInterval(shuoShi2,500);
var shengji=setInterval(shengji,100);
var guaiShouChuXianBoss1=setInterval(guaiShouChuXianBoss,10000);
var shenjipanduanscore=setInterval(shenjipanduanscore,100);
var shenjipanduanscore1=setInterval(shenjipanduanscore1,100);
var jishu2=setInterval(jishu,1000);
// var moveZiDanGuai2=setInterval(ziDanGuaiMove,100);
// guaiShuo2.ziDanGuaiMove()

play.onclick=function () {
   zhuye.style.display="none";
   youxi.style.display="block";

};
fanhui.onclick=function () {
    zhuye.style.display="block";
    youxi.style.display="none";
        clearInterval( guaiMoveTime);
        clearInterval(guaiTime);
        clearInterval(moveZiDanTime);
        clearInterval( movePlayPlantime);
        clearInterval(pengZhuangtime);
        clearInterval(pengZhuangtime2);
        clearInterval(shouShi);
        clearInterval(shouShi2);
        clearInterval( shengji);
        clearInterval( jishu2);
        clearInterval(guaiShouChuXianBoss1);
        clearInterval(shenjipanduanscore);
    clearInterval(shenjipanduanscore1);
}
//计时器

var ji5=document.getElementById("ji5");
var ji4=document.getElementById("ji4");
var ji2=document.getElementById("ji2");
var p=0;
var o=3;
var u=0;
function jishu() {

    ji5.src=jiMiao[p];
    ji4.src =jiMiao2[o];
    ji2.src=jif[u];
    p++;
    if(p==10){
        o++;
        p=0;
    }
    if(o==6){
        u++;
        o=0;
    }
    if (p==0&&o==0&&u==2){
        gameover()
        function gameover() {
            clearInterval( guaiMoveTime);
            clearInterval(guaiTime);
            clearInterval(moveZiDanTime);
            clearInterval( movePlayPlantime);
            clearInterval(pengZhuangtime);
            clearInterval(pengZhuangtime2);
            clearInterval(shouShi);
            clearInterval(shouShi2);
            clearInterval( jishu2);
            clearInterval( shengji);
            clearInterval(guaiShouChuXianBoss1);
            clearInterval(shenjipanduanscore);
        }
        tOverX.style.display="block";
        tOverji.innerHTML=jiFen;
        alert(jiFen)
    }
}
//升级
function shenjipanduanscore(){
    if(jiFen<=15&&jiFen>0){
        k=0;
        selfYing.imgNode.src=arrYingXiong[k]
    }
    else if(jiFen<=35&&jiFen>15){
        // alert("aa")
        k=1;
        selfYing.imgNode.src=arrYingXiong[k]
    }
    else if(jiFen>35){
        k=2;
        selfYing.imgNode.src=arrYingXiong[k]
    }
}
//能量条升级
function shenjipanduanscore1() {
    if(jiFen>=5&&jiFen<13){
        neng.src=arrneng[1]
    }
    else if(jiFen>13&&jiFen<=15){
        neng.src=arrneng[2]
    }
    else if(jiFen>15&&jiFen<=24){
        neng.src=arrneng[0]
    }
    if(jiFen>24&&jiFen<=32){
        neng.src=arrneng[1]
    }
    else if(jiFen>=32&&jiFen<36){
        neng.src=arrneng[2]
    }
    else if(jiFen>=36&&jiFen<40){
        neng.src=arrneng[0]
    }
    if(jiFen>=40&&jiFen<50){
        neng.src=arrneng[1]
    }
    else if(jiFen>=50&&jiFen<60){
        neng.src=arrneng[2]
    }
    else if(jiFen>=60){
        neng.src=arrneng[0]
    }
}
//英雄出场
yingXiong1();
function yingXiong1() {
    var x = parseInt(Math.random() * 100);
    var y = parseInt(Math.random() * 600);
    selfYing = new yingXiong(x, y, arrYingXiong[k],arrYingSuDu[k]);
    arrYingX.push(selfYing);}
//子弹移动
function moveZiDan() {
    for(var i=0;i<arrYingZi.length;i++){
        var left=parseInt(arrYingZi[i].imgNode.style.left);
        if(left==1100){
            //删除子弹
            divGame.removeChild(arrYingZi[i].imgNode);
            arrYingZi.splice(i,1);
            i--;
        }else {
            arrYingZi[i].moveZiYing();


        }
    }
}
//键盘控制
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 38) {
        keyUp=true
    }
    if (e.keyCode == 40) {
        keyDown=true
    }
    if (e.keyCode == 39) {
        keyLeft=true
    }
    if (e.keyCode == 37) {
        keyRight=true
    }
    if (e.keyCode == 32) {
        keyZi=true
        // selfYing.imgNode.src=arrYingXiong[1];
    }

};
document.onkeyup = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 38) {
        keyUp=false
    }
    if (e.keyCode == 40) {
        keyDown=false
    }
    if (e.keyCode == 39) {
        keyLeft=false
    }
    if (e.keyCode == 37) {
        keyRight=false
    }
    if (e.keyCode == 32) {
        keyZi=false
        // selfYing.imgNode.src=arrYingXiong[0];
    }
};
//英雄移动及发射子弹
function movePlay() {
    if (selfYing==undefined){
        return;
    }
    if(keyUp){
        selfYing.moveUp();
    }
    if(keyLeft){
        selfYing.moveLeft();
    }
    if (keyRight){
        selfYing.moveRight();
    }
    if (keyDown){
        selfYing.moveDown();
    }
    if (keyZi){
        selfYing.ziDanMove();
    }
}
//怪兽出场
guaiShouChuXian();
function guaiShouChuXian() {
    var x=1080;
    var type = parseInt(Math.random()*3);
    var y=parseInt(Math.random()*600)+10;
    guaiShuo1=new guaiShou(x,y,arrGuaiTu[type],arrGuaiSuDu[k],arrGuaixue[k]);
    arrGuai.push(guaiShuo1);
}
//大怪兽出场
guaiShouChuXianBoss();
function guaiShouChuXianBoss() {
    var x=1080;
    var y=parseInt(Math.random()*614)+10;
    guaiShuo2=new guaiShou(x,y,arrGuaiTu[3],arrGuaiSuDu[0],arrGuaixue[3]);
    arrGuai.push(guaiShuo2);}
//大怪兽子弹
function moveZiDanGuai() {
    for(var i=0;i<arrGuaiZi.length;i++){
        console.log(arrGuaiZi[i]);
        var left=parseInt(arrGuaiZi[i].imgNode.style.left);
        if(left==0){
            //删除子弹
            divGame.removeChild(arrGuaiZi[i].imgNode);
            arrGuaiZi.splice(i,1);
            i--;
        }else {
            // alert("aa")
            arrGuaiZi[i].moveZiGuai();
        }
    }
}
//怪兽的移动
function moveGuai() {
    for(var i=0;i<arrGuai.length;i++){
        var left=parseInt(arrGuai[i].imgNode.style.top);
        if (left>0){
            arrGuai[i].guaiMove();
        }else {
            //怪兽消失
            divGame.removeChild(arrGuai[i].imgNode);
            arrGuai.splice(i,1);
            i--;
        }
    }
}
//碰撞
function pengZhuang() {

    for (var i = 0; i < arrYingZi.length; i++) {
        var ziDanLeft = parseInt(arrYingZi[i].imgNode.style.left);
        var ziDanTop = parseInt(arrYingZi[i].imgNode.style.top);
        var ziDanWidth = parseInt(arrYingZi[i].imgNode.width);
        var ziDanHeight = parseInt(arrYingZi[i].imgNode.height);
    for (var j = 0; j < arrGuai.length; j++) {
        var guaiLeft = parseInt(arrGuai[j].imgNode.style.left);
        var guaiTop = parseInt(arrGuai[j].imgNode.style.top);
        var guaiWidth = parseInt(arrGuai[j].imgNode.width);
        var guaiHeight = parseInt(arrGuai[j].imgNode.height);
    if ( (ziDanLeft > (guaiLeft - ziDanWidth) && ziDanLeft < (guaiLeft + guaiWidth)) && (ziDanTop < (guaiTop + guaiHeight) && ziDanTop > (guaiTop - ziDanHeight) ))
    {
    //判断子弹是否在怪兽范围
        arrGuai[j].xueLiang--;

if (arrGuai[j].xueLiang==0){
        //怪兽爆炸
        arrGuai[j].imgNode.src = arrZiBoom[k];
        //怪兽消失

     arrGuai[j].isdeed=true;
}

        //子弹消失
        console.log(arrYingZi[i]);
        divGame.removeChild(arrYingZi[i].imgNode);
        arrYingZi.splice(i, 1);
        i--;
        break;
    }
}}}
//收集死亡
function shuoShi() {
    for(var i=0;i<arrGuai.length;i++){
        if(arrGuai[i].isdeed==true){
            divGame.removeChild(arrGuai[i].imgNode);
            arrGuai.splice(i,1);
            i--;
            console.log("aa");
            jiFen=jiFen+1;
            jifen.innerHTML=jiFen;
        }
    }
}
//我方英雄原型
function yingXiong(x,y,src,sudu,bleed) {
    this.x = x ;
    this.y = y ;
    this.src = src ;
    this.sudu= sudu;
    this.imgNode=document.createElement("img");
    this.bleed=3;
    this.jiFen;
    this.isdeed=false;
    this.ziDanMove=function () {
        var width=this.imgNode.width;
        var height=this.imgNode.height;
        var top=parseInt(this.imgNode.style.top);
        var left=parseInt(this.imgNode.style.left);
        var x =left+width+10;
        var y =top+height/2-10;
        var ziDan1= new ziDan(x,y,arrZiDanTu[k],10);
        arrYingZi.push(ziDan1)
    };
    this.moveDown=function () {
        var top = (parseInt(this.imgNode.style.top) + this.sudu);
        if (top<600){
            this.imgNode.style.top=top+"px"
        }
    };
    this.moveUp=function () {
        var top= (parseInt(this.imgNode.style.top)-this.sudu);
        if (top>=0){
            this.imgNode.style.top=top+"px"
        }
    };
    this.moveLeft=function () {
        var left = (parseInt(this.imgNode.style.left)+this.sudu);
        if (left<1080){
            this.imgNode.style.left=left+"px"
        }
    };
    this.moveRight=function () {
        var left = (parseInt(this.imgNode.style.left)-this.sudu);
        if (left>0){
            this.imgNode.style.left=left+"px"
        }
    };
    this.init=function () {
        this.imgNode=document.createElement("img");
        this.imgNode.style.top=this.y+"px";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.src=this.src;
        this.imgNode.bleed=this.bleed;
        divGame.appendChild(this.imgNode);
    };
    this.init()
}
//怪兽原型
function guaiShou(x,y,src,sudu,xueLiang) {
    this.x=x;
    this.y=y;
    this.src=src;
    this.sudu=sudu;
    this.xueLiang=xueLiang;
    this.isdeed=false;
    this.guaiMove=function () {
        var left=parseInt(this.imgNode.style.left)-this.sudu;
        this.imgNode.style.left=left+"px";
    };
    this.ziDanGuaiMove=function () {
        var width=this.imgNode.width;
        var height=this.imgNode.height;
        var top=parseInt(this.imgNode.style.top);
        var left=parseInt(this.imgNode.style.left);
        var x =left-10;
        var y =top+height/2-20;
        var ziDan2= new ziDanGuai(x,y,"冒险岛/enemy/boss/attackBall.gif",30);
        arrGuaiZi.push(ziDan2)
    };
    this.init=function () {
        this.imgNode=document.createElement("img");
        this.imgNode.style.top=this.y+"px";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.src=this.src;
        this.imgNode.xueliang=this.xueLiang;
        divGame.appendChild(this.imgNode);
    };
    this.init()
}
//英雄技能原型
function ziDan(x,y,src,sudu){
    this.x = x ;
    this.y = y ;
    this.src = src ;
    this.sudu= sudu;
    this.imgNode=document.createElement("img");
    this.moveZiYing=function () {
        var left = (parseInt(this.imgNode.style.left) + this.sudu);
        if (left<13400){
            this.imgNode.style.left=left+"px"
        }else {
            this.imgNode.style.left="1100px";
        }
    };
    this.init=function () {
        this.imgNode=document.createElement("img");
        this.imgNode.style.top=this.y+"px";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.src=this.src;
        divGame.appendChild(this.imgNode);
    };
    this.init()
}
//怪兽技能
function ziDanGuai(x,y,src,sudu){
    this.x = x ;
    this.y = y ;
    this.src = src ;
    this.sudu= sudu;
    this.imgNode=document.createElement("img");
    this.moveZiGuai=function () {
        var left = (parseInt(this.imgNode.style.left) - this.sudu);
        if (left>0){
            this.imgNode.style.left=left+"px"
        }else {
            this.imgNode.style.left="0px";
        }
    };
    this.init=function () {
        this.imgNode=document.createElement("img");
        this.imgNode.style.top=this.y+"px";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.src=this.src;
        divGame.appendChild(this.imgNode);
    };
    this.init()
}
//英雄被射
function pengZhuang2() {

    for (var i = 0; i < arrGuai.length; i++) {
        var guaiLeft = parseInt(arrGuai[i].imgNode.style.left);
        var guaiTop = parseInt(arrGuai[i].imgNode.style.top);
        var guaiWidth = parseInt(arrGuai[i].imgNode.width);
        var guaiHeight = parseInt(arrGuai[i].imgNode.height);
        for (var q = 0; q < arrYingXiong.length; q++) {
            var yingLeft = parseInt(selfYing.imgNode.style.left);
            // alert(selfYing.imgNode.style.left);
            var yingTop = parseInt(selfYing.imgNode.style.top);
            var yingWidth = parseInt(selfYing.imgNode.width);
            var yingHeight = parseInt(selfYing.imgNode.height);
// alert(yingLeft-yingWidth)
            if ((guaiLeft<(yingLeft+yingWidth)&&guaiLeft>(yingLeft-guaiWidth))&&(guaiTop>(yingTop-guaiHeight)&&(guaiTop<yingTop+yingHeight)))
            {
                //判断子弹是否在怪兽范围
                selfYing.bleed--;
                if (selfYing.bleed==0){
                    //英雄爆炸
                    selfYing.imgNode.src = arrZiBoom[0];
                    //英雄消失

                    selfYing.isdeed=true;
                }
                //怪兽消失
                // console.log(arrGuai[i]);
                divGame.removeChild(arrGuai[i].imgNode);
                arrGuai.splice(i, 1);
                i--;
                break;
            }
            // alert("bb")
        }}}
//收集怪兽被打
function shuoShi2() {
        if(selfYing.isdeed==true){
            gameover()
            function gameover() {
                clearInterval( guaiMoveTime);
                clearInterval(guaiTime);
                clearInterval(moveZiDanTime);
                clearInterval( movePlayPlantime);
                clearInterval(pengZhuangtime);
                clearInterval(pengZhuangtime2);
                clearInterval(shouShi);
                clearInterval(shouShi2);
                clearInterval( shengji);
                clearInterval( jishu2);
                clearInterval(guaiShouChuXianBoss1);
                clearInterval(shenjipanduanscore);}
            gOverX.style.display="block";
            gOverji.innerHTML=jiFen+"分";
        }
}