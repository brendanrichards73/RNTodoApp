import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create ({
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    button: {
        width: 100,
        height: 100,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderColor: '#f4511e',
        borderWidth: 2,
        backgroundColor: '#82CAFF'
    },
  })

  const registerFirebase = async () => {
    const enabled = await firebase.messaging().hasPermission();
    console.log('Firebase permissions enabled? ', enabled);
    if (!enabled) {
        try {
            await firebase.messaging().requestPermission();
            // User has authorized
        } catch (error) {
            // User has rejected permissions
        } 
    }
  }

  registerFirebase()


//   const notification = new firebase.notifications.Notification()
//   .setNotificationId('notificationId')
//   .setTitle('My notification title')
//   .setBody('My notification body')
//   .setData({
//     key1: 'value1',
//     key2: 'value2',
//   });

//  notification
//   .android.setChannelId('channelId')
//   .android.setSmallIcon('ic_launcher');

// const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
//   .setDescription('My apps test channel');

// firebase.notifications().android.createChannel(channel);
 
// firebase.notifications().displayNotification(notification);



export default class Home extends Component {
    static navigationOptions  = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    componentDidMount() {
        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log(JSON.stringify(message));
          });

          this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            alert(body);
        });
    }

    componentWillUnmount() {
        this.notificationListener()
        this.messageListener()
    }


    render() {
        return (
            <View style = {styles.buttonContainer}>
    
                <View>
                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the API Fetch Screen' 
                        onPress={()=>this.props.navigation.navigate('API')}>
                        World Countries
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the Maps Screen' 
                        onPress={()=>this.props.navigation.navigate('Maps')}>
                        Maps
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the ToDo Screen' 
                        onPress={()=>this.props.navigation.navigate('ToDo')}>
                        Notes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );    
    }
}

   