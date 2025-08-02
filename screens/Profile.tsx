import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface ProfileScreenProps {
  navigation?: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const userName = "Alex Johnson";
  const userEmail = "alex.johnson@example.com";

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            // In a real app, this would clear Clerk session
            navigation?.navigate('Auth');
          }
        }
      ]
    );
  };

  const handleUpgrade = () => {
    Alert.alert('Upgrade', 'Pro plan features coming soon!');
  };

  return (
    <View className="flex-1 bg-grey-50">
      <Header 
        title="Profile" 
        showBack={true}
        onBack={() => navigation?.goBack()}
      />
      
      <ScrollView className="flex-1 px-6 pt-6">
        {/* User Info Card */}
        <Card className="mb-6">
          <View className="items-center mb-6">
            <View className="w-20 h-20 bg-primary-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-2xl font-bold">
                {userName.charAt(0)}
              </Text>
            </View>
            <Text className="text-xl font-bold text-grey-900 mb-1">
              {userName}
            </Text>
            <Text className="text-grey-600">
              {userEmail}
            </Text>
          </View>
        </Card>

        {/* Current Plan Card */}
        <Card className="mb-6 bg-gradient-to-br from-silver-50 to-silver-100 border-silver-200">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-lg font-bold text-grey-900">
                Current Plan
              </Text>
              <Text className="text-grey-600">
                Free Plan
              </Text>
            </View>
            <View className="bg-silver-500 px-3 py-1 rounded-full">
              <Text className="text-white font-medium text-sm">
                FREE
              </Text>
            </View>
          </View>
          
          <View className="space-y-3 mb-4">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text className="text-grey-700 ml-2">3 Resume analyses per month</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text className="text-grey-700 ml-2">5 Mock interviews per month</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text className="text-grey-700 ml-2">Basic AI feedback</Text>
            </View>
          </View>
          
          <Button
            title="Upgrade to Pro"
            variant="secondary"
            onPress={handleUpgrade}
            className="w-full"
          />
        </Card>

        {/* Pro Features Preview */}
        <Card className="mb-6">
          <Text className="text-lg font-bold text-grey-900 mb-4">
            Pro Features
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#C0C0C0" />
              <Text className="text-grey-700 ml-2">Unlimited resume analyses</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#C0C0C0" />
              <Text className="text-grey-700 ml-2">Unlimited mock interviews</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#C0C0C0" />
              <Text className="text-grey-700 ml-2">Advanced AI feedback</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#C0C0C0" />
              <Text className="text-grey-700 ml-2">Resume templates</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#C0C0C0" />
              <Text className="text-grey-700 ml-2">Interview question bank</Text>
            </View>
          </View>
        </Card>

        {/* Settings */}
        <Card className="mb-6">
          <Text className="text-lg font-bold text-grey-900 mb-4">
            Settings
          </Text>
          <View className="space-y-4">
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <Ionicons name="notifications" size={20} color="#6B7280" />
                <Text className="text-grey-700 ml-3">Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#6B7280" />
            </View>
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <Ionicons name="shield" size={20} color="#6B7280" />
                <Text className="text-grey-700 ml-3">Privacy</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#6B7280" />
            </View>
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center">
                <Ionicons name="help-circle" size={20} color="#6B7280" />
                <Text className="text-grey-700 ml-3">Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#6B7280" />
            </View>
          </View>
        </Card>

        {/* Logout Button */}
        <Button
          title="Logout"
          variant="outline"
          onPress={handleLogout}
          className="w-full mb-6"
        />

        {/* App Info */}
        <View className="items-center mb-6">
          <Text className="text-grey-500 text-sm">
            Cubicle v1.0.0
          </Text>
          <Text className="text-grey-500 text-sm">
            © 2024 Cubicle. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}; 