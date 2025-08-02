import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { MicButton } from '../components/MicButton';
import { Ionicons } from '@expo/vector-icons';
import { getInterviewQuestion, analyzeInterviewAnswer, InterviewFeedback } from '../utils/ai';

interface MockInterviewScreenProps {
  navigation?: any;
}

const JOB_ROLES = [
  "Software Engineer",
  "Product Manager", 
  "Data Analyst",
  "UX Designer",
  "DevOps Engineer",
  "Marketing Manager",
  "Sales Representative"
];

export const MockInterviewScreen: React.FC<MockInterviewScreenProps> = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const handleStartInterview = async () => {
    if (!selectedRole) {
      Alert.alert('Error', 'Please select a job role');
      return;
    }

    setLoading(true);
    try {
      const question = await getInterviewQuestion(selectedRole);
      setCurrentQuestion(question);
      setInterviewStarted(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to start interview. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRecordAnswer = () => {
    if (isRecording) {
      // Stop recording and analyze
      setIsRecording(false);
      analyzeAnswer();
    } else {
      // Start recording
      setIsRecording(true);
    }
  };

  const analyzeAnswer = async () => {
    setLoading(true);
    try {
      // Mock answer - in real app, this would be the recorded audio
      const mockAnswer = "I have experience with REST APIs and have worked on several projects using Node.js and Express. I've also used GraphQL in a recent project where we needed more flexible data fetching.";
      
      const result = await analyzeInterviewAnswer(currentQuestion, mockAnswer, selectedRole);
      setFeedback(result);
    } catch (error) {
      Alert.alert('Error', 'Failed to analyze answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetInterview = () => {
    setCurrentQuestion('');
    setFeedback(null);
    setInterviewStarted(false);
  };

  const getFeedbackColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return <Loader message={isRecording ? "Recording..." : "Processing..."} />;
  }

  return (
    <View className="flex-1 bg-grey-50">
      <Header 
        title="Mock Interview" 
        showBack={true}
        onBack={() => navigation?.goBack()}
      />
      
      <ScrollView className="flex-1 px-6 pt-6">
        {!interviewStarted ? (
          /* Job Role Selection */
          <Card>
            <Text className="text-xl font-bold text-grey-900 mb-4">
              Select Job Role
            </Text>
            <Text className="text-grey-600 mb-6">
              Choose the role you're interviewing for to get relevant questions.
            </Text>
            
            <View className="space-y-3">
              {JOB_ROLES.map((role) => (
                <TouchableOpacity
                  key={role}
                  onPress={() => setSelectedRole(role)}
                  className={`p-4 rounded-lg border-2 ${
                    selectedRole === role 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-grey-200 bg-white'
                  }`}
                >
                  <Text className={`font-medium ${
                    selectedRole === role ? 'text-primary-700' : 'text-grey-700'
                  }`}>
                    {role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <Button
              title="Start Interview"
              onPress={handleStartInterview}
              disabled={!selectedRole}
              className="w-full mt-6"
            />
          </Card>
        ) : (
          /* Interview Session */
          <View className="space-y-6">
            {/* Question Card */}
            <Card className="bg-gradient-to-br from-silver-50 to-silver-100 border-silver-200">
              <View className="flex-row items-start mb-4">
                <View className="w-8 h-8 bg-silver-500 rounded-full items-center justify-center mr-3 mt-1">
                  <Ionicons name="chatbubble" size={16} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-grey-700 font-medium mb-2">Question:</Text>
                  <Text className="text-lg text-grey-900 leading-6">
                    {currentQuestion}
                  </Text>
                </View>
              </View>
            </Card>

            {/* Recording Section */}
            {!feedback && (
              <Card>
                <Text className="text-xl font-bold text-grey-900 mb-4 text-center">
                  Your Answer
                </Text>
                <View className="items-center space-y-4">
                  <Text className="text-grey-600 text-center">
                    Tap the microphone to start recording your answer
                  </Text>
                  <MicButton
                    onPress={handleRecordAnswer}
                    isRecording={isRecording}
                  />
                  {isRecording && (
                    <Text className="text-red-500 font-medium">
                      Recording... Tap again to stop
                    </Text>
                  )}
                </View>
              </Card>
            )}

            {/* Feedback Section */}
            {feedback && (
              <View className="space-y-6">
                <Card>
                  <Text className="text-xl font-bold text-grey-900 mb-4">
                    AI Feedback
                  </Text>
                  
                  <View className="space-y-4">
                    {/* Clarity Score */}
                    <View>
                      <View className="flex-row justify-between items-center mb-2">
                        <Text className="text-grey-700 font-medium">Clarity</Text>
                        <Text className={`font-bold ${getFeedbackColor(feedback.clarity)}`}>
                          {feedback.clarity}/100
                        </Text>
                      </View>
                      <View className="w-full bg-grey-200 rounded-full h-2">
                        <View 
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${feedback.clarity}%` }}
                        />
                      </View>
                    </View>

                    {/* Confidence Score */}
                    <View>
                      <View className="flex-row justify-between items-center mb-2">
                        <Text className="text-grey-700 font-medium">Confidence</Text>
                        <Text className={`font-bold ${getFeedbackColor(feedback.confidence)}`}>
                          {feedback.confidence}/100
                        </Text>
                      </View>
                      <View className="w-full bg-grey-200 rounded-full h-2">
                        <View 
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${feedback.confidence}%` }}
                        />
                      </View>
                    </View>
                  </View>
                </Card>

                {/* Suggestions Card */}
                <Card>
                  <Text className="text-xl font-bold text-grey-900 mb-4">
                    Suggestions for Improvement
                  </Text>
                  <View className="space-y-3">
                    {feedback.suggestions.map((suggestion, index) => (
                      <View key={index} className="flex-row items-start">
                        <View className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                        <Text className="text-grey-700 flex-1">
                          {suggestion}
                        </Text>
                      </View>
                    ))}
                  </View>
                </Card>

                {/* Action Buttons */}
                <View className="space-y-3">
                  <Button
                    title="Next Question"
                    onPress={resetInterview}
                    className="w-full"
                  />
                  <Button
                    title="Start New Interview"
                    variant="outline"
                    onPress={() => {
                      setSelectedRole('');
                      resetInterview();
                    }}
                    className="w-full"
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}; 