import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput,Alert } from 'react-native';

export default class AgregarChofer extends Component{
    constructor(props) {
        super(props);
        this.state = {
         nombre:'',
         edad:'',
         nsocial:'',
         curp:'',
         


        };
    }

  render(){
    const validacion = ()=>{
              var cadena=new String();
              var nombreV = new Boolean(false);
              var seguroV = new Boolean(false);
              var curpV = new Boolean(false);
              var edadV = new Boolean(false);
                if(this.state.nombre.length >0 && this.state.nombre.length<50){
                  console.log("Nombre verdadero");
                  nombreV=true;
                } else{
                  console.log("Nombre no valido");
                  cadena+="Nombre no valido";
                  nombreV=false;
                }

                if(!this.state.edad.includes('-') &&!this.state.edad.includes(',') &&!this.state.edad.includes('.')&& this.state.edad.length>0){
                edadV=true;
                console.log("la edad es verdadera");
              }else{
                edadV=false;
                cadena+="\n Edad no valida";
                console.log("la edad no es valida");
              }
            
              if(this.state.nsocial.length==11&&!this.state.nsocial.includes('-') &&!this.state.nsocial.includes(',') &&!this.state.nsocial.includes('.')){
                console.log("el numero de seguro es correcto");
                 seguroV=true;
                 
              }else{
                seguroV=false;
                console.log("el numero de seguro social es de 11 digitos");
                cadena+="\n Seguro necesita 11 digitos";


              }
              if(this.state.curp.length===18){
                 console.log("la curp es correcta");
                 curpV=true;
              }else{
                console.log("la esta mal");
                 curpV=false;
                 cadena+="\n curp necesita 18 digitos";
              }
              if(nombreV===false|| edadV===false ||curpV===false || seguroV===false){
                console.log("2El nombre es "+nombreV);
                console.log("2la edad es "+edadV);
                console.log("2la curp es "+curpV);
                console.log("2el social es "+seguroV);
                console.log("La cadena es "+cadena);
                
                Alert.alert(
                        "Error",
                        cadena,
                      );

              }else{
                
                btnclick();
              }



             



      }
        
   


      const btnclick = () =>{ 
          console.log('agregar usuario');  
        let _this=this
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   let resultado =xhttp.responseText;
                   console.log("El resultado es ");
                   console.log(resultado);
                   Alert.alert(
                        "Usuario registrado correctamente",
                        
                      );
                }else{
                  console.log("No pudo entrar ");
                }
            };
      xhttp.open("GET", "https://jesjarr.000webhostapp.com/AltasCamionero.php?Nombre="+this.state.nombre+"&Seguro="+this.state.nsocial+"&Curp="+this.state.curp+"&Edad="+this.state.edad, true);
      xhttp.send();
               
        }

      return(
        <View>
        <Text style={styles.titulo}>Agregar Conductor</Text>
        <Text style={styles.subtitle}>Ingrese los siguientes datos </Text>
        <Text>Nombre completo</Text>
        <TextInput style={styles.textinput} 
        onChangeText={nombre=>this.setState({nombre})}/>
        <Text>Edad</Text>
        <TextInput style={styles.textinput} 
        keyboardType="numeric"
        onChangeText={edad=>this.setState({edad})}/>
        <Text>Numero de seguro Social</Text>
        <TextInput style={styles.textinput} 
        keyboardType="numeric"
        onChangeText={nsocial=>this.setState({nsocial})}/>
        <Text>Curp</Text>
        <TextInput style={styles.textinput} onChangeText={curp=>this.setState({curp})}/>
        <View style={styles.btn}>
                    <TouchableOpacity>
                    
                    <Button title="Entrar" onPress={validacion}> </Button>
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
    subtitle:{
       color: 'green',
       fontSize:15

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
        btn:
    {
        width: '60%',
        height: 60,
        alignSelf:'center',
        padding:10,
    },
});