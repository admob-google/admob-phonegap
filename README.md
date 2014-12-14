admob phonegap(cordova) plugin
====================

admob phonegap(cordova) plugin，support ios and android<br/>
build base on phonegap 3.4 or cordova 3.5 ,admob ios sdk 6.10.0 ,admob google play service 4.5<br/>
home:https://github.com/admob-google/admob-phonegap<br/>
phonegap:http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface  <br/>

### new version  warning
this plugin is depressed,please use new version https://github.com/admob-google/admob-cordova

###how to install google admob phonegap plugin?
use the cordova command<br/>
download the plugin ,then install with local location

    cordova plugin add c:\phonegap-admob-plugin 


or install cordova plugin online 
```
cordova plugin add com.admob.admobplugin
```

use the phonegap command<br/>
download the plugin ,then install with local location
```
phonegap plugin add c:\phonegap-admob-plugin 
```
use phonegap builder ,add config<br/>
```
<gap:plugin name="com.admob.plugin" version="1.0.0" source="plugins.cordova.io"/>
```

###show admob banner  at relation position 
```
    
admobAd.initBanner("your admob id here", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);//create admob banner
admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);//show banner at the bottom center 
    
```
### show admob banner ad at absolute position
```
    
admobAd.initBanner("your admob id here", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height);//create admob banner
admobAd.showBannerAbsolute(0,100);//show banner at absolute position
    
```
###show admob Interstitial in cordova app ：
```
 function onInterstitialReceive(message) {
     admobAd.showInterstitial();//show Interstitial after receive or after game over
 }
 
  document.addEventListener(admobAd.AdEvent.onInterstitialReceive, onInterstitialReceive, false);//handler admob event
  admobAd.initInterstitial("your admob id here");//create Interstitial ad
  admobAd.cacheInterstitial();// load admob Interstitial

```
###handle admob ad event
you can handler all native event of admob ,as onInterstitialReceive <br/>
all event type is in AdEvent<br/>
```
function onAdmobEvent (message) {
    //do some on admob event
}
document.addEventListener('onAdmobBannerDismiss', onAdmobEvent, false);
document.addEventListener('onAdmobBannerFailedReceive', onAdmobEvent, false);
document.addEventListener('onAdmobBannerLeaveApplication', onAdmobEvent, false);
document.addEventListener('onAdmobBannerPresent', onAdmobEvent, false);
document.addEventListener('onAdmobBannerReceive', onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialDismiss', onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialFailedReceive', onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialLeaveApplication', onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialPresent', onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialReceive', onAdmobEvent, false);
```
###more function
1.hide admob banner
```
admobAd.hideBanner()
```

2.test if Interstitial has loaded success
```
admobAd.isInterstitialReady(function(isReady){
    if(isReady){
        alert("admob Interstitial loaded");
    }
});
```

3.for more usage ,ref to files in Example <br/>

contact:gooogleadmob@gmail.com
