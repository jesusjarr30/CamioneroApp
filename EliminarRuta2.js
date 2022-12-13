import React,{ Component } from 'react';
import { Constants } from 'expo';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import MapView, {Marker,Polyline}from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"


export default class EliminarRuta2 extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
        this.btnclick = this.btnclick.bind(this);
    }
          btnclick (){ 
          console.log('Eliminar Ruta');  
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
      xhttp.open("GET", "https://jesjarr.000webhostapp.com/EliminarViaje.php?IdViaje="+this.props.route.params.id, true);
      xhttp.send();
               
        }
  render(){
      const validar = ()=>{
                Alert.alert(
      "Eliminar",
      "Estas seguro de eliminar esta ruta",

      [
        {
          text:"NO!!"
        },
        {
          text:"Eliminar",
          onPress: () => this.btnclick()
        }
      ]
    );
      }



      return(
        
        <View style={{margingTop:50, flex: 1 }}>

          <Text>Id: {this.props.route.params.id}</Text>
          <Text>Precio: {this.props.route.params.precio}</Text>
      
              

     <View style={{margingTop:5, }}>
      
      </View>
          <MapView style={styles.map}
          initialRegion={{
            latitude:parseFloat(this.props.route.params.latInicial),
            longitude:parseFloat(this.props.route.params.lonInicial),
            latitudeDelta:0.15,
            longitudeDelta:0.15,
          }}

          provider="google"
            >
            <Marker coordinate= {{latitude:parseFloat(this.props.route.params.latInicial),longitude:parseFloat(this.props.route.params.lonInicial)}}/>


            <Marker coordinate= {{latitude:parseFloat(this.props.route.params.latDestino),longitude:parseFloat(this.props.route.params.lonDestino)}}/>

                  <MapViewDirections
              origin={{latitude:parseFloat(this.props.route.params.latInicial),longitude:parseFloat(this.props.route.params.lonInicial)}}
              destination={{latitude:parseFloat(this.props.route.params.latDestino),longitude:parseFloat(this.props.route.params.lonDestino)}}
              apikey={'apikey'}
              strokeColor="black"
              troweWidth={5}
            />

            </MapView>

  
            <View style={styles.btn}>
                      <TouchableOpacity> 
                      <Button title="Eliminar Ruta" onPress={validar}> </Button>
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
    },

});

