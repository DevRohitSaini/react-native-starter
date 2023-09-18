import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import backButton from '../../Assets/Images/back-button.png';
import constant from '../../Utils/constant';
import { SuccessToast, ErrorToast } from '../../Utils/ToastMsg';
import { checkCredentials, signupApi } from '../../Utils/Api';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const onValidate = () => {
    if (name == '' && mobile == '' && email == '' && password == '') {
      ErrorToast('Please enter required fields');
    } else if (name == '') {
      ErrorToast('Please enter your name');
    } else if (mobile == '') {
      ErrorToast('Please enter mobile number');
    } else if (email == '') {
      ErrorToast('Please enter email addressr');
    } else if (constant.KEmailRegex.test(email) === false) {
      ErrorToast('Please enter valid email');
    } else if (password == '') {
      ErrorToast('Please enter password');
    } else if (password.length < 6) {
      ErrorToast('Please enter 6 character password');
    } else {
      confirmUser();
    }
  };

  const confirmUser = async () => {
    let jsonData = {
      "mobile": mobile,
    };
    const confirmUserApi = await checkCredentials(jsonData);
    if (confirmUserApi.isSuccess) {
      ErrorToast('Mobile number already exist.');
    } else {
      signup();
    }
  }

  const signup = async () => {
    
    let jsonData = {
      "name": name,
      "mobile": mobile,
      "email": email,
      "password": password,
    };

    const signupResponse = await signupApi(jsonData);

    if (signupResponse.isSuccess) {
      navigation.navigate('HomeScreen');
      SuccessToast('Account created successfully');
    } else {
      ErrorToast('Error : Please try later');
    }

  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: 15, paddingBottom: '0', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('BasicScreen');
        }}>
          <Image source={backButton} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: '#222048', fontWeight: '700', marginRight: 50 }}>Sign Up</Text>
      </View>

      <View style={{ backgroundColor: '#fff', marginRight: 20, marginLeft: 20, width: '90%', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, alignItems: 'center' }}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#283054', marginBottom: 20, fontSize: 16, lineHeight: 25, textAlign: 'center', fontFamily: 'Roboto' }}>Deliver you everyday a latest news
            and Quotes which you like</Text>
        </View>

        <TextInput
          name="Full Name"
          value={name}
          returnKeyType='next'
          keyboardType='default'
          onChangeText={value => {
            setName(value);
          }}
          placeholder="Full Name"
          style={styles.input}          
        />

        <TextInput
          name="Phone Number"
          value={mobile}
          returnKeyType='next'
          keyboardType='numeric'
          onChangeText={value => {
            setMobile(value);
          }}
          placeholder="Phone Number"
          maxLength={10}
          style={styles.input}          
        />

        <TextInput
          name="Email Address"
          value={email}
          returnKeyType='next'
          keyboardType='email-address'
          onChangeText={value => {
            setemail(value);
          }}
          placeholder="Email Address"          
          style={styles.input}
        />

        <TextInput
          name="Password"
          value={password}
          returnKeyType='done'
          keyboardType='ascii-capable'
          onChangeText={value => {
            setPassword(value);
          }}
          placeholder="Password"
          secureTextEntry
          style={styles.input}          
        />

        <CustomButton text="Signup" onPress={() => onValidate()} additionalStyle={{ marginTop: 40 }} />

        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#222048', textTransform: 'uppercase', fontWeight: '400', alignSelf: 'center', fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('LoginScreen') }}>
            <Text style={{ color: '#F78E21', textTransform: 'uppercase', fontWeight: '700', fontSize: 12, fontFamily: 'Poppins-Bold' }}> Login </Text>
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

export default SignupScreen;
