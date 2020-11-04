import React, {useRef} from 'react'
import {Animated, View, Image, Button, StyleSheet, Text, Easing } from 'react-native'

const SpringPage = () =>{

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fade = fadeAnim.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [1, 0.5, 0, 0.5, 1],
    });
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
    }).start(()=>{fadeAnim.setValue(0)}); };

    const spinAnim = useRef(new Animated.Value(0)).current;

    const spin = spinAnim.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ["0deg", "180deg", "360deg", "180deg", "0deg"],
    });

    const spinning = () => {
        Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        //easing: Easing.out
    }).start( ()=>{spinAnim.setValue(0)} ); };

    const springAnim = useRef(new Animated.Value(0)).current

    const spring = springAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1]
    })

    const springing = () =>{
        Animated.timing(springAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce
        }).start(() =>{springAnim.setValue(0)})
    }
//{transform: [{ rotate: spin }], opacity: fade}
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Animated.Image style={{ width: 200, height: 200, transform:[{scale: spring}] }} source={require('../../assets/IT.png')}/>
            </View>
            {/* <Animated.View style={ {transform: [{ rotate: spin }], opacity: fade} }>
                <Image style={{width: spring, height: spring}} source={require('../../assets/IT.png')}/>
            </Animated.View> */}
            <View style={{ marginTop: 150 , flex: 1, flexDirection: 'column'}}>
                <Button title="Spring"  onPress={springing} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default SpringPage