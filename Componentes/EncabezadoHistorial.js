import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const EncabezadoHistorial = ({ onSearch }) => {
  const [historial, setHistorial] = useState([]);

  const handleHistorialItemPress = (item) => {
    // Llama a la función onSearch con el término seleccionado del historial
    onSearch(item);

    // Mueve el término de búsqueda al principio del historial
    const updatedHistorial = historial.filter((term) => term !== item); // Remueve el término seleccionado del historial
    updatedHistorial.unshift(item); // Agrega el término seleccionado al principio del historial
    setHistorial(updatedHistorial); // Actualiza el estado del historial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.carrito}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#fff"
          style={styles.icon}
        />
        ㅤ Buscador ㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        <MaterialIcons name="search" size={27} color="#fff" />
      </Text>
      <View style={styles.historialContainer}>
        <Text style={styles.historialTitulo}>Historial</Text>
        {historial.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleHistorialItemPress(item)}
          >
            <Text style={styles.historialItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#56070C",
  },
  carrito: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historialContainer: {
    marginTop: 10,
  },
  historialTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  historialItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});

export default EncabezadoHistorial;
