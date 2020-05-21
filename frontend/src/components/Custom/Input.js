import React from 'react'

import { View , 
         TextInput,
        } from 'react-native'


import  styles from '../../assets/css/baseStyle'   

export default props => {
    return(
        <>
            <TextInput style={props.style} 
                                placeholder={props.placeholder}
                                placeholderTextColor={props.placeholderTextColor}
                                maxLength={props.maxLength}
                                secureTextEntry={props.isPassword}
                                onChange={props.onChange}
                                value={props.value} />
            <View style={[styles.line, { width: props.widthLine || 100 }]} />
        </>
    )
}