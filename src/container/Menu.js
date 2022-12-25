import React from 'react'
import { Text , View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Product from './Product';
import data from '../data.json'

const Tab = createMaterialTopTabNavigator();

function Menu() {
  return (
    <View>
      {data.map((data) => (
          <Product product ={data}/>
      ))}
    </View>
      );
}

export default Menu