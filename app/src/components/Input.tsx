import React, { useState } from 'react';
import { TextInput, View, ViewStyle, TextInputProps, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from './Typography';
import { Eye, EyeOff } from 'lucide-react-native';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled';
  type?: 'text' | 'password' | 'email';
  style?: ViewStyle;
}

const colors = {
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#C6C6C8',
  error: '#FF3B30',
  surface: '#F2F2F7',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export function Input({ 
  label, 
  error, 
  size = 'md', 
  variant = 'outline', 
  type = 'text',
  style, 
  ...props 
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPassword = type === 'password';
  const secureTextEntry = isPassword && !showPassword;

  const inputStyle = [
    styles.base,
    styles[size],
    variant === 'filled' && styles.filled,
    variant === 'outline' && styles.outline,
    error && styles.error,
  ];

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Typography variant="body" color="text" style={styles.label}>
          {label}
        </Typography>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={inputStyle}
          secureTextEntry={secureTextEntry}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          placeholderTextColor={colors.textSecondary}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color={colors.textSecondary} />
            ) : (
              <Eye size={20} color={colors.textSecondary} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Typography variant="caption" color="error" style={styles.errorText}>
          {error}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.xs,
  },
  inputContainer: {
    position: 'relative',
  },
  base: {
    borderRadius: 8,
    fontSize: 16,
    color: colors.text,
    paddingRight: spacing.xxl + spacing.md,
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
  filled: {
    backgroundColor: colors.surface,
    borderWidth: 0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border,
  },
  error: {
    borderColor: colors.error,
  },
  eyeButton: {
    position: 'absolute',
    right: spacing.xs,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
  },
  errorText: {
    marginTop: spacing.xs,
  },
});