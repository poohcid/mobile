import React from 'react';
import { StyleSheet, ImageBackground, View, Image} from 'react-native';
function WelcomeScreen() {
    return (
        <ImageBackground source={require('../assets/plane.jpg')}
        style={styles.background}>
            <Image source={require('../assets/favicon.png')} style={styles.logo}></Image>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton:{
        width: "100%",
        height: 70,
       backgroundColor: "#fc5c65",
    },
    registerButton:{
        width: "100%",
        height: 70,
       backgroundColor: "#4ecdc4",
    },
    logo:{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
    }
    
})