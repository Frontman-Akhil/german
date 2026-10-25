// ============================================================
// MAIN APPLICATION ROUTER
// ============================================================

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from './store/useAppStore';
import { AppLayout } from './components/layout/AppLayout';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { DailyLesson, LessonPlayer } from './pages/DailyLesson';
import { Vocabulary } from './pages/Vocabulary';
import { AITutor } from './pages/AITutor';
import { SpeakingStudio } from './pages/SpeakingStudio';
import { GrammarLab } from './pages/GrammarLab';
import { ExamPrep } from './pages/ExamPrep';
import {
  LearningPath,
  ListeningLab,
  ReadingPractice,
  WritingCoach,
  RevisionCentre,
  Analytics,
  Settings,
} from './pages/OtherPages';
import { Spinner } from './components/shared';

function AppGate() {
  const { profile, isInitialized, initialize } = useAppStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!isInitialized) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-slate-950">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-gradient-brand flex items-center justify-center mx-auto shadow-brand-lg">
            <span className="text-white text-2xl font-bold">D</span>
          </div>
          <Spinner size="lg" />
          <p className="text-slate-400 text-sm">Loading DeutschMeister...</p>
        </div>
      </div>
    );
  }

  if (!profile.onboardingCompleted) {
    return <Onboarding />;
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/daily-lesson" element={<DailyLesson />} />
        <Route path="/daily-lesson/:lessonId" element={<LessonPlayer />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/grammar" element={<GrammarLab />} />
        <Route path="/speaking" element={<SpeakingStudio />} />
        <Route path="/listening" element={<ListeningLab />} />
        <Route path="/reading" element={<ReadingPractice />} />
        <Route path="/writing" element={<WritingCoach />} />
        <Route path="/exam" element={<ExamPrep />} />
        <Route path="/tutor" element={<AITutor />} />
        <Route path="/revision" element={<RevisionCentre />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AppGate />
    </BrowserRouter>
  );
}
