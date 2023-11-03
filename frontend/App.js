import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Formulario from './src/components/formulario';
import Tabla from './src/components/Tabla';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabla">
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Tabla" component={Tabla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
