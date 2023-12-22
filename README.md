Reproduces bug found related to React Native Reanimated v3.6.1, though it also seems to be present in earlier versions

Note: I'm using an M1 Mac, so that might be affecting this.


To reproduce:
1. `npm install && cd ios && pod install` to install packages and pod files
2. `npm start --reset-cache` to start metro server
3. `npm run ios` to startup ios simulator
4. Open the app, shake, and press 'Debug with Chrome'
5. Everything works fine as expected.
6. Do 4 again and stop debugging
7. Go to App.tsx and comment back in the Animated.View component
8. Do 4 again.
9. App now crashes without any errors.