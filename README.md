[![npm](https://img.shields.io/npm/v/react-native-simple-animations.svg)](https://www.npmjs.com/package/react-native-simple-animations)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/react-native-simple-animations.svg)](https://github.com/joeyschroeder/react-native-simple-animations/issues)
[![npm downloads](https://img.shields.io/npm/dt/react-native-simple-animations.svg)](https://www.npmjs.com/package/react-native-simple-animations)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Dependency status](https://david-dm.org/joeyschroeder/react-native-simple-animations/status.svg)](https://david-dm.org/joeyschroeder/react-native-simple-animations/)
[![devDependency status](https://david-dm.org/joeyschroeder/react-native-simple-animations/dev-status.svg)](https://david-dm.org/joeyschroeder/react-native-simple-animations/?type=dev)

# [![react-native-simple-animations](https://i.imgur.com/Aw0bShe.png)](https://www.npmjs.com/package/react-native-simple-animations) React Native Simple Animations
A React Native component that adds simple entrance, exit, and attention-seeking animations to a child component. **Works on iOS & Android.**

## Example
![react-native-simple-animations](https://i.imgur.com/IuiG6Sg.gif "react-native-simple-animations")

## Installation
`npm install react-native-simple-animations --save`

## Usage
Import **SimpleAnimation** component:

```
import { SimpleAnimation } from 'react-native-simple-animations';
```

Use as follows:

```
<SimpleAnimation delay={500} duration={1000} fade staticType='zoom'>
	<Text>Hello, world!</Text>
</SimpleAnimation>
```
In the above example the `Text` component will fade and zoom in for 1000 milliseconds after waiting 500 milliseconds.

## Configuration
You can configure `SimpleAnimation` by passing the following props:

| prop | type/valid values | default | description |
| - | - | - | - |
| aim | `"in"`, `"out"` | `"in"` | whether the child component will animate **in** or **out**; for example, if `staticType` is set to `"zoom"` and `aim` is set to `"in"` the child component will zoom in; if `aim` is set to `"out"` the child component will zoom out |
| animate | boolean | `true` | when `true` the child component will animate, when `false` the child component will not animate |
| animateOnUpdate | boolean | `false` | when `true` the child component will animate if any of the props change on it's parent `SimpleAnimation` component, when `false` the child component will not animate regardless of `SimpleAnimation`'s props change |
| delay | number | `0` | the length in milliseconds the component will wait before animating |
| direction | `"down"`, `"left"`, `"right"`, `"up"` | `null` | when `movementType` is set, this is the direction the child component will move |
| distance | number | `0` | when `movementType` is set, this is the distance the child component will move |
| duration | number | `1000` | the length in milliseconds the `fade` animation will last and the length the movement animation will last when `movementType` is set to `"slide"` |
| easing | React Native [Easing function](https://facebook.github.io/react-native/docs/easing.html) | `Easing.out(Easing.exp)` | the easing function to define animation curve |
| fade | boolean | `true` | when `true` the child component will fade in or out depending on the `aim` |
| [friction](https://facebook.github.io/react-native/docs/animated.html#spring) | number | `5` | when `movementType` is set to `"spring"` or `staticType` is set to `"bounce"` this is the amount of friction applied to the animation |
| movementType | `"slide"`, `"spring"` | `null` | when `direction` and `distance` are set, the type of movement animation |
| staticType | `"bounce"`, `"zoom"` | `null`| when set the child component will `"bounce"` or "`zoom`" in our out depending on the `aim` |
| style | React Native [ViewPropTypes.style](https://facebook.github.io/react-native/docs/style.html) | `null` | additional styles applied to the component |
| [tension](https://facebook.github.io/react-native/docs/animated.html#spring) | number | `100` | when `movementType` is set to `"spring"` or `staticType` is set to `"bounce"` this is the amount of friction applied to the animation |
| [useNativeDriver](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html) |  boolean | `true` | when `true` the animation is sent to native before starting, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame |

## Demo Application
This repository contains a demo React Native application with a customizable example of the `SimpleAnimation` component in use.  The demo application was built using [Expo](https://expo.io/features).

To use the demo application install Expo using the installation instructions located [here](https://docs.expo.io/versions/v31.0.0/introduction/installation), clone this repository, run the application using the [expo-cli](https://docs.expo.io/versions/latest/workflow/expo-cli).  Then open the application on the iOS Simulator, [Gennymotion Android Emulator](https://www.genymotion.com/), or your mobile device.

1) Clone this repository: `https://github.com/joeyschroeder/react-native-simple-animations.git`
2) Navigate to the demo application: `cd path/to/this/repository/react-native-simple-animations/example/reactreact-native-simple-animations-example-app`
3) Install demo application dependencies: `npm install`
4) Run `npm run start`

Using the Expo CLI, you'll be able to view the demo application in the iOS Simulator or Gennymotion Android Android Emulator, or on your mobile device using the [iOS Expo Client](https://itunes.apple.com/us/app/expo-client/id982107779) or [Android Expo Client](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US).

## Built With
* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React
* [Expo](https://expo.io/learn) - A toolchain built around React Native to help build native iOS and Android projects

## Versioning
I use [SemVer](https://docs.npmjs.com/getting-started/semantic-versioning) for versioning. For the versions available, see the [tags on this repository](https://github.com/joeyschroeder/react-native-simple-animations/tags).

## Authors
* **Joey Schroeder** - *Initial work* - [joeyschroeder.com](https://joeyschroeder.com)

See also the list of [contributors](https://github.com/joeyschroeder/react-native-simple-animations/graphs/contributors) who participated in this project.

## Contributing
Please submit a pull request with any features/fixes for the project. I apologize in advance for the slow action on pull requests and issues. Please follow the [ESLint rules](https://github.com/joeyschroeder/react-native-simple-animations/blob/master/.eslintrc.json) for the project.

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.

## Acknowledgments
Hat tip to anyone who's code was used! 🤠
