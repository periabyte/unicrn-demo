import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { Typography } from './Typography';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  style?: ViewStyle;
}

const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};

export function Badge({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  style 
}: BadgeProps) {
  const textVariant = size === 'sm' ? 'caption' : 'body';

  const badgeStyle = [
    styles.base,
    styles[size],
    { backgroundColor: colors[variant] },
    style
  ];

  return (
    <View style={badgeStyle}>
      <Typography variant={textVariant} color="white">
        {children}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 9999,
    alignSelf: 'flex-start',
  },
  sm: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  md: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  lg: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
});