import { View, Text, Alert, ActivityIndicator, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const FetchProductos = ({ busqueda }) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const nav = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pasteleria-api.onrender.com/productos${busqueda ? `?q=${busqueda}` : ""}`);
        const productos = await response.json();
        setData(productos);
        setLoad(true);
      } catch (error) {
        Alert.alert("Error inesperado:", error.message);
      }
    };

    fetchData();
  }, [busqueda]);

  const Card = ({ producto }) => {
    const [count, setCount] = React.useState(1);
    return (
      <View style={{ width: '100%', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20, marginBottom: 20, }}>
        <View style={{ backgroundColor: '#FFFFFF',  }}>
          <Image
            source={{ uri: producto.imagen }}
            style={{ borderRadius: 20,width: '100%', height: 200, resizeMode: "cover" }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
        {
          producto.stock?(
            <Text style={{ fontSize: 14, color: '#666666' }}>Stock: {producto.stock}</Text>
          ):(
            <Text style={{ fontSize: 14, color: 'red' }}>Sin existencias</Text>
          )
        }
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{producto.nombre}</Text>
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
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>${producto.precio * count}</Text>
          </View>
          <Text style={{ fontSize: 14, color: '#666666', marginTop: 10 }} numberOfLines={2}>{producto.descripcion}</Text>
          <TouchableOpacity style={{ backgroundColor: '#000000', borderRadius: 30, paddingVertical: 10, paddingHorizontal: 20, alignSelf: 'center', marginTop: 20, width: '100%', justifyContent: 'center' }} onPress={() => nav.navigate('Producto', { id: producto._id })}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' }}>Ver detalles</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  const LScreen = () => {
    return (
      <View style={{ marginBottom: 130 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card producto={item} />}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
      </View>
    );
  };

  const UScreen = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'darkblue'} />
        <Text>Cargando datos...</Text>
      </View>
    );
  };

  return (
    <View>
      {load ? <LScreen /> : <UScreen />}
    </View>
  );
};

export default FetchProductos;
