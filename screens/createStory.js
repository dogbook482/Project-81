import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class CreateStory extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Create Story Here</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        background:'black',
        flex:1,
    },
    title:{
        fontSize:20,
        color:'white',
    },
})