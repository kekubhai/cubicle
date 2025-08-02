import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface AuthScreenProps {
  navigation?: any;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would validate with Clerk
      // For now, we'll just show success
      Alert.alert('Success', 'Authentication successful!', [
        { text: 'OK', onPress: () => navigation?.navigate('Main') }
      ]);
    }, 1500);
  };

  return (
    <View className="flex-1 bg-grey-50 justify-center px-6">
      <View className="items-center mb-8">
        <View className="w-20 h-20 bg-primary-500 rounded-full items-center justify-center mb-4">
          <Text className="text-white text-3xl font-bold">C</Text>
        </View>
        <Text className="text-3xl font-bold text-grey-900 mb-2">
          Cubicle
        </Text>
        <Text className="text-grey-600 text-center">
          Your AI-powered career prep assistant
        </Text>
      </View>

      <Card className="mb-6">
        <Text className="text-2xl font-bold text-grey-900 mb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </Text>

        <View className="space-y-4">
          <View>
            <Text className="text-grey-700 font-medium mb-2">Email</Text>
            <TextInput
              className="border border-grey-300 rounded-lg px-4 py-3 text-grey-900 bg-white"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-grey-700 font-medium mb-2">Password</Text>
            <TextInput
              className="border border-grey-300 rounded-lg px-4 py-3 text-grey-900 bg-white"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button
            title={loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up')}
            onPress={handleAuth}
            disabled={loading}
            className="mt-4"
          />
        </View>

        <TouchableOpacity
          onPress={() => setIsLogin(!isLogin)}
          className="mt-6"
        >
          <Text className="text-primary-500 text-center font-medium">
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </Text>
        </TouchableOpacity>
      </Card>

      <View className="items-center">
        <Text className="text-grey-500 text-sm">
          By continuing, you agree to our Terms of Service
        </Text>
      </View>
    </View>
  );
}; 