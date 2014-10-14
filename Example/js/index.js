var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('onAdmobInterstitialReceive', this.onInterstitialReceive, false);
        document.addEventListener('onAdmobBannerReceive', this.onAdmobEventReceive, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    onInterstitialReceive: function (message) {
        admobAd.showInterstitial();
    },
    onAdmobEventReceive: function (message) {
        console.log('receive admob  Event: ' + message.type);
    },
    receivedEvent: function (id) {
        app.addBanner();
        app.addInterstitial();
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    addBanner: function () {
        var successCreateBannerView = function () {
            admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);
        };
        var errorCreateBannerView = function (message) {
            console.log("create banner fail " + message);
        };
        admobAd.initBanner("ca-app-pub-1738093038576474/9839543541", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height, successCreateBannerView, errorCreateBannerView);
    },

    addInterstitial: function () {
        var successCreateInterstitial = function () {
            admobAd.cacheInterstitial();
        };
        admobAd.initInterstitial("ca-app-pub-1738093038576474/2316276747", successCreateInterstitial);
    },

    showInterstitial: function () {
        var isReadySuccess = function (isReady) {
            if (isReady) {
                admobAd.showInterstitial();
            } else {
                admobAd.cacheInterstitial();
            }
        };
        admobAd.isInterstitialReady(isReadySuccess);
    },
    disposePlugin: function () {
        admobAd.disposePlugin();
    }
};
