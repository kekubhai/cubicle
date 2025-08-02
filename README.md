# Cubicle - AI-Powered Career Prep Assistant

A React Native mobile app that combines AI-powered resume analysis and mock interview feedback into a modern, intuitive interface.

## 🎨 Design Theme
- **Grey + Silver + Green** professional color scheme
- Clean, modern UI with soft shadows and rounded corners
- Tailwind CSS styling via NativeWind

## 🚀 Features

### Core Features
- **Resume Analyzer**: Upload PDF or paste text to get AI-powered feedback
- **Mock Interview**: Practice with role-specific questions and voice recording
- **AI Feedback**: Real-time analysis of clarity, confidence, and suggestions
- **Job Matching**: Get top 5 matching job roles based on your resume

### UI Components
- Reusable components: `Card`, `Button`, `MicButton`, `Loader`, `Header`
- Responsive design with proper spacing and typography
- Loading states and error handling
- Professional grey+silver+green color palette

## 🛠 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation** for routing
- **Expo Document Picker** for file uploads
- **Expo Speech** for voice recording
- **Mock AI** (easily replaceable with OpenAI/Gemini)

## 📱 Screens

1. **Auth Screen**: Sign in/up with email/password
2. **Home Screen**: Welcome message and action cards
3. **Resume Analyzer**: Upload/paste resume, get AI analysis
4. **Mock Interview**: Select role, answer questions, get feedback
5. **Profile Screen**: User info, plan details, settings

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Install dependencies**:
   ```bash
   cd cubicle
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on device/simulator**:
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## 🔧 Configuration

### AI Integration
The app currently uses mock AI responses. To integrate real AI:

1. **OpenAI Integration**:
   - Uncomment the OpenAI code in `utils/ai.ts`
   - Add your API key
   - Replace mock functions with real API calls

2. **Gemini Integration**:
   - Similar process for Google's Gemini API
   - Update API endpoints and authentication

### Authentication
Currently uses mock authentication. To integrate Clerk:

1. Install Clerk: `npm install @clerk/clerk-expo`
2. Configure in `App.tsx`
3. Replace mock auth in `screens/Auth.tsx`

## 📁 Project Structure

```
cubicle/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Loader.tsx
│   └── MicButton.tsx
├── screens/            # App screens
│   ├── Auth.tsx
│   ├── Home.tsx
│   ├── ResumeAnalyzer.tsx
│   ├── MockInterview.tsx
│   └── Profile.tsx
├── utils/              # Utility functions
│   └── ai.ts          # AI integration
├── navigation.tsx      # Navigation setup
├── App.tsx            # Main app component
└── tailwind.config.js # Tailwind configuration
```

## 🎯 Next Steps

### Immediate Improvements
1. **Add real AI integration** (OpenAI/Gemini)
2. **Implement file upload** with expo-document-picker
3. **Add voice recording** with expo-speech
4. **Connect Clerk authentication**

### Advanced Features
1. **Resume templates** and customization
2. **Interview question bank** with categories
3. **Progress tracking** and analytics
4. **Social sharing** of results
5. **Offline support** with local storage

### SaaS Features
1. **Stripe integration** for payments
2. **User management** and profiles
3. **Team collaboration** features
4. **Advanced analytics** dashboard

## 🎨 Customization

### Colors
The app uses a custom grey+silver+green theme defined in `tailwind.config.js`:

- **Primary Green**: `#10B981`
- **Silver**: `#C0C0C0`
- **Grey Scale**: `#F3F4F6` to `#111827`

### Styling
All styling is done with Tailwind classes via NativeWind. Components are designed to be easily customizable.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Cubicle** - Your AI-powered career prep assistant! 🚀 