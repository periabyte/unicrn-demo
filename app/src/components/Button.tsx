import React from 'react';
import { TouchableOpacity, ActivityIndicator, ViewStyle, StyleSheet } from 'react-native';
import { Typography } from './Typography';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  surface: '#F2F2F7',
  white: '#FFFFFF',
  black: '#000000',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false, 
  onPress, 
  children, 
  style 
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const textColor = (() => {
    if (isDisabled) return 'textSecondary';
    switch (variant) {
      case 'primary': return 'white';
      case 'secondary': return 'white';
      case 'outline': return 'primary';
      case 'ghost': return 'primary';
      default: return 'white';
    }
  })();

  const buttonStyle = [
    styles.base,
    styles[size],
    styles[variant],
    isDisabled && styles.disabled,
    style
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {loading && (
        <ActivityIndicator 
          size="small" 
          color={variant === 'primary' || variant === 'secondary' ? colors.white : colors.primary}
          style={styles.loader}
        />
      )}
      <Typography variant="body" color={textColor as any}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 0,
  },
  sm: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  md: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  lg: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: colors.surface,
    opacity: 0.6,
  },
  loader: {
    marginRight: spacing.sm,
  },
});