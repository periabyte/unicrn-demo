import React from 'react';
import { TouchableOpacity, View, ViewStyle, StyleSheet } from 'react-native';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
}

const colors = {
  primary: '#007AFF',
  surface: '#F2F2F7',
  border: '#C6C6C8',
  white: '#FFFFFF',
  black: '#000000',
};

export function Switch({ 
  value, 
  onValueChange, 
  size = 'md', 
  disabled = false, 
  style 
}: SwitchProps) {
  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  const switchStyle = [
    styles.base,
    styles[size],
    {
      backgroundColor: disabled 
        ? colors.surface 
        : value 
          ? colors.primary 
          : colors.border,
    },
    disabled && styles.disabled,
    style
  ];

  const thumbStyle = [
    styles.thumbBase,
    styles[`thumb_${size}`],
    {
      transform: [
        {
          translateX: value 
            ? (() => {
                switch (size) {
                  case 'sm': return 14;
                  case 'md': return 16;
                  case 'lg': return 20;
                  default: return 16;
                }
              })()
            : 0,
        },
      ],
    }
  ];

  return (
    <TouchableOpacity
      style={switchStyle}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={thumbStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: 2,
    justifyContent: 'center',
  },
  sm: {
    width: 32,
    height: 18,
    borderRadius: 9,
  },
  md: {
    width: 40,
    height: 24,
    borderRadius: 12,
  },
  lg: {
    width: 48,
    height: 28,
    borderRadius: 14,
  },
  disabled: {
    opacity: 0.6,
  },
  thumbBase: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  thumb_sm: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  thumb_md: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  thumb_lg: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});