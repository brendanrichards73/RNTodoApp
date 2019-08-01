import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';


export default class API extends React.Component {

    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
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
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
    }
  }

// const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         item: {
//             flex: 1,
//             alignSelf: 'stretch',
//             margin: 10,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderBottomWidth: 1,
//             borderBottomColor: '#eee',
//         }
// });
