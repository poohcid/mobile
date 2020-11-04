import React, {useRef} from 'react'
import {Animated, View, Image, Button, StyleSheet, Text, Easing } from 'react-native'

const SequencePage = () =>{
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
    }).start(()=>{fadeAnim.setValue(0); spinning()}); };

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

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Animated.Image style={{ width: 200, height: 200, transform: [{ rotate: spin }], opacity: fade}} source={require('../../assets/IT.png')}/>
            </View>
            <View style={{ marginTop: 150}}>
                <Button title="Run Sequence" onPress={fadeIn}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default SequencePage