import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FONTS, COLORS, SIZES} from '../constants';

const Button = ({
  label,
  labelStyles,
  containerStyles,
  isPrimary,
  isSecondary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isPrimary ? COLORS.primary : COLORS.transparent,
        borderRadius: 5,
        borderWidth: isSecondary ? 1 : null,
        borderColor: COLORS.lightGray,
        marginVertical: SIZES.base,
        ...containerStyles,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: isPrimary ? 'white' : COLORS.primary,
          ...labelStyles,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
