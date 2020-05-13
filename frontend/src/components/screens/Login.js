import React, {Component} from 'react'

import { View , 
         Text,
         Alert,
         Image, 
         TouchableOpacity,
        } from 'react-native'

import Input from '../Custom/Input'

import  styles from '../../asserts/css/baseStyle'   


class Login extends Component{

    state ={
        email: 'Leo',
        password: ''
    }

    login = () => {
        Alert.alert(`Email logado: ${this.state.email}`, 'Info')
    }

   render(){

        return(
            <View style={styles.container}> 
                <Image source={require('../../asserts/images/logo.png')} style={styles.logo}  />

                <View style={styles.containerInput}>
                    

                    <Input placeholder='Email'
                           placeholderTextColor='white'
                           maxLength={20} />

                    <Input placeholder='Senha'
                           placeholderTextColor='white'
                           maxLength={20} />
                   
                </View>
                
                <View >
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.textButton}> Logar </Text>
                    </TouchableOpacity>

                </View>
               
            </View>
        )
    }
}


export default Login