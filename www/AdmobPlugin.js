var admobAd = {
    AD_POSITION: {
        TOP_LEFT: int = 1,
        TOP_CENTER: int = 2,
        TOP_RIGHT: int = 3,
        MIDDLE_LEFT: int = 4,
        MIDDLE_CENTER: int = 5,
        MIDDLE_RIGHT: int = 6,
        BOTTOM_LEFT: int = 7,
        BOTTOM_CENTER: int = 8,
        BOTTOM_RIGHT: int = 9
    },
    AD_SIZE: {
        BANNER: {width:320,height:50},
        IAB_MRECT:{width:300,height:250},
        IAB_BANNER: {width:468,height:60},
        IAB_LEADERBOARD: {width:728,height:90},
        SMART_BANNER: {width:-1,height:-2},
        IAB_WIDE_SKYSCRAPER: {width:160,height:600},
        IPHONE_LANDSCAPE: {width:480,height:32},
        IPAD_PORTRAIT: {width:769,height:90},
        IPAD_LANDSCAPE: {width:1024,height:90}
    },
    AdEvent: {
        onBannerDismiss: "onAdmobBannerDismiss",
        onBannerFailedReceive: "onAdmobBannerFailedReceive",
        onBannerLeaveApplication: "onAdmobBannerLeaveApplication",
        onBannerPresent: "onAdmobBannerPresent",
        onBannerReceive: "onAdmobBannerReceive",
        onInterstitialDismiss: "onAdmobInterstitialDismiss",
        onInterstitialFailedReceive: "onAdmobInterstitialFailedReceive",
        onInterstitialLeaveApplication: "onAdmobInterstitialLeaveApplication",
        onInterstitialPresent: "onAdmobInterstitialPresent",
        onInterstitialReceive: "onAdmobInterstitialReceive"
    },
    FunNames: {
        hideBanner: "admobHideBanner",
        showBannerAbsolute: "admobShowBannerAbsolute",
        showBanner: "admobShowBanner",
        initBanner: "admobInitBanner",
        initInterstitial: "admobInitInterstitial",
        isInterstitialReady: "admobIsInterstitialReady",
        showInterstitial: "admobShowInterstitial",
        cacheInterstitial: "admobCacheInterstitial",
        disposePlugin: "disposePlugin"
    },
    hideBanner: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobHideBanner',
            [
            ]
        );
    },
    showBannerAbsolute: function (x, y, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobShowBannerAbsolute',
            [
                {x: x, y: y}
            ]
        );
    },
    showBanner: function (position, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobShowBanner',
            [
                position
            ]
        );
    },
    initBanner: function (appID, width, height, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobInitBanner',
            [
                {appID: appID, width: width, height: height}
            ]
        );
    },
    initInterstitial: function (appID, successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobInitInterstitial',
            [
                {appID: appID}
            ]
        );
    },

    isInterstitialReady: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobIsInterstitialReady',
            [

            ]
        );
    },

    showInterstitial: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobShowInterstitial',
            [

            ]
        );
    },

    cacheInterstitial: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'admobCacheInterstitial',
            [

            ]
        );
    },

    disposePlugin: function (successCallback, failureCallback) {
        cordova.exec(
            successCallback,
            failureCallback,
            'AdmobPlugin',
            'disposePlugin', [
                {}
            ]);
    }
};
module.exports = admobAd;
