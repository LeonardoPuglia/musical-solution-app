import React from 'react'

import { View , 
         TextInput,
        } from 'react-native'


import  styles from '../../asserts/css/baseStyle'   

//import  {input, line } from '../../asserts/css/baseStyle'   

export default props => {
    return(
        <>
            <TextInput style={styles.input} 
                                placeholder={props.placeholder}
                                placeholderTextColor={props.placeholderTextColor}
                                maxLength={props.maxLength}
                                />
            <View style={styles.line} />
        </>
    )
}