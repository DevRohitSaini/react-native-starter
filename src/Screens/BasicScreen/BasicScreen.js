import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import loginGraphics from '../../Assets/Images/basic-screen-login.png';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomButtonOran from '../../Components/CustomButton/CustomButtonOran';

const BasicScreen = ({ navigation }) => { 
  return (

    <View style={styles.container }>
      
      <View style={{flexDirection: 'row',  height:'100%', justifyContent:'center'}}>
        <Image 
        //style={{height:'100%', margin:'0 auto', textAlign:'center'}} 
        source={loginGraphics} />
      </View>
      <View style={{ backgroundColor: '#fff', position:'absolute',bottom:'20',  marginRight: 20, marginLeft: 20, width: '90%', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, alignItems: 'center' }}>
      <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: '900', color: '#283054', marginBottom: 20, fontSize: 22,  lineHeight: 30, textAlign: 'center', fontFamily: 'Roboto' }}>
           Welcome to Daily Update  </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#283054', marginBottom: 20, fontSize: 16, lineHeight: 25, textAlign: 'center', fontFamily: 'Roboto' }}>Deliver you everyday a latest news
            and Quotes which you like</Text>
        </View>
       
       
        <CustomButton text="Login"  onPress={() => { navigation.navigate('LoginScreen') }} additionalStyle={{ marginTop: 20 }} />
        <CustomButtonOran text="Sign Up" onPress={() => { navigation.navigate('SignupScreen') }} additionalStyle={{ marginTop: 20 }} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'flex-end',
   
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 0,
    marginBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#FAF9FF',
    color: 'red',
    fontSize: 18,
    borderRadius: 10,

  },

  Button: {
    width: '90%',
    height: 60,
    borderWidth: 0,
    marginBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#00978E',
    color: '#fff',
    borderRadius: 15,
  }
});

export default BasicScreen;