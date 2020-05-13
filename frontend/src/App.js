import React from 'react'

import {
    View,
    StyleSheet,
    ImageBackground
  } from 'react-native';

import Login from './components/screens/Login'
import Register from './components/screens/Register'

const ground = require('./asserts/images/ground.jpg')

  export default () => {
        return(
            <View style={styles.mainContainer}>   
                <ImageBackground source={ground} style={styles.backGroundImage}>
                    <Login />  
                </ImageBackground>
            </View>
        )
  }

  const styles = StyleSheet.create({
      mainContainer:{
        alignContent: 'center',
      },
      backGroundImage:{
          width: '100%',
          height: '100%'
      }
  })