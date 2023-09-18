import React, { useState, useRef, useEffect, useContext } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Linking, TextInput, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import backButton from '../../Assets/Images/back-button.png';
import loginGraphics from '../../Assets/Images/otp-graphics.png';
import CustomButton from '../../Components/CustomButton/CustomButton';
// import { TextInput } from 'react-native-paper';

const OtpScreen = ({ navigation }) => {
  const [OtpNo1, setOtpNo1] = useState('');
  const [OtpNo2, setOtpNo2] = useState('');
  const [OtpNo3, setOtpNo3] = useState('');
  const [OtpNo4, setOtpNo4] = useState('');

  //   const [redirectFrom, setRedirectFrom] = useState(route.params?.from ?? '')

  const OtpNo1Ref = useRef();
  const OtpNo2Ref = useRef();
  const OtpNo3Ref = useRef();
  const OtpNo4Ref = useRef();





  const onChange = ({ name, value }) => {
    if (name == 'otpNo1') {
      setOtpNo1(value);
    } else if (name == 'otpNo2') {
      setOtpNo2(value);
    } else if (name == 'otpNo3') {
      setOtpNo3(value);
    } else if (name == 'otpNo4') {
      setOtpNo4(value);
    } 
  };

  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems:'center',  position: '', alignItems: 'center', width: '100%', padding: 15, paddingBottom: '0', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 22, color: '#222048', width:'100%', textAlign:'center', fontWeight: '700', marginRight: 50 }}>Confirm Otp</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent:'center'}}>
      <Image 
      //style={{height:300, width:'90%', objectFit:'contain', marginBottom:20, margin:'0 auto', textAlign:'center'}} 
      source={loginGraphics} />
    </View>
    <View style={{ backgroundColor: '#fff', marginRight: 20, marginLeft: 20, width: '90%', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, alignItems: 'center' }}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: '#283054', marginBottom: 20, fontSize: 16, lineHeight: 25, textAlign: 'center', fontFamily: 'Roboto' }}>Deliver you everyday a latest news
          and Quotes which you like</Text>
      </View>
      <View
        style={{
          width:'100%',
          marginTop: 15,
          marginBottom:30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          value={OtpNo1}
          ref={OtpNo1Ref}
          onChange={value => {
            onChange({ name: 'otpNo1', value });
          }}
          onChangeText={OtpNo1 => {
            setOtpNo1(OtpNo1);
            if (OtpNo1 != '') {
              OtpNo2Ref.current.focus();
            }
          }}
          keyboardType="numeric"
          maxLength={1}
          activeOutlineColor="black"
          returnKeyType="next"
          blurOnSubmit={false}
          // textAlign='center'
          // placeholder='-'
          // placeholderTextColor={'black'}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === 'Backspace'
              ? OtpNo1Ref.current.focus()
              : OtpNo2Ref.current.focus();
          }}
          // onSubmitEditing={() => OtpNo2Ref.current.focus()}
          style={{
            textAlign: 'center',
            color: 'black',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderRadius: 0,
          }}
        />

        <TextInput
          value={OtpNo2}
          ref={OtpNo2Ref}
          onChange={value => {
            onChange({ name: 'otpNo2', value });
          }}
          onChangeText={OtpNo2 => {
            setOtpNo2(OtpNo2);
            if (OtpNo2 != '') {
              OtpNo3Ref.current.focus();
            }
          }}
          keyboardType="numeric"
          maxLength={1}
          returnKeyType="next"
          blurOnSubmit={false}
          // onSubmitEditing={() => OtpNo3Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === 'Backspace'
              ? OtpNo1Ref.current.focus()
              : OtpNo3Ref.current.focus();
          }}
          // textAlign='center'
          // placeholder='-'
          // placeholderTextColor={'black'}
          style={{
            textAlign: 'center',
            color: 'black',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderRadius: 0,
          }}
        />

        <TextInput
          value={OtpNo3}
          ref={OtpNo3Ref}
          onChange={value => {
            onChange({ name: 'otpNo3', value });
          }}
          onChangeText={OtpNo3 => {
            setOtpNo3(OtpNo3);
            if (OtpNo3 != '') {
              OtpNo4Ref.current.focus();
            }
          }}
          keyboardType="numeric"
          maxLength={1}
          returnKeyType="next"
          blurOnSubmit={false}
          // onSubmitEditing={() => OtpNo4Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === 'Backspace'
              ? OtpNo2Ref.current.focus()
              : OtpNo4Ref.current.focus();
          }}
          // textAlign='center'
          // placeholder='-'
          // placeholderTextColor={'black'}
          style={{
            textAlign: 'center',
            color: 'black',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderRadius: 0,
          }}
        />

        <TextInput
          value={OtpNo4}
          ref={OtpNo4Ref}
          onChange={value => {
            onChange({ name: 'otpNo4', value });
          }}
          // onChangeText={OtpNo4 => {
          //   setOtpNo4(OtpNo4);
          //   if (OtpNo4 != '') {
          //     //  OtpNo5Ref.current.focus();
          //     Keyboard.dismiss();
          //   }
          // }}
          keyboardType="numeric"
          maxLength={1}
          // onSubmitEditing={() => Keyboard.dismiss()}
          onKeyPress={({ nativeEvent }) => {
            nativeEvent.key === 'Backspace'
              ? OtpNo3Ref.current.focus()
              : OtpNo4Ref.current.focus();
          }}
          // textAlign='center'
          // placeholder='-'
          // placeholderTextColor={'black'}
          style={{
            textAlign: 'center',
            color: 'black',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderRadius: 0,
          }}
        />
      </View>
      <View style={{ width: '100%', marginTop: '-30', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity
          >
         <Text style={{ color: '#F78E21', textAlign:'right', textTransform: 'uppercase', fontWeight: 700, fontSize: 12, fontFamily: 'Poppins-SemiBold' }}>Resend Code</Text>
        </TouchableOpacity>
        
      </View>
      <CustomButton text="Next" additionalStyle={{ marginTop: 40 }} />

    
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

export default OtpScreen;