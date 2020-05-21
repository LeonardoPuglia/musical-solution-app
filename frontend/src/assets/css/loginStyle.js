import {StyleSheet } from 'react-native'

export default StyleSheet.create({
    logo:{
        position: 'absolute',
        marginTop: 10,
        width: 150,
        height: 100

    },


    containerInput:{
        flex:1,
        marginTop: 100,
        marginEnd: 150,
        paddingTop:1,
        marginLeft: 120
    },

    line:{
        borderBottomWidth: 1,
        width: 150,
        borderBottomColor: 'white',
        marginTop:-11
        
    },


    input:{
        marginTop: 15,
        color:'white',
        fontSize: 14
    },

    button:{
        alignContent:'center',
        borderRadius: 5,
        backgroundColor: 'violet',
        marginTop:20,
        //opacity: 0.5,
        width: 100,
        height:40
    },

    textButton:{
        color: 'black',
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 10,
        fontSize: 16
    }

 
})
