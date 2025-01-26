'use client';

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ChevronRight, LogOut, CheckCircle, XCircle, Book, ArrowLeft, ChevronUp } from 'lucide-react';
import { topics } from './data/topics';
import { Topics, User as UserType, SubtopicProgress, TopicProgress, UserProgress } from './types';
import { StudyGuide } from '@/components/StudyGuide';
import Whiteboard from '@/components/Whiteboard';
import LevelProgress from '@/components/LevelProgress';
import RankUpModal from '@/components/RankUpModal';

const LEVELS = [
  { name: "Number Novice", minXP: 0 },
  { name: "Equation Explorer", minXP: 100 },
  { name: "Formula Fighter", minXP: 250 },
  { name: "Math Maverick", minXP: 500 },
  { name: "Algebra Ace", minXP: 1000 },
  { name: "Calculus Conqueror", minXP: 2000 },
  { name: "Theory Titan", minXP: 4000 },
  { name: "Math Master", minXP: 8000 }
];

const topicsWithType = topics as Topics;

const INITIAL_USERS: UserType[] = [
  { username: 'student1', password: 'pass123' },
  { username: 'student2', password: 'pass123' },
  { username: 'teacher', password: 'admin123' }
];

// Style constants
const buttonStyles = {
  primary: "transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg active:shadow-inner",
  secondary: "transition-all duration-200 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-semibold rounded-lg shadow-sm hover:shadow-md",
  danger: "transition-all duration-200 text-red-600 hover:text-red-700 font-semibold",
};

const inputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200";

export default function MathApp() {
  // User management state
  const [users, setUsers] = useState<UserType[]>(() => {
    if (typeof window !== 'undefined') {
      const savedUsers = localStorage.getItem('mathAppUsers');
      return savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS;
    }
    return INITIAL_USERS;
  });

  const [showRankUpModal, setShowRankUpModal] = useState(false);
  const [rankUpDetails, setRankUpDetails] = useState({ oldRank: '', newRank: '' });

  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  // Login state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Registration state
  const [showRegister, setShowRegister] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  // App state
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // User progress state
  const [userProgress, setUserProgress] = useState<{[username: string]: UserProgress}>(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('userProgress');
      return savedProgress ? JSON.parse(savedProgress) : {} as {[username: string]: UserProgress};
    }
    return {} as {[username: string]: UserProgress};
  });

  // Add this state for level up animation
  const [showLevelUp, setShowLevelUp] = useState(false);

  // Topic and Question Data Processing
  const typedTopics = topics as Topics;
  const currentTopicData = selectedTopic ? typedTopics[selectedTopic] : null;
  const currentSubtopicQuestions = currentTopicData?.subtopics[selectedSubtopic] || [];
  const currentQuestion = currentSubtopicQuestions[currentQuestionIndex];
  const [currentSetProgress, setCurrentSetProgress] = useState<{correct: number}>({ correct: 0 });
  const [currentAttempt, setCurrentAttempt] = useState({
    attempts: 0,
    correct: 0
  });

  const userTopicProgress: SubtopicProgress = 
    (currentUser && typeof userProgress[currentUser.username]?.[selectedTopic] === 'object' && 
    (userProgress[currentUser.username][selectedTopic] as TopicProgress)?.[selectedSubtopic]) || 
    { attempts: 0, correct: 0 };

  const accuracy = userTopicProgress.attempts > 0
    ? Math.round((userTopicProgress.correct / userTopicProgress.attempts) * 100)
    : 0;

  // Load data from localStorage after mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('mathAppUsers');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('mathAppUsers', JSON.stringify(users));
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [users, userProgress, currentUser]);

  useEffect(() => {
    if (selectedSubtopic) {
      setCurrentAttempt({ attempts: 0, correct: 0 });
    }
  }, [selectedSubtopic]);

   // Reset progress when changing subtopics
   useEffect(() => {
    setCurrentSetProgress({ correct: 0 });
  }, [selectedSubtopic])

  const updateProgress = (topic: string, subtopic: string, isCorrect: boolean) => {
    if (!currentUser) return;
    
    // Update current attempt tracking
    setCurrentAttempt(prev => ({
      attempts: prev.attempts + 1,
      correct: isCorrect ? prev.correct + 1 : prev.correct
    }));
  };

  const handleNextQuestion = () => {
    if (!currentUser) return;
  
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedChoice(null);
      setShowAnswer(false);
    } else {
      setUserProgress(prev => {
        const newProgress = { ...prev };
        if (!newProgress[currentUser.username]) {
          newProgress[currentUser.username] = { xp: 0 } as UserProgress;
        }
        if (!newProgress[currentUser.username][selectedTopic] || typeof newProgress[currentUser.username][selectedTopic] === 'number') {
          newProgress[currentUser.username][selectedTopic] = {} as TopicProgress;
        }
  
        // Store completed set
        const topicProgress = newProgress[currentUser.username][selectedTopic] as TopicProgress;
        topicProgress[selectedSubtopic] = currentAttempt;
  
        // Award XP based on performance
        const xpGain = currentAttempt.correct === 5 ? 100 : currentAttempt.correct * 10;
        newProgress[currentUser.username].xp = (newProgress[currentUser.username].xp || 0) + xpGain;
  
        // Check level up
        const prevLevel = Math.floor((newProgress[currentUser.username].xp - xpGain) / 100);
        const newLevel = Math.floor(newProgress[currentUser.username].xp / 100);
        
        if (newLevel > prevLevel && currentQuestionIndex === 4) {
          setRankUpDetails({
            oldRank: LEVELS[prevLevel].name,
            newRank: LEVELS[newLevel].name
          });
          setShowRankUpModal(true);
        }
      
        return newProgress;
      });
  
      setCurrentAttempt({ attempts: 0, correct: 0 });
      setSelectedSubtopic('');
      setCurrentQuestionIndex(0);
      setSelectedChoice(null);
      setShowAnswer(false);
    }
};

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (users.some(user => user.username === registerUsername)) {
      setRegisterError('Username already exists');
      return;
    }
    const newUsers = [...users, { username: registerUsername, password: registerPassword }];
    setUsers(newUsers);
    setRegisterUsername('');
    setRegisterPassword('');
    setShowRegister(false);
    setLoginError('Registration successful! Please login.');
  };

  const handleBackToSubtopics = () => {
    setSelectedSubtopic('');
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setShowAnswer(false);
    setCurrentAttempt({ attempts: 0, correct: 0 });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find(u => 
      u.username === loginUsername && u.password === loginPassword
    );
    
    if (user) {
      setCurrentUser(user);
      setLoginError('');
      if (!userProgress[user.username]) {
        setUserProgress(prev => ({
          ...prev,
          [user.username]: { xp: 0 } as UserProgress 
        }));
      }
      setLoginUsername('');
      setLoginPassword('');
    } else {
      setLoginError('Invalid username or password');
    }
   };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedTopic('');
    setSelectedSubtopic('');
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setShowAnswer(false);
  };

  // Login screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mb-6">
              <Book className="h-12 w-12 text-blue-600 mx-auto" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Math Study App</h2>
            <p className="text-gray-600">
              {showRegister ? 'Create your account' : 'Welcome back'}
            </p>
          </div>

          {showRegister ? (
            // Registration Form
            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-200">
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Username</label>
                    <input
                      type="text"
                      required
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                      placeholder="Choose a username"
                      className={inputStyles}
                      minLength={3}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                    <input
                      type="password"
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="Create a password"
                      className={inputStyles}
                      minLength={6}
                    />
                  </div>
                </div>

                {registerError && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                    <XCircle className="h-5 w-5 mr-2" />
                    {registerError}
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    type="submit"
                    className={`${buttonStyles.primary} w-full py-3`}
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowRegister(false);
                      setRegisterError('');
                    }}
                    className={`${buttonStyles.secondary} w-full py-3`}
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Login Form
            <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-200">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Username</label>
                    <input
                      type="text"
                      required
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      placeholder="Enter your username"
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your password"
                      className={inputStyles}
                    />
                  </div>
                </div>

                {loginError && (
                  <div className={`flex items-center p-3 rounded-lg ${
                    loginError.includes('successful') 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-red-50 text-red-600'
                  }`}>
                    {loginError.includes('successful') 
                      ? <CheckCircle className="h-5 w-5 mr-2" />
                      : <XCircle className="h-5 w-5 mr-2" />
                    }
                    {loginError}
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    type="submit"
                    className={`${buttonStyles.primary} w-full py-3`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowRegister(true);
                      setLoginError('');
                    }}
                    className={`${buttonStyles.secondary} w-full py-3`}
                  >
                    Create New Account
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Topic selection screen
  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Math Study App</h1>
                <p className="text-lg text-gray-600">Welcome back, {currentUser.username}!</p>
              </div>
              <button
                onClick={handleLogout}
                className={`${buttonStyles.danger} flex items-center px-4 py-2`}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>
  
            <div className="grid gap-4">
              {Object.keys(topics).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className="w-full p-6 text-left bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-gray-900">{topic}</span>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <LevelProgress 
            xp={userProgress[currentUser.username]?.xp || 0}
            showLevelUp={showLevelUp}
            oldRank={rankUpDetails?.oldRank}
            newRank={rankUpDetails?.newRank}
            onClose={() => setShowLevelUp(false)}
          />
  
          {/* Progress Overview section continues here... */}

          {/* Progress Overview */}
          {Object.keys(userProgress[currentUser.username] || {}).length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h3>
              <div className="grid gap-6">
                {Object.entries(userProgress[currentUser.username] || {}).map(([topic, subtopics]) => (
                  <div key={topic} className="border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{topic}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(subtopics).map(([subtopic, stats]) => {
                        const percentage = Math.round((stats.correct/stats.attempts || 0) * 100);
                        return (
                          <div key={subtopic} className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">{subtopic}</p>
                            <div className="relative pt-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-xs font-semibold inline-block text-blue-600">
                                    {percentage}%
                                  </span>
                                </div>
                                <div className="text-xs font-semibold inline-block text-gray-600">
                                  {stats.correct}/{stats.attempts} correct
                                </div>
                              </div>
                              <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-gray-200">
                                <div 
                                  style={{ width: `${percentage}%` }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

// Subtopic selection screen
if (!selectedSubtopic) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setSelectedTopic('')}
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Topics
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedTopic}</h2>
          </div>
          
          <div className="grid gap-4">
          {selectedTopic && topicsWithType[selectedTopic] && Object.keys(topicsWithType[selectedTopic].subtopics).map((subtopic) => {
            const progress = (currentUser && 
            typeof userProgress[currentUser.username]?.[selectedTopic] === 'object' && 
            (userProgress[currentUser.username][selectedTopic] as TopicProgress)?.[subtopic]) || 
            { attempts: 0, correct: 0 } as SubtopicProgress;
                      
            const percentage = progress.attempts > 0 ? 
            Math.round((progress.correct/progress.attempts) * 100) : 0;
              
              return (
                <button
                  key={subtopic}
                  onClick={() => {
                    setSelectedSubtopic(subtopic);
                    setCurrentQuestionIndex(0);
                    setSelectedChoice(null);
                    setShowAnswer(false);
                  }}
                  className="w-full p-6 text-left bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-gray-900">{subtopic}</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">
                        {progress.attempts > 0 ? 
                          `${progress.correct}/${progress.attempts} correct` : 
                          'Not started'
                        }
                      </div>
                      {progress.attempts > 0 && (
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8">
          <StudyGuide topicName={selectedTopic} />
        </div>
      </div>
    </div>
  );
}

// Question interface


return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
   <div className="max-w-[1400px] mx-auto flex gap-6">
     <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
       <div className="flex justify-between items-center mb-8">
         <button
           onClick={handleBackToSubtopics}
           className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
         >
           <ArrowLeft className="h-5 w-5 mr-2" />
           Back to Subtopics
         </button>
         <div className="text-right">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedSubtopic}</h2>
           <div className="flex items-center justify-end">
             <span className="text-sm text-gray-600 mr-2">
               Current Score: {currentAttempt.correct}/{currentAttempt.attempts}
               {userTopicProgress.attempts > 0 && (
                 <span className="ml-2 text-gray-500">
                   (Previous: {userTopicProgress.correct}/{userTopicProgress.attempts})
                 </span>
               )}
             </span>
             <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-blue-500 rounded-full"
                 style={{ width: `${currentAttempt.attempts > 0 ? (currentAttempt.correct / currentAttempt.attempts) * 100 : 0}%` }}
               />
             </div>
           </div>
         </div>
       </div>

       <div className="mb-8">
         <div className="flex items-center justify-between mb-4">
           <h3 className="text-lg font-semibold text-gray-900">
             Question {currentQuestionIndex + 1} of 5
           </h3>
           <div className="flex gap-1">
             {[...Array(5)].map((_, index) => (
               <div 
                 key={index}
                 className={`w-8 h-1 rounded ${
                   index <= currentQuestionIndex ? 'bg-blue-500' : 'bg-gray-200'
                 }`}
               />
             ))}
           </div>
         </div>
         <p className="text-lg text-gray-800">{currentQuestion.question}</p>
       </div>

       <div className="space-y-3 mb-8">
         {currentQuestion.options.map((option, index) => (
           <button
             key={index}
             onClick={() => !showAnswer && setSelectedChoice(index)}
             disabled={showAnswer}
             className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200
               ${showAnswer
                 ? option.correct
                   ? 'bg-green-50 border-green-500 text-green-700'
                   : selectedChoice === index
                   ? 'bg-red-50 border-red-500 text-red-700'
                   : 'bg-white border-gray-200 text-gray-500'
                 : selectedChoice === index
                 ? 'bg-blue-50 border-blue-500 text-blue-700'
                 : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50'
               }
               ${showAnswer ? 'cursor-default' : 'cursor-pointer'}
             `}
           >
             <div className="flex items-center">
               <span className="text-lg">{option.text}</span>
               {showAnswer && option.correct && (
                 <CheckCircle className="h-5 w-5 ml-2 text-green-500" />
               )}
               {showAnswer && !option.correct && selectedChoice === index && (
                 <XCircle className="h-5 w-5 ml-2 text-red-500" />
               )}
             </div>
           </button>
         ))}
       </div>

       <div className="flex justify-between items-center">
         <button
           onClick={() => {
             if (!showAnswer && selectedChoice !== null) {
               const isCorrect = currentQuestion.options[selectedChoice].correct;
               updateProgress(selectedTopic, selectedSubtopic, isCorrect);
               setShowAnswer(true);
             }
           }}
           className={`${buttonStyles.primary} px-8 py-3 ${
             showAnswer || selectedChoice === null ? 'opacity-50 cursor-not-allowed' : ''
           }`}
           disabled={showAnswer || selectedChoice === null}
         >
           Submit Answer
         </button>
         {showAnswer && (
           <button
             onClick={handleNextQuestion}
             className={`${buttonStyles.primary} px-8 py-3`}
           >
             Next Question
           </button>
         )}
       </div>

       {showAnswer && (
         <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
           <h4 className="text-lg font-semibold text-gray-900 mb-2">Explanation:</h4>
           <p className="text-gray-800">{currentQuestion.explanation}</p>
         </div>
       )}
     </div>

     <div className="w-1/2">
       <Whiteboard />
     </div>
   </div>
   <RankUpModal
     isOpen={showRankUpModal}
     onClose={() => setShowRankUpModal(false)}
     oldRank={rankUpDetails.oldRank}
     newRank={rankUpDetails.newRank}
     />
 </div>
);
}