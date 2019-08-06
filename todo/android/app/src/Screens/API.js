import React, { Component } from 'react';
import { FlatList, Text, View, ActivityIndicator, Image, Picker } from 'react-native';

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
  this.state ={ 
    isLoading: true,
    country:'',
    region: '',
    subregion: '',
    capital: '',
    population: '',
    area: '',
    flag: '',


  }
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

  let serviceItems = this.state.dataSource.map( (item, i) => {
    return <Picker.Item key={i} value={item.name} label={item.name} />
  });
 

  return(
    <View style={{flex: 1, paddingTop:20}}>
      <View style={{fontWeight: 'bold', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
        Select a country to view
        </Text>
      <View>
        <Picker
            selectedValue={this.state.country}
            style={{height: 50, width: 300}}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({country: itemValue});
              const associatedData = this.state.dataSource.filter(item => itemValue === item.name);
              this.setState({region: associatedData[0].region});
              this.setState({subregion: associatedData[0].subregion});
              this.setState({area: associatedData[0].area});
              this.setState({capital: associatedData[0].capital});
              this.setState({population: associatedData[0].population});
              this.setState({flag: associatedData[0].flag});

              }
            }>
          {serviceItems}
        </Picker>
      </View>
      <View>
        <Image style={{borderColor: '#aeaeae',  borderWidth: 5, width: 300, height: 200}}>
        </Image>
      </View>
      <View style={{marginTop: 10, borderColor: '#aeaeae',  borderWidth: 5, width: 300, height: 200}}>
        <Text>
         Country Name: {this.state.country}
        </Text>
      <View>
        <Text>
          Region:{this.state.region}
        </Text>
      </View>
      <View>
        <Text>
        Subregion:{this.state.subregion}
        </Text>
      </View>
      <View>
        <Text>
          Land Area: {this.state.area}
        </Text>
      </View>
      <View>
        <Text>
          Capital City: {this.state.capital}
        </Text>
      </View> 
      <View>
        <Text>
          Population: {this.state.population}
        </Text>
      </View>
      <View>
        <Text>
          Flag: {this.state.flag}
        </Text>
      </View>
      </View>
      </View>
      
    </View>
  );
}
}
