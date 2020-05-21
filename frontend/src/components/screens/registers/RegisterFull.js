import React, {Component} from 'react'
import { StyleSheet,  View} from 'react-native'

import  baseStyles from '../../../assets/css/baseStyle'  
import  registerStyle from '../../../assets/css/baseStyle'  
import Input from '../../custom/Input' 

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
                <View style={registerStyle.containerInputRegister}>
                    <Input  style={localStyles.inputRegister}
                            placeholder='Nome Completo'  
                            placeholderTextColor='white'
                            maxLength={50}
                            //value="Leonardo Puglia Moya Pintudo Junior"
                            widthLine={200} />
                    <Input  style={localStyles.inputRegister}
                            placeholder='CPF'  
                            placeholderTextColor='white'
                            maxLength={50}
                            //value="Leonardo Puglia Moya Pintudo Junior"
                            widthLine={200} />
                    <Input  style={localStyles.inputRegister}
                            placeholder='Data Nascimento'  
                            placeholderTextColor='white'
                            maxLength={50}
                            //value="Leonardo Puglia Moya Pintudo Junior"
                            widthLine={200} />
                    <Input  style={localStyles.inputRegister}
                            placeholder='Endereço'  
                            placeholderTextColor='white'
                            maxLength={50}
                            //value="Leonardo Puglia Moya Pintudo Junior"
                            widthLine={200} />
                </View>
                {/* <View style={localStyles.dropDownView}>
                    <Dropdown baseColor='white'
                            label='Aluno/Professor ?'
                            data={['Aluno','Professor']}
                            textColor='white'
                            itemColor='white'
                            selectedItemColor='yellow'
                            value={this.state.typeRegister}
                            />
                </View> */}
            </View>
        )
    }
}

const localStyles = StyleSheet.create({

    containerInputRegister:{
        flex:1,
        marginTop: 20,
        marginLeft:-20,
        paddingTop:1
    },

    inputRegister:{
        marginTop: 10,
        color:'white',
        fontSize: 12,
        width:210
    },
    dropDownView:{
        marginTop: 15,
        width: 200
    },

    dropDown:{
        backgroundColor: 'transparent',
        width:190,
        fontSize: 10

    },


    dropDownTextStyle:{
        color: 'white'
    }
})