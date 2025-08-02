import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Ionicons } from '@expo/vector-icons';
import { analyzeResume, ResumeAnalysis } from '../utils/ai';

interface ResumeAnalyzerScreenProps {
  navigation?: any;
}

export const ResumeAnalyzerScreen: React.FC<ResumeAnalyzerScreenProps> = ({ navigation }) => {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      Alert.alert('Error', 'Please enter your resume text or upload a file');
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeResume(resumeText);
      setAnalysis(result);
    } catch (error) {
      Alert.alert('Error', 'Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = () => {
    // TODO: Implement file upload with expo-document-picker
    Alert.alert('Coming Soon', 'File upload feature will be available soon!');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return 'Excellent!';
    if (score >= 60) return 'Good, but room for improvement';
    return 'Needs significant improvement';
  };

  if (loading) {
    return <Loader message="Analyzing your resume..." />;
  }

  return (
    <View className="flex-1 bg-grey-50">
      <Header 
        title="Resume Analyzer" 
        showBack={true}
        onBack={() => navigation?.goBack()}
      />
      
      <ScrollView className="flex-1 px-6 pt-6">
        {/* Input Section */}
        <Card className="mb-6">
          <Text className="text-xl font-bold text-grey-900 mb-4">
            Upload or Paste Resume
          </Text>
          
          <View className="space-y-4">
            <Button
              title="Upload PDF"
              variant="outline"
              onPress={handleUpload}
              className="w-full"
            />
            
            <View>
              <Text className="text-grey-700 font-medium mb-2">Or paste your resume text:</Text>
              <TextInput
                className="border border-grey-300 rounded-lg px-4 py-3 text-grey-900 bg-white min-h-[120]"
                placeholder="Paste your resume content here..."
                value={resumeText}
                onChangeText={setResumeText}
                multiline
                textAlignVertical="top"
              />
            </View>
            
            <Button
              title="Analyze with AI"
              onPress={handleAnalyze}
              disabled={!resumeText.trim()}
              className="w-full"
            />
          </View>
        </Card>

        {/* Results Section */}
        {analysis && (
          <View className="space-y-6">
            {/* Score Card */}
            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <View className="items-center">
                <Text className="text-4xl font-bold text-primary-500 mb-2">
                  {analysis.score}/100
                </Text>
                <Text className={`text-lg font-semibold ${getScoreColor(analysis.score)} mb-2`}>
                  {getScoreMessage(analysis.score)}
                </Text>
                <View className="w-full bg-grey-200 rounded-full h-2">
                  <View 
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: `${analysis.score}%` }}
                  />
                </View>
              </View>
            </Card>

            {/* Improvements Card */}
            <Card>
              <Text className="text-xl font-bold text-grey-900 mb-4">
                Suggested Improvements
              </Text>
              <View className="space-y-3">
                {analysis.improvements.map((improvement, index) => (
                  <View key={index} className="flex-row items-start">
                    <View className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                    <Text className="text-grey-700 flex-1">
                      {improvement}
                    </Text>
                  </View>
                ))}
              </View>
            </Card>

            {/* Job Roles Card */}
            <Card>
              <Text className="text-xl font-bold text-grey-900 mb-4">
                Matching Job Roles
              </Text>
              <View className="space-y-2">
                {analysis.jobRoles.map((role, index) => (
                  <View key={index} className="flex-row items-center justify-between bg-grey-50 rounded-lg px-3 py-2">
                    <Text className="text-grey-700 font-medium">{role}</Text>
                    <Ionicons name="chevron-forward" size={16} color="#6B7280" />
                  </View>
                ))}
              </View>
            </Card>

            {/* Re-analyze Button */}
            <Button
              title="Analyze Again"
              variant="outline"
              onPress={() => setAnalysis(null)}
              className="w-full"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}; 