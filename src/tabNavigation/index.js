import * as React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../container/Home';
import Menu from '../container/Menu';


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let image =""

          if (route.name === 'Home') {
            iconName = focused
              ? image = <Image style ={{width : 30, height:30}} source={require('../../assets/home1.png')} />
              : image = <Image style ={{width : 30, height:30}} source={require('../../assets/home2.png')} />
          } else if (route.name === 'Menu') {
            iconName = focused ? 
            image = <Image style ={{width : 30, height:30}} source={require('../../assets/menu1.png')} />: 
            image = <Image style ={{width : 30, height:30}} source={require('../../assets/menu2.png')} />
          }
          return image

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        headerShown: false
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
  );
}