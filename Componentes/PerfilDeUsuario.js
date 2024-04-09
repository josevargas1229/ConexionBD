import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

import { StylePerfilDeUsuario } from './Styles'
import { Boton } from './Atomicos'
import useFetch from "./useFetch";
import axios from "axios";
import MyBlur from "./MyBlur";
import ImagePickerExample from "./ImagenEjemplo";

export const PerfilDeUsuario = () => {
  const { data, loading } = useFetch('https://pasteleria-api.onrender.com/user')
  const nav = useNavigation();
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Lógica para guardar la contraseña
    console.log("Contraseña guardada:", password);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(`https://pasteleria-api.onrender.com/auth/logout`, null, { withCredentials: true });
      // Si la solicitud de logout fue exitosa, el código de estado de la respuesta estará en el rango 2xx
      if (response.status == 200) {
        nav.navigate('Login')
      } else {
        console.log("Error en la solicitud de logout");
        Alert.alert("Error al cerrar sesión")
      }
    } catch (error) {
      console.error("Error en la solicitud de logout:", error);
    }
  };

  // Condición ternaria para renderizar el componente solo cuando loading sea false
  return (
    <>
      <MyBlur />
      {!loading && (
        <View style={StylePerfilDeUsuario.container}>
          <View style={StylePerfilDeUsuario.card}>
            <View style={StylePerfilDeUsuario.DatosUser}>
              <Image source={{ uri: data.datosCuenta.imagenPerfil }} style={StylePerfilDeUsuario.image} />
              <View style={{ position: 'absolute', bottom: 0, left: 90 }}>
                <ImagePickerExample />
              </View>
              <View style={StylePerfilDeUsuario.DatosUserText}>
                <Text style={StylePerfilDeUsuario.titulo}>{`${data.nombre.nombre} ${data.nombre.apP} ${data.nombre.apM}`}</Text>
                <Text style={StylePerfilDeUsuario.texto}>{data.datosCuenta.email}</Text>
              </View>
            </View>
          </View>

          <View style={StylePerfilDeUsuario.Fcard}>

            <View style={StylePerfilDeUsuario.card}>
              <View>
                <Text style={StylePerfilDeUsuario.sudtitulo}>Contraseña</Text>
                <TextInput
                  style={StylePerfilDeUsuario.input}
                  placeholder="Contraseña"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
              </View>
              <View style={StylePerfilDeUsuario.buttonContainer}>
                <Boton texto={'Editar'} accion={() => nav.navigate('Principal')} colorA="#6B1B33" colorB="#7E233E"
                  estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText} />
              </View>
            </View>

            <View style={StylePerfilDeUsuario.card}>
              <View>
                <Text style={StylePerfilDeUsuario.sudtitulo}>Teléfono</Text>
                <TextInput
                  style={StylePerfilDeUsuario.input}
                  placeholder="Número telefónico"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
              </View>
              <View style={StylePerfilDeUsuario.buttonContainer}>
                <Boton texto={'Editar'} accion={() => nav.navigate('Principal')} colorA="#6B1B33" colorB="#7E233E"
                  estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText} />
              </View>
            </View>

            <Boton texto={'Cerrar Sesión'} accion={() => handleLogout()} colorA="#FD6D6A" colorB="#FF7E84"
              estiloB={StylePerfilDeUsuario.button} estiloT={StylePerfilDeUsuario.buttonText} />
          </View>
        </View>
      )}
    </>
  );
};

export default PerfilDeUsuario;
