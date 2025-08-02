import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MicButtonProps {
  onPress: () => void;
  isRecording?: boolean;
  disabled?: boolean;
  className?: string;
}

export const MicButton: React.FC<MicButtonProps> = ({ 
  onPress, 
  isRecording = false, 
  disabled = false,
  className = ''
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-16 h-16 rounded-full items-center justify-center ${
        isRecording 
          ? 'bg-red-500' 
          : disabled 
            ? 'bg-grey-300' 
            : 'bg-primary-500'
      } ${className}`}
      activeOpacity={0.8}
    >
      <Ionicons 
        name={isRecording ? "stop" : "mic"} 
        size={24} 
        color="white" 
      />
    </TouchableOpacity>
  );
}; 