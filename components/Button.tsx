import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 active:bg-primary-600';
      case 'secondary':
        return 'bg-silver-500 active:bg-silver-600';
      case 'outline':
        return 'bg-transparent border-2 border-primary-500';
      default:
        return 'bg-primary-500 active:bg-primary-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2';
      case 'md':
        return 'px-6 py-3';
      case 'lg':
        return 'px-8 py-4';
      default:
        return 'px-6 py-3';
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case 'outline':
        return 'text-primary-500 font-semibold';
      default:
        return 'text-white font-semibold';
    }
  };

  return (
    <TouchableOpacity
      className={`rounded-lg ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      activeOpacity={0.8}
      {...props}
    >
      <Text className={`text-center text-base ${getTextClasses()}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}; 