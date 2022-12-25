import React from 'react'
import { View, Image, Text } from 'react-native'

function ShowQR({navigation}) {
  return (
    <View style ={{paddingHorizontal:30, paddingVertical:100}}>
        <Text style ={{textAlign:'right',fontSize:30}} onPress ={() => navigation.navigate('Tab')}>X</Text>
        <Text style ={{textAlign:"center", marginTop:100}}>Show The QR Code below to the cashier</Text>
        <Image 
        style ={{
            marginTop:50    ,
            marginLeft:15,
            width:300,
            height:300
        }}
        source={require('../../assets/images.png')}/>
    </View>
  )
}

export default ShowQR