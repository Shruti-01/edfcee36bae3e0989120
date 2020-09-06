/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import GetData from './Assets/GetData'
class App extends Component{
  render(){
    return(
      <View style={styles.footer}>
        <GetData />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    flex:1
  },
  head:{
    marginBottom:30,
    marginTop:30,
    flex:1
  },
  dash:{
    marginBottom:30,
    marginTop:30,
    flex:3
  }

});

export default App
