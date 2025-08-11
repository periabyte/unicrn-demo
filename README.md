# UNICRN Demo - React Native Expo App

A complete React Native Expo application demonstrating the UNICRN component library pattern with TypeScript, modern navigation, and comprehensive UI components.

## 🚀 Features

### ✅ UNICRN Component Library
Complete UI library with 7 core components featuring multiple variants, sizes, and states:
- **Typography** - H1, H2, H3, Body, Caption with color variants
- **Button** - Primary, Secondary, Outline, Ghost variants with sizes and loading states
- **Input** - Text, Email, Password inputs with validation and error handling
- **Card** - Elevated, Outlined, Filled variants with padding options
- **Badge** - Status badges with Primary, Secondary, Success, Warning, Error variants
- **Avatar** - User avatars with sizes and initials support
- **Switch** - Toggle switches with sizes and disabled states

### ✅ Authentication Flows
- **Login Screen** - Email/password form with real-time validation
- **Register Screen** - Multi-field registration with comprehensive validation
- Form validation with error messages and loading states

### ✅ Component Showcase
- Interactive kitchen-sink demo showing all components in action
- Live examples of component variants, sizes, and states
- useDisclose hook demonstration for show/hide functionality

### ✅ Modern Architecture
- **Framework**: React Native with Expo SDK 51+
- **Navigation**: Expo Router with tab-based navigation
- **Styling**: Unistyles 3.0 with theme support (light/dark)
- **Icons**: Lucide React Native icons
- **TypeScript**: Strict mode with proper type definitions
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

## 🏃‍♂️ Running the App

```bash
# Start Expo development server
npm start

# Run on specific platforms
npm run web       # Web browser
npm run ios       # iOS simulator (macOS only)
npm run android   # Android emulator
```

## 📁 Project Structure

```
app/
├── src/
│   ├── components/          # UNICRN component library
│   │   ├── Typography.tsx   # Text components
│   │   ├── Button.tsx       # Button component
│   │   ├── Input.tsx        # Input component
│   │   ├── Card.tsx         # Card component
│   │   ├── Badge.tsx        # Badge component
│   │   ├── Avatar.tsx       # Avatar component
│   │   ├── Switch.tsx       # Switch component
│   │   └── index.ts         # Component exports
│   ├── hooks/
│   │   └── useDisclose.ts   # Show/hide state hook
│   └── lib/
│       └── unistyles.ts     # Theme configuration
├── _layout.tsx              # Tab navigation layout
├── index.tsx                # App entry point
├── login.tsx                # Login screen
├── register.tsx             # Register screen
└── components.tsx           # Component showcase
```

## 🎨 Design System

### Theme Configuration
The app uses Unistyles 3.0 for consistent theming:

```typescript
const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    // ... more colors
  },
  spacing: {
    xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48
  },
  borderRadius: {
    sm: 4, md: 8, lg: 12, xl: 16, full: 9999
  },
  fontSize: {
    xs: 12, sm: 14, base: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 30
  }
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
A custom hook for managing show/hide state:

```typescript
const { isOpen, onOpen, onClose, onToggle } = useDisclose();
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

1. **Component Library Pattern** - Reusable, themeable components
2. **Form Handling** - Validation, error states, loading states
3. **Navigation** - Tab-based navigation with Expo Router
4. **Responsive Design** - Works across web and mobile
5. **TypeScript Integration** - Strict typing throughout
6. **Custom Hooks** - useDisclose for state management
7. **Theme System** - Consistent design tokens
8. **Icon Integration** - Lucide icons throughout

## 🔧 Development

### Adding New Components
1. Create component in `app/src/components/`
2. Follow existing patterns for props and styling
3. Export from `app/src/components/index.ts`
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