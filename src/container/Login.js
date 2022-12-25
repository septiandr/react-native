import React from 'react'
import { Image, View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { TouchableHighlight } from 'react-native';

function Login({navigation}) {
    console.log(navigation)
  return (
    <View style ={styles.container}>
        <Image style={styles.image} source={require('../../assets/logo.png')}/>
        <Text style = {styles.text}>Email</Text>
        <TextInput
            style={styles.input}
            keyboardType="text"
        />
        <Text style = {styles.text}>Password</Text>
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            keyboardType="text"
        />
        <TouchableHighlight onPress = {()=> navigation.navigate('Tab')} style ={ styles.button}>
            <Text style ={{marginTop:10}}>Login</Text>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems: 'center', 
        flex:1,
    },
    image : {
        width: 300,
        height: 100,
        marginBottom:150
    },
    text:{
        marginTop:10,
        color:"#989e8f",
        fontSize:15
    },
    input:{
        width:250,
        height:40,
        backgroundColor:"#fff",
        borderRadius:5,
        marginTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    button:{
        width:150,
        marginTop:50,
        height: 40,
        backgroundColor:'#fff',
        alignItems:"center",
        borderRadius:5,
    }
  });
export default Login