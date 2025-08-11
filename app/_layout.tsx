import { Tabs } from 'expo-router';
import { LogIn, UserPlus, Grid3X3 } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, size }) => (
            <LogIn color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarIcon: ({ color, size }) => (
            <UserPlus color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Components',
          tabBarIcon: ({ color, size }) => (
            <Grid3X3 color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}