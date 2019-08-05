import React, { Component } from 'react';
import { FlatList, Text, View, ActivityIndicator, Picker } from 'react-native';


export default class API extends React.Component {
  
  static navigationOptions  = {
    title: 'API',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

constructor(props){
  super(props);
  this.state ={ isLoading: true}
}

componentDidMount(){
  return fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}



render(){

  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <View style={{flex: 1, paddingTop:20}}>
      <View>
        <Picker style={{textAlign: 'center', fontSize: 20, backgroundColor: 'grey'}}>
          REST Countries API
        </Picker>
      </View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.name}, {item.region}</Text>}
        keyExtractor={({id}, index) => id}
      />
    
    </View>
  );
}
}
