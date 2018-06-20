import { DEFAULT_PROPS, DEFAULT_PROP_TYPES } from './config/default-props';
import React, { Component } from 'react';

import { Animated } from 'react-native';

export class Animation extends Component {

    constructor(props) {
        super(props);
        this.animation = new Animated.Value(0);
    }

    componentDidMount = () => {
        this.animate();
    }

    componentDidUpdate = () => {
        const { animateOnUpdate } = this.props;
        if (animateOnUpdate) this.animate();
    }

    animate = () => {
        const { animate, delay, duration, easing, useNativeDriver } = this.props;

        if (!animate) return;

        this.animation.setValue(0);

        Animated.timing(this.animation, {
            delay,
            duration,
            easing,
            toValue: 1,
            useNativeDriver
        }).start();
    }

    render = () => {
        const { children, style } = this.props;

        const viewStyles = [ style, { opacity: this.animation }] ;

        return (
            <Animated.View style={viewStyles}>
                {children}
            </Animated.View>
        );
    }
}

Animation.defaultProps = DEFAULT_PROPS;

Animation.propTypes = DEFAULT_PROP_TYPES;
