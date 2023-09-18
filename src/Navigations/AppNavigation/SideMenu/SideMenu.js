import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// import userDefaults from 'react-native-user-defaults';
// import DefaultPreference from 'react-native-default-preference';
import ProgressLoader from 'rn-progress-loader';
import style from './SideMenuStyle';
import next from '../../../Assets/Images/right-ico.png';
import close from '../../../Assets/Icons/Close.png';
import dashboardIcon from '../../../Assets/Images/dashboardIcon.png';
import NotificationIcon from '../../../Assets/Images/notification.png';
import settingIcon from '../../../Assets/Images/settingIcon.png';
import privacyIcon from '../../../Assets/Images/PrivacyPolicy.png';
import faqIcon from '../../../Assets/Images/faQ.png';
import logoutIcon from '../../../Assets/Images/logged-out.png';
import contactIcon from '../../../Assets/Images/contactIcon.png';


const SideMenu = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#000' }}>

      <ProgressLoader
        visible={false}
        isModal={true}
        isHUD={true}
        hudColor={'#fff'}
        height={200}
        width={200}
        color={'#000'}
      />

      <View style={{}}>
        <ScrollView
          // {...props}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer() }}>
            <Image style={{ marginTop: 15, padding: 15, }} source={close} />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#E9EBEF',
              marginTop: 10,
              marginBottom: 20
            }}
          />
          <View style={{ width: '100%', }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={dashboardIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                    Dashboard
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={contactIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                  Contact Us
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={settingIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                  Setting
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={privacyIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                  Privacy Policy
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={faqIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                  FaQ
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={{
                display: 'flex',
              }}
            >
              <View style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: "#242425", padding: 10,margin:10,borderRadius:5
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '90%',
                    
                  }}>

                  <Image style={{ width: 40, height: 40 }} source={logoutIcon} />
                  <Text style={{ marginLeft: 10, color:'#EFF4F9', fontWeight: "700" }}>
                  Logged Out
                  </Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  width: '15%',
                }}>
                  <Image source={next} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: 'black',
          }}
        />
      </View>

    </SafeAreaView>
  );
};

export default SideMenu;




