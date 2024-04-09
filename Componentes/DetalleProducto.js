import React, { useState } from "react";
import EncabezadoDetalle from './EncabezadoDetalle'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";

import {StylesDetalleProducto} from './Styles'
import {Boton} from './Atomicos'
import useFetch from "./useFetch";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MyBlur from "./MyBlur";
const Card = ({ children }) => {
  return <View style={StylesDetalleProducto.card}>{children}</View>;
};
export const DetalleProducto = ({route}) => {
  const {id}=route.params
  const {data,loading}=useFetch(`https://pasteleria-api.onrender.com/productos/${id}`)
  const [count, setCount] = React.useState(1);
  const { height, width } = Dimensions.get('window');
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const LScreen=()=>{
    return(
      <View style={{flex:1}}>
        <MyBlur/>
      <Card >
        <View style={StylesDetalleProducto.imageContainer}>
        <Image
            source={{ uri: data.imagen }}
            style={[StylesDetalleProducto.image,
              {width: (width / 3) * 2,
            height: (height / 5) * 1.6,}]}
          />
        </View>
          <View style={StylesDetalleProducto.nameContainer}>
            <Text style={{ fontSize: 14, color: '#666666' }}>{capitalizeFirstLetter(data.tipo)}{data.sabor ? ' | ' + capitalizeFirstLetter(data.sabor) : ''}</Text>
            <Text style={StylesDetalleProducto.title}>{data.nombre}</Text>
          </View>
        <Text style={StylesDetalleProducto.text}>{data.descripcion}</Text>
        {
          data.stock?(
            <Text style={{ fontSize: 14, color: '#666666' }}>Stock: {data.stock}</Text>
          ):(
            <Text style={{ fontSize: 14, color: 'red' }}>Sin existencias</Text>
          )
        }
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setCount(count <= 1 ? 1 : count - 1)}>
                  <AntDesign name="minuscircleo" size={24} color="#000000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 5 }}>{count}</Text>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                  <AntDesign name="pluscircleo" size={24} color="#000000" />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>${data.precio * count}</Text>
            </View>
      </Card>
      </View>
    )
  }
  
  const UScreen = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'darkblue'} />
        <Text>Cargando datos...</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? <UScreen /> : <LScreen />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredText: {
    textAlign: 'center'
  }
});
export default DetalleProducto;
