
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReduxPersistSharedStorageSpec.h"

@interface ReduxPersistSharedStorage : NSObject <NativeReduxPersistSharedStorageSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReduxPersistSharedStorage : NSObject <RCTBridgeModule>
#endif

@end
