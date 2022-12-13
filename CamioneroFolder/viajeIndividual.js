import React,{ Component } from 'react';
import { Constants } from 'expo';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput } from 'react-native';
import MapView, {Marker,Polyline}from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"


export default class viajeIndividual extends Component{
    constructor(props) {
        super(props);
        this.state = {
          disponibilidad:'',
        };
    }
 
  render(){

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
              apikey={'key'}
              strokeColor="black"
              troweWidth={5}
            />

            </MapView>

  
      </View>
    );
  }

}


const styles = StyleSheet.create({

    map:{
      width:'100%',
      height:'80%',
    },

});