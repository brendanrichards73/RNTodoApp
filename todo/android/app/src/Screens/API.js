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
      <View style={{fontWeight: 'bold', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
        Select a country to view
        </Text>
      <View>
        <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 300}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
          <Picker.Item label="Great Britain" value="great britain" />
          <Picker.Item label="America" value="america" />
          <Picker.Item label="France" value="france" />
          <Picker.Item label="India" value="india" />
        </Picker>
      </View>
      <View>
        <Image style={{borderColor: '#aeaeae',  borderWidth: 5, width: 300, height: 200}}>
        </Image>
      </View>
      <View style={{marginTop: 10, borderColor: '#aeaeae',  borderWidth: 5, width: 300, height: 200}}>
        <Text>
          Country Name:
        </Text>
      <View>
        <Text>
          Region:
        </Text>
      </View>
      <View>
        <Text>
          Currency:
        </Text>
      </View>
      <View>
        <Text>
          TimeZones:
        </Text>
      </View>
      <View>
        <Text>
          National flag image:
        </Text>
      </View>
      </View>
      </View>
      <View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.name}, {item.region}, {item.population}, {item.currencies.name}, {item.timezones}, {item.flag}</Text>}
        keyExtractor={({id}, index) => id}
      />
      </View>
    </View>
  );
}
}
