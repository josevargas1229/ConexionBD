import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AddDevice = () => {
  const [newDeviceCode, setNewDeviceCode] = useState('');
  const nav = useNavigation();
  const handleAddDevice = () => {
    console.log(newDeviceCode); // Imprimir el valor en consola
    nav.navigate('Dispositivo')
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Agregar un dispositivo</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Código del dispositivo:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingrese el código del dispositivo'
            value={newDeviceCode}
            onChangeText={(text) => setNewDeviceCode(text)}
            autoCompleteType='off'
          />
        </View>
        <TouchableOpacity
          style={[styles.signInButton, { opacity: newDeviceCode.trim() === '' ? 0.5 : 1 }]} // Cambia la opacidad del botón
          onPress={handleAddDevice}
          disabled={newDeviceCode.trim() === ''} // Deshabilita el botón si no hay texto
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Agregar dispositivo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  signInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
});

export default AddDevice;
