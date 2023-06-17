import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Create Profile Here</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        background:'Red',
        flex:1,
    },
    title:{
        fontSize:20,
        color:'white',
    },
})