// AI utility functions for Cubicle app
// Note: Replace with actual API key and endpoint

export interface ResumeAnalysis {
  score: number;
  improvements: string[];
  jobRoles: string[];
}

export interface InterviewFeedback {
  clarity: number;
  confidence: number;
  suggestions: string[];
}

// Mock AI responses for development (replace with actual API calls)
export const analyzeResume = async (resumeText: string): Promise<ResumeAnalysis> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock response - replace with actual OpenAI/Gemini API call
  return {
    score: Math.floor(Math.random() * 30) + 70, // 70-100
    improvements: [
      "Add quantifiable achievements to your experience section",
      "Include more specific technical skills and certifications",
      "Optimize your resume summary to be more compelling"
    ],
    jobRoles: [
      "Software Engineer",
      "Product Manager", 
      "Data Analyst",
      "UX Designer",
      "DevOps Engineer"
    ]
  };
};

export const getInterviewQuestion = async (jobRole: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const questions = {
    "Software Engineer": [
      "Can you explain the difference between REST and GraphQL APIs?",
      "How would you optimize a slow database query?",
      "Describe your experience with microservices architecture."
    ],
    "Product Manager": [
      "How do you prioritize features in a product roadmap?",
      "Describe a time when you had to make a difficult product decision.",
      "How do you measure the success of a product feature?"
    ],
    "Data Analyst": [
      "What tools do you use for data visualization?",
      "How do you handle missing data in your analysis?",
      "Describe your experience with SQL and data modeling."
    ]
  };
  
  const roleQuestions = questions[jobRole as keyof typeof questions] || questions["Software Engineer"];
  return roleQuestions[Math.floor(Math.random() * roleQuestions.length)];
};

export const analyzeInterviewAnswer = async (
  question: string, 
  answer: string, 
  jobRole: string
): Promise<InterviewFeedback> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock response - replace with actual OpenAI/Gemini API call
  return {
    clarity: Math.floor(Math.random() * 30) + 70, // 70-100
    confidence: Math.floor(Math.random() * 30) + 70, // 70-100
    suggestions: [
      "Provide more specific examples from your experience",
      "Structure your answer using the STAR method",
      "Include quantifiable results when possible"
    ]
  };
};

// Real API integration (uncomment and configure)
/*
const OPENAI_API_KEY = 'your-api-key';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const analyzeResumeWithOpenAI = async (resumeText: string): Promise<ResumeAnalysis> => {
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a career coach. Analyze the resume and return a JSON with: score (0-100), improvements (array of 3 strings), jobRoles (array of 5 strings).'
        },
        {
          role: 'user',
          content: resumeText
        }
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
};
*/ 