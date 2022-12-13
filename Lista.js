import React,{ Component } from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity,FlatList } from 'react-native';

export default class Lista extends Component{
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
      else{
        console.log("No entro al if");
      }
      
    };
    xhttp.open('GET','https://jesjarr.000webhostapp.com/mostrarCamioneros.php',true);
    xhttp.send();
  }

  render(){
    const getItem =(id,nombre,seguroSocial,curp,edad,activo)=>{
      
      this.props.navigation.navigate('ModificarUsuario',{id:id,nombre:nombre,seguroSocial:seguroSocial,curp:curp,edad:edad,activo:activo});

    }
      
    const renderUser = ({item}) =>{
      return(
          <View style={{margin: 10, borderWidth: 0.5, padding: 10}}>
          <TouchableOpacity onPress={()=> getItem(item.id,item.nombre,item.seguroSocial,item.curp,item.edad,item.activo)}>
            <Text style={{color: 'black', fontSize:16,fontWeight:'bold'}}>User {item.id}</Text>
            <Text style={{color: 'black'}}>Nombre: {item.nombre}</Text>
            <Text style={{color: 'black'}}>Seguro social: {item.seguroSocial}</Text>
            <Text style={{color: 'black'}}>Curp: {item.curp}</Text>
            <Text style={{color: 'black'}}>Edad: {item.edad}</Text>
            <Text style={{color: 'black'}}>Activo: {item.activo}</Text>
            </TouchableOpacity>
          </View>
      );
    };
      return(

        <View>

        <FlatList
        data={this.state.users}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
    
    );
  }

}