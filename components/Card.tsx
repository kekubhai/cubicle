import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <View 
      className={`bg-white rounded-xl shadow-card border border-grey-200 p-4 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}; 