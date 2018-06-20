import { Easing, ViewPropTypes } from 'react-native';

import PropTypes from 'prop-types';

const AIMS = {
    IN: 'in',
    OUT: 'out'
};

const DIRECTIONS = {
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up'
};

const TYPES = {
    FADE: 'fade'
};

export const DEFAULT_PROPS = {
    aim: AIMS.IN,
    animate: true,
    animateOnUpdate: false,
    children: null,
    delay: 0,
    direction: null,
    duration: 1000,
    easing: Easing.out(Easing.exp),
    style: null,
    type: TYPES.FADE,
    useNativeDriver: true
};

export const DEFAULT_PROP_TYPES = {
    aim: PropTypes.oneOf(Object.values(AIMS)).isRequired,
    animate: PropTypes.bool.isRequired,
    animateOnUpdate: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([ PropTypes.node, PropTypes.arrayOf(PropTypes.node) ]),
    delay: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(Object.values(DIRECTIONS)),
    duration: PropTypes.number.isRequired,
    easing: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
    type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
    useNativeDriver: PropTypes.bool.isRequired
};
