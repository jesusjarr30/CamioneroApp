import React,{ Component } from 'react';
import { Constants } from 'expo';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,TextInput,Alert } from 'react-native';
import MapView, {Marker,Polyline}from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"


export default class AgregarRuta extends Component{
    constructor(props) {
        super(props);
        this.state = {

         destinolat:20.682450,
         destinolon:-103.334386,
         inicionLat:20.682450,
         inicioLon:-103.334386,
         costos:'',
        
        };
    }

  
  render(){
    const validacion =()=>{
      var cadena= new String();

      if(this.state.costos.length==0 ||this.state.costos.includes('-') ||this.state.costos.includes(',') ||this.state.costos.includes('.')){
        cadena+="El precio tiene que se numero entero sin coma ni puntos";
      }
      if(this.state.inicioLon===this.state.inicioLon && this.state.inicionLat===this.state.destinolat){
        cadena+="\nNo se puede trazar una ruta al mismo destino";
      }
      if(cadena.length!=0){
             Alert.alert(
      "error ",
      cadena,
          );
      }else{
            btnclick();
      }
     
    }

  
    
      const btnclick = () =>{ 
          console.log('agregar ruta');  
          let _this=this
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            console.log("Afuera del if ");
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   let resultado =xhttp.responseText;
                   console.log("El resultado es ");
                   console.log(resultado);
                    Alert.alert(
                      "Ruta agregada correctamente",
                          );
                }
            };
      xhttp.open("GET", "https://jesjarr.000webhostapp.com/AgregarViaje.php?lat1="+this.state.inicionLat+"&lon1="+this.state.inicioLon+"&lat2="+this.state.destinolat +"&lon2="+this.state.destinolon+"&precio="+this.state.costos, true);
      xhttp.send();
               
        }


      return(
        
        <View style={{margingTop:50, flex: 1 }}>
        <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        fetchDetails={true} // you need this to fetch the details object onPress
				placeholder="Start   ..."
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data,details);


          var lista=JSON.stringify(details.geometry.location);
          console.log("Los datos lista lista1 "+lista);
          this.setState({inicionLat:details.geometry.location.lat,inicioLon:details.geometry.location.lng})
				}}
				query={{
					key: 'key',
					language: "es",
          types:"establishment",
          radius: 30000,
          location: `${this.state.latitude}, ${this.state.longitude}`
				}}
				styles={{
					container: { flex: 1, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "black" }
				}}
			/>
      <Text ></Text>
      <Text ></Text>
      <Text ></Text>
      <Text ></Text>
      <Text ></Text>
      <Text ></Text>

     <View style={{margingTop:5, }}>
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        fetchDetails={true} // you need this to fetch the details object onPress
				placeholder="destino  ......................."
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					
          this.setState({destinolat:details.geometry.location.lat,destinolon:details.geometry.location.lng})
          var lista=JSON.stringify(details.geometry.location);
          console.log(lista);
          
          console.log("ahora con los destinos "+this.state.destinolat+" destino 2 es"+this.state.destinolon);
				}}
				query={{
					key: 'key',
					language: "es",
          types:"establishment",
          radius: 30000,
          location: `${this.state.latitude}, ${this.state.longitude}`
          
				}}
				styles={{
					container: { flex: 1, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/>
      </View>
      
      <MapView style={styles.map}
          initialRegion={{
            latitude:this.state.inicionLat,
            longitude:this.state.inicioLon,
            latitudeDelta:0.09,
            longitudeDelta:0.09,
          }}

          provider="google"

            >
            <Marker coordinate= {{latitude:this.state.inicionLat,longitude:this.state.inicioLon}}/>


            <Marker coordinate= {{latitude:this.state.destinolat,longitude:this.state.destinolon}}/>

              <MapViewDirections
              origin={{latitude:this.state.inicionLat,longitude:this.state.inicioLon}}
              destination={{latitude:this.state.destinolat,longitude:this.state.destinolon}}
              apikey={'key'}
              strokeColor="black"
              troweWidth={5}
            />



            </MapView>
            <TextInput style={styles.textinput} 
            keyboardType="numeric"
            placeholder="Precio a pagar"
            onChangeText={costos=>this.setState({costos})}/>
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

        btn:
    {
        width: '60%',
        height: 60,
        alignSelf:'center',
        padding:10,
    },
    map:{
      width:'100%',
      height:'60%',
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
});