import {Dimensions, Platform} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const iosWidth = Dimensions.get('window').width; // width of current ios device
const iosHeight = Dimensions.get('window').height; // height of current ios device
const androidWidth = ExtraDimensions.getRealWindowWidth(); // width of current android device
const androidHeight = ExtraDimensions.getRealWindowHeight(); // height of current android device
const iosGuidelineBaseWidth = 375; // width of standard device (iphone 6)
const iosGuidelineBaseHeight = 667; // height of standard device (iphone 6)
const androidGuidelineBaseWidth = 360; // width of standard device (Samsung A5 2017)
const androidGuidelineBaseHeight = 640; // height of standard device (Samsung A5 2017)
const ipadGuidelineBaseWidth = 768; // width of standard device (iphone 6)
const ipadGuidelineBaseHeight = 1024; // height of standard device (iphone 6)
const width = Platform.OS === 'ios' || Platform.isPad ? iosWidth : androidWidth;
const height =
  Platform.OS === 'ios' || Platform.isPad ? iosHeight : androidHeight;
const guidelineBaseWidth = Platform.isPad
  ? ipadGuidelineBaseWidth
  : Platform.OS === 'ios'
  ? iosGuidelineBaseWidth
  : androidGuidelineBaseWidth;
const guidelineBaseHeight = Platform.isPad
  ? ipadGuidelineBaseHeight
  : Platform.OS === 'ios'
  ? iosGuidelineBaseHeight
  : androidGuidelineBaseHeight;

/**
 * responsive screen base on params
 * @param {number} horizontalScale: dp for standard device, use to: padding/margin Horizontal, width, height of icon or button
 * @param {number} verticalScale: dp for standard device, use to: height of component or layout, height of button, padding/margin Vertical
 * @param {number} moderateScale: dp for standard device, use scale value by horizontal base on factor
 * @param {number} factor: scale factor
 */

// return value scale by horizontal
export const h = horizontalScale =>
  (width / guidelineBaseWidth) * horizontalScale; // return value scale by vertical

export const v = verticalScale =>
  (height / guidelineBaseHeight) * verticalScale; // return value scale by horizontal base on factor

export const m = (moderateScale, factor = 0.5) =>
  moderateScale +
  ((height / guidelineBaseWidth) * moderateScale - moderateScale) * factor;
