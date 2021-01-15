
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import { useLinkProps, useRoute } from '@react-navigation/native';
import { Context } from './Home';
export default class Second extends Component<Props> {
  static contextType= Context
  //  route=useRoute();
   render(){
   
    return (
      <View style={styles.container}>
       
          <Text>{this.context.data.name}</Text>
          <Text>{this.context.data.large}</Text>
          
          {/* 
          
          other
          <Text>{route.params.name+route.params.id}</Text>
          <Image style={styles.image} source={route.params.image}></Image> */}
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
        height:150,width:100
    }
  });
  