import { useState } from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
export default function ImagePickerExample() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const formData = new FormData();
            formData.append('imagen', {
                uri: result.uri,
                name: 'image.jpg',
                type: 'image/jpg',
            });
    
            try {
                const response = await axios.post('https://pasteleria-api.onrender.com/devicesMovil/actualizarFoto', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                // Manejar la respuesta del backend si es necesario
                console.log('Respuesta del backend:', response.data);
            } catch (error) {
                // Manejar errores de la solicitud
                console.error('Error al enviar la imagen al backend:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={pickImage}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25, // Hace que el botón sea redondo
                    backgroundColor: '#FD6D6A', 
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Ionicons name="camera" size={24} color="white" />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
});
