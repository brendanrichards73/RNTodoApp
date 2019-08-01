 'use strict';

 import React, { Component } from 'react';
 import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
 import { createStackNavigator, createAppContainer } from 'react-navigation';
 import API from './android/app/src/Screens/API';
 import Home from './android/app/src/Screens/Home';
 import ToDo from './android/app/src/Screens/ToDo';
 import Images from './android/app/src/Screens/Images';
 

 const Navigation = createStackNavigator({
   Home: {
     screen: Home,
   },
   API: {
     screen: API,
   },
   ToDo: {
    screen: ToDo,
  },
  Images: {
    screen: Images,
  },
  
 })


 export default createAppContainer(Navigation);
