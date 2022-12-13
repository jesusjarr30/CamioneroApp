import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput,Switch, Alert } from 'react-native';

export default class ModificarUsuario extends Component{
    constructor(props) {
        super(props);
        this.state = {
         direccion:"",
         auxNombre:"",
         auxEdad:"",
         auxSeguro:"",
         auxActivo:"",
         auxCurp:"",   
         isEnabled:true,
        };
        this.handleChange=this.handleChange.bind(this);
    }
  handleChange(isEnabled){
            let _this =this;
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
            console.log("Entro al if");
            let resultado =xhttp.responseText;
            console.log("el resultado de la elimiacion es"+resultado);
          }
          else{
            console.log("Espera");
          }
        };
        xhttp.open('GET','https://jesjarr.000webhostapp.com/EliminarCamionero.php?Camionero='+this.props.route.params.id,true);
        xhttp.send();
    
    
  }
  componentDidMount(){
    fetch('https://100k-faces.glitch.me/random-image-url',{method:'GET'})
    .then(response=>response.json())
    .then((responseJson)=> {console.log(responseJson); this.setState({direccion:responseJson})}).catch((error)=>{console.log(error);});
     console.log("imagen:" +this.state.direccion.url);

  }

  render(){
        const btnborrar = () =>{ 
        Alert.alert(
      "¿Estás seguro de eliminar la cuenta?",
      "Al aceptar no se recuperará el perfil",
      [
        {
          text:"NO!!"
        },
        {
          text:"Aceptar",
          onPress: () => this.handleChange()
        }
      ]
    );
  
      
    }

    const btnclick = () =>{ 
      var cadena=new String();
      var xhttp= new XMLHttpRequest();
      var xhttp2= new XMLHttpRequest();
      var xhttp3= new XMLHttpRequest();
      var xhttp4= new XMLHttpRequest();
      var xhttp5= new XMLHttpRequest();
          if(this.state.auxNombre!=""){
            
            if(this.state.auxNombre.length>0 && this.state.auxNombre.length<50){
                  cadena="Nombre modificado correctamente";
            console.log("Entro en modificar nombre");
            xhttp.onreadystatechange=function(){
              if(this.readyState==4 && this.status==200){
                let resultado =xhttp.responseText;
              }
            };
            xhttp.open('GET','https://jesjarr.000webhostapp.com/modNombre.php?Camionero='+this.props.route.params.id+'&Nombre='+this.state.auxNombre,true);
            xhttp.send();
            }else{
              cadena+="\n Error al cambia el nombre";

            }


          } 
          if(this.state.auxSeguro!=""){

            if(this.state.auxSeguro.length==11&&!this.state.auxSeguro.includes('-') &&!this.state.auxSeguro.includes(',') &&!this.state.auxSeguro.includes('.')){
              cadena+="\n se modifico el seguro social correctamente";
            console.log("Entro en modificar seguro");
            let _this =this;
            xhttp4.onreadystatechange=function(){
              if(this.readyState==4 && this.status==200){
                let resultado =xhttp4.responseText;

              }
            };
            xhttp4.open('GET','https://jesjarr.000webhostapp.com/modSeguro.php?Camionero='+this.props.route.params.id+'&Seguro='+this.state.auxSeguro,true);
            xhttp4.send();
            }else{
              cadena+="Error al cambiar el seguro";
            }








          }
          if(this.state.auxCurp!=""){
            if(this.state.auxCurp.length===18){
              console.log("Entro en modificar seguro");
              cadena+="\n Curp modificado correctamente";
            let _this =this;
            xhttp2.onreadystatechange=function(){
              if(this.readyState==4 && this.status==200){
                let resultado =xhttp2.responseText;

              }
            };
            xhttp2.open('GET','https://jesjarr.000webhostapp.com/modCurp.php?Camionero='+this.props.route.params.id+'&Curp='+this.state.auxCurp,true);
            xhttp2.send();
            }else{
              cadena+="Error en la curp se necesita 18 digitos";
            }
            
          }  







          if(this.state.auxEdad!=""){
            if(!this.state.auxEdad.includes('-') &&!this.state.auxEdad.includes(',') &&!this.state.auxEdad.includes('.')&& this.state.auxEdad.length>0){
              cadena+="\n Edad modificada correctamente";
                let _this =this;
            xhttp3.onreadystatechange=function(){
              if(this.readyState==4 && this.status==200){
                let resultado =xhttp3.responseText;

              }
            };
            xhttp3.open('GET','https://jesjarr.000webhostapp.com/modEdad.php?Camionero='+this.props.route.params.id+'&Edad='+this.state.auxEdad,true);
            xhttp3.send();
            }else{
              cadena+="Error en la edad";
            }
           
          }
          if(this.state.isEnabled!=this.props.route.params.activo){
            console.log("entro porque es difernte");
            cadena+="\n se modifico el estado ";
            console.log("el valor del verdadero o false es" +this.state.isEnabled);
            if(this.state.isEnabled==true){
                          console.log("entro al verdadero");
                          let _this =this;
                      
                      xhttp.onreadystatechange=function(){
                        if(this.readyState==4 && this.status==200){
                          let resultado =xhttp.responseText;

                        }
                      };
                      xhttp.open('GET','https://jesjarr.000webhostapp.com/modActivo.php?Camionero='+this.props.route.params.id+'&Activo=1',true);
                      xhttp.send();
                      }
            else{
              //aqui va el cambio a posotivo
              console.log("Entro al false")
              let _this =this;
                      
                      xhttp.onreadystatechange=function(){
                        if(this.readyState==4 && this.status==200){
                          let resultado =xhttp.responseText;

                        }
                      };
                      xhttp.open('GET','https://jesjarr.000webhostapp.com/modActivo.php?Camionero='+this.props.route.params.id+'&Activo=0',true);
                      xhttp.send();
            }


          }  
      console.log("antes de alert");
      if(cadena.length===0){
Alert.alert(
              "Mensaje",
              "Favor de llenar los campos",
            );  
      }else{
Alert.alert(
              "Mensaje",
              cadena,
            );  
      }
    
            console.log("despues de alert");
        }
      return(
          <View>
          <Text style={{fontSize:16}}> id: {this.props.route.params.id} </Text>
          <Text style={{fontSize:16}}> Nombre: {this.props.route.params.nombre} </Text>
          <Text style={{fontSize:16}}> Seguro social: {this.props.route.params.seguroSocial} </Text>
          <Text style={{fontSize:16}}> Curp: {this.props.route.params.curp} </Text>
          <Text style={{fontSize:16}}> edad: {this.props.route.params.edad} </Text>
          <Text style={{fontSize:16}}> Activo: {this.props.route.params.activo} </Text>
          <Image 
        style={{width:80, height:80}}
        source={{uri:this.state.direccion.url}}
        />
        <TextInput style={styles.textinput} placeholder="Modificar nombre"
        onChangeText={auxNombre=>this.setState({auxNombre})}/>
        <TextInput style={styles.textinput} 
        keyboardType="numeric"
        placeholder="Numero de seguro social"
        onChangeText={auxSeguro=>this.setState({auxSeguro})}/>
        <TextInput style={styles.textinput}
        placeholder="modificar curp"
        onChangeText={auxCurp=>this.setState({auxCurp})}/>
        <TextInput style={styles.textinput} 
        keyboardType="numeric"
        placeholder="edad"
        onChangeText={auxEdad=>this.setState({auxEdad})}/>
        <Text>Activo</Text>
        <Switch
          trackColor={{false: 'red', true:'green'}}
          onValueChange={this.handleChange}
          value={this.state.isEnabled}
          
        />
        
          <View style={styles.btnleft}>
                    <Button title="Modificar" onPress={btnclick}> </Button>
                    <View style={{marginLeft:20}}>
                    <Button title="Eliminar" 
                    color="#841515"
                    onPress={btnborrar}> </Button>
                    </View>
                    
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
    textinput:{
      borderWidth:2,
      borderColor:'gray',
      padding:2,
      width: '80%',
      height:50,
      paddingStart:10,
      marginTop:15,
      borderRadius:20,
      alignSelf:'center',
      backgroundColor:'#fff',
      
    },
        btnleft: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        
    },


});