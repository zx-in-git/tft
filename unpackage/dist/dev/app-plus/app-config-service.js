
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/home","pages/index/index","pages/team/team","pages/cash/cash","pages/mine/mine","pages/team/tradeTeam/tradeTeam","pages/team/jinrijiaoyi/jinrijiaoyi","pages/team/jihuozongshu/jihuozongshu","pages/team/huobanzongshu/huobanzongshu","pages/team/shouyizongshu/shouyizongshu","pages/team/shanghuzongshu/shanghuzongshu","pages/team/taijunjiaoyi/taijunjiaoyi","pages/Home/huobanguanli/friendsInfo","pages/Home/machineReg/machineReg","pages/Home/shanghuguanli/machineInfo","pages/Home/huobanguanli/fenruencanshu/fenruencanshu","pages/Home/huobanguanli/friendList/friendList","pages/Home/huobanguanli/tradeInfo/tradeList","pages/Home/huobanguanli/tradeInfo/huobanzongshu/huobanzongshu","pages/Home/huobanguanli/tradeInfo/jinrijiaoyi/jinrijiaoyi","pages/Home/huobanguanli/tradeInfo/jihuozongshu/jihuozongshu","pages/Home/huobanguanli/tradeInfo/shouyizongshu/shouyizongshu","pages/Home/huobanguanli/tradeInfo/shanghuzongshu/shanghuzongshu","pages/Home/huobanguanli/tradeInfo/taijunjiaoyi/taijunjiaoyi","pages/Home/machineReg/shanghuxinxi/shanghuxinxi","pages/Home/machineReg/yinhangka/yinhangka","pages/Home/machineReg/yingyezhizhao/yingyezhizhao","pages/Home/machineReg/querenxinxi/querenxinxi","pages/Home/shanghuguanli/feilvcanshu/feilvcanshu","pages/Home/shanghuguanli/trade/trade","pages/Home/shanghuguanli/machineFirst/machineFirst","pages/team/TemailCount/TemailCount","pages/mine/share/wx_share","pages/mine/temail_share/temail_share","pages/Article/ArtilcleDetail","pages/Home/shangcheng/shangcheng","pages/Home/shangcheng/shangpingxinxi/shangpingxinxi","pages/Home/shangcheng/querendingdan/querendingdan","pages/Home/shangcheng/zhifufangshi/zhifufangshi","pages/Home/shangcheng/dizhi/dizhi","pages/Home/shangcheng/xinzeng/xinzeng","pages/Home/shangcheng/xinzeng/address_edit","pages/Home/shangcheng/zhifu/zhifu","pages/Home/chanpinshiyong/chanpinshiyong","pages/Home/mer_register/share_poster","pages/Home/team_expand/team_expand","pages/Home/zaixiankefu/zaixiankefu","pages/mine/shimingrenzheng/shimingrenzheng","pages/mine/shimingrenzheng/shimingxinxi/shimingxinxi","pages/mine/xiaoxitongzhi/xiaoxitongzhi","pages/mine/wodedingdan/wodedingdan","pages/mine/machinesInfo/machinesInfo","pages/mine/machinesInfo/callSet/callSet","pages/mine/machinesInfo/callSet/call_back","pages/mine/machinesInfo/callLog/callLog","pages/mine/machinesInfo/zhongduandingjia/zhongduandingjia","pages/mine/tixianjilu/tixianjilu","pages/mine/cash/cash","pages/mine/cash/bankList/bankList","pages/mine/cash/tijiaoyinhka/tijiaoyinhka","pages/mine/cash/xuanzeyinhang/xuanzeyinhang","pages/mine/bankSet/bankSet","pages/mine/bankSet/updatePwd/updatePwd","pages/mine/bankSet/bankCreate/bankCreate","pages/mine/bankSet/bankCreate/settle_card_edit","pages/mine/machinesInfo/machinesCount/machinesCount","pages/Home/machineReg/machineChoice/machineChoice","pages/mine/machinesInfo/qujianhuabo/qujianhuabo","pages/mine/machinesInfo/xuanzehuabo/xuanzehuabo","pages/mine/machinesInfo/xuanzehuabo/opt_call_back","pages/mine/machinesInfo/friendsGet/friendsGet","pages/mine/machinesInfo/policGet/policGet","pages/Home/EPOS/EPOS","pages/Home/EPOS/jiesuanka/jiesuanka","pages/Home/EPOS/zhifuka/zhifuka","pages/Home/EPOS/jiaoyijilv/jiaoyijilv","pages/Home/EPOS/tixianjilu/tixianjilu","pages/Home/EPOS/zhifumima/zhifumima","pages/Home/EPOS/feilvxinxi/feilvxinxi","pages/Home/EPOS/xiugaijiesuanka/xiugaijiesuanka","pages/Home/EPOS/tianjiayinhangka/tianjiayinhangka","pages/index/forgetPassword","pages/Home/shanghuguanli/activeFirst/activeFirst","pages/mine/wodezhengc/wodezhengc","pages/mine/wodezhengc/zhengceyemian/zhengceyemian","pages/Home/kaceping/kaceping","pages/Home/chepingyangshi/chepingyangshi","pages/Article/ArtilcleDetail","pages/mine/userInfo/userInfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"畅伙伴","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#F0AD4E","backgroundColor":"#f5f5f5","list":[{"pagePath":"pages/Home/home","iconPath":"static/index.png","selectedIconPath":"static/index_checked.png","text":"首页"},{"pagePath":"pages/team/team","iconPath":"static/team.png","selectedIconPath":"static/team_checked.png","text":"团队"},{"pagePath":"pages/cash/cash","iconPath":"static/profit.png","selectedIconPath":"static/profit_checked.png","text":"收益"},{"pagePath":"pages/mine/mine","iconPath":"static/user.png","selectedIconPath":"static/user_checked.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"畅伙伴","compilerVersion":"2.7.14","entryPagePath":"pages/Home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"backgroundTextStyle":"dark","navigationBarTextStyle":"black"}},{"path":"/pages/index/index","meta":{},"window":{"titleNView":false}},{"path":"/pages/team/team","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"团队","navigationBarTextStyle":"black"}},{"path":"/pages/cash/cash","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"收益","navigationBarTextStyle":"black"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarTextStyle":"black"}},{"path":"/pages/team/tradeTeam/tradeTeam","meta":{},"window":{"navigationBarTitleText":"交易详情","navigationBarTextStyle":"black"}},{"path":"/pages/team/jinrijiaoyi/jinrijiaoyi","meta":{},"window":{"navigationBarTitleText":"今日交易","navigationBarTextStyle":"black"}},{"path":"/pages/team/jihuozongshu/jihuozongshu","meta":{},"window":{"navigationBarTitleText":"激活总数","navigationBarTextStyle":"black"}},{"path":"/pages/team/huobanzongshu/huobanzongshu","meta":{},"window":{"navigationBarTitleText":"伙伴总数","navigationBarTextStyle":"black"}},{"path":"/pages/team/shouyizongshu/shouyizongshu","meta":{},"window":{"navigationBarTitleText":"收益总数","navigationBarTextStyle":"black"}},{"path":"/pages/team/shanghuzongshu/shanghuzongshu","meta":{},"window":{"navigationBarTitleText":"商户总数","navigationBarTextStyle":"black"}},{"path":"/pages/team/taijunjiaoyi/taijunjiaoyi","meta":{},"window":{"navigationBarTitleText":"台均交易","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/friendsInfo","meta":{},"window":{"navigationBarTitleText":"伙伴管理","navigationBarTextStyle":"black"}},{"path":"/pages/Home/machineReg/machineReg","meta":{},"window":{"navigationBarTitleText":"商户登记","navigationBarTextStyle":"black"}},{"path":"/pages/Home/shanghuguanli/machineInfo","meta":{},"window":{"navigationBarTitleText":"商户管理","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/fenruencanshu/fenruencanshu","meta":{},"window":{"navigationBarTitleText":"分润参数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/friendList/friendList","meta":{},"window":{"navigationBarTitleText":"伙伴详情","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/tradeList","meta":{},"window":{"navigationBarTitleText":"交易详情","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/huobanzongshu/huobanzongshu","meta":{},"window":{"navigationBarTitleText":"伙伴总数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/jinrijiaoyi/jinrijiaoyi","meta":{},"window":{"navigationBarTitleText":"今日交易","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/jihuozongshu/jihuozongshu","meta":{},"window":{"navigationBarTitleText":"激活总数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/shouyizongshu/shouyizongshu","meta":{},"window":{"navigationBarTitleText":"收益总数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/shanghuzongshu/shanghuzongshu","meta":{},"window":{"navigationBarTitleText":"商户总数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/huobanguanli/tradeInfo/taijunjiaoyi/taijunjiaoyi","meta":{},"window":{"navigationBarTitleText":"台均交易","navigationBarTextStyle":"black"}},{"path":"/pages/Home/machineReg/shanghuxinxi/shanghuxinxi","meta":{},"window":{"navigationBarTitleText":"商户信息","navigationBarTextStyle":"black"}},{"path":"/pages/Home/machineReg/yinhangka/yinhangka","meta":{},"window":{"navigationBarTitleText":"银行卡","navigationBarTextStyle":"black"}},{"path":"/pages/Home/machineReg/yingyezhizhao/yingyezhizhao","meta":{},"window":{"navigationBarTitleText":"营业执照","navigationBarTextStyle":"black"}},{"path":"/pages/Home/machineReg/querenxinxi/querenxinxi","meta":{},"window":{"navigationBarTitleText":"确认信息","navigationBarTextStyle":"black"}},{"path":"/pages/Home/shanghuguanli/feilvcanshu/feilvcanshu","meta":{},"window":{"navigationBarTitleText":"费率参数","navigationBarTextStyle":"black"}},{"path":"/pages/Home/shanghuguanli/trade/trade","meta":{},"window":{"navigationBarTitleText":"交易明细","navigationBarTextStyle":"black"}},{"path":"/pages/Home/shanghuguanli/machineFirst/machineFirst","meta":{},"window":{"navigationBarTitleText":"商户信息","navigationBarTextStyle":"black"}},{"path":"/pages/team/TemailCount/TemailCount","meta":{},"window":{"navigationBarTitleText":"机具总数","navigationBarTextStyle":"black"}},{"path":"/pages/mine/share/wx_share","meta":{},"window":{"navigationBarTitleText":"微信分享","navigationBarTextStyle":"black"}},{"path":"/pages/mine/temail_share/temail_share","meta":{},"window":{"navigationBarTitleText":"商户推荐","navigationBarTextStyle":"black"}},{"path":"/pages/Article/ArtilcleDetail","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/shangcheng","meta":{},"window":{"enablePullDownRefresh":true,"backgroundTextStyle":"dark","navigationBarTextStyle":"black"}},{"path":"/pages/Home/shangcheng/shangpingxinxi/shangpingxinxi","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/querendingdan/querendingdan","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/zhifufangshi/zhifufangshi","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/dizhi/dizhi","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/xinzeng/xinzeng","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/xinzeng/address_edit","meta":{},"window":{}},{"path":"/pages/Home/shangcheng/zhifu/zhifu","meta":{},"window":{}},{"path":"/pages/Home/chanpinshiyong/chanpinshiyong","meta":{},"window":{}},{"path":"/pages/Home/mer_register/share_poster","meta":{},"window":{}},{"path":"/pages/Home/team_expand/team_expand","meta":{},"window":{}},{"path":"/pages/Home/zaixiankefu/zaixiankefu","meta":{},"window":{}},{"path":"/pages/mine/shimingrenzheng/shimingrenzheng","meta":{},"window":{}},{"path":"/pages/mine/shimingrenzheng/shimingxinxi/shimingxinxi","meta":{},"window":{}},{"path":"/pages/mine/xiaoxitongzhi/xiaoxitongzhi","meta":{},"window":{}},{"path":"/pages/mine/wodedingdan/wodedingdan","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/machinesInfo","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/callSet/callSet","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/callSet/call_back","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/callLog/callLog","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/zhongduandingjia/zhongduandingjia","meta":{},"window":{}},{"path":"/pages/mine/tixianjilu/tixianjilu","meta":{},"window":{}},{"path":"/pages/mine/cash/cash","meta":{},"window":{}},{"path":"/pages/mine/cash/bankList/bankList","meta":{},"window":{}},{"path":"/pages/mine/cash/tijiaoyinhka/tijiaoyinhka","meta":{},"window":{}},{"path":"/pages/mine/cash/xuanzeyinhang/xuanzeyinhang","meta":{},"window":{}},{"path":"/pages/mine/bankSet/bankSet","meta":{},"window":{}},{"path":"/pages/mine/bankSet/updatePwd/updatePwd","meta":{},"window":{}},{"path":"/pages/mine/bankSet/bankCreate/bankCreate","meta":{},"window":{}},{"path":"/pages/mine/bankSet/bankCreate/settle_card_edit","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/machinesCount/machinesCount","meta":{},"window":{}},{"path":"/pages/Home/machineReg/machineChoice/machineChoice","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/qujianhuabo/qujianhuabo","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/xuanzehuabo/xuanzehuabo","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/xuanzehuabo/opt_call_back","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/friendsGet/friendsGet","meta":{},"window":{}},{"path":"/pages/mine/machinesInfo/policGet/policGet","meta":{},"window":{}},{"path":"/pages/Home/EPOS/EPOS","meta":{},"window":{"navigationBarTitleText":"EPOS","navigationBarTextStyle":"black"}},{"path":"/pages/Home/EPOS/jiesuanka/jiesuanka","meta":{},"window":{}},{"path":"/pages/Home/EPOS/zhifuka/zhifuka","meta":{},"window":{}},{"path":"/pages/Home/EPOS/jiaoyijilv/jiaoyijilv","meta":{},"window":{}},{"path":"/pages/Home/EPOS/tixianjilu/tixianjilu","meta":{},"window":{}},{"path":"/pages/Home/EPOS/zhifumima/zhifumima","meta":{},"window":{}},{"path":"/pages/Home/EPOS/feilvxinxi/feilvxinxi","meta":{},"window":{}},{"path":"/pages/Home/EPOS/xiugaijiesuanka/xiugaijiesuanka","meta":{},"window":{}},{"path":"/pages/Home/EPOS/tianjiayinhangka/tianjiayinhangka","meta":{},"window":{}},{"path":"/pages/index/forgetPassword","meta":{},"window":{"titleNView":false}},{"path":"/pages/Home/shanghuguanli/activeFirst/activeFirst","meta":{},"window":{}},{"path":"/pages/mine/wodezhengc/wodezhengc","meta":{},"window":{}},{"path":"/pages/mine/wodezhengc/zhengceyemian/zhengceyemian","meta":{},"window":{}},{"path":"/pages/Home/kaceping/kaceping","meta":{},"window":{}},{"path":"/pages/Home/chepingyangshi/chepingyangshi","meta":{},"window":{}},{"path":"/pages/mine/userInfo/userInfo","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
