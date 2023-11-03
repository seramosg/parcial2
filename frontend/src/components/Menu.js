import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = ({ navigation }) => {
    
    const handleFormulario = () => {
        navigation.navigate('Formulario');
    };

    const handleTabla = () => {
        navigation.navigate('Tabla');
    };

    return (
        <View style={styles.menuContainer}>
            <TouchableButton title="Ir al formulario" onPress={handleFormulario} style={styles.smallButton}/>
            <TouchableButton title="Ir a la tabla" onPress={handleTabla} style={styles.smallButton}/>

        </View>
    );
};

const TouchableButton = ({ title, onPress, style }) => (
    <TouchableHighlight
        style={[styles.button, style]}
        onPress={onPress}
        underlayColor="#E0E0E0"
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column',
        position: 'absolute',  
        top: 0,  
        left: 0, 
        marginTop: 100,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    smallButton: {
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Menu;