/**
 * Minimum reproducable repo for React-Native-Reanimated bug (iOS)
 * Uncomment the Animated.View code below, shake simulator, tap debug with Chrome. App will silently crash
 *
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Animated from 'react-native-reanimated';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
     
      {/* ! uncomment me */}
     {/* <Animated.View /> */}
    </SafeAreaView>
  );
}


export default App;
