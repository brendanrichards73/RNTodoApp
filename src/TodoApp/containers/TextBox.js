import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'; 

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, 
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea', 
        height: 50, 
        flex: 1, 
        padding: 5
    },
    container: { height: 50, backgroundColor: '#eaeaea', alignItems:'center', justifyContent: 'center'}
})

const TextBox = ({value, onChangeText, placeholder = 'Type something', onPressIcon}) => {
    return <>
            <TextInput
                onChangeText={onChangeText} 
                value={value}
                placeholder={placeholder}
                style={styles.textInput}
            />
            <TouchableOpacity onPress={onPressIcon}>
                <View style={styles.container}>
                    <AntIcon name='plus' size={30} style={{ color: '#de9595', padding: 10}} />
                </View>
            </TouchableOpacity>
    </>
}

export default TextBox