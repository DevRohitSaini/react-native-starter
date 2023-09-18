import { Dimensions } from 'react-native';

const constant = {    
    serverUrl : 'backend-ip',
    siteURL : 'frontent-url',
    apiUrl: 'http://192.168.1.2:4000/api', 

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    latLong:{
        latitude:'',
        longitude:''
    },   
    KEmailRegex: /^(([^<>()\[\]\\.,#$!/%&*;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/,
    KMobileRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
};

export default constant;