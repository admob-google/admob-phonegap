//
//  BaiduAdPlugin.h
//  hello
//
//  Created by zhouyingke on 14-6-7.
//
//

#import "Cordova/CDV.h"
#import <AdmobAPI/AdmobAPI.h>
#import <AdmobAPI/AdmobWebPluginDelegate.h>
@interface AdmobAdPlugin : CDVPlugin <AdmobWebPluginDelegate>
@property (nonatomic,strong) AdmobAPI *admobAPI;
- (void)admobHideBanner:(CDVInvokedUrlCommand *)command;
- (void)admobShowBannerAbsolute:(CDVInvokedUrlCommand *)command;
- (void)admobShowBanner:(CDVInvokedUrlCommand *)command;
- (void)admobInitBanner:(CDVInvokedUrlCommand *)command ;
- (void)admobInitInterstitial:(CDVInvokedUrlCommand *)command ;
- (void)admobIsInterstitialReady:(CDVInvokedUrlCommand *)command ;
- (void)admobShowInterstitial:(CDVInvokedUrlCommand *)command;
- (void)admobCacheInterstitial:(CDVInvokedUrlCommand *)command;
@end
