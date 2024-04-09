import React from "react";
import { useNavigation } from '@react-navigation/native'
import EncabezadoBuscador from './EncabezadoBuscador'
import { FlatList, ScrollView } from "react-native";

import { StylePrincipal } from './Styles'
import { Boton } from './Atomicos'

import {
  View,
  Text,
  Image,
  showDetails,
} from "react-native";

const productosDestacados = [
  {
    id: 1,
    titulo: "𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙤𝙨 𝘿𝙚𝙨𝙩𝙖𝙘𝙖𝙙𝙤𝙨",
    imagen: require("../assets/img/Mikoto_Urabe.png"),
    detalles: "𝘋𝘦𝘵𝘢𝘭𝘭𝘦𝘴",
    precio: "$123",
  },
  {
    id: 2,
    titulo: "𝙊𝙩𝙧𝙤𝙨 𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙤𝙨",
    imagen: require("../assets/img/Mikoto_Urabe.png"),
    detalles: "𝘋𝘦𝘵𝘢𝘭𝘭𝘦𝘴",
    precio: "$345",
  },
  {
    id: 3,
    titulo: "𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙤𝙨 𝘿𝙚𝙨𝙩𝙖𝙘𝙖𝙙𝙤𝙨",
    imagen: require("../assets/img/Mikoto_Urabe.png"),
    detalles: "𝘋𝘦𝘵𝘢𝘭𝘭𝘦𝘴",
    precio: "$345",
  },
  {
    id: 4,
    titulo: "𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙤𝙨 𝘿𝙚𝙨𝙩𝙖𝙘𝙖𝙙𝙤𝙨",
    imagen: require("../assets/img/Mikoto_Urabe.png"),
    detalles: "𝘋𝘦𝘵𝘢𝘭𝘭𝘦𝘴",
    precio: "$987",
  }
];

export const Principal = () => {
  const nav = useNavigation();
  return (
    <View style={StylePrincipal.Contenedor}>

      <EncabezadoBuscador />

      <View style={StylePrincipal.Contenedor2}>
        <ScrollView
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>

          <View style={StylePrincipal.Bienvenida}>
            <Text style={StylePrincipal.titulo}>𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 :𝘿</Text>
            <Text style={StylePrincipal.texto}>Disfrute de nuestra gran variedad de productos que tenemos disponibles para usted :D</Text>
            <View style={StylePrincipal.ContBoton}>
              <Boton texto={'Ver todos los productos...'} accion={() => nav.navigate('Productos')}
                colorA="#000" colorB="#363636" estiloB={StylePrincipal.button} estiloT={StylePrincipal.buttonText} />
            </View>
          </View>
          <View style={StylePrincipal.Bienvenida}>
            <Text style={StylePrincipal.titulo}>Misión</Text>
            <Text style={StylePrincipal.texto}>Nuestra misión es ofrecer servicios de pastelería de alta calidad, creando experiencias dulces y memorables para nuestros clientes.</Text>

          </View>
          <View style={StylePrincipal.Bienvenida}>
            <Text style={StylePrincipal.titulo}>Visión</Text>
            <Text style={StylePrincipal.texto}>Convertirnos en la elección preferida de los amantes de los postres, siendo reconocidos por nuestra innovación, calidad y servicio excepcional.</Text>

          </View>
          <View style={StylePrincipal.Bienvenida}>
            <Text style={StylePrincipal.titulo}>Antecendentes</Text>
            <Text style={StylePrincipal.texto}>Desde nuestros humildes inicios, hemos crecido hasta convertirnos en una reconocida pastelería, gracias al trabajo arduo y a la pasión por crear momentos dulces e inolvidables.</Text>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Principal;
