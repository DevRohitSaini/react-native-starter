import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import splashscreen from '../Assets/Images/splash-screen.png';

const SplashScreen = ({ navigation }) => {    

    useEffect(() => {
        // Simulate some asynchronous initialization (e.g., fetching data) 
        // and then navigate to the main screen when it's done.
        const initializationAsync = async () => {
            await someAsyncInitialization();
            navigation.replace('BasicScreen'); // Replace with the name of your main screen
        };
        //initializationAsync();

        setTimeout(() => {
            navigation.navigate('BasicScreen');
        }, 5000);


    }, [navigation]);

    return (
        <View style={styles.container}>            
            <Image  source={splashscreen} />
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
});

export default SplashScreen;
