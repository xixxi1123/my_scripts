/*
1元红包
一次性
58 20 18 2 * jd_fans_red.js
 */

const $ = new Env('领粉丝福利红包');
const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
var version_='jsjiami.com.v7';const _0x176dd2=_0xc85d;(function(_0x5458b9,_0x1cf7f0,_0x558e23,_0x254b9f,_0x53bcef,_0x2cdcd6,_0x3b5af1){return _0x5458b9=_0x5458b9>>0x8,_0x2cdcd6='hs',_0x3b5af1='hs',function(_0x2e18b4,_0x14396f,_0x3fc869,_0x3cb8c8,_0x5b449b){const _0x36b7bd=_0xc85d;_0x3cb8c8='tfi',_0x2cdcd6=_0x3cb8c8+_0x2cdcd6,_0x5b449b='up',_0x3b5af1+=_0x5b449b,_0x2cdcd6=_0x3fc869(_0x2cdcd6),_0x3b5af1=_0x3fc869(_0x3b5af1),_0x3fc869=0x0;const _0x23341e=_0x2e18b4();while(!![]&&--_0x254b9f+_0x14396f){try{_0x3cb8c8=parseInt(_0x36b7bd(0x13b,'t!%('))/0x1*(-parseInt(_0x36b7bd(0x192,'IT4K'))/0x2)+parseInt(_0x36b7bd(0x114,'uHw7'))/0x3*(parseInt(_0x36b7bd(0x161,'2f#*'))/0x4)+-parseInt(_0x36b7bd(0x138,')Wj4'))/0x5+-parseInt(_0x36b7bd(0x14f,'MYQP'))/0x6+-parseInt(_0x36b7bd(0x195,'aIEs'))/0x7+-parseInt(_0x36b7bd(0x163,'wNh3'))/0x8*(-parseInt(_0x36b7bd(0x188,'nXpr'))/0x9)+parseInt(_0x36b7bd(0x199,'Gw%&'))/0xa;}catch(_0x1e9cd7){_0x3cb8c8=_0x3fc869;}finally{_0x5b449b=_0x23341e[_0x2cdcd6]();if(_0x5458b9<=_0x254b9f)_0x3fc869?_0x53bcef?_0x3cb8c8=_0x5b449b:_0x53bcef=_0x5b449b:_0x3fc869=_0x5b449b;else{if(_0x3fc869==_0x53bcef['replace'](/[xgQnBfUeXtqIpwEPJdVW=]/g,'')){if(_0x3cb8c8===_0x14396f){_0x23341e['un'+_0x2cdcd6](_0x5b449b);break;}_0x23341e[_0x3b5af1](_0x5b449b);}}}}}(_0x558e23,_0x1cf7f0,function(_0x657efc,_0x6ebbed,_0x90d1c7,_0x1ebf32,_0x355462,_0x1c0e08,_0x5208d6){return _0x6ebbed='\x73\x70\x6c\x69\x74',_0x657efc=arguments[0x0],_0x657efc=_0x657efc[_0x6ebbed](''),_0x90d1c7=`\x72\x65\x76\x65\x72\x73\x65`,_0x657efc=_0x657efc[_0x90d1c7]('\x76'),_0x1ebf32=`\x6a\x6f\x69\x6e`,(0x120c32,_0x657efc[_0x1ebf32](''));});}(0xc000,0x25e7a,_0x4630,0xc2),_0x4630)&&(version_=_0x4630);function _0xc85d(_0x324d9d,_0x2dcda4){const _0x46304b=_0x4630();return _0xc85d=function(_0xc85d89,_0x177b94){_0xc85d89=_0xc85d89-0x109;let _0x70e083=_0x46304b[_0xc85d89];if(_0xc85d['OManPZ']===undefined){var _0x31ed9c=function(_0x13f584){const _0x5276b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x407f88='',_0x2c95b8='';for(let _0x1968d7=0x0,_0x25a22b,_0x253168,_0x4db18b=0x0;_0x253168=_0x13f584['charAt'](_0x4db18b++);~_0x253168&&(_0x25a22b=_0x1968d7%0x4?_0x25a22b*0x40+_0x253168:_0x253168,_0x1968d7++%0x4)?_0x407f88+=String['fromCharCode'](0xff&_0x25a22b>>(-0x2*_0x1968d7&0x6)):0x0){_0x253168=_0x5276b0['indexOf'](_0x253168);}for(let _0x37bd52=0x0,_0x480375=_0x407f88['length'];_0x37bd52<_0x480375;_0x37bd52++){_0x2c95b8+='%'+('00'+_0x407f88['charCodeAt'](_0x37bd52)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c95b8);};const _0x52f9fd=function(_0x4d46b,_0x12869b){let _0x2aa8c7=[],_0x4ca60a=0x0,_0xad1dd0,_0x2c7bb9='';_0x4d46b=_0x31ed9c(_0x4d46b);let _0x194db5;for(_0x194db5=0x0;_0x194db5<0x100;_0x194db5++){_0x2aa8c7[_0x194db5]=_0x194db5;}for(_0x194db5=0x0;_0x194db5<0x100;_0x194db5++){_0x4ca60a=(_0x4ca60a+_0x2aa8c7[_0x194db5]+_0x12869b['charCodeAt'](_0x194db5%_0x12869b['length']))%0x100,_0xad1dd0=_0x2aa8c7[_0x194db5],_0x2aa8c7[_0x194db5]=_0x2aa8c7[_0x4ca60a],_0x2aa8c7[_0x4ca60a]=_0xad1dd0;}_0x194db5=0x0,_0x4ca60a=0x0;for(let _0x213e8c=0x0;_0x213e8c<_0x4d46b['length'];_0x213e8c++){_0x194db5=(_0x194db5+0x1)%0x100,_0x4ca60a=(_0x4ca60a+_0x2aa8c7[_0x194db5])%0x100,_0xad1dd0=_0x2aa8c7[_0x194db5],_0x2aa8c7[_0x194db5]=_0x2aa8c7[_0x4ca60a],_0x2aa8c7[_0x4ca60a]=_0xad1dd0,_0x2c7bb9+=String['fromCharCode'](_0x4d46b['charCodeAt'](_0x213e8c)^_0x2aa8c7[(_0x2aa8c7[_0x194db5]+_0x2aa8c7[_0x4ca60a])%0x100]);}return _0x2c7bb9;};_0xc85d['WoamLb']=_0x52f9fd,_0x324d9d=arguments,_0xc85d['OManPZ']=!![];}const _0x29a05c=_0x46304b[0x0],_0x3fb50d=_0xc85d89+_0x29a05c,_0x1d881f=_0x324d9d[_0x3fb50d];return!_0x1d881f?(_0xc85d['KNsTdM']===undefined&&(_0xc85d['KNsTdM']=!![]),_0x70e083=_0xc85d['WoamLb'](_0x70e083,_0x177b94),_0x324d9d[_0x3fb50d]=_0x70e083):_0x70e083=_0x1d881f,_0x70e083;},_0xc85d(_0x324d9d,_0x2dcda4);}let cookiesArr=[],cookie='';if($[_0x176dd2(0x13a,'VIcF')]()){Object['keys'](jdCookieNode)['forEach'](_0xc9b0e9=>{const _0x3dacfc=_0x176dd2;cookiesArr[_0x3dacfc(0x144,'(CyM')](jdCookieNode[_0xc9b0e9]);});if(process[_0x176dd2(0x1a6,'mI3*')][_0x176dd2(0x1b1,'*B]5')]&&process[_0x176dd2(0x193,'@gAc')][_0x176dd2(0x166,'1@*D')]==='false')console['log']=()=>{};if(JSON[_0x176dd2(0x17c,'t!%(')](process[_0x176dd2(0x118,')Wj4')])[_0x176dd2(0x14b,']!MD')](_0x176dd2(0x15f,'*B]5'))>-0x1)process[_0x176dd2(0x18a,'IT4K')](0x0);}else cookiesArr=[$[_0x176dd2(0x19f,'H93p')](_0x176dd2(0x1a0,'t!%(')),$['getdata']('CookieJD2'),...$[_0x176dd2(0x10b,'MYQP')]($[_0x176dd2(0x175,']!MD')]('CookiesJD')||'[]')['map'](_0x395ce6=>_0x395ce6[_0x176dd2(0x119,'WD$4')])][_0x176dd2(0x196,'0GYl')](_0x378552=>!!_0x378552);let allMessage='';!(async()=>{const _0x27a2b3=_0x176dd2,_0x2b3bd1={'HXhPu':function(_0x5c4566,_0xc17aa3){return _0x5c4566===_0xc17aa3;},'RexpN':'false','QkOOd':function(_0x2cd437,_0x52ed46){return _0x2cd437>_0x52ed46;},'vHhwv':'GITHUB','tBahi':_0x27a2b3(0x1c1,'a*gs'),'SMWLS':_0x27a2b3(0x1af,'0GYl'),'imlLQ':_0x27a2b3(0x11c,'B21A'),'aeLSB':function(_0x5255a7,_0x543e96){return _0x5255a7+_0x543e96;},'gVrHB':function(_0x5415b9,_0x48d201){return _0x5415b9+_0x48d201;},'fCAJk':function(_0x5dd8ff,_0x217b8c){return _0x5dd8ff+_0x217b8c;},'DnfIw':_0x27a2b3(0x181,'@gAc'),'xycAt':_0x27a2b3(0x160,'gzjh'),'DsOHY':_0x27a2b3(0x11a,'nXpr'),'pdHrx':function(_0x2a6be3,_0xfe1a44){return _0x2a6be3+_0xfe1a44;},'BSuWg':function(_0x2246e1,_0x5a8f9b){return _0x2246e1+_0x5a8f9b;},'Fhkin':_0x27a2b3(0x1ab,')Wj4'),'lYPyq':function(_0x4f53e0,_0x49a817){return _0x4f53e0+_0x49a817;},'DnoXj':function(_0x5b798c,_0x2ee381){return _0x5b798c+_0x2ee381;},'BDFkC':function(_0x5af0f2,_0x1165a0){return _0x5af0f2+_0x1165a0;},'TFDaG':_0x27a2b3(0x141,'IT4K'),'Ehxqt':_0x27a2b3(0x13f,'KZW('),'feOwP':function(_0x26ff47){return _0x26ff47();},'fUcwX':function(_0x259f0d,_0x210561,_0x1be66e){return _0x259f0d(_0x210561,_0x1be66e);},'vzNYv':function(_0x2cee64,_0x498c07){return _0x2cee64+_0x498c07;},'tJiHX':function(_0x4f8d09,_0x530f4c){return _0x4f8d09*_0x530f4c;},'dHlBP':function(_0x389e29){return _0x389e29();},'WkVJt':function(_0x52e92e,_0x308586){return _0x52e92e*_0x308586;},'gkaZe':function(_0x594a4e,_0x4f72ff){return _0x594a4e+_0x4f72ff;}};if(!cookiesArr[0x0]){if(_0x2b3bd1['tBahi']==='yhZXV'){_0x480375[_0x27a2b3(0x15e,'mU3l')](_0x4d46b)[_0x27a2b3(0x12b,'aIEs')](_0x5487dc=>{_0x52372d['push'](_0x14feee[_0x5487dc]);});if(_0x4ca60a[_0x27a2b3(0x17b,'Gw%&')]['JD_DEBUG']&&_0x2b3bd1[_0x27a2b3(0x179,'0kvs')](_0xad1dd0[_0x27a2b3(0x18f,'0GYl')][_0x27a2b3(0x194,'@gAc')],_0x2b3bd1['RexpN']))_0x2c7bb9[_0x27a2b3(0x18c,'%hN!')]=()=>{};if(_0x2b3bd1[_0x27a2b3(0x147,'VIcF')](_0x194db5[_0x27a2b3(0x18e,'H93p')](_0x213e8c[_0x27a2b3(0x19c,'(CyM')])[_0x27a2b3(0x116,'URD$')](_0x2b3bd1[_0x27a2b3(0x191,'3)y!')]),-0x1))_0x1953de['exit'](0x0);}else{$[_0x27a2b3(0x1a4,'i5uD')]($[_0x27a2b3(0x1b8,'WD$4')],_0x2b3bd1['SMWLS'],_0x2b3bd1['imlLQ'],{'open-url':_0x27a2b3(0x1a3,'t!%(')});return;}}for(let _0x4258da=0x0;_0x4258da<cookiesArr['length'];_0x4258da++){if(cookiesArr[_0x4258da]){cookie=cookiesArr[_0x4258da],$['UserName']=decodeURIComponent(cookie[_0x27a2b3(0x16a,'uHw7')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x27a2b3(0x184,'mI3*')](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x27a2b3(0x17f,'KZW(')]=_0x2b3bd1[_0x27a2b3(0x16f,'URD$')](_0x4258da,0x1),$[_0x27a2b3(0x171,'A)*L')]=!![],$[_0x27a2b3(0x185,'I&@A')]='',message='',console[_0x27a2b3(0x10f,'aIEs')](_0x2b3bd1['gVrHB'](_0x2b3bd1['fCAJk'](_0x2b3bd1[_0x27a2b3(0x12d,'emd6')](_0x2b3bd1['DnfIw'],$['index']),'】')+($[_0x27a2b3(0x137,'KZW(')]||$['UserName']),_0x2b3bd1[_0x27a2b3(0x19e,'I#DQ')]));if(!$[_0x27a2b3(0x19d,'%hN!')]){if(_0x27a2b3(0x109,'@gAc')!==_0x2b3bd1[_0x27a2b3(0x182,'IT4K')])_0x5ddff6['log'](_0x27a2b3(0x1bb,'rLcJ'));else{$[_0x27a2b3(0x12e,'0GYl')]($[_0x27a2b3(0x164,'I&@A')],_0x27a2b3(0x172,')Wj4'),_0x2b3bd1[_0x27a2b3(0x131,'1@*D')](_0x2b3bd1['pdHrx'](_0x2b3bd1[_0x27a2b3(0x133,'WD$4')](_0x2b3bd1[_0x27a2b3(0x18b,'(CyM')](_0x27a2b3(0x110,'(CyM'),$[_0x27a2b3(0x13d,'(CyM')]),'\x20'),$['nickName']||$[_0x27a2b3(0x123,'2f#*')]),_0x2b3bd1['Fhkin']),{'open-url':_0x2b3bd1[_0x27a2b3(0x197,'wNh3')]}),$[_0x27a2b3(0x12f,'0GYl')]()&&await notify[_0x27a2b3(0x1b5,'A)*L')](_0x2b3bd1[_0x27a2b3(0x1ae,'A)*L')]($[_0x27a2b3(0x1bc,'t!%(')]+_0x27a2b3(0x157,'UOo^'),$[_0x27a2b3(0x167,'UOo^')]),_0x2b3bd1[_0x27a2b3(0x187,'D9JH')](_0x2b3bd1[_0x27a2b3(0x112,'3)y!')](_0x2b3bd1['DnoXj'](_0x2b3bd1[_0x27a2b3(0x1b0,'URD$')](_0x2b3bd1[_0x27a2b3(0x16e,'a*gs')],$[_0x27a2b3(0x155,'0GYl')]),'\x20'),$['UserName']),_0x2b3bd1['Ehxqt']));continue;}}await _0x2b3bd1[_0x27a2b3(0x11b,'%hN!')](fansapp_query),await $[_0x27a2b3(0x1a5,'mU3l')](_0x2b3bd1[_0x27a2b3(0x1aa,'URD$')](parseInt,_0x2b3bd1[_0x27a2b3(0x14a,'nXpr')](_0x2b3bd1[_0x27a2b3(0x16b,'@gAc')](Math[_0x27a2b3(0x19a,'%hN!')](),0x3e8),0x1f4),0xa)),await _0x2b3bd1[_0x27a2b3(0x1a9,'(U#h')](fansapp_draw),await $['wait'](parseInt(_0x2b3bd1['BSuWg'](_0x2b3bd1[_0x27a2b3(0x148,'KZW(')](Math[_0x27a2b3(0x128,'Gw%&')](),0x9c4),0x9c4),0xa));}}allMessage&&($['isNode']()&&await notify[_0x27a2b3(0x189,'A61R')](_0x2b3bd1['gkaZe']('',$[_0x27a2b3(0x1c5,'(U#h')]),''),$['msg']($['name'],'',allMessage));})()[_0x176dd2(0x139,'dgso')](_0x49a007=>{const _0x2d9ce6=_0x176dd2,_0x4323a3={'aZrqp':function(_0x106c1b,_0x53fd7b){return _0x106c1b+_0x53fd7b;},'mQdEv':function(_0x1370d1,_0xb28cb4){return _0x1370d1+_0xb28cb4;},'cJwfI':_0x2d9ce6(0x1ac,'ljdu')};$[_0x2d9ce6(0x121,'A)*L')]('',_0x4323a3[_0x2d9ce6(0x111,'H[!1')](_0x4323a3[_0x2d9ce6(0x16d,'0GYl')]('❌\x20',$[_0x2d9ce6(0x1c5,'(U#h')])+_0x4323a3[_0x2d9ce6(0x15b,'H[!1')],_0x49a007)+'!','');})[_0x176dd2(0x129,'pXaw')](()=>{const _0x5ee3b0=_0x176dd2;$[_0x5ee3b0(0x1c2,'1@*D')]();});function fansapp_query(){const _0x36a392=_0x176dd2,_0x50e407={'OPncg':_0x36a392(0x170,'A61R'),'OZFxR':function(_0x4926d0,_0x5d8654){return _0x4926d0===_0x5d8654;},'zaRMU':_0x36a392(0x10c,'0kvs'),'sPtYS':_0x36a392(0x180,'I&@A'),'oZspg':function(_0x55d0c9,_0x549172){return _0x55d0c9(_0x549172);},'pXSFG':_0x36a392(0x1b7,'nXpr'),'CTlKY':_0x36a392(0x1c3,'I#DQ'),'RFcEf':'gzip,\x20deflate,\x20br','yVypl':_0x36a392(0x1b9,'MYQP'),'BGztm':'keep-alive','osnhC':'wq.jd.com','NfqXF':'jdapp;android;11.4.4;;;appBuild/98651;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1676722394482%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0\x20(Linux;\x20Android\x209;\x20ONEPLUS\x20A3000\x20Build/PKQ1.181203.001;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20MQQBrowser/6.2\x20TBS/046141\x20Mobile\x20Safari/537.36'};return new Promise(async _0x13f029=>{const _0x565d00=_0x36a392,_0x15d8c2={'url':_0x50e407[_0x565d00(0x154,'H[!1')],'headers':{'Accept':_0x50e407[_0x565d00(0x12a,'6ij9')],'Accept-Encoding':_0x50e407['RFcEf'],'Accept-Language':_0x50e407[_0x565d00(0x142,'3)y!')],'Connection':_0x50e407[_0x565d00(0x152,'B21A')],'Cookie':cookie,'Host':_0x50e407['osnhC'],'Referer':_0x565d00(0x132,'MYQP'),'User-Agent':_0x50e407[_0x565d00(0x168,'hH](')]}};$[_0x565d00(0x17a,'0kvs')](_0x15d8c2,(_0x3d9f0a,_0x12fdca,_0x208758)=>{const _0x1f6111=_0x565d00,_0x1b7a7e={'kIizH':_0x50e407['OPncg']};try{if(_0x50e407[_0x1f6111(0x153,'6ij9')](_0x1f6111(0x19b,'pXaw'),_0x50e407['zaRMU']))_0x29db52=[_0x4399cc[_0x1f6111(0x1b6,'H[!1')]('CookieJD'),_0x3ceb0a['getdata'](_0x1b7a7e[_0x1f6111(0x1ad,'6ij9')]),..._0x1a0bde[_0x1f6111(0x149,'Gw%&')](_0x1dc1d8[_0x1f6111(0x120,'A61R')](_0x1f6111(0x122,'(CyM'))||'[]')[_0x1f6111(0x176,'(CyM')](_0x4723a4=>_0x4723a4[_0x1f6111(0x1be,'bIQE')])][_0x1f6111(0x15c,')Wj4')](_0x6b4bdf=>!!_0x6b4bdf);else{if(_0x3d9f0a)console[_0x1f6111(0x13e,'i5uD')]('\x5cn'+$[_0x1f6111(0x115,'Zqsn')]+_0x50e407['sPtYS']),$['logErr'](_0x3d9f0a);else{}}}catch(_0x2afac8){$[_0x1f6111(0x1a7,'mU3l')](_0x2afac8,_0x12fdca);}finally{_0x50e407['oZspg'](_0x13f029,_0x208758);}});});}function fansapp_draw(){const _0x385567=_0x176dd2,_0x333521={'xPFLR':function(_0xce1b0a,_0x22d0c6){return _0xce1b0a==_0x22d0c6;},'fMlWL':function(_0x329cb9,_0x17f167){return _0x329cb9===_0x17f167;},'ztdMn':_0x385567(0x15d,'t!%('),'uOpoR':_0x385567(0x10d,'6ij9'),'mSBPB':_0x385567(0x165,'6ij9'),'urlij':function(_0x4cab71,_0x34f3de){return _0x4cab71!==_0x34f3de;},'fUdqT':'iTgMR','TJsip':_0x385567(0x1b4,'Gw%&'),'iKOsV':_0x385567(0x14d,'0GYl'),'MnDUN':_0x385567(0x16c,'WD$4'),'axGMx':_0x385567(0x162,'gzjh'),'xTkul':'jdapp;android;11.4.4;;;appBuild/98651;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1676722394482%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22CNG5DtLrZWG3YwG5DNVsDq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0\x20(Linux;\x20Android\x209;\x20ONEPLUS\x20A3000\x20Build/PKQ1.181203.001;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/89.0.4389.72\x20MQQBrowser/6.2\x20TBS/046141\x20Mobile\x20Safari/537.36'};return new Promise(async _0x2ac17d=>{const _0xddc486=_0x385567,_0x59b0d7={'CNEqV':function(_0x386dc,_0x19b742){const _0x51f33f=_0xc85d;return _0x333521[_0x51f33f(0x1c0,'(U#h')](_0x386dc,_0x19b742);},'ophgu':function(_0x38b7b4,_0xbfcd8c){const _0x2b6e56=_0xc85d;return _0x333521[_0x2b6e56(0x186,'Gw%&')](_0x38b7b4,_0xbfcd8c);},'prntw':_0xddc486(0x127,'mI3*'),'CZWMa':_0x333521[_0xddc486(0x183,'ljdu')],'iLAof':_0x333521[_0xddc486(0x156,'D9JH')],'XrdVq':_0x333521[_0xddc486(0x126,'wNh3')],'FksOs':'请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'};if(_0x333521[_0xddc486(0x143,'I#DQ')](_0x333521[_0xddc486(0x178,'0kvs')],_0xddc486(0x150,'UOo^'))){const _0x38a9be={'url':_0x333521['TJsip'],'headers':{'Accept':_0x333521[_0xddc486(0x1a2,'rLcJ')],'Accept-Encoding':_0x333521[_0xddc486(0x1b3,'emd6')],'Accept-Language':_0xddc486(0x1bd,'1@*D'),'Connection':_0xddc486(0x10e,'VIcF'),'Cookie':cookie,'Host':_0x333521[_0xddc486(0x15a,'mU3l')],'Referer':'https://wqs.jd.com/','User-Agent':_0x333521[_0xddc486(0x1a8,'uHw7')]}};$[_0xddc486(0x134,'nXpr')](_0x38a9be,(_0x223478,_0x18a6af,_0x379fad)=>{const _0x11acff=_0xddc486,_0x5a63ad={'HtfNz':function(_0xde2540,_0x338b7b){const _0x1480c0=_0xc85d;return _0x59b0d7[_0x1480c0(0x174,']!MD')](_0xde2540,_0x338b7b);},'gcEwk':'string','sxChd':_0x11acff(0x14c,']!MD')};try{if(_0x223478){if(_0x59b0d7[_0x11acff(0x173,'dgso')](_0x59b0d7[_0x11acff(0x135,'@gAc')],_0x59b0d7['prntw']))console[_0x11acff(0x151,'A61R')]('\x5cn'+$[_0x11acff(0x124,']!MD')]+_0x59b0d7['CZWMa']),$[_0x11acff(0x17e,'bIQE')](_0x223478);else{if(_0x5a63ad[_0x11acff(0x1b2,')Wj4')](typeof _0x34eb84,_0x5a63ad['gcEwk']))try{return _0x42aab8['parse'](_0x125350);}catch(_0x45f541){return _0x4c6272[_0x11acff(0x190,'6ij9')](_0x45f541),_0x40f71e['msg'](_0x5f0e2d['name'],'',_0x5a63ad[_0x11acff(0x14e,'i5uD')]),[];}}}else msg=_0x379fad[_0x11acff(0x1ba,'0kvs')](/"sPrizeName":"(.*?)"/)&&_0x379fad[_0x11acff(0x146,'wNh3')](/"sPrizeName":"(.*?)"/)[0x1]||_0x59b0d7['iLAof'],console[_0x11acff(0x18d,'wNh3')](''+_0x59b0d7[_0x11acff(0x177,'0GYl')]+msg);}catch(_0x1e58ca){console['log'](_0x59b0d7[_0x11acff(0x11e,'emd6')]);}finally{_0x2ac17d(_0x379fad);}});}else return _0x348749[_0xddc486(0x113,'nXpr')](_0x1d1860),_0x3b4f90[_0xddc486(0x158,']!MD')](_0x26f81c[_0xddc486(0x169,'Gw%&')],'',_0x59b0d7[_0xddc486(0x159,'I&@A')]),[];});}function _0x4630(){const _0x370bd4=(function(){return[...[version_,'gEjsWjtxXifBnamiQ.PIcompew.gvJ7UVdBUqqgn==','WQnWfSoi','j3xdPJSh','W4tdOdj9hq','s8k7bSkIlLNcHmooWRnJvCotW4mmWORcNcK','a8kQBCkNW5K','vmomvSklW5a','W6BdG8k/kx4','C8oWW4tdPaK2W4NdJ8oi','WOKjW7BcMmkpFNG','44gE5O2H56si44c9g1/cMdRdOGNLTkRLPlBMLiK','AZNcRcBcTq','WQpdQCogW7m4','WOFdGSo3W6ypWRSI','WOurvG','nSkjBCk0W54','WPn3b8kcW68','WR16c8kJW44','WPjhfW','WQH/dq','WPtdSw/dQL3cMmoNbmk9','lMuAWP3dUa','CgjbBCklWRi','tLTTWOfM','swJcHmolW6VMNAhORRRORjhMSABLP7NOT7rV4Ok+77Io4OkC77Us','WRRcGheFB3eS5B6C5AAK44kT5lQe5lI76ls35y2P','W6hcLSkGWQTW','W4K4xw/cKG','WQpdHCo2WQvl','hshcPSoWW6ZdPtxcGW','WQTCf8o6iW','WR5UWR5gW5G','BConbmo8yYGsdW','q8o6W4xdQY48W7FdOSkCsW','W4dcNCkgWPC','WO8Mvdaa','WOCGWRK','ruddKa','W6DGWQTkartdH8knWRO','c8kvFW','WOtdVLK','W5nAxK9y','WPtdL8kbWQXZWRldUSon','W5xdHc0','W7RdRGrXabLtW5S','WPFdHCoLWOjtkwFdOLlcJSoNW7a','cmkszCkwW4RcMa','qeldM8kFxG','DetcICohFdxdVsiR','W7KKtmkAxSkzDmo3W7/cGtL/Aa','WPKUWRdcUsyS','CmkVW6ryFG','WO0Eua','WOi8WPlcSI4Onq','sMevWP/cLG','W7nXWQ1hdGFdJW','WQtdQNldQfRcMSoejG','WOVdQNO','WPJdSmk4FXS','WO/dSwNdS0ddHCkHtCkMda7cMuD/WR7cS8oweCkGB3BdIcmutvfSWPqDogDLlaVcHmogWR52BSkTW6zpda','fCk0WOG','WQVdLeddIG','WQVdISo0'],...(function(){return[...['WRddMK7dU8oJvq','mKddUs0d','jZ3dL8oPtq','W6hdS8kqdwq','roITHUMhV+AwNoEyG+w9PEInGowoH8kbbmkSCZhdL8oKeW3cKWVdSCktWRdcVLpdO8kuWQCYle9tWOPXmhrvi0ddGb13WRfTz8kDsSkBewX9W5JcLq','WP9S5Asi6lshW50Q5yYk5zMMea8','WOpdMfCRWRu','WOWJW6RcJSkz','44g+5OYR56sZ44oZ6k2y5yAI6i+a5y+G5lUm5lQ56lsv5y2p5lQ3wCkfst1vq8kf55QE5O6O5l6Q55AyWOGVWRRcT14L55Mn5lIw5lU3566V5yM26i+Y5yYd','W4xdOSk1ex8','bNSKWQhdRSkyjey','bSofvgic','aSoNWO8aWOO','WQvLd8oDhmkAA8k+W4RcVMjewCklW7/cQdBcLCk2WRb6t8kfW6NdTmonW6hdO0aFW7aRdHzjCY1GWRjPWOJcJY9/l8k1W5GsW6DaW6NdSmoMn8o3eq/dRJ/cOSoiF8odkI1CehJcOSk4puvWWQJcTSk3WQVdMx0btSkexKfXxfNcJmkCdmoIWO/dHbaZWOqdWPtcTmoOz1tcVmoQEItcTSoBW4BdO8kKWQ/cQSkbWOaomSoqfIxdKrCrW4tcOmkcW4RdVmkTf1/cL8kPW4GpWR4LW5RcS8k+mZ/dOuL0cSknW5ToWORcS8ozy8khW5RcMSkpWOScmCkHteKlqxxcPXBdUHRdIbXwW4BcOSkMW7/cJCkdWOfPyeuQzH3cNmo7WPlcIreNvxXpWOiicq0ICmkX','WPmFW5tcK8kMEgldUmoaiq','WRxcRN5BW6hcJG0','n8kopSoEw0ThzSobWQ3cKSk7tY01WR4AW4VcUCksW7DqamkJW4FdNSkbW6BcNavIW5uvF0NdK3jJkmoRqmkhW7xcLsGNWPpcMCkJlCoUW6/dQSobWO0mlKldOWFcV8k4oYvXhdNdU8kromkJWPfkbCoxW65ngCkwWO1HWPldT8kKWOlcUqe0zmo0qu3dUCo9WQf2W4NcVCkgietcRu9bgexdJaaOW5PZW7qHkmkrWQS3WQlcN1pdRSk5ESofWPb/lCohW4JdImkssJtcLh/cMuGvySoZWRhdVmofDLzxW7dcJLHGW5vSjmojW4xdPbFdRJ07W73dSCoFW5eHs8khxdL/WPbIiSk7W7WdWRWyW6u8DCoIW75OW400WQtcSa5iqrZdTuX6WOu9cNBdJx4toSoz','qSkGaSk3','W40eW4FdPba','WPHdf8kqW5m','5REk5yIt5AED54gN54Ml5lQ177266k++56U55zoV5yEd6k+qoG','WONdPhddPG','quj+W7PZ','F2jjq8kqWQu','W7RcKCk1W7eskmo0ymoAW4aUW4xcVW','oYxdVCoNtW','AmoeFCkGW6y','x0u9W7W','gdDC','WPFdSg7dQW','lrtdLSoo','W5NdVGj0jG','sf4HW7bZWOa','W4mdWQxdPrq','WPbTb8kwW50','5REt5yI55Asu54c654U75lQT77Y16kY556Qf5zow5yEZ6k2ztW','W5aWW6ldP1FcVwtdRYNdQG','W4pcMSk6','5lMe5lMS6lsa5y6p','WRpcKxHoW7a','W6f8wwbe','m8kvlq','EYxcO2SEW4HgW6ZcO8k1','DxT3W6e','W67dImkxh0tcQtm','vLK0','k8oFra','t8kUamk5AXW','nSkUe8oVsW','WO0QWPhcQHK','gCkch8kvW6hcI8o5EZpcPmk6z3CtWRpdHSk6WReUWOniW7SnqWBcUmoBwCoxjeXEv8oFWPOWkM0DECo3WPvK','WO7cOfBdIN0','jSofWOO6WQi','W4xcImogo34fjhRcM8kKgLm','v8o6W5/dQWeNW6i','WOWvW50','WQSFsrmRW5RcRCk3xq','W7ldMbVdTSkOwCoFda','WO7dHSoUW6C','CKhcI8kFlfxcTauUWPhdUSo3ca','rhZdTCkdtq','WQtdL8o2WO90','WR9WfCojamon','DCknW5n9FSoSWPu'],...(function(){return['WQVdHviAWQq','W4NcMSkVW7yhEKi','hSo2iCkassdcMSoT','kCokWOOFWQ8','a8kiBG','b8kir8knW4VcJW','W5KnWOFdOG','xhWHW5fF','W58yWP7dTW0ThYBdSxJdQNRdQqFdJ8otWPdcHCoC','BSksgSkfzq','omkFpG','W4ddMdvbmG','hmkUFmklW4u','svXQWO9qWODRW5q','F8kecXPismkNo8oMiCkR','zYJcSclcQa','W5iMW4NdUb7cUq','W5xcVcVcSqdcJSohdCkNcYS','W7uHq8kCwSkqcCozW7RcUYjN','WOeEqH06','fmkOWOG','lEIVGUMhHoAvLoEzPEw+S+IoSEwnP8ohW4/dJuFdICo7','Fg00WP/cOW','5lIj5lU56lEj5yYu','W5Xet0Hc','r2OAWRFcIa','WPGfvra','W5fpWOpdGCoyB0BdU8olfxC','re7dG8kWzW','W6O+W4JdMb4','Cf5FWQ5Q','WRL+nmopbq','kCkabmo3xG','WONdICoNW6CwWOaL','6kYx5yMy6zIm5OAn5z2gWO0SWQvuW6NOViVLH7RMOktKVzZMLkVLHzlLRRhcOEw5UEITM+MaJUI/U+IgJEADJ+wmVUInO+wnMt3dI8o3eCkTbG','rmouiW','c8k/WQWUpW','WOzyW5RcS08LahRdTwZdVWxdIa','W6qSpSkRfG','xmoWW4W','m8kXeCkrW78','WQFdI3GPWQ8','WQlcK1L5W4C','b8kvBCkhW5C','WOLYWRT+W60','W5qgpSkhcXdLTPRLP5dMLPpdUaxdRG','WO3dLmoK','nspcTSouW5e','WR3dJw7dS8oP','WRhcGx1zW4K','kmoyxLGDqG','W53cPvZdK3RMNjRORAZORPxMSOBLPzJOTyRdL+kbLE+4NEkcRo+7LG','WRFdKfddJq','c3yVWQ3dVSky','utSMrbbkWP9SW4dcTG','WPdcMKZdQmkhASolpqi','dgaIbf5oW5yPWOC','hrZcHSoKpg1HWO7dQCoglSkk','hsNcQmo+','6i2F5BYgbhe','Cw4mW51yWQxcR8kw','W6iAnmkElbqfWOq','WRdcP1xdOv4'];}())];}())];}());_0x4630=function(){return _0x370bd4;};return _0x4630();};function jsonParse(_0x36f93f){const _0x1daf36=_0x176dd2,_0x4ad743={'bZaxS':function(_0x5360d2,_0x5afc7d){return _0x5360d2==_0x5afc7d;},'rUuij':_0x1daf36(0x10a,'1@*D'),'zwJxS':'NuBAA'};if(_0x4ad743[_0x1daf36(0x17d,'*B]5')](typeof _0x36f93f,_0x4ad743[_0x1daf36(0x136,'0GYl')]))try{if(_0x1daf36(0x140,'I#DQ')!==_0x4ad743['zwJxS'])_0x7867cb[_0x1daf36(0x1c4,'t!%(')](_0x34b69f[_0x5d0474]);else return JSON[_0x1daf36(0x11d,'hH](')](_0x36f93f);}catch(_0x23d993){return console[_0x1daf36(0x1a1,'t!%(')](_0x23d993),$[_0x1daf36(0x117,'1@*D')]($[_0x1daf36(0x130,'MYQP')],'',_0x1daf36(0x14c,']!MD')),[];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }