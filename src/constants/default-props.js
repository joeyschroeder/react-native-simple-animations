import { Easing } from 'react-native';
import { AIMS } from './aims';

export const DEFAULT_PROPS = {
  aim: AIMS.IN,
  animate: true,
  animateOnUpdate: false,
  children: null,
  delay: 0,
  direction: null,
  distance: 0,
  duration: 1000,
  easing: Easing.out(Easing.exp),
  fade: true,
  friction: 5,
  movementType: null,
  staticType: null,
  style: null,
  tension: 100,
  useNativeDriver: true,
};
