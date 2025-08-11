import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { Typography } from './Typography';
import { User } from 'lucide-react-native';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  imageUri?: string;
  style?: ViewStyle;
}

const colors = {
  primary: '#007AFF',
  white: '#FFFFFF',
};

export function Avatar({ 
  size = 'md', 
  initials, 
  imageUri, 
  style 
}: AvatarProps) {
  const iconSize = (() => {
    switch (size) {
      case 'sm': return 16;
      case 'md': return 20;
      case 'lg': return 24;
      case 'xl': return 32;
      default: return 20;
    }
  })();

  const avatarStyle = [
    styles.base,
    styles[size],
    style
  ];

  return (
    <View style={avatarStyle}>
      {initials ? (
        <Typography 
          variant={size === 'sm' ? 'caption' : 'body'} 
          color="white"
        >
          {initials}
        </Typography>
      ) : (
        <User size={iconSize} color={colors.white} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sm: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  md: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  lg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  xl: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});