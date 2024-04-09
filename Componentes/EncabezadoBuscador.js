import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {StyleEncabezadoBuscador} from './Styles'

export const EncabezadoBuscador = () => {
  return (
    <View style={StyleEncabezadoBuscador.header}>
      <View style={StyleEncabezadoBuscador.headerParte2}>
      <Image
        source={require("../assets/img/LogoFull.png")}
        style={StyleEncabezadoBuscador.img}
      />
        <Text style={StyleEncabezadoBuscador.texto}>LIVELY</Text>
      </View>
    </View>
  );
};

export default EncabezadoBuscador;
