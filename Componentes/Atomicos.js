import {Pressable,Text, View} from 'react-native'

export const Boton=({texto,accion,colorA='#000',colorB='#000', estiloB, estiloT})=>{
    return(
      <Pressable
        style={({pressed})=>[{backgroundColor:pressed?colorB:colorA},estiloB]} onPress={accion}>
        <Text style={estiloT}>{texto}</Text>
      </Pressable>
    )
  }

  export const Caja=({valor})=>{
    return(
        <View>
            <Text>{valor}</Text>
        </View>
    )
  }