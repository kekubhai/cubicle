import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

interface LoaderProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ 
  message = 'Loading...', 
  size = 'large',
  color = '#10B981'
}) => {
  return (
    <View className="flex-1 items-center justify-center bg-grey-50">
      <ActivityIndicator size={size} color={color} />
      <Text className="text-grey-600 mt-4 text-base font-medium">
        {message}
      </Text>
    </View>
  );
}; 