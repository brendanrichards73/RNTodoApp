 'use strict';

 import React, { Component } from 'react';
 import { createStackNavigator, createAppContainer } from 'react-navigation';
 import API from './src/Screens/API';
 import Home from './src/Screens/Home';
 import ToDo from './src/Screens/ToDo';
 import Images from './src/Screens/Images';
 

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
