#import <Foundation/Foundation.h>
#import "AdmobWebPluginDelegate.h"
#import "GADBannerView.h"
#import "GADInterstitial.h"
#import "GADBannerView.h"
//#import "AdmobFullDelege.h"
//#import "AdmobBannerController.h"
#import "AdmobMD5Encoder.h"
#import "AdmobBase64Encoder.h"
@class AdmobFullDelege;
@class AdmobBannerController;
@interface AdmobAPI : NSObject
@property(nonatomic,retain) id<AdmobWebPluginDelegate> plugin;


@property(nonatomic,retain) GADInterstitial *admobInterstial;
@property(nonatomic,retain) AdmobFullDelege *admobFullDelegete;
@property(nonatomic,retain) AdmobBannerController *admobController;

@property(nonatomic,copy) NSString *defaultBannerID;
@property(nonatomic,copy) NSString *defaultInterstitialID;
@property(nonatomic,copy) NSString *interstitialID;
@property(nonatomic,assign) BOOL useBaiDuDefaultKey;

-(void) fireEvent:(NSString*) eventType withEventData:(NSString*) jsonString;

- (void)hideBanner;
- (void)showBannerAbsolute:(int) x withY:(int) y;
- (void)showBanner:(int) position;
- (void)initBanner:(NSString *)adid withWidth:(int)width withHeight:(int)height ;
- (void)initInterstitial:(NSString *)adid ;
- (BOOL)isInterstitialReady ;
- (void)showInterstitial;
- (void)cacheInterstitial;
- (NSString*)  netURL;
- (void) updateKey;
@end
