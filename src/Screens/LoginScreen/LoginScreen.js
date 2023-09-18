import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Button, StyleSheet, Alert } from 'react-native';
import loginGraphics from '../../Assets/Images/login-screen.png';
import CustomButton from '../../Components/CustomButton/CustomButton';
import backButton from '../../Assets/Images/back-button.png';
import { loginApi } from '../../Utils/Api';
import { SuccessToast, ErrorToast } from '../../Utils/ToastMsg';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const onValidate = () => {
    if (mobile == '' && password == '') {
      ErrorToast('Please enter Mobile and Password');
    } else if (mobile == '') {
      ErrorToast('Please enter Mobile');
    } else if (password == '') {
      ErrorToast('Please enter Password');
    } else if (password.length < 6) {
      ErrorToast('Please enter 6 character password');
    } else {
      login();
    }
  };
  const login = async () => {
    let jsonData = {
      "mobile": mobile,
      "password": password
    };

    const loginResponse = await loginApi(jsonData);
    if (loginResponse.isSuccess) {
      navigation.navigate('HomeScreen');
      SuccessToast('Login Successfully');
    } else {
      ErrorToast('Error : Please check credentials');
    }
  };

  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', position: '', justifyContent: 'center', width: '100%', padding: 15, paddingBottom: '0', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('BasicScreen');
        }}>
          <Image source={backButton} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: '#222048', textAlign: 'center', width: '100%', fontWeight: '700', }}>Login</Text>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          source={loginGraphics} />
      </View>
      <View style={{ backgroundColor: '#fff', marginRight: 20, marginLeft: 20, width: '90%', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, alignItems: 'center' }}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#283054', marginBottom: 20, fontSize: 16, lineHeight: 25, textAlign: 'center', fontFamily: 'Roboto' }}>Deliver you everyday a latest news
            and Quotes which you like</Text>
        </View>

        <TextInput
          placeholder="Mobile"
          onChangeText={text => setMobile(text)}
          value={mobile}
          maxLength={10}
          style={styles.input}
          returnKeyType='next'
          keyboardType='numeric'
         
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
          keyboardType='ascii-capable'
          returnKeyType='done'
        />

        <View style={{ width: '100%', marginTop: '-30', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#222048', textTransform: 'uppercase', fontWeight: 700, alignSelf: 'center', fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>Forgot Password!</Text>
          {/* <TouchableOpacity>
            <Text onPress={() => { navigation.navigate('OtpScreen') }} style={{ color: '#F78E21', textTransform: 'uppercase', fontWeight: 700, fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>Login with OTP</Text>
          </TouchableOpacity> */}
          <Text style={{ color: '#F78E21', textTransform: 'uppercase', fontWeight: 700, fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>Login with OTP</Text>
        </View>
        <CustomButton text="Login" onPress={() => onValidate()} additionalStyle={{ marginTop: 40 }} />
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#222048', textTransform: 'uppercase', fontWeight: '400', alignSelf: 'center', fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>I'm new here. </Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('SignupScreen') }}>
            <Text style={{ color: '#F78E21', textTransform: 'uppercase', fontWeight: '700', fontSize: 12, fontFamily: 'Poppins-Bold' }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',

  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 0,
    marginBottom: 20,
    paddingLeft: 20,
    backgroundColor: '#FAF9FF',
    color: '#222048',
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

export default LoginScreen;