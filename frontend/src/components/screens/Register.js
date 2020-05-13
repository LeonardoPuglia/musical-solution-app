import React, {Component} from 'react'
import {StyleSheet , View, TextInput} from 'react-native'

import  baseStyles from '../../asserts/css/baseStyle'  
import Input from '../Custom/Input' 

import { Dropdown } from 'react-native-material-dropdown';


export default class Register extends Component{

    state= {
        typeRegister: 'Professor'
    }

    changeText = (value) => {
        this.setState({typeRegister: value})
    }


    render(){
        return(
            <View style={baseStyles.container}> 
                <View style={baseStyles.containerInput}>
                    <Input  placeholder='Nome Completo'  
                                placeholderTextColor='white'
                                maxLength={20}/>
                </View>
                <View style={localStyles.dropDownView}>
                    <Dropdown baseColor='white'
                            label='Aluno/Professor ?'
                            data={['Aluno','Professor']}
                            textColor='white'
                            itemColor='white'
                            selectedItemColor='yellow'
                            value={this.state.typeRegister}
                            />
                </View>
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    dropDownView:{
        marginTop: 15,
        width: 200
    },

    dropDown:{
        
        width:190,
        fontSize: 10

    },

    dropDown:{
        backgroundColor: 'transparent'
    },

    dropDownTextStyle:{
        color: 'white'
    }
})