import React, {Component} from 'react'
import { StyleSheet,  View, Text} from 'react-native'
import {Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



import Input from '../custom/Input'


import  baseStyles from '../../assets/css/baseStyle.js'  

export default class Register extends Component{

    constructor(props){
        super(props)
        this.verifyRegister = this.verifyRegister.bind(this)
    }
    state={
        anyPending:false,
        userName:""
    }

    verifyRegister = (userName) => {
            this.setState({anyPending: (userName === "") , userName})
    }

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
                                onChange={userName => this.verifyRegister}
                                value={this.state.userName}
                                widthLine={210} />
                </View>

                <View style={localStyles.containerButton}>
                    
                    <Button 
                            icon={
                                <Icon name='forward'
                                    size={15}
                                    color='white' />}
                            title='Próximo' 
                            titleStyle={localStyles.textButton}
                            type='outline'
                            disabled={this.state.anyPending}
                            buttonStyle={localStyles.button} />
           
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
        borderColor:'white'
    },

    textButton:{
        color:'white',
        padding: 10
    }
})