
#import "AdmobAdPlugin.h"

@implementation AdmobAdPlugin
@synthesize admobAPI;
#pragma mark   private util Function------------------
-(void) fireEvent:(NSString*) eventType withEventData:(NSString*) jsonData{
    NSString *js =@"cordova.fireDocumentEvent('%@',"@"{ 'data': '%@' });";
    NSString *json=[NSString stringWithFormat:js,eventType,jsonData];
    [self writeJavascript:json];
}
#pragma mark   CDVPlugin Function------------------
- (CDVPlugin *)initWithWebView:(UIWebView *)theWebView {
    self = (AdmobAdPlugin *)[super initWithWebView:theWebView];
    if (self) {
        admobAPI=[[AdmobAPI alloc] init];
        admobAPI.plugin=self;
    }
    return self;
}
#pragma mark   Cordova API Function------------------
- (void)admobHideBanner:(CDVInvokedUrlCommand *)command {
    [admobAPI hideBanner];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobShowBannerAbsolute:(CDVInvokedUrlCommand *)command {
    NSDictionary *params = [command argumentAtIndex:0];
    int adx=(int)[params integerValueForKey:@"x" defaultValue:0];
    int ady=(int)[params integerValueForKey:@"y" defaultValue:0];
    [admobAPI showBannerAbsolute:adx withY:ady];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobShowBanner:(CDVInvokedUrlCommand *)command {
    int position= (int)[[command argumentAtIndex:0] integerValue];
    [admobAPI showBanner:position];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobInitBanner:(CDVInvokedUrlCommand *)command {
    NSDictionary *params = [command argumentAtIndex:0];
    NSString *adid=[params objectForKey:@"appID"];
    int width= [[params objectForKey:@"width"] integerValue];
    int height= [[params objectForKey:@"height"] integerValue];
    [admobAPI initBanner:adid withWidth:width withHeight:height];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobInitInterstitial:(CDVInvokedUrlCommand *)command {
    NSDictionary *params = [command argumentAtIndex:0];
    NSString *adid=[params objectForKey:@"appID"];
    [admobAPI initInterstitial:adid];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobIsInterstitialReady:(CDVInvokedUrlCommand *)command {
    BOOL isready=[admobAPI isInterstitialReady];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:isready] callbackId:command.callbackId];
}
- (void)admobShowInterstitial:(CDVInvokedUrlCommand *)command {
    [admobAPI showInterstitial];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
- (void)admobCacheInterstitial:(CDVInvokedUrlCommand *)command {
    [admobAPI cacheInterstitial];
    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}
@end
