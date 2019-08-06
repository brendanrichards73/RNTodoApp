RNTodoApp Project

This is a React Native Android project, built on OSX platform, that uses React Navigation to switch between screens that have a todo screen and fetch api screen.

Before you begin, make sure that you have Android Studio installed so that you can view the project on a physical device or onscreen emulator. To Download and install Android Studio go to https://developer.android.com/studio/index.html

Getting Started I recommend installing Node, Watchman, and JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew:

    brew install node
    brew install watchman
    brew tap AdoptOpenJDK/openjdk
    brew cask install adoptopenjdk8
    
Install React Native CLI To install React Native run the following command;

   -npm install -g react-native-cli
    
Once installed make sure to use React Native 0.59.1 as I found some issues with using 0.60 the first time around. Clone the project into your command pallette in VScode.

  -Install React Navigation.

  -Install Redux

Todo Screen
The todo screen allows you to input a new todo through the input, then it displays the entered todos on the screen.  These todo's can be struck with a line-through to show completion.  Redux is used to store the list of todo's.
*The next step of this will be to redner a button for each todo to enable deletion of the said todo.  


API Screen
The API screen makes a fetch request to the REST Countries API to fetch data about worlkd countries.  A React native Picker provides a list of all the countries from the API to be selected.  *I am Currently working on once selected, the chosen country's informaion will be rendered on the screen. 


Built With

React Native
React Navigation
Redux

Author Brendan Richards

Thuis is an ongoing project learning more about react native.
