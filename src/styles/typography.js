import {scaleFont} from './mixins';

// Font family
export const FONT_FAMILY_REGULAR = 'Custom-Regular';
export const FONT_FAMILY_BOLD = 'Custom-Bold';

// Font weight
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_REGULAR = '400';

// Font size
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_14 = scaleFont(14);

// Line height
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_20 = scaleFont(20);

// Font styles
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
