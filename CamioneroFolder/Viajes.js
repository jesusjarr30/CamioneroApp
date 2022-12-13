import React,{ Component } from 'react';
import { Constants } from 'expo';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput,Alert } from 'react-native';
import MapView, {Marker,Polyline}from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
export default class Viajes extends Component{
    constructor(props) {
        super(props);
        this.state = {
        latInicio:'20.6734159', 
        lonInicio:'-103.3474032',
        
        latDestino:'0', 
        lonDestino:'0',
        idViaje:'',
        precio:'0',
        };
        this.btnclick = this.btnclick.bind(this);
    }
    btnclick (){ 
if(this.state.disponibilidad!='0'){
            console.log('Apto para tomar tutas');  
              let _this=this
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                console.log("Afuera del if ");
                    if (this.readyState == 4 && this.status == 200) {
                      // Typical action to be performed when the document is ready:
                      let resultado =xhttp.responseText;
                      console.log("El resultado es ");
                      console.log(resultado);
                    }
                };
          xhttp.open("GET", "https://jesjarr.000webhostapp.com/terminarViaje.php?idViaje="+this.state.idViaje+"&idCamionero="+this.props.route.params.codigo, true);
          xhttp.send();
          }else{
            console.log("No tiene selecionado ningun viaje");
          }
        }

  componentDidMount(){


    let _this =this;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        console.log("Entro al if");
        var myArr=this.responseText;
        let cadena=myArr.split(',');
        _this.setState({idViaje:cadena[0],latInicio:cadena[1],lonInicio:cadena[2],latDestino:cadena[3],lonDestino:cadena[4],precio:cadena[5]});
        console.log("La respuesta del servidor es "+myArr);
        console.log("la latitud con la que inicas es "+_this.state.latInicio);
        console.log("la longitutudcon la que inicas es "+_this.state.lonInicio);
        
      }
    };
    xhttp.open('GET','https://jesjarr.000webhostapp.com/viajeActivo.php?idUsuario='+this.props.route.params.codigo,true);
    xhttp.send();
  }
  render(){
    const validar = ()=>{

      if(this.state.idViaje==='0'){
                       Alert.alert(
      "Terminar ruta",
      "No tiene ninguna ruta activa",
          );
      }
      else{
                          Alert.alert(
                "Terminar ruta",
                "¿Esta seguro que desea terminar su viaje?",

                [
                  {
                    text:"NO!!"
                  },
                  {
                    text:"Terminar",
                    onPress: () => this.btnclick()
                  }
                ]
              );
      }
      }


      return(
        <View style={{margingTop:50, flex: 1 }}>

          <Text>Id: {this.state.idViaje}</Text>
          <Text>Precio: {this.state.precio}</Text>
      
              

     <View style={{margingTop:5, }}>
      
      </View>
      
          <MapView style={styles.map}
          initialRegion={{
            
            latitude:parseFloat(this.state.latInicio),
            longitude:parseFloat(this.state.lonInicio),
            latitudeDelta:0.99,
            longitudeDelta:0.99,
          }}

          provider="google"
            >
            <Marker coordinate= {{latitude:parseFloat(this.state.latInicio),longitude:parseFloat(this.state.lonInicio)}}/>
            <Marker coordinate= {{latitude:parseFloat(this.state.latDestino),longitude:parseFloat(this.state.lonDestino)}}/>
            

                <MapViewDirections
              origin={{latitude:parseFloat(this.state.latInicio),longitude:parseFloat(this.state.lonInicio)}}
              destination={{latitude:parseFloat(this.state.latDestino),longitude:parseFloat(this.state.lonDestino)}}
              apikey={'Key'}
              strokeColor="black"
              troweWidth={5}
            />
            </MapView>
  
            <View style={styles.btn}>
                      <TouchableOpacity> 
                      <Button title="Terminar Viaje" onPress={validar}> </Button>
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
    map:{
      width:'100%',
      height:'80%',
    }
});