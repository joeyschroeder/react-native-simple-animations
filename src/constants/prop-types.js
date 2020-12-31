import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { AIMS } from './aims';
import { DIRECTIONS } from './directions';
import { MOVEMENT_TYPES } from './movement-types';
import { STATIC_TYPES } from './static-types';

export const PROP_TYPES = {
  aim: PropTypes.oneOf(Object.values(AIMS)).isRequired,
  animate: PropTypes.bool.isRequired,
  animateOnUpdate: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  delay: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(Object.values(DIRECTIONS)),
  distance: PropTypes.number,
  duration: PropTypes.number.isRequired,
  easing: PropTypes.func.isRequired,
  fade: PropTypes.bool.isRequired,
  friction: PropTypes.number.isRequired,
  movementType: PropTypes.oneOf(Object.values(MOVEMENT_TYPES)),
  staticType: PropTypes.oneOf(Object.values(STATIC_TYPES)),
  style: ViewPropTypes.style,
  tension: PropTypes.number.isRequired,
  useNativeDriver: PropTypes.bool.isRequired,
};
