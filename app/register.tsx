import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography, Button, Input, Card } from '../components/ui';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate first name
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Validate last name
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    // Validate confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle successful registration
      alert('Registration successful!');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Typography variant="h1" color="foreground">
                Create Account
              </Typography>
              <Typography variant="p" color="muted" style={styles.subtitle}>
                Join us today and get started
              </Typography>
            </View>

            <Card padding="lg">
              <View style={styles.form}>
                <View style={styles.nameRow}>
                  <Input
                    label="First Name"
                    placeholder="John"
                    value={firstName}
                    onChangeText={setFirstName}
                    error={errors.firstName}
                    style={styles.nameInput}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    value={lastName}
                    onChangeText={setLastName}
                    error={errors.lastName}
                    style={styles.nameInput}
                  />
                </View>

                <Input
                  label="Email Address"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChangeText={setEmail}
                  error={errors.email}
                />

                <Input
                  label="Password"
                  placeholder="Create a strong password"
                  value={password}
                  onChangeText={setPassword}
                  error={errors.password}
                  secureTextEntry={true}
                />

                <Input
                  label="Confirm Password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  error={errors.confirmPassword}
                  secureTextEntry={true}
                />

                <Button
                  title={loading ? 'Creating Account...' : 'Create Account'}
                  onPress={handleRegister}
                  loading={loading}
                />

                <View style={styles.footer}>
                  <Typography variant="p" color="muted">
                    Already have an account?{' '}
                  </Typography>
                  <Typography variant="p" color="primary">
                    Sign in here
                  </Typography>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
  nameRow: {
    flexDirection: 'row',
    gap: 16,
  },
  nameInput: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});