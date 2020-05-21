import React, {Component} from 'react'
import { StyleSheet,  View, Text} from 'react-native'
import {Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



import Input from '../custom/Input'


import  baseStyles from '../../assets/css/baseStyle.js'  

export default class Register extends Component{

    render(){
        return(
            <View style={baseStyles.container}>
                <View style={localStyles.containerTitle}>
                    
                    <Text style={localStyles.titleText}>Informe o seu nome completo</Text>
                </View>
                
                <View style={localStyles.containerInput}> 
                    <Input  style={localStyles.input}
                                placeholder='Nome Completo'  
                                placeholderTextColor='white'
                                maxLength={50}
                                //value="Leonardo Puglia Moya Pintudo Junior"
                                widthLine={210} />
                </View>

                <View style={localStyles.containerButton}>
                    
                    <Button 
                            icon={
                                <Icon name='forward'
                                    size={15}
                                    color='blue' />}
                            title='Próximo' 
                            type='outline'
                             />
           
                </View>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({

    containerTitle:{
        textAlign: 'center',
        position:'absolute',
        marginTop:50,
        marginLeft:30
        
    },
    titleText:{
        marginLeft:0,
        fontSize: 22,
        color:'white'
    },
    containerInput:{
        position:'absolute',
        flex:1,
        marginTop: 100,
        marginLeft:0,
        paddingTop:50
    },

    input:{
        marginTop: 10,
        color:'white',
        fontSize: 18,
        width:210,
        textAlign:'center'
    },

    containerButton:{
        marginTop:200
    },
    button:{
        
    }
})