import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput, Alert } from 'react-native';

export default class Password extends Component{
    constructor(props) {
        super(props);
        this.state = {
         newPassword:'',
        };
        this.btnCambio = this.btnCambio.bind(this);
    }
    btnCambio (){ 
        let _this =this;
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
            let resultado =xhttp.responseText;
            console.log("Cambio de password "+resultado);
          }
        };
        xhttp.open('GET','https://jesjarr.000webhostapp.com/CambiarPass.php?Camionero='+this.props.route.params.codigo2+'&Pass='+this.state.newPassword,true);
        xhttp.send();
      
        }

  render(){
      const validar = ()=>{
                Alert.alert(
      "Password",
      "¿Desea cambiar la password?",
      [
        {
          text:"NO!!"
        },
        {
          text:"cambiar",
          onPress: () => this.btnCambio()
        }
      ]
    );
      }

      return(

        <View>
        <Text style={styles.titulo}>Cambiar contraseña </Text>
        <Text>Ingrese ingrese su nueva Password</Text>
        <TextInput style={styles.textinput} onChangeText={newPassword=>this.setState({newPassword})}
        secureTextEntry={true}/>
       
        <View style={styles.btn}>
                    <TouchableOpacity onPress={validar}>
                    <Text  style={styles.textsub} >Cambio contraseña </Text>
                    <Image  source={require("./imagenesUsuario/cambioContrasena.png")} />
                    </TouchableOpacity>
        </View>
        
        </View>
    
    );
  }



}
const styles = StyleSheet.create({

    titulo:
    {
        fontSize:30,
        fontWeight: 'bold',
        color: '#000',

    },

    textinput:{
      borderWidth:1,
      borderColor:'gray',
      padding:10,
      width: '80%',
      height:50,
      marginTop:20,
      borderRadius:30

    },
      textsub:{
      fontSize: 18,
	    color:'black',
      textAlign: "center",
    

  },
        btn:
    {
        
        alignSelf:'center',
        padding:50,
    },
});