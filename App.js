import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./src/container/Login";
import TabNav from './src/tabNavigation';
import ShowQR from './src/container/ShowQR';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} options ={{title: "Login"}}/>
        <Stack.Screen name ="Tab" component={TabNav} options ={{title: "Tab"}}/>
        <Stack.Screen name ="ShowQR" component={ShowQR} options ={{title: "ShowQR"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App