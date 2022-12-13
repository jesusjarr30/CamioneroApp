import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity } from 'react-native';

export default class Camionero extends Component {
    constructor(props) {
        super(props);
        this.state = {
         hola:'',
         codigo:'',
        };
    }
    render() {
        const btnContrasena = () =>{ 
        let resultado =this.props.route.params.codigo;
        this.props.navigation.navigate('Password',{codigo2:resultado});
      
        }
        const btnHistorial = () =>{ 
        this.props.navigation.navigate('Historial',{codigo:this.props.route.params.codigo});
      
        }
        const btnViajes = () =>{ 
        this.props.navigation.navigate('Viajes',{codigo:this.props.route.params.codigo});
        }
        const btnHistorial2 = () =>{ 
        this.props.navigation.navigate('Historial2',{codigo:this.props.route.params.codigo});
        }
        
  
  return (
    

    <View style={styles.container}>
            
            <Text style={styles.innerText}>Bienvenido {this.props.route.params.nombre}</Text>
            
            
              <View style={styles.imganes}>
              <TouchableOpacity onPress={btnViajes}>
                <Text style={styles.textsub}> Viaje Activo </Text>
                <Image  source={require("./Imagenes/UsuarioIMG/viajes.png")} />
              </TouchableOpacity>

                <View style={{marginLeft:20}}>
                  <TouchableOpacity onPress={btnHistorial}>
                    <Text  style={styles.textsub} > Lista Viajes  </Text>
                    <Image  source={require("./Imagenes/UsuarioIMG/historial.png")} />
                  </TouchableOpacity>
                </View>
            </View>


            <View style={styles.imganes}>
              <TouchableOpacity onPress={btnContrasena}>
                <Text style={styles.textsub}> Cambiar contraseña </Text>
                <Image  source={require("./Imagenes/UsuarioIMG/contrasena.png")} />
              </TouchableOpacity>
              <View style={{marginLeft:20}}>
                  <TouchableOpacity onPress={btnHistorial2}>
                    <Text  style={styles.textsub} > historial </Text>
                    <Image  source={require("./Imagenes/UsuarioIMG/viaje.png")} />
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

