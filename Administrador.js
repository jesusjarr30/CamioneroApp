import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity } from 'react-native';

export default class Administrador extends Component {
    constructor(props) {
        super(props);
        this.state = {
         hola:'',
        };
    }
    render() {

    const btnAgregar = () =>{ 
        this.props.navigation.navigate('AgregarChofer');
      
    }
    const btnlistado = () =>{ 
        this.props.navigation.navigate('Lista');
      
    }
    const btnagregarruta = () =>{ 
        this.props.navigation.navigate('AgregarRuta');
      
    }
    const btneliminarruta = () =>{ 
        this.props.navigation.navigate('EliminarRuta');
      
    }
    const btnmodificarusuario = () =>{ 
        this.props.navigation.navigate('ModificarUsuario');
      
    }
  
      return (

        

        <View style={styles.container}>
            
            <Text style={styles.innerText}>Bienvenido Administrador</Text>

            
            <View style={styles.imganes}>
              <TouchableOpacity onPress={btnAgregar}>
                <Text style={styles.textsub}> Agregar chofer </Text>
                <Image  source={require("./Imagenes/agregar-usuario.png")} />
              </TouchableOpacity>

                <View style={{marginLeft:20}}>
                 <TouchableOpacity onPress={btnagregarruta}>
                    <Text  style={styles.textsub}> Agregar ruta</Text>
                    <Image  source={require("./Imagenes/ruta.png")} />
                  </TouchableOpacity>
                </View>
            </View>

         
            <View style={styles.imganes}>
              <TouchableOpacity onPress={btnlistado}>
                <Text  style={styles.textsub}> Listado conductores </Text>
                <Image  source={require("./Imagenes/tarea-completada.png")} />
              </TouchableOpacity>

                <View style={{marginLeft:20}}>
                  <TouchableOpacity onPress={btneliminarruta}>
                <Text  style={styles.textsub} > Ver rutas activas </Text>
                <Image  source={require("./Imagenes/destino.png")} />
              </TouchableOpacity>
                </View>
            </View>
            
           

          
        </View>
      );
    }

}
const styles = StyleSheet.create({

  innerText: {
    fontSize: 15,
    color: 'black',
    textAlign: "center",
    fontWeight:'bold',
  },
  textsub:{
      fontSize: 18,
	    color:'black',
      textAlign: "center",

  },
  container:{
        flex:1,
        backgroundColor: '#f1f1f1',     
  },
  imganes:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        borderColor:'black',

  },
});
