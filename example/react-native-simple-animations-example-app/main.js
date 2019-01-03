import { AppLoading, Font, registerRootComponent } from 'expo';
import React, { Component } from 'react';

import { App } from './components/app';

export class AppContainer extends Component {
  state = { appReady: false };

  componentDidMount() {
    this.loadAssetsAsync().then(() => this.setState({ appReady: true }));
  }

  loadAssetsAsync() {
    const fontAssets = this.cacheFonts([
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
      { 'roboto-thin-italic': require('./assets/fonts/roboto/Roboto-ThinItalic.ttf') }
    ]);

    return Promise.all([...fontAssets]);
  }

  cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
  }

  render() {
    const { appReady } = this.state;
    if (!appReady) return <AppLoading />;
    return <App />;
  }
}

registerRootComponent(AppContainer);
