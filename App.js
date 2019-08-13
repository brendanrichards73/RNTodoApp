 'use strict';

 import React, { Component } from 'react';
 import { createStackNavigator, createAppContainer } from 'react-navigation';
 import API from './src/Screens/API';
 import Home from './src/Screens/Home';
 import ToDo from './src/Screens/ToDo';
 import Maps from './src/Screens/Maps';
 

 
 const Navigation = createStackNavigator({
   Home: {
     screen: Home,
   },
   API: {
     screen: API,
   },
 
  Maps: {
    screen: Maps,
  },  
  
  ToDo: {
    screen: ToDo,
  },
  
 })


 export default createAppContainer(Navigation);
