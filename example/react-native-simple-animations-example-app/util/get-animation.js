import { Animated } from 'react-native';

export const getTimingAnimation = ({ animation, delay, duration, easing, toValue, useNativeDriver }) => {

    return Animated.timing(animation, {
        delay,
        duration,
        easing,
        toValue,
        useNativeDriver
    });
};

export const getSpringAnimation = ({ animation, delay, duration, friction, tension, toValue, useNativeDriver }) => {

    return Animated.sequence([
        Animated.delay(delay),
        Animated.spring(animation, {
            duration,
            friction,
            tension,
            toValue,
            useNativeDriver
        })
    ]);
};
