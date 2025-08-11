import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Typography, 
  Button, 
  Input, 
  Card, 
  Badge, 
  Avatar, 
  Switch 
} from '../components/ui';
import { useDisclose } from '../components/hooks';

export default function ComponentsScreen() {
  const [inputValue, setInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const disclosure = useDisclose();

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Typography variant="h1" color="foreground">
              UNICRN Components
            </Typography>
            <Typography variant="p" color="muted" style={styles.subtitle}>
              Explore all available UI components
            </Typography>
          </View>

          {/* Typography Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
            <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
              Typography
            </Typography>
            <View style={styles.componentGroup}>
              <Typography variant="h1" color="foreground">Heading 1</Typography>
              <Typography variant="h2" color="foreground">Heading 2</Typography>
              <Typography variant="h3" color="foreground">Heading 3</Typography>
              <Typography variant="p" color="foreground">Body text example</Typography>
              <Typography variant="small" color="muted">Caption text</Typography>
            </View>
          </Card>
          </View>

          {/* Button Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
            <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
              Buttons
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.buttonRow}>
                <Button title="Small" size="sm" />
                <Button title="Medium" />
                <Button title="Large" size="lg" />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Primary" />
                <Button title="Secondary" variant="secondary" />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Outline" variant="outline" />
                <Button title="Ghost" variant="ghost" />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Disabled" disabled />
                <Button 
                  title={loading ? 'Loading...' : 'Load Demo'}
                  loading={loading}
                  onPress={handleLoadingDemo}
                />
              </View>
            </View>
          </Card>
          </View>

          {/* Input Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
              <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
                Inputs
              </Typography>
              <View style={styles.componentGroup}>
                <Input
                  label="Text Input"
                  placeholder="Enter some text"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <Input
                  label="Email Input"
                  placeholder="Enter your email"
                />
                <Input
                  label="Password Input"
                  placeholder="Enter password"
                  secureTextEntry={true}
                />
                <Input
                  label="Input with Error"
                  placeholder="This has an error"
                  error="This field is required"
                />
              </View>
            </Card>
          </View>

          {/* Badge Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
            <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
              Badges
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.badgeRow}>
                <Badge theme="primary" size="sm">Small</Badge>
                <Badge theme="primary" size="md">Medium</Badge>
                <Badge theme="primary" size="lg">Large</Badge>
              </View>
              <View style={styles.badgeRow}>
                <Badge theme="primary">Primary</Badge>
                <Badge theme="secondary">Secondary</Badge>
                <Badge theme="destructive">Destructive</Badge>
              </View>
              <View style={styles.badgeRow}>
                <Badge theme="primary" variant="outline">Outline</Badge>
              </View>
            </View>
          </Card>
          </View>

          {/* Avatar Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
              <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
                Avatars
              </Typography>
              <View style={styles.componentGroup}>
                <View style={styles.avatarRow}>
                  <Avatar size="sm" />
                  <Avatar size="md" />
                  <Avatar size="lg" />
                  <Avatar size="xl" />
                </View>
                <View style={styles.avatarRow}>
                  <Avatar size="sm" fallback="JS" />
                  <Avatar size="md" fallback="JD" />
                  <Avatar size="lg" fallback="AB" />
                  <Avatar size="xl" fallback="CD" />
                </View>
              </View>
            </Card>
          </View>

          {/* Switch Section */}
          <View style={styles.cardSection}>
            <Card padding="lg">
            <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
              Switches
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.switchRow}>
                <Typography variant="p" color="foreground">Small Switch</Typography>
                <Switch
                  size="sm"
                  value={switchValue}
                  onValueChange={setSwitchValue}
                />
              </View>
              <View style={styles.switchRow}>
                <Typography variant="p" color="foreground">Medium Switch</Typography>
                <Switch
                  size="md"
                  value={switchValue}
                  onValueChange={setSwitchValue}
                />
              </View>
              <View style={styles.switchRow}>
                <Typography variant="p" color="foreground">Disabled Switch</Typography>
                <Switch
                  value={false}
                  onValueChange={() => {}}
                  disabled
                />
              </View>
            </View>
          </Card>
          </View>

          {/* useDisclose Hook Demo */}
          <View style={styles.cardSection}>
            <Card padding="lg">
              <Typography variant="h2" color="foreground" style={styles.sectionTitle}>
                useDisclose Hook
              </Typography>
              <View style={styles.componentGroup}>
                <Button 
                  title={disclosure.isOpen ? 'Hide Content' : 'Show Content'}
                  onPress={disclosure.toggle}
                />
                {disclosure.isOpen && (
                  <Card variant="elevated" padding="md">
                    <Typography variant="p" color="foreground">
                      This content is controlled by the useDisclose hook! 
                      It provides toggle, open, and close functions for managing visibility state.
                    </Typography>
                  </Card>
                )}
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 48,
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
  sectionTitle: {
    marginBottom: 24,
  },
  componentGroup: {
    gap: 16,
  },
  cardSection: {
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatarRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});