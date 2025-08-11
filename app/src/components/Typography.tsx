import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'text' | 'textSecondary' | 'white' | 'black';
  children: React.ReactNode;
  style?: TextStyle;
}

const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  text: '#000000',
  textSecondary: '#8E8E93',
  white: '#FFFFFF',
  black: '#000000',
};

export function Typography({ 
  variant = 'body', 
  color = 'text', 
  children, 
  style 
}: TypographyProps) {
  const textStyle = [
    styles[variant],
    { color: colors[color] },
    style
  ];

  return (
    <Text style={textStyle}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});