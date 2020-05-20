import {PixelRatio} from 'react-native';

const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const scaleFont = size => size * PixelRatio.getFontScale();

export const margin = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'margin');
};

export const padding = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'padding');
};

export const boxShadow = (
  color,
  offset = {height: 2, width: 2},
  radius = 5,
  opacity = 0.3,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};
