import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import CAMIONERO from "./Camionero";
import ADMINISTRADOR from "./Administrador";
import AGREGARCHOFER from "./AgregarChofer";
import MODIFICARUSUARIO from "./ModificarUsuario";

import ELIMINARRUTA from "./EliminarRuta";
import LISTA from "./Lista";
import AGREGARLISTA from "./AgregarRuta";
import HISTORIAL from "./CamioneroFolder/Historial";
import HISTORIAL2 from "./CamioneroFolder/Historial2";
import PASSWORD from "./CamioneroFolder/Password";
import VIAJES from "./CamioneroFolder/Viajes"
import ELIMINARRUTA2 from "./EliminarRuta2";
import TOMARRUTA from "./CamioneroFolder/TomarRuta";
import VIAJEINDIVIDUAL from "./CamioneroFolder/viajeIndividual";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     {/* 
     Las tres pantallas principales
        */}
      <Stack.Screen name="Login" component={LOGIN} options={{ headerBackVisible:false }} />
      <Stack.Screen name="Administrador" component={ADMINISTRADOR} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="Camionero" component={CAMIONERO} options={{ headerBackVisible:false }}/>
      {/*Ventanas para la gestion del adiistrador
      */}
      <Stack.Screen name="AgregarChofer" component={AGREGARCHOFER} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="ModificarUsuario" component={MODIFICARUSUARIO} options={{ headerBackVisible:false}}/>
      <Stack.Screen name="EliminarRuta" component={ELIMINARRUTA} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="Lista" component={LISTA} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="AgregarRuta" component={AGREGARLISTA} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="EliminarRuta2" component={ELIMINARRUTA2} options={{ headerBackVisible:false }}/>
      {/*Ventanas para la gestion del chofer
        */}
      <Stack.Screen name="Historial" component={HISTORIAL} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="Historial2" component={HISTORIAL2} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="Password" component={PASSWORD} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="Viajes" component={VIAJES} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="TomarRuta" component={TOMARRUTA} options={{ headerBackVisible:false }}/>
      <Stack.Screen name="ViajeIndividual" component={VIAJEINDIVIDUAL} options={{ headerBackVisible:false }}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;