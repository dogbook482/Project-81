import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Feed</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        background:'Purple',
        flex:1,
    },
    title:{
        fontSize:20,
        color:'white',
    },
})