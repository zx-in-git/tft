
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/shouye/shouye","pages/tuandui/tuandui","pages/shouyi/shouyi","pages/wode/wode","pages/tuandui/jiaoyixiangqing/jiaoyixiangqing","pages/tuandui/jinrijiaoyi/jinrijiaoyi","pages/tuandui/jihuozongshu/jihuozongshu","pages/tuandui/huobanzongshu/huobanzongshu","pages/tuandui/shouyizongshu/shouyizongshu","pages/tuandui/shanghuzongshu/shanghuzongshu","pages/tuandui/taijunjiaoyi/taijunjiaoyi","pages/shouye/huobanguanli/huobanguanli","pages/shouye/shanghudengji/shanghudengji","pages/shouye/shanghuguanli/shanghuguanli","pages/shouye/huobanguanli/fenruencanshu/fenruencanshu","pages/shouye/huobanguanli/huobanxiangqing/huobanxiangqing","pages/shouye/huobanguanli/jiaoyixiangqing/jiaoyixiangqing","pages/shouye/huobanguanli/jiaoyixiangqing/huobanzongshu/huobanzongshu","pages/shouye/huobanguanli/jiaoyixiangqing/jinrijiaoyi/jinrijiaoyi","pages/shouye/huobanguanli/jiaoyixiangqing/jihuozongshu/jihuozongshu","pages/shouye/huobanguanli/jiaoyixiangqing/shouyizongshu/shouyizongshu","pages/shouye/huobanguanli/jiaoyixiangqing/shanghuzongshu/shanghuzongshu","pages/shouye/huobanguanli/jiaoyixiangqing/taijunjiaoyi/taijunjiaoyi","pages/shouye/shanghudengji/shanghuxinxi/shanghuxinxi","pages/shouye/shanghudengji/yinhangka/yinhangka","pages/shouye/shanghudengji/yingyezhizhao/yingyezhizhao","pages/shouye/shanghudengji/querenxinxi/querenxinxi","pages/shouye/shanghuguanli/feilvcanshu/feilvcanshu","pages/shouye/shanghuguanli/jiaoymingxi/jiaoymingxi","pages/shouye/shanghuguanli/shanghuxinxi/shanghuxinxi","pages/tuandui/TemailCount/TemailCount","pages/wode/share/wx_share","pages/Article/ArtilcleDetail","pages/shouye/shangcheng/shangcheng","pages/shouye/shangcheng/shangpingxinxi/shangpingxinxi","pages/shouye/shangcheng/querendingdan/querendingdan","pages/shouye/shangcheng/zhifufangshi/zhifufangshi","pages/shouye/shangcheng/dizhi/dizhi","pages/shouye/shangcheng/xinzeng/xinzeng","pages/shouye/shangcheng/xinzeng/address_edit","pages/shouye/shangcheng/zhifu/zhifu","pages/shouye/chanpinshiyong/chanpinshiyong","pages/shouye/shanghuzhuce/shanghuzhuce","pages/shouye/tuanduituozhan/tuanduituozhan","pages/shouye/zaixiankefu/zaixiankefu","pages/wode/shimingrenzheng/shimingrenzheng","pages/wode/shimingrenzheng/shimingxinxi/shimingxinxi","pages/wode/xiaoxitongzhi/xiaoxitongzhi","pages/wode/wodedingdan/wodedingdan","pages/wode/jijuguanli/jijuguanli","pages/wode/jijuguanli/jijuhuabo/jijuhuabo","pages/wode/jijuguanli/jijuhuabo/call_back","pages/wode/jijuguanli/huabojilu/huabojilu","pages/wode/jijuguanli/zhongduandingjia/zhongduandingjia","pages/wode/tixianjilu/tixianjilu","pages/wode/lijitixian/lijitixian","pages/wode/lijitixian/tijiaoyinhangka/tijiaoyinhangka","pages/wode/lijitixian/tijiaoyinhka/tijiaoyinhka","pages/wode/lijitixian/xuanzeyinhang/xuanzeyinhang","pages/wode/shezhi/shezhi","pages/wode/shezhi/xiugaidenglumima/xiugaidenglumima","pages/wode/shezhi/xiugaijiesuanxinxi/xiugaijiesuanxinxi","pages/wode/shezhi/xiugaijiesuanxinxi/settle_card_edit","pages/wode/jijuguanli/jijuchakan/jijuchakan","pages/shouye/shanghudengji/zhongduanxuanze/zhongduanxuanze","pages/wode/jijuguanli/qujianhuabo/qujianhuabo","pages/wode/jijuguanli/xuanzehuabo/xuanzehuabo","pages/wode/jijuguanli/xuanzehuabo/opt_call_back","pages/wode/jijuguanli/huobanxuanze/huaobanxuanze","pages/wode/jijuguanli/zhengcexuanze/zhengcexuanze","pages/shouye/EPOS/EPOS","pages/shouye/EPOS/jiesuanka/jiesuanka","pages/shouye/EPOS/zhifuka/zhifuka","pages/shouye/EPOS/jiaoyijilv/jiaoyijilv","pages/shouye/EPOS/tixianjilu/tixianjilu","pages/shouye/EPOS/zhifumima/zhifumima","pages/shouye/EPOS/feilvxinxi/feilvxinxi","pages/shouye/EPOS/xiugaijiesuanka/xiugaijiesuanka","pages/shouye/EPOS/tianjiayinhangka/tianjiayinhangka","pages/index/register","pages/shouye/shanghuguanli/huodongxiangqing/huodongxiangqing","pages/wode/wodezhengc/wodezhengc","pages/wode/wodezhengc/zhengceyemian/zhengceyemian","pages/shouye/kaceping/kaceping","pages/shouye/chepingyangshi/chepingyangshi","pages/Article/ArtilcleDetail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"畅伙伴","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#F0AD4E","backgroundColor":"#f5f5f5","list":[{"pagePath":"pages/shouye/shouye","iconPath":"static/index.png","selectedIconPath":"static/index_checked.png","text":"首页"},{"pagePath":"pages/tuandui/tuandui","iconPath":"static/team.png","selectedIconPath":"static/team_checked.png","text":"团队"},{"pagePath":"pages/shouyi/shouyi","iconPath":"static/profit.png","selectedIconPath":"static/profit_checked.png","text":"收益"},{"pagePath":"pages/wode/wode","iconPath":"static/user.png","selectedIconPath":"static/user_checked.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智友","compilerVersion":"2.6.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"titleNView":false}},{"path":"/pages/shouye/shouye","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/tuandui","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"团队","navigationBarTextStyle":"black"}},{"path":"/pages/shouyi/shouyi","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"收益","navigationBarTextStyle":"black"}},{"path":"/pages/wode/wode","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/jiaoyixiangqing/jiaoyixiangqing","meta":{},"window":{"navigationBarTitleText":"交易详情","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/jinrijiaoyi/jinrijiaoyi","meta":{},"window":{"navigationBarTitleText":"今日交易","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/jihuozongshu/jihuozongshu","meta":{},"window":{"navigationBarTitleText":"激活总数","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/huobanzongshu/huobanzongshu","meta":{},"window":{"navigationBarTitleText":"伙伴总数","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/shouyizongshu/shouyizongshu","meta":{},"window":{"navigationBarTitleText":"收益总数","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/shanghuzongshu/shanghuzongshu","meta":{},"window":{"navigationBarTitleText":"商户总数","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/taijunjiaoyi/taijunjiaoyi","meta":{},"window":{"navigationBarTitleText":"台均交易","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/huobanguanli","meta":{},"window":{"navigationBarTitleText":"伙伴管理","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghudengji/shanghudengji","meta":{},"window":{"navigationBarTitleText":"商户登记","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghuguanli/shanghuguanli","meta":{},"window":{"navigationBarTitleText":"商户管理","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/fenruencanshu/fenruencanshu","meta":{},"window":{"navigationBarTitleText":"分润参数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/huobanxiangqing/huobanxiangqing","meta":{},"window":{"navigationBarTitleText":"伙伴详情","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/jiaoyixiangqing","meta":{},"window":{"navigationBarTitleText":"交易详情","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/huobanzongshu/huobanzongshu","meta":{},"window":{"navigationBarTitleText":"伙伴总数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/jinrijiaoyi/jinrijiaoyi","meta":{},"window":{"navigationBarTitleText":"今日交易","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/jihuozongshu/jihuozongshu","meta":{},"window":{"navigationBarTitleText":"激活总数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/shouyizongshu/shouyizongshu","meta":{},"window":{"navigationBarTitleText":"收益总数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/shanghuzongshu/shanghuzongshu","meta":{},"window":{"navigationBarTitleText":"商户总数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/huobanguanli/jiaoyixiangqing/taijunjiaoyi/taijunjiaoyi","meta":{},"window":{"navigationBarTitleText":"台均交易","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghudengji/shanghuxinxi/shanghuxinxi","meta":{},"window":{"navigationBarTitleText":"商户信息","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghudengji/yinhangka/yinhangka","meta":{},"window":{"navigationBarTitleText":"银行卡","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghudengji/yingyezhizhao/yingyezhizhao","meta":{},"window":{"navigationBarTitleText":"营业执照","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghudengji/querenxinxi/querenxinxi","meta":{},"window":{"navigationBarTitleText":"确认信息","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghuguanli/feilvcanshu/feilvcanshu","meta":{},"window":{"navigationBarTitleText":"费率参数","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghuguanli/jiaoymingxi/jiaoymingxi","meta":{},"window":{"navigationBarTitleText":"交易明细","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/shanghuguanli/shanghuxinxi/shanghuxinxi","meta":{},"window":{"navigationBarTitleText":"商户信息","navigationBarTextStyle":"black"}},{"path":"/pages/tuandui/TemailCount/TemailCount","meta":{},"window":{"navigationBarTitleText":"机具总数","navigationBarTextStyle":"black"}},{"path":"/pages/wode/share/wx_share","meta":{},"window":{"navigationBarTitleText":"机具总数","navigationBarTextStyle":"black"}},{"path":"/pages/Article/ArtilcleDetail","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/shangcheng","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/shangpingxinxi/shangpingxinxi","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/querendingdan/querendingdan","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/zhifufangshi/zhifufangshi","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/dizhi/dizhi","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/xinzeng/xinzeng","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/xinzeng/address_edit","meta":{},"window":{}},{"path":"/pages/shouye/shangcheng/zhifu/zhifu","meta":{},"window":{}},{"path":"/pages/shouye/chanpinshiyong/chanpinshiyong","meta":{},"window":{}},{"path":"/pages/shouye/shanghuzhuce/shanghuzhuce","meta":{},"window":{}},{"path":"/pages/shouye/tuanduituozhan/tuanduituozhan","meta":{},"window":{}},{"path":"/pages/shouye/zaixiankefu/zaixiankefu","meta":{},"window":{}},{"path":"/pages/wode/shimingrenzheng/shimingrenzheng","meta":{},"window":{}},{"path":"/pages/wode/shimingrenzheng/shimingxinxi/shimingxinxi","meta":{},"window":{}},{"path":"/pages/wode/xiaoxitongzhi/xiaoxitongzhi","meta":{},"window":{}},{"path":"/pages/wode/wodedingdan/wodedingdan","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/jijuguanli","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/jijuhuabo/jijuhuabo","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/jijuhuabo/call_back","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/huabojilu/huabojilu","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/zhongduandingjia/zhongduandingjia","meta":{},"window":{}},{"path":"/pages/wode/tixianjilu/tixianjilu","meta":{},"window":{}},{"path":"/pages/wode/lijitixian/lijitixian","meta":{},"window":{}},{"path":"/pages/wode/lijitixian/tijiaoyinhangka/tijiaoyinhangka","meta":{},"window":{}},{"path":"/pages/wode/lijitixian/tijiaoyinhka/tijiaoyinhka","meta":{},"window":{}},{"path":"/pages/wode/lijitixian/xuanzeyinhang/xuanzeyinhang","meta":{},"window":{}},{"path":"/pages/wode/shezhi/shezhi","meta":{},"window":{}},{"path":"/pages/wode/shezhi/xiugaidenglumima/xiugaidenglumima","meta":{},"window":{}},{"path":"/pages/wode/shezhi/xiugaijiesuanxinxi/xiugaijiesuanxinxi","meta":{},"window":{}},{"path":"/pages/wode/shezhi/xiugaijiesuanxinxi/settle_card_edit","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/jijuchakan/jijuchakan","meta":{},"window":{}},{"path":"/pages/shouye/shanghudengji/zhongduanxuanze/zhongduanxuanze","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/qujianhuabo/qujianhuabo","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/xuanzehuabo/xuanzehuabo","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/xuanzehuabo/opt_call_back","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/huobanxuanze/huaobanxuanze","meta":{},"window":{}},{"path":"/pages/wode/jijuguanli/zhengcexuanze/zhengcexuanze","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/EPOS","meta":{},"window":{"navigationBarTitleText":"EPOS","navigationBarTextStyle":"black"}},{"path":"/pages/shouye/EPOS/jiesuanka/jiesuanka","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/zhifuka/zhifuka","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/jiaoyijilv/jiaoyijilv","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/tixianjilu/tixianjilu","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/zhifumima/zhifumima","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/feilvxinxi/feilvxinxi","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/xiugaijiesuanka/xiugaijiesuanka","meta":{},"window":{}},{"path":"/pages/shouye/EPOS/tianjiayinhangka/tianjiayinhangka","meta":{},"window":{}},{"path":"/pages/index/register","meta":{},"window":{"titleNView":false}},{"path":"/pages/shouye/shanghuguanli/huodongxiangqing/huodongxiangqing","meta":{},"window":{}},{"path":"/pages/wode/wodezhengc/wodezhengc","meta":{},"window":{}},{"path":"/pages/wode/wodezhengc/zhengceyemian/zhengceyemian","meta":{},"window":{}},{"path":"/pages/shouye/kaceping/kaceping","meta":{},"window":{}},{"path":"/pages/shouye/chepingyangshi/chepingyangshi","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
