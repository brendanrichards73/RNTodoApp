import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps'

export default class Maps extends React.Component {
    static navigationOptions  = {
        title: 'Maps',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
        
            <MapView style = {styles.map}
            initialRegion = {{
                latitude: 13.139238380834923,
                longitude: 80.25188422300266,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }} />
        )
    }

}

const styles = StyleSheet.create({
    map: {
        height: 100,
        flex: 1
        }
});
