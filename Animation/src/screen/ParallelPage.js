import React, {useRef} from 'react'
import {Animated, View, Image, Button, StyleSheet, Text, Easing } from 'react-native'

const ParallelPage = () =>{
    const slideAnim = useRef(new Animated.Value(0)).current
    const springAnim = useRef(new Animated.Value(0)).current

    const slide = slideAnim.interpolate({
        inputRange: [0, 0.25, 0.75 ,1],
        outputRange: [800, 20, 1600, 800]
    })

    const sliding = () =>{
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce
        }).start(() =>{slideAnim.setValue(0)})
    }

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

    const animate = () => {
        Animated.parallel( [
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce
        }),
        Animated.timing(springAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce
        }),
        ] ).start( () => {
            slideAnim.setValue(0)
            springAnim.setValue(0)
        } ); 
    };

//{transform: [{ rotate: spin }], opacity: fade}
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Animated.Image style={{ width: 200, height: 200, transform:[{scale: spring}] }} source={require('../../assets/IT.png')}/>
            </View>
            {/* <Animated.View style={ {transform: [{ rotate: spin }], opacity: fade} }>
                <Image style={{width: spring, height: spring}} source={require('../../assets/IT.png')}/>
            </Animated.View> */}
            <Animated.Text style={{ transform:[{translateX: slide}] }}>Welcome to Faculty of IT!</Animated.Text>
            <View style={{ marginTop: 150 , flex: 1, flexDirection: 'column'}}>
                <Button title="Spring"  onPress={animate} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default ParallelPage