import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomButtonOran({
    text,
    onPress,
    additionalStyle,
}) {
    return (
        <LinearGradient
            colors={['#F78E21', '#F78E21']}
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
            <TouchableOpacity onPress={onPress}>
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
