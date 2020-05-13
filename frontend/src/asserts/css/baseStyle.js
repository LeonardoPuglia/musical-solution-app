import {StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex:1,
        alignItems: 'center',
        padding: 20,
        borderColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        marginTop: 30,
        marginLeft: 13,
        opacity: 0.7,
        height: 350,
        width: 230
    },

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

    // passLine:{
    //     borderBottomWidth: 1,
    //     width: -100,
    //     borderBottomColor: 'white',
    //     marginTop:-11
        
    // },

    input:{
        marginTop: 15,
        color:'white',
        fontSize: 14
    },

    button:{
        alignContent:'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop:20,
        opacity: 0.5,
        width: 100,
        height:40
    },

    textButton:{
        color: 'black',
        textAlign:'center',
        marginTop: 10,
        fontSize: 16
    }

 
})
