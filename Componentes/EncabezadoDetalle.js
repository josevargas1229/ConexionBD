import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const EncabezadoDetalle = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Detalles del Producto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row", // Cambiado a fila
    backgroundColor:'red'
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20, // Espacio entre el ícono y el texto
    color:"#fff"
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y el texto
  },
});

export default EncabezadoDetalle;
