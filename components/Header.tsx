import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  showProfile?: boolean;
  onProfile?: () => void;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBack = false, 
  onBack,
  showProfile = false,
  onProfile,
  userName
}) => {
  return (
    <View className="flex-row items-center justify-between bg-white px-4 py-3 border-b border-grey-200">
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={onBack} className="mr-3">
            <Ionicons name="arrow-back" size={24} color="#10B981" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-grey-900 flex-1">
          {title}
        </Text>
      </View>
      
      {showProfile && (
        <TouchableOpacity onPress={onProfile} className="flex-row items-center">
          <View className="w-8 h-8 bg-primary-500 rounded-full items-center justify-center mr-2">
            <Text className="text-white font-semibold text-sm">
              {userName?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <Text className="text-grey-700 font-medium">
            {userName || 'User'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}; 