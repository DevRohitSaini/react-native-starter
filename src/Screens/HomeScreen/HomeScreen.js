import React from 'react'
import { View, Text, Image, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';

import loginGraphics from '../../Assets/Images/basic-screen-login.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', position: 'relative', height: '100%', justifyContent: 'center' }}>
        <Image source={loginGraphics} />  
      </View>
      <TouchableOpacity onPress={() => {
          navigation.openDrawer();
          Keyboard.dismiss();
        }}>
          <Text style={{ fontWeight: 'bold',  zIndex: 99999, color: '#fff', marginBottom: 20, fontSize: 16 }}> Sidebar </Text>
        </TouchableOpacity>
      <View style={{ backgroundColor: '#000000', opacity: 0.6, position: 'absolute', bottom: '100', marginRight: 20, paddingBottom: 20, marginLeft: 20, marginBottom: 100, width: '90%', borderRadius: 20, padding: 20, alignItems: 'center' }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ fontWeight: 'bold', color: '#fff', marginBottom: 20, fontSize: 16, lineHeight: 25, textAlign: 'left', fontFamily: 'Roboto' }}>
            Code Of Conduct Breach – Mohali: Match
            18 - PBKS Vs GT...
          </Text>
        </View>
      </View>
    </View>
  )
}

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

export default HomeScreen