// types.ts
export interface Option {
  text: string;
  correct: boolean;
 }
 
 export interface Question {
  question: string;
  options: Option[];
  explanation: string;
 }
 
 export interface Subtopic {
  [key: string]: Question[];
 }
 
 export interface Topic {
  subtopics: {
    [key: string]: Question[];
  };
  guide?: StudyGuide;
 }
 
 export interface Topics {
  [key: string]: Topic;
 }
 
 export interface User {
  username: string;
  password: string;
 }
 
 export interface SubtopicProgress {
  attempts: number;
  correct: number;
 }
 
 export interface TopicProgress {
  [subtopic: string]: SubtopicProgress;
 }
 
 export interface UserProgress {
  [topic: string]: TopicProgress | number;
  xp: number;
}
 
 export interface StudyGuide {
  content: string;
 }