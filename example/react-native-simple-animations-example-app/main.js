/* eslint-disable global-require */
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import React, { Component } from 'react';
import * as Font from 'expo-font';

import { App } from './components/app';

export class AppContainer extends Component {
  static cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  static loadAssetsAsync() {
    const fontAssets = AppContainer.cacheFonts([
      { 'roboto-black': require('./assets/fonts/roboto/Roboto-Black.ttf') },
      { 'roboto-black-italic': require('./assets/fonts/roboto/Roboto-BlackItalic.ttf') },
      { 'roboto-bold': require('./assets/fonts/roboto/Roboto-Bold.ttf') },
      { 'roboto-bold-italic': require('./assets/fonts/roboto/Roboto-BoldItalic.ttf') },
      { 'roboto-italic': require('./assets/fonts/roboto/Roboto-Italic.ttf') },
      { 'roboto-light': require('./assets/fonts/roboto/Roboto-Light.ttf') },
      { 'roboto-light-italic': require('./assets/fonts/roboto/Roboto-LightItalic.ttf') },
      { 'roboto-medium': require('./assets/fonts/roboto/Roboto-Medium.ttf') },
      { 'roboto-medium-italic': require('./assets/fonts/roboto/Roboto-MediumItalic.ttf') },
      { 'roboto-regular': require('./assets/fonts/roboto/Roboto-Regular.ttf') },
      { 'roboto-thin': require('./assets/fonts/roboto/Roboto-Thin.ttf') },
      { 'roboto-thin-italic': require('./assets/fonts/roboto/Roboto-ThinItalic.ttf') },
    ]);

    return Promise.all([...fontAssets]);
  }

  constructor(props) {
    super(props);
    this.state = { appReady: false };
  }

  componentDidMount() {
    AppContainer.loadAssetsAsync().then(() => this.setState({ appReady: true }));
  }

  render() {
    const { appReady } = this.state;
    if (!appReady) return <AppLoading />;
    return <App />;
  }
}

registerRootComponent(AppContainer);
