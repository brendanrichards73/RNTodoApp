import firebase from 'react-native-firebase';

const _register = async () => {
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

export const registerFirebase = () => _register();
