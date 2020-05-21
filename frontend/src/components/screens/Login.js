import React, {Component} from 'react'

import { View , 
         Text,
         Alert,
         Image, 
         TouchableOpacity,
        } from 'react-native'

import Input from '../custom/Input'

import  baseStyles from '../../assets/css/baseStyle'   
import  loginStyles from '../../assets/css/loginStyle'   


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
            <View style={baseStyles.container}> 
                <Image source={require('../../assets/images/logo.png')} style={loginStyles.logo}  />

                <View style={loginStyles.containerInput}>
                    

                    <Input placeholder='Email'
                           placeholderTextColor='white'
                           maxLength={20} 
                           style={loginStyles.input}
                           widthLine={150}/>

                    <Input placeholder='Senha'
                           placeholderTextColor='white' 
                           isPassword ={true}
                           maxLength={20}
                           style={loginStyles.input}
                           widthLine={150} />
                   
                </View>
                
                <View >
                    <TouchableOpacity style={loginStyles.button} >
                        <Text style={loginStyles.textButton}> Logar </Text>
                    </TouchableOpacity>

                </View>
               
            </View>
        )
    }
}


export default Login