[![npm](https://img.shields.io/npm/v/react-native-simple-animations.svg)](https://www.npmjs.com/package/react-native-simple-animations)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/react-native-simple-animations.svg)](https://github.com/joeyschroeder/react-native-simple-animations/issues)
[![GitHub forks](https://img.shields.io/github/forks/joeyschroeder/react-native-simple-animations.svg)](https://github.com/joeyschroeder/react-native-simple-animations/network)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/react-native-simple-animations.svg)](https://github.com/joeyschroeder/react-native-simple-animations/stargazers)

# [![react-native-simple-animations](https://i.imgur.com/Aw0bShe.png)](https://www.npmjs.com/package/react-native-simple-animations) React Native Simple Animations
A React Native component that adds simple entrance, exit, and attention-seeking animations to a child component. **Works on iOS & Android.**

## Example
![react-native-simple-animations](https://i.imgur.com/oBZtsvk.gif "react-native-simple-animations")

## Installation
`npm install react-native-simple-animations --save`

## Usage
Import **SimpleAnimation** component:

```
import { SimpleAnimation } from 'react-native-simple-animations';
```

Use as follows:

```
<SimpleAnimation
    delay={500}
    duration={1000}
    fade
    staticType='zoom'
>
	<Text>Hello, world!</Text>
</SimpleAnimation>
```
In the above example the `Text` component will fade and zoom in for 1000 milliseconds are waiting 500 milliseconds.

## Configuration
You can configure `SimpleAnimation` by passing the following props:

##### Standard Props
* **aim** (`"in"` | `"out"`, default: `"in"`): whether the child component will animate **in** or **out**; for example, if `staticType` is set to `"zoom"` and `aim` is set to `"in"` the child component will zoom in; if `aim` is set to `"out"` the child component will zoom out
* **animate** (boolean, default: `true`): when `true` the child component will animate, when `false` the child component will not animate
* **animateOnUpdate** (boolean, default: `true`): when `true` the child component will animate if any of the props change on it's parent `SimpleAnimation` component, when `false` the child component will not animate regardless of `SimpleAnimation`'s props change
* **style** (React Native [ViewPropTypes.style](https://facebook.github.io/react-native/docs/style.html)): additional styles applied to the component
* **[useNativeDriver](http://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html)** (boolean, default: `true`): when `true` the animation is sent to native before starting, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame

##### Animation Types
* **fade** (boolean, default: `true`): when `true` the child component will fade in or out depending on the `aim`
* **movementType** (`"slide"` | `"spring"`, default: `null`): when `direction` and `distance` are set, the type of movement animation
* **staticType** (`"bounce"` | `"zoom"`, default: `null`): when set the child component will `"bounce"` or "`zoom`" in our out depending on the `aim`

##### Animation Properties
* **delay** (number, default: `0`): the length in milliseconds the component will wait before animating
* **direction** (`"down"` | `"left"` | `"right"` | `"up"`, default: `null`): when `movementType` is set, this is the direction the child component will move
* **distance** (number, default: `0`): when `movementType` is set, this is the distance the child component will move
* **duration** (number, default: `1000`): the length in milliseconds the `fade` animation will last and the length the movement animation will last when `movementType` is set to `"slide"`
* **easing** (React Native [Easing function](https://facebook.github.io/react-native/docs/easing.html), default: `Easing.out(Easing.exp)`): the easing function to define animation curve
* **[friction](https://facebook.github.io/react-native/docs/animated.html#spring)** (number, default: `5`): when `movementType` is set to `"spring"` or `staticType` is set to `"bounce"` this is the amount of friction applied to the animation
* **[tension](https://facebook.github.io/react-native/docs/animated.html#spring)** (number, default: `100`): when `movementType` is set to `"spring"` or `staticType` is set to `"bounce"` this is the amount of friction applied to the animation

## Demo Application
This repository contains a demo React Native application with a customizable example of the `SimpleAnimation` component in use.  The demo application was built using [Expo](https://expo.io/features).

To use the demo application download this repository, install Expo using the installation instructions located [here](https://docs.expo.io/versions/v28.0.0/introduction/installation), run the application using the [Expo XDE](https://expo.io/tools).  Then open the application on the iOS Simulator, Gennymotion Android Simulator, or your mobile device.

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

<!-- ## Usage
Import **AnimatedBackgroundColorView** component

```
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
```

Use as follows:

```
<AnimatedBackgroundColorView color='#00aced' />
```
Each time the `color` prop value changes the `backgroundColor` will use the [React Native timing animation](https://facebook.github.io/react-native/docs/animated.html#timing) to animate from the previous value to the current value.

### Animate On Component Mount
You can also specifiy an initial color for the background color to animate from when the component mounts:
```
<AnimatedBackgroundColorView
    color='#00aced'
    initialColor='red'
/>
```
On mount the component `backgroundColor` will be `blue` and then animate to `#00aced`.

### Using the `children` Prop
The `AnimatedBackgroundColorView` component works just like the standard React Native `View` component.  `AnimatedBackgroundColorView` is designed to be nested inside other `View` components or other `AnimatedBackgroundColorView` components and can have 0 to many children of any type.

```
class AnimatedBackgroundColorViewWithText extends Component {
    render = () => {
        return (
            <AnimatedBackgroundColorView
                color='#00aced'
                initialColor='red'
            >
                <Text>Hello, world!</Text>
            </AnimatedBackgroundColorView>
        );
    }
}
``` -->
