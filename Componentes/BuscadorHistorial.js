import React, { useState } from "react";
import { View, Text, TextInput, Image, FlatList, showDetails } from "react-native";
import EncabezadoBuscador from './EncabezadoBuscador'

import {StyleBuscadorHistorial} from './Styles'
import FetchProductos from './FetchProductos';

const BuscadorHistorial = () => {
  const [busqueda, setBusqueda] = useState("");
  
  return (
    <View style={StyleBuscadorHistorial.Contenedor}>
      <EncabezadoBuscador/>
      <View>
        <TextInput
          style={StyleBuscadorHistorial.input}
          placeholder="Busqueda..."
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>
      <FetchProductos busqueda={busqueda}/>
    </View>
  );
};

export default BuscadorHistorial;
