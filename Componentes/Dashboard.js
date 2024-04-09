import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Toggle from './Toggle';
import useFetch from './useFetch';
import axios from 'axios';
import BotonSVG from './BotonSVG';
import Tank from './Tank';
import MyBlur from './MyBlur';
import { useNavigation } from '@react-navigation/native';

function Dashboard() {
  const nav = useNavigation();
  const [dataWidgets, setDataWidgets] = useState(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [loadingWidgets, setLoadingWidgets] = useState(true);
  const [luces, setLuces] = useState(0);
  const [bomba, setBomba] = useState(0); // Estado de la bomba
  const [turbinas, setTurbinas] = useState(0); // Estado de las turbinas
  const [automatico, setAutomatico] = useState(0); // Estado del control automatico
  const { data: dataDevices, loading: loadingDevices } = useFetch('https://pasteleria-api.onrender.com/devicesMovil/user', { withCredentials: true });
  const dispositivoRequest = (dispositivoID) => axios.get(`https://pasteleria-api.onrender.com/devicesMovil/${dispositivoID}`)
  const variableRequest = (dispositivoID, variable, valor) => axios.post(`https://pasteleria-api.onrender.com/devicesMovil/actualizarVariable/${dispositivoID}`, { variable: variable, valor: valor })
  async function cargarDispositivo(idDevice) {
    try {
      const response = await dispositivoRequest(idDevice)
      setDataWidgets(response.data.dispositivo)
      setLoadingWidgets(!loadingWidgets)
      setLuces(response.data.dispositivo.luces)
      setTurbinas(response.data.dispositivo.turbinas)
      setBomba(response.data.dispositivo.bomba)
      setAutomatico(response.data.dispositivo.automatico)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    if (!loadingDevices && dataDevices && dataDevices.length > 0 && !selectedDeviceId) {
      setSelectedDeviceId(dataDevices[0].idDispositivo._id);
    }

    if (selectedDeviceId) {
      cargarDispositivo(selectedDeviceId);
    }

    const intervalId = setInterval(() => {
      if (selectedDeviceId) {
        cargarDispositivo(selectedDeviceId);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [loadingDevices, dataDevices, selectedDeviceId]);

  const handleChange = (value) => {
    setSelectedDeviceId(value);
    setLoadingWidgets(true);
    cargarDispositivo(value);
  };

  const handleLuces = async () => {
    const response = await variableRequest(selectedDeviceId, 'Luces', dataWidgets.luces === 1 ? 0 : 1);
    console.log(response);
  };

  const handleBomba = async () => {
    const response = await variableRequest(selectedDeviceId, 'Bomba', dataWidgets.bomba === 1 ? 0 : 1);
    console.log(response);
  };

  const handleTurbinas = async () => {
    const response = await variableRequest(selectedDeviceId, 'Turbinas', dataWidgets.turbinas === 1 ? 0 : 1);
    console.log(response);
  };
  const handleAutomatico = async () => {
    const response = await variableRequest(selectedDeviceId, 'Automatico', dataWidgets.automatico ? false : true);
    console.log(response);
  };

  return (
    <View>
      <MyBlur />
      <ScrollView>
        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Dashboard</Text>
          <Picker
            selectedValue={selectedDeviceId}
            onValueChange={(value) => handleChange(value)}
            style={{ width: '80%', alignSelf: 'center' }}
          >
            {loadingDevices ? null : (
              dataDevices.map(dispositivo => (
                <Picker.Item key={dispositivo._id} label={dispositivo.idDispositivo.label ? dispositivo.idDispositivo.label : dispositivo.idDispositivo.clave} value={dispositivo.idDispositivo._id} />
              ))
            )}
          </Picker>
          <TouchableOpacity style={styles.signInButton} onPress={() => nav.navigate('Add')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Añadir dispositivo</Text>
          </TouchableOpacity>
        </View>

        {loadingWidgets ? null : (
          <View style={styles.widgetsContainer}>
            <View style={styles.row}>
              <View style={styles.widget}>
                <Text style={styles.text}>Luces</Text>
                <BotonSVG fill={luces === 1 ? 'green' : 'grey'} width={130} height={130} onPress={() => handleLuces(dataWidgets.clienteID)} />
                <Text>{luces === 1 ? 'ON' : 'OFF'}</Text>
              </View>

              <View style={styles.widget}>
                <Text style={styles.text}>Control</Text>
                <Toggle initialState={automatico} onChange={() => handleAutomatico(dataWidgets.clienteID)} />
                <Text>{automatico ? 'Automático' : 'Manual'}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.widget}>
                <Text style={styles.text}>Humedad relativa</Text>
                <Tank initialWaterLevel={dataWidgets.humedadRelativa} />
              </View>

              <View style={styles.widget}>
                <Text style={styles.text}>Humedad del suelo</Text>
                <Tank initialWaterLevel={dataWidgets.humedadSuelo} />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.widget}>
                <Text style={styles.text}>Riego</Text>
                <Toggle initialState={bomba === 1 ? false : true} onChange={() => handleBomba(dataWidgets.clienteID)} />
                <Text>{bomba === 1 ? 'OFF' : 'ON'}</Text>
              </View>

              <View style={styles.widget}>
                <Text style={styles.text}>Temperatura</Text>
                <Text style={styles.datos}>{dataWidgets.temperatura} °C</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.widget}>
                <Text style={styles.text}>Ventilación</Text>
                <Toggle initialState={turbinas === 1 ? true : false} onChange={() => handleTurbinas(dataWidgets.clienteID)} />
                <Text>{turbinas === 1 ? 'ON' : 'OFF'}</Text>
              </View>
              <View style={styles.widget}>
                <Text style={styles.text}>Luminosidad</Text>
                <Text style={styles.datos}>{dataWidgets.luminosidad}</Text>
              </View>
            </View>

          </View>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    width: '80%',
    alignSelf: 'center',
  },
  widgetsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  widget: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 3,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  datos: {
    fontSize: 30,
    marginBottom: 10,
  }
});

export default Dashboard;
