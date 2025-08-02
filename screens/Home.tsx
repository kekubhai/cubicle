import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface HomeScreenProps {
  navigation?: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const userName = "Alex"; // In a real app, this would come from Clerk

  const handleResumeAnalysis = () => {
    navigation?.navigate('Resume');
  };

  const handleMockInterview = () => {
    navigation?.navigate('Interview');
  };

  return (
    <View className="flex-1 bg-grey-50">
      <Header 
        title="Cubicle" 
        showProfile={true}
        userName={userName}
        onProfile={() => navigation?.navigate('Profile')}
      />
      
      <ScrollView className="flex-1 px-6 pt-6">
        {/* Welcome Section */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-grey-900 mb-2">
            Welcome back, {userName}! 👋
          </Text>
          <Text className="text-grey-600 text-lg">
            Ready to boost your career? Let's get started.
          </Text>
        </View>

        {/* Action Cards */}
        <View className="space-y-6">
          {/* Resume Analysis Card */}
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 bg-primary-500 rounded-lg items-center justify-center mr-4">
                <Ionicons name="document-text" size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-grey-900">
                  Analyze Resume
                </Text>
                <Text className="text-grey-600">
                  Get AI-powered feedback and job matches
                </Text>
              </View>
            </View>
            
            <Text className="text-grey-700 mb-4">
              Upload your resume or paste the text to receive:
              • Resume score (0-100)
              • 3 improvement suggestions
              • Top 5 matching job roles
            </Text>
            
            <Button
              title="Start Analysis"
              onPress={handleResumeAnalysis}
              className="w-full"
            />
          </Card>

          {/* Mock Interview Card */}
          <Card className="bg-gradient-to-br from-silver-50 to-silver-100 border-silver-200">
            <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 bg-silver-500 rounded-lg items-center justify-center mr-4">
                <Ionicons name="mic" size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-grey-900">
                  Mock Interview
                </Text>
                <Text className="text-grey-600">
                  Practice with AI-powered questions
                </Text>
              </View>
            </View>
            
            <Text className="text-grey-700 mb-4">
              Practice your interview skills with:
              • Role-specific questions
              • Voice recording & analysis
              • Real-time feedback
            </Text>
            
            <Button
              title="Start Interview"
              variant="secondary"
              onPress={handleMockInterview}
              className="w-full"
            />
          </Card>
        </View>

        {/* Quick Stats */}
        <View className="mt-8">
          <Text className="text-lg font-semibold text-grey-900 mb-4">
            Your Progress
          </Text>
          <View className="flex-row space-x-4">
            <Card className="flex-1 items-center py-4">
              <Text className="text-2xl font-bold text-primary-500">0</Text>
              <Text className="text-grey-600 text-sm">Resumes Analyzed</Text>
            </Card>
            <Card className="flex-1 items-center py-4">
              <Text className="text-2xl font-bold text-primary-500">0</Text>
              <Text className="text-grey-600 text-sm">Interviews Completed</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}; 