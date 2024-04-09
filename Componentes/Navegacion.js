import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome ,Entypo} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './login';
import Principal from './Principal';
import BuscadorHistorial from './BuscadorHistorial';
import DetalleProducto from './DetalleProducto'
import Dashboard from './Dashboard'
import PerfilDeUsuario from './PerfilDeUsuario'
import AddDevice from './AddDevice';
import ImagePickerExample from './ImagenEjemplo';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const StackIoT = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

//navegacion principal (de login a home)
export const NavHome = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='HomeP' component={NavPrincipal} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



export const NavPrincipal = () => {
    return (
        <Stack.Navigator initialRouteName='PrincipalH'>
            <Stack.Screen name='PrincipalH' component={NavTabsPrincipal} options={{ headerShown: false }} />
            {/* Se define la pantalla que se queire ver pero en componente se llama al tabs */}

            <Stack.Screen name='BuscadorHistorial' component={BuscadorHistorial} options={{ headerShown: false }} />

            <Stack.Screen name='DetalleProducto' component={DetalleProducto} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const getIconName = (routeName) => {
    switch (routeName) {
        case 'Home':
            return 'home';
        case 'Productos':
            return 'shop';
        case 'IOT':
            return 'gear';
        case 'Perfil':
            return 'user';
        default:
            return 'home';
    }
};
//navegacion secundaria (tabs de home)
export const NavTabsPrincipal = () => {
    return (
        <TabsH.Navigator 
            screenOptions={({ route }) => ({
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: "#7E233E"},
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarActiveTintColor: '#7E233E',
                tabBarInactiveTintColor: 'black',
                tabBarIcon: ({ focused, color, size }) => {
                    let IconComponent = FontAwesome;
                    
                    if (route.name === 'Productos') {
                        IconComponent = Entypo;
                    }

                    return (
                        <IconComponent 
                            name={getIconName(route.name)} 
                            size={size} 
                            color={focused ? color : 'black'} 
                        />
                    );
                },
            })}
            
        >
            <TabsH.Screen name={'Home'} component={Principal} options={{ headerShown: false }} />
            <TabsH.Screen name={'Productos'} component={StackProductos} options={{ headerShown: false }}/>
            <TabsH.Screen name={'IOT'} component={StackdeIoT} options={{ headerShown: false }}/>
            <TabsH.Screen name={'Perfil'} component={PerfilDeUsuario} />
        </TabsH.Navigator>
    );
};



//navegacion de productos a producto detalle
export const StackProductos = () => {
    return (
        <StackP.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#7E233E"},
          }}>
            <StackP.Screen name='Productos2' component={BuscadorHistorial} options={{ headerShown: false }} />
            <StackP.Screen name='Producto' component={DetalleProducto} options={{
                title: 'Detalle del producto',
            }} />
        </StackP.Navigator>
    )
}

export const StackdeIoT = () => {
    return (
        <StackIoT.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#7E233E"},
          }}>
            <StackIoT.Screen name='Dispositivo' component={Dashboard} options={{
                title: 'Monitoreo de dispositivos',
            }} />
            <StackIoT.Screen name='Add' component={AddDevice} options={{
                title: 'Añadir dispositivo',
            }} />
        </StackIoT.Navigator>
    )
}

export const MiDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Principal' options={{
                headerShown: false,
                drawerIcon: () => (<FontAwesome name='Principal' size={30} />)
            }} component={NavTabsHome} />
            {/* <Drawer.Screen name='Calculadora' component={Calculadora}/> */}
            {/* <Drawer.Screen name='IMC' component={Imc}/> */}
        </Drawer.Navigator>
    )
}