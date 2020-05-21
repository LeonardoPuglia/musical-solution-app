import React from 'react'

import {
    View,
    StyleSheet,
    ImageBackground
  } from 'react-native';

import Login from './components/screens/Login'
import Register from './components/templates/Register'
import RegisterDataTemp from './components/templates/RegisterDataTemp'



const ground = require('./assets/images/ground.jpg')

  export default () => {
        return(
            <View style={styles.mainContainer}>   
                <ImageBackground source={ground} style={styles.backGroundImage}>
                    <RegisterDataTemp />  
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