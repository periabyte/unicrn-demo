import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './src/lib/unistyles';
import { 
  Typography, 
  Button, 
  Input, 
  Card, 
  Badge, 
  Avatar, 
  Switch 
} from './src/components';
import { useDisclose } from './src/hooks/useDisclose';

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
            <Typography variant="h1" color="text">
              UNICRN Components
            </Typography>
            <Typography variant="body" color="textSecondary" style={styles.subtitle}>
              Explore all available UI components
            </Typography>
          </View>

          {/* Typography Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
              Typography
            </Typography>
            <View style={styles.componentGroup}>
              <Typography variant="h1" color="text">Heading 1</Typography>
              <Typography variant="h2" color="text">Heading 2</Typography>
              <Typography variant="h3" color="text">Heading 3</Typography>
              <Typography variant="body" color="text">Body text example</Typography>
              <Typography variant="caption" color="textSecondary">Caption text</Typography>
            </View>
          </Card>

          {/* Button Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
              Buttons
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.buttonRow}>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </View>
              <View style={styles.buttonRow}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </View>
              <View style={styles.buttonRow}>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </View>
              <View style={styles.buttonRow}>
                <Button variant="primary" disabled>Disabled</Button>
                <Button 
                  variant="primary" 
                  loading={loading}
                  onPress={handleLoadingDemo}
                >
                  {loading ? 'Loading...' : 'Load Demo'}
                </Button>
              </View>
            </View>
          </Card>

          {/* Input Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
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
                type="email"
              />
              <Input
                label="Password Input"
                placeholder="Enter password"
                type="password"
              />
              <Input
                label="Input with Error"
                placeholder="This has an error"
                error="This field is required"
              />
            </View>
          </Card>

          {/* Badge Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
              Badges
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.badgeRow}>
                <Badge variant="primary" size="sm">Small</Badge>
                <Badge variant="primary" size="md">Medium</Badge>
                <Badge variant="primary" size="lg">Large</Badge>
              </View>
              <View style={styles.badgeRow}>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
              </View>
              <View style={styles.badgeRow}>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </View>
            </View>
          </Card>

          {/* Avatar Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
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
                <Avatar size="sm" initials="JS" />
                <Avatar size="md" initials="JD" />
                <Avatar size="lg" initials="AB" />
                <Avatar size="xl" initials="CD" />
              </View>
            </View>
          </Card>

          {/* Switch Section */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
              Switches
            </Typography>
            <View style={styles.componentGroup}>
              <View style={styles.switchRow}>
                <Typography variant="body" color="text">Small Switch</Typography>
                <Switch
                  size="sm"
                  value={switchValue}
                  onValueChange={setSwitchValue}
                />
              </View>
              <View style={styles.switchRow}>
                <Typography variant="body" color="text">Medium Switch</Typography>
                <Switch
                  size="md"
                  value={switchValue}
                  onValueChange={setSwitchValue}
                />
              </View>
              <View style={styles.switchRow}>
                <Typography variant="body" color="text">Large Switch</Typography>
                <Switch
                  size="lg"
                  value={switchValue}
                  onValueChange={setSwitchValue}
                />
              </View>
              <View style={styles.switchRow}>
                <Typography variant="body" color="text">Disabled Switch</Typography>
                <Switch
                  value={false}
                  onValueChange={() => {}}
                  disabled
                />
              </View>
            </View>
          </Card>

          {/* useDisclose Hook Demo */}
          <Card variant="elevated" padding="lg" style={styles.section}>
            <Typography variant="h2" color="text" style={styles.sectionTitle}>
              useDisclose Hook
            </Typography>
            <View style={styles.componentGroup}>
              <Button variant="primary" onPress={disclosure.onToggle}>
                {disclosure.isOpen ? 'Hide Content' : 'Show Content'}
              </Button>
              {disclosure.isOpen && (
                <Card variant="outlined" padding="md" style={styles.disclosureContent}>
                  <Typography variant="body" color="text">
                    This content is controlled by the useDisclose hook! 
                    It provides toggle, open, and close functions for managing visibility state.
                  </Typography>
                </Card>
              )}
            </View>
          </Card>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 24,
  },
  componentGroup: {
    gap: 16,
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
  disclosureContent: {
    marginTop: 16,
  },
});