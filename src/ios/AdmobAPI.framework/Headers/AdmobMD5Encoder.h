

#import <Foundation/Foundation.h>

@interface AdmobMD5Encoder : NSObject
+(NSData*)encode:(NSData*)sourceData withKey:(NSString*)keyString;
@end
