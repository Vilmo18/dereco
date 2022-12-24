/*import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { useState } from 'react';
import React from 'react';

const TensorCamera = cameraWithTensors(Camera);
export default function App() {
  const [model, setModel] = useState();

  let texturedim =
    Platform.OS == 'ios'
      ? { height: 1920, width: 1080 }
      : { height: 1920, width: 1080 };
  const handleCameraStream = (images: any) => {
    const loop = async () => { 
      const nextimageTensor = images.next().value;
    };
  };
  return (
    <View style={styles.container}>
      <TensorCamera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        cameraTextureHeight={texturedim.height}
        cameraTextureWidth={texturedim.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender={true}
        useCustomShadersToResize={false}
      />
      <Text> Happy to see you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {},
});
*/
// import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyInformations from './src/screens/DailyInformations';
import React from 'react';
//import Test from './screens/test'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dailyInformations"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="dailyInformations" component={DailyInformations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
