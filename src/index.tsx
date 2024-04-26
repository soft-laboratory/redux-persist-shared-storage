import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'redux-persist-shared-storage' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReduxPersistSharedStorage = NativeModules.ReduxPersistSharedStorage
  ? NativeModules.ReduxPersistSharedStorage
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ReduxPersistSharedStorage.multiply(a, b);
}
