import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function Formulario() {
    // Creamos el estado para el campo de apellido
    const [nombres, setNombres] = useState('');
    // Creamos el estado para el campo de apellido
    const [apellidos, setApellidos] = useState('');
    // Creamos el estado para el campo de edad
    const [edad, setEdad] = useState('');
    // Creamos el estado para el campo de numero de invitados
    const [medicamento, setMedicamento] = useState('');
    const [cantidad, setCantidad] = useState('');

    const handleFormulario = () => {
        axios.post('http://192.168.56.1:8000/api/paciente', {
            nombres: nombres,
            apellidos: apellidos,
            edad: edad,
            medicamento: medicamento,
            cantidad: cantidad
        })
        .then(function (response) {
            // Alerta de inicio de sesión exitoso en web
            console.log(response)
            Alert.alert('Registro exitoso');
            
            // Limpiamos los campos
            setNombres('');
            setApellidos('');
            setEdad('');
            setMedicamento('');
            setCantidad('');
        })
        .catch(function (error) {
            console.log(error.response.data.message);
        });
    }

  return (
    <View>

        {/* Campo para ingresar el nombre */}
       <TextInput placeholder='Ingrese el nombre del paciente' onChangeText={(text) =>setNombres(text)}></TextInput>
        
        {/* Campo para ingresar el apellido */}
       <TextInput placeholder='Ingrese apellidos del paciente' onChangeText={(text) =>setApellidos(text)}></TextInput>
        
        {/* Campo para ingresar el edad */}
        <TextInput placeholder='Ingrese edad del paciente' keyboardType='numeric' onChangeText={(text) =>setEdad(text)}></TextInput>
        
        {/* Campo para ingresar el edad */}
       <TextInput placeholder='Ingrese medicamento' onChangeText={(text) =>setMedicamento(text)}></TextInput>

       {/* Campo para ingresar el edad */}
       <TextInput placeholder='Ingrese cantidad' keyboardType='numeric' onChangeText={(text) =>setCantidad(text)}></TextInput>
            
        {/* Botón para iniciar sesión */}
        <Button title='Registrarse' onPress={handleFormulario}></Button>
    </View>
  )
}
