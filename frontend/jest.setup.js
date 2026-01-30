// jest.setup.js

// Mock react-native modules that don't work well in Jest
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => {
  return {
    __esModule: true,
    default: {
      API: {},
    },
  };
});

// Mock AsyncStorage if you're using it
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

global.fetch = jest.fn();
