import Device from 'react-native-device-detection';

export const { width, height, isAndroid } = Device;

export const scaledValue = (value) => {
  // areaConstant is arbitrarily based off of the
  // iPhone X (375 x 812); this value is used as
  // the 100% base for all other values to be
  // scaled proprotionately;

  // const areaConstant = 304500;
  // const area = width * height;
  // const scaleAmount = area / areaConstant;

  // using width instead of area to prevent such
  // a signficant amount of scaling

  // const widthConstant = 375;
  // const scaleAmount = width / widthConstant;

  // using height instead of area to prevent such
  // a signficant amount of scaling

  const heightConstant = 812;
  const scaleAmount = height / heightConstant;

  const result = value * scaleAmount;

  return Math.round(result);
};

export const scaledLineHeight = (value) => {
  // this is used to adjust the line height of
  // "Gotham Rounded" font because it's not
  // quite centered vertically when line-height
  // matches font-size

  return scaledValue(value);
};

export const Variables = {
  border: {
    radius: scaledValue(4),
    width: scaledValue(1),
  },
  colors: {
    black: '#000',
    blackType: '#333132',
    primary: '#ff0054',
    white: '#fff',
  },
  device: {
    height,
    width,
  },
  fonts: {
    sansSerif: {
      black: 'roboto-black',
      bold: 'roboto-bold',
      light: 'roboto-light',
      regular: 'roboto-regular',
      thin: 'roboto-thin',
    },
  },
  spacer: {
    base: scaledValue(33),
  },
};
