import React, {useRef} from 'react'
import {Animated, PanResponder, View, Image, Button, StyleSheet, Text, Easing } from 'react-native'

const Gesture = () =>{
    const pan = useRef(new Animated.ValueXY()).current;
    const springAnim = useRef(new Animated.Value(0)).current
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({ x: pan.x._value, y: pan.y._value, });
            pan.setValue({ x: 0, y: 0 }); },
        onPanResponderMove: Animated.event([
            null, { dx: pan.x, dy: pan.y, }, ]),
        onPanResponderRelease: () => { pan.flattenOffset(); }
    });
        
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
    return (
        <View style={styles.container}>
            {/* <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Animated.Image style={{ width: 200, height: 200, transform:[{scale: spring}] }} source={require('../assets/IT.png')}/>
            </View> */}
            {/* <Animated.View style={ {transform: [{ rotate: spin }], opacity: fade} }>
                <Image style={{width: spring, height: spring}} source={require('../../assets/IT.png')}/>
            </Animated.View> */}
            <Animated.View
            {...panResponder.panHandlers}
            style={[pan.getLayout(), styles.box]}
            >
                <Image style={{width: 150, height: 150}} source={require('../assets/IT.png')}/>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    box:{
        width: 150,
        height: 150,
    }
})

export default Gesture