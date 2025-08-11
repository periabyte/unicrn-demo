# UNICRN Demo - React Native Expo App

A complete React Native Expo application demonstrating the **UNICRN component library** from npm with TypeScript, modern navigation, and comprehensive UI components.

## 🚀 Features

### ✅ UNICRN Component Library Integration
Uses the official **UNICRN npm package** with 7 core components featuring multiple variants, sizes, and states:
- **Typography** - H1, H2, H3, P, Small variants with color options
- **Button** - Default, Secondary, Outline, Ghost, Link variants with sizes and loading states  
- **Input** - Text and password inputs with validation and error handling
- **Card** - Default and elevated variants with padding options
- **Badge** - Status badges with Primary, Secondary, Destructive variants and outline support
- **Avatar** - User avatars with sizes and fallback initials support
- **Switch** - Toggle switches with sm/md sizes and disabled states

### ✅ useDisclose Hook Integration
- **useDisclose** - React hook for managing show/hide state with toggle, open, and close functions
- Demonstrates proper hook usage for modal and disclosure patterns

### ✅ Authentication Flows
- **Login Screen** - Email/password form with real-time validation
- **Register Screen** - Multi-field registration with comprehensive validation
- Form validation with error messages and loading states

### ✅ Component Showcase
- Interactive kitchen-sink demo showing all UNICRN components in action
- Live examples of component variants, sizes, and states
- useDisclose hook demonstration for show/hide functionality

### ✅ Modern Architecture
- **Framework**: React Native with Expo SDK 53+
- **Navigation**: Expo Router with tab-based navigation
- **Styling**: Unistyles 3.0 with theme support via UNICRN
- **Icons**: Lucide React Native icons
- **TypeScript**: Strict mode with proper type definitions
- **Component Library**: UNICRN npm package with CLI-based installation
- **Responsive Design**: Works on web and mobile platforms

## 📱 Screens

1. **Login** - User authentication with form validation
2. **Register** - Account creation with multi-field validation  
3. **Components** - Interactive showcase of all UI components

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd unicrn-demo

# Install dependencies
npm install

# Start the development server
npm start
```

### UNICRN Components Used

This project uses the official **UNICRN npm package** with components installed via CLI:

```bash
# Components were added using:
npx unicrn init
npx unicrn add button card input badge avatar switch typography usedisclose
```

## 📁 Project Structure

```
app/
├── _layout.tsx              # Tab navigation layout
├── index.tsx                # App entry point  
├── login.tsx                # Login screen
├── register.tsx             # Register screen
└── components.tsx           # Component showcase

components/                   # UNICRN components (via CLI)
├── ui/                      # UI Components
│   ├── Typography.tsx       # Text components
│   ├── Button.tsx           # Button component
│   ├── Input.tsx            # Input component
│   ├── Card.tsx             # Card component
│   ├── Badge.tsx            # Badge component
│   ├── Avatar.tsx           # Avatar component
│   ├── Switch.tsx           # Switch component
│   └── index.ts             # Component exports
├── hooks/                   # React Hooks
│   ├── useDisclose.ts       # Show/hide state hook
│   └── index.ts             # Hook exports
└── unistyles.ts             # UNICRN theme configuration

index.ts                     # Entry point with UNICRN setup
unicrn.config.json          # UNICRN CLI configuration
```

## 🏃‍♂️ Running the App

```bash
# Start Expo development server
npm start

# Run on specific platforms
npm run web       # Web browser
npm run ios       # iOS simulator (macOS only)
npm run android   # Android emulator
```

## 🎨 UNICRN Design System

### Theme Configuration
The app uses UNICRN's built-in Unistyles 3.0 theming system with consistent design tokens:

### Component Usage

Import components and hooks from their respective directories:

```typescript
// Import UI components
import { Typography, Button, Input, Card, Badge, Avatar, Switch } from './components/ui';

// Import hooks  
import { useDisclose } from './components/hooks';

// Example usage
function App() {
  const { isOpen, onOpen, onClose, toggle } = useDisclose();
  
  return (
    <Card padding="lg">
      <Typography variant="h1" color="foreground">Welcome</Typography>
      <Button title="Click me" onPress={onOpen} />
      <Input label="Email" placeholder="Enter email" />
    </Card>
  );
}
```

### Component Variants

#### Button Variants
- `primary` - Blue background, white text
- `secondary` - Purple background, white text  
- `outline` - Transparent background, blue border
- `ghost` - Transparent background, blue text

#### Input Types
- `text` - Standard text input
- `email` - Email input with validation
- `password` - Password input with show/hide toggle

#### Card Variants
- `elevated` - Shadow elevation
- `outlined` - Border outline
- `filled` - Background fill

## 🪝 Custom Hooks

### useDisclose
A UNICRN hook for managing show/hide state:

```typescript
import { useDisclose } from './components/hooks';

const { isOpen, onOpen, onClose, toggle } = useDisclose();

// Usage
<Button title="Toggle" onPress={toggle} />
{isOpen && <Card>Content</Card>}
```

## 📱 Form Validation

The app includes comprehensive form validation:

### Login Validation
- Email format validation
- Password minimum length (6 characters)
- Real-time error display

### Register Validation  
- Required field validation
- Email format validation
- Password strength requirements (8+ chars, uppercase, lowercase, number)
- Password confirmation matching
- Name field validation

## 🎯 Key Features Demonstrated

1. **UNICRN Component Library** - Official npm package with CLI installation
2. **Form Handling** - Validation, error states, loading states
3. **Navigation** - Tab-based navigation with Expo Router
4. **Responsive Design** - Works across web and mobile
5. **TypeScript Integration** - Strict typing throughout
6. **UNICRN Hooks** - useDisclose for state management
7. **Unistyles 3.0** - Modern styling system via UNICRN
8. **Icon Integration** - Lucide icons throughout

## 🔧 Development

### Adding New UNICRN Components
1. Use the UNICRN CLI: `npx unicrn add <component-name>`
2. Import from `./components/ui` or `./components/hooks`
3. Follow UNICRN documentation for component props

### Adding New Screens
1. Create screen file in `app/` directory
2. Update `app/_layout.tsx` for navigation
3. Import UNICRN components as needed
4. Add to showcase in `app/components.tsx`

### Customizing Theme
Edit `app/src/lib/unistyles.ts` to modify:
- Colors
- Spacing
- Typography
- Border radius
- Breakpoints

## 📦 Dependencies

- **expo** - Expo SDK 51+
- **expo-router** - File-based routing
- **react-native-unistyles** - Styling system
- **lucide-react-native** - Icon library
- **react-native-svg** - SVG support
- **typescript** - Type safety

## 🎉 Demo

The app successfully demonstrates:
- Complete UNICRN component library implementation
- Real authentication flows with validation
- Interactive component showcase
- Modern React Native development patterns
- TypeScript integration with strict mode
- Responsive design principles
- Performance optimizations

Perfect for learning React Native, Expo development, and component library patterns!