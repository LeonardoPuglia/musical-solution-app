import React, {Component} from 'react'
import { StyleSheet,  View, Text} from 'react-native'
import {Button  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import DatePicker from 'react-native-datepicker'

import Input from '../custom/Input'


import  baseStyles from '../../assets/css/baseStyle.js'  

export default class RegisterDataTemp extends Component{

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
                    
                    <Text style={localStyles.titleText}>Informe a sua data de nascimento</Text>
                </View>
                
                <View style={localStyles.containerInput}> 
                    <DatePicker
                        style={{width: 200}}
                        mode="date"
                        placeholder="Nasci em ..."
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                    />
                    
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
        marginTop: 120,
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
        marginTop:250
    },
    button:{
        borderColor:'white'
    },

    textButton:{
        color:'white',
        padding: 10
    }
})