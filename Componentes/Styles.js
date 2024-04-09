
import { StyleSheet } from 'react-native';

//PRINCIPAL
export const StylePrincipal = StyleSheet.create({
  Contenedor: {
  },
  Contenedor2: {
    marginBottom: 210,
  },
  Bienvenida: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    marginTop: 20,
    marginBottom: 3,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  btnToggle: {
    color: "#fff",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  titulo: {
    color: "#000",
    fontSize: 26,
    lineHeight: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    padding: 10,
    fontWeight: "bold",
  },
  texto: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
    paddingHorizontal: 20,
    margin: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    margin: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 20,
  },
  CenterCard: {
    justifyContent: 'center',
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#6B1B33",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 8,
    marginTop: 15,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  productoContainer: {
    flexDirection: 'row'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ContBoton: {
    width: '60%',
    justifyContent: 'center',
    alignItems: "center",
    margin: 20,
  },
});
//HEADRE PRINCIPAL Y BUSCAR
export const StyleEncabezadoBuscador = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#7E233E",
    paddingHorizontal: 20,
    paddingVertical: 15,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  headerParte2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 10,
    marginTop: 25,
  },
  texto: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  },
  img: {
    width: 50,
    height: 50,
  }
});

//BUSCAR
export const StyleBuscadorHistorial = StyleSheet.create({
  Contenedor: {
    backgroundColor: "transparent",
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});

//PERFIL DE USUARIO
export const StylePerfilDeUsuario = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  DatosUser: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    maxWidth:'100%'
  },
  DatosUserText: {
    flexDirection: 'column',
    maxWidth:'100%'
  },
  Fcard: {
    marginBottom: 20,
    width: '100%',
    alignItems: "center",
  },
  card: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-start",
    width: "90%",
    maxWidth:'90%'
  },
  titulo: {
    color: "#000",
    fontSize: 24,
    lineHeight: 25,
    fontWeight: "bold",
    width:'70%'
  },
  sudtitulo: {
    color: "#000",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  texto: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
  },
  textCerrar: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginRight: 45,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 0,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 0,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cerrarSesion: {
    flexDirection: "row",
    alignItems: "center", width: "100%",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

//DETALLES DEL PRODUCTO
export const StylesDetalleProducto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7E233E",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: "90%",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: "center",
    margin: 10
  },
  image: {
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#353147',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000",
  },
  multilineInput: {
    width: '100%',
    height: 80,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000",
  },
  unitsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  unitButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  unitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  unitsText: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  availableUnitsText: {
    marginLeft: 20,
    fontSize: 16,
    color: "#000", // Cambiado a un color más oscuro
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});

export const StylesIot = StyleSheet.create({
  Fondo: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollView: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  Center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Titulo: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  Texto: {
    margin: 10,
    color: '#000',
    fontSize: 20,
  },
  texto: {
    margin: 5,
    color: '#000',
    fontSize: 15,
  },
  TextoB: {
    margin: 10,
    color: '#fff',
    fontSize: 20,
  },
  textoB: {
    margin: 10,
    color: '#fff',
    fontSize: 15,
  },
  Card: {
    margin: 10,
    backgroundColor: '#fff',
    //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //SHADOW
    width: '90%',
    borderRadius: 8,
  },
  Card2: {
    width: '40%',
    margin: 10,
    backgroundColor: 'blue',
    //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //SHADOW
    borderRadius: 8,
  },
  MarginCard: {
    marginBottom: 100,
  },
  Row: {
    flexDirection: 'row',
  },
  Col: {
    flexDirection: 'column',
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  CenterCard: {
    padding: 10,
  },
  button: {
    width: '45%',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  ContDual: {
    width: '45%',
    margin: 8,
  },
  PartBlue: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: 'blue',
    width: '100%',
    //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //SHADOW
  },
  PartWhite: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //SHADOW
  },
});