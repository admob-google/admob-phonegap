

#import <UIKit/UIKit.h>
#import "GADBannerView.h"
#import "AdmobAPI.h"
@class AdmobAPI;
@interface AdmobBannerController : UIViewController <GADBannerViewDelegate>{
    CGSize adSize;
    int _position;//0表示绝对位置
    int _targetX;
    int _targetY;
}
@property (nonatomic,retain) GADBannerView *adBanner;
 @property (nonatomic,retain) AdmobAPI* context;

-(void) destroyADView;
-(void) createView:(int) w  withHeight: (int) h andGid:(NSString*) gid;
-(void) showBanner:(int)position ;
-(void) showBannerAbsolute:(int)x withY:(int)y;
-(void) hideBanner;
@end
