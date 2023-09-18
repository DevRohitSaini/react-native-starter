import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomButton({
    text,
    onPress,
    additionalStyle,
}) {
    return (
        <LinearGradient
            colors={['#00978E', '#00978E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={[{
                justifyContent: 'center',
                borderRadius: 0, paddingVertical: 18,
                paddingHorizontal: 17,
                elevation: 3,
                width:'100%',
                borderRadius:15,
                shadowColor:'none',
                backgroundColor: '#'
            }, additionalStyle]}>
            <TouchableOpacity onPress={onPress} style={{                
            }}>
                <Text
                    style={{
                        fontSize: 16,textTransform:'capitalize', fontWeight:'700',
                        textAlign: 'center', color: '#FFFFFF', fontFamily: 'Roboto'
                    }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}
