import React from 'react'
import { Image, ImageBackground, Text, TouchableHighlight, View } from 'react-native'
import { ImageSlider } from "react-native-image-slider-banner";


function Home({navigation}) {
  return (
    <View>
      <Image
        style={{
          width: 150,
          height: 50,
          marginTop: 50
        }}
        source={require('../../assets/logo.png')} />
      <ImageBackground
        source={
          require('../../assets/motif.png')
        }
        style={{
          height: 200,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10
          }}
        >
          <Text>Good Afternoon,</Text>
          <Text
            style={{ fontWeight: 'bold', marginTop: 10 }}
          >Guntur Saputro</Text>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30
          }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
            <TouchableHighlight
            onPress={() => navigation.navigate("ShowQR")}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 20
                }}
                
                source={require('../../assets/images.png')} />
            </TouchableHighlight>
              <View>
                <Text>Saldo</Text>
                <Text>Points</Text>
              </View>
            </View>
            <View style={{ marginLeft: 120 }}>
              <Text>Rp 279.000</Text>
              <Text
                style={{
                  color: '#A8E890'
                }}
              >2.500</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ImageSlider
        data={[
          { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
          { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
        ]}
        autoPlay={false}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
      />
    </View>
  )
}

export default Home