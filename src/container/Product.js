import React from 'react'
import { View,Text } from 'react-native'

function Product({product}) {
    console.log(product)

  return (
    <View>
        <Text>Coffe</Text>
        {product.map((data) => (
            <View>
                <img source = {require('../../assets/download.jpeg')}/>
                <View>
                    <Text>{data.name}</Text>
                    <Text>{data.desc}</Text>
                </View>
                <Text>{data.price}</Text>
            </View>
        ))}
    </View>
  )
}

export default Product