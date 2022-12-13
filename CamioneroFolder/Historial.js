import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,Image,TouchableOpacity,FlatList } from 'react-native';

export default class Historial extends Component{
    constructor(props) {
        super(props);
        this.state = {
         users:[]
        };
    }
  componentDidMount(){


    let _this =this;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        console.log("Entro al if");
        var myArr=JSON.parse(this.responseText);
        _this.setState({users:myArr});
      }

      
    };
    xhttp.open('GET','https://jesjarr.000webhostapp.com/mostrarViajes.php',true);
    xhttp.send();
  }

  render(){
        const getItem =(id,latInicial,lonInicial,latDestino,lonDestino,precio)=>{
      
      this.props.navigation.navigate('TomarRuta',{id:id,latInicial:latInicial,lonInicial:lonInicial,latDestino:latDestino,lonDestino:lonDestino,precio:precio,idUsuario:this.props.route.params.codigo});

    }
    const renderUser = ({item}) =>{
      return(
          <View style={{margin: 10, borderWidth: 0.5, padding: 10}}>
          <TouchableOpacity onPress={()=> getItem(item.id,item.latInicial,item.lonInicial,item.latDestino,item.lonDestino,item.precio)}>
            <Text style={{color: 'black', fontSize:16,fontWeight:'bold'}}>Id Viaje {item.id}</Text>
            <Text style={{color: 'black'}}>Precio: {item.precio}</Text>
            </TouchableOpacity>
          </View>
      );
    };
      return(
        <View>
          <Text>Listado de viajes por hacer</Text>
          

        <FlatList
        data={this.state.users} renderItem={renderUser} keyExtractor={(item, index) => index.toString()}
        />
      </View>
          
    );
  }

}