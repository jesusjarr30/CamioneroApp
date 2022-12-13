import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button,TouchableOpacity,Alert } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:'',
            nip:'',
        };
    }

    render() {
      const validacion = ()=>{
        Alert.alert(
      "Usuario o contraseña incorrectos ",
      "Favor de ingresar nuevamente",
      
    );
      }
      
    const btnclick = () =>{ 

      if(this.state.usuario ==='Admin' && this.state.nip==='Admin'){
        console.log("entra a admin");
        this.props.navigation.navigate('Administrador');
      }else{

        let _this =this;
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
            let resultado =xhttp.responseText;
            let datos=resultado.split(',');
            console.log("el id es "+datos[0]);
            console.log("El nombre es"+datos[1]);
            console.log("La password es"+datos[2]);
            if(datos[0]===_this.state.usuario && datos[2]===_this.state.nip){//comprobacion para datos borrados
              _this.props.navigation.navigate('Camionero',{nombre:datos[1],codigo:datos[0]});
            }else{
              validacion()
            }
            

          }
          else{
            console.log("Espera");
          }
          
        };
        xhttp.open('GET','https://jesjarr.000webhostapp.com/entrarCamionero.php?Camionero='+this.state.usuario+'&Pass='+this.state.nip,true);
        xhttp.send();
      }
  }
        return (
            <View style={styles.container}>

                <Text style={styles.tex_bienvenido}>Bienvenidos</Text>
                <Text style={styles.subtitle}> Camioneros de
                    <Text style={styles.verde}> Mé</Text>
                    <Text style={styles.blanco}>xi</Text>
                    <Text style={styles.rojo}>co</Text>
                    
                 </Text>
                

                <Image style={styles.logo} source={require("./Imagenes/camion-de-carga.png")} />

                <TextInput style={styles.textinput} placeholder="Usuario"
                onChangeText={usuario => this.setState({usuario})}/>

                <TextInput style={styles.textinput} placeholder="Nip"
                 onChangeText={nip  => this.setState({nip})}
                 secureTextEntry={true}/>

               <View style={styles.btn}>
                    <TouchableOpacity>
                    <Button title="Entrar" 
                    color="#158424"
                    onPress={btnclick}> </Button>
                    </TouchableOpacity>
                </View>
                

            </View>

        );
    }

}
const styles = StyleSheet.create({

    btn:
    {
        width: '60%',
        height: 60,
        alignSelf:'center',
        padding:10,
    },

    logo: {
        width: 280,
        height: 236,
        resizeModel: "center",
        marginLeft: 30,
    },

    tex_bienvenido: {
        fontSize: 50,
        color: "black",
        textAlign: "center",
        fontWeight:'bold',
    },
    
    subtitle:{
      	fontSize: 20,
	      color:'black',
        textAlign: "center",


    },
    verde:{
      	fontSize: 20,
	      color:'green',
        textAlign: "center",


    },
    blanco:{
      	fontSize: 20,
	      color:'gray',
        textAlign: "center",


    },
    rojo:{
      	fontSize: 20,
	      color:'red',
        textAlign: "center",


    },
    container:{
        flex:1,
        backgroundColor: '#f1f1f1',
        alingItems: 'center',
        justifyContent: 'center',
        
},
    textinput:{
      borderWidth:2,
      borderColor:'gray',
      padding:8,
      width: '80%',
      height:50,
      paddingStart:25,
      marginTop:25,
      borderRadius:30,
      alignSelf:'center',
      backgroundColor:'#fff',
      
    },


});