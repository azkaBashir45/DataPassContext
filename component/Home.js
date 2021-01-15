
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Second from './Second';
const Context=React.createContext()
 class Home extends Component<Props> {
  
  constructor(props){
    super(props)
    this.state={
      namedata:{
        name:"dnnfndf",age:88
      },
      namedatas:{
        large:"tall",age:88
      },
      
    }
  }
  //other code
  // const route=useRoute();
  // const params={name:"azka",id:123,image:require("../assets/flowers.png")}
  render(){
    const {navigate}=this.props.navigation
    return (
      <View style={styles.container}>
       
        <Context.Provider value={{data:(this.state.namedata),datas:(this.state.namedatas)
        }}>

        <Second></Second>
        

          {/*
          other method
          <Text>data show next screen</Text>
          <Button title="Usama" onPress={()=>this.props.navigation.navigate('Second')}></Button> */}
          </Context.Provider>
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
  });
  export default Home
  export {Context};