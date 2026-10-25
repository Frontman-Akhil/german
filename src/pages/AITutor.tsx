// ============================================================
// AI TUTOR PAGE — Rule-based conversational tutor
// ============================================================

import React, { useState, useRef, useEffect, useCallback } from 'react';

import { clsx } from 'clsx';
import {
  Send, Bot, User, Trash2, BookOpen, RefreshCw,
  MessageSquare, Briefcase, HelpCircle, Languages, Zap,
  ChevronDown, GraduationCap,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import type { TutorMessage as TutorMessageType, TutorMode } from '../types';
import { AudioButton, LevelBadge } from '../components/shared';
import { GRAMMAR_TOPICS_QUICK } from '../lib/tutor';

const TUTOR_MODES: { id: TutorMode; icon: React.ReactNode; label: string; desc: string; placeholder: string }[] = [
  {
    id: 'explain',
    icon: <BookOpen className="h-4 w-4" />,
    label: 'Explain Concept',
    desc: 'Explain a grammar rule or vocabulary topic',
    placeholder: 'e.g. Explain der/die/das articles...',
  },
  {
    id: 'correct',
    icon: <RefreshCw className="h-4 w-4" />,
    label: 'Correct My Sentence',
    desc: 'Check and correct your German writing',
    placeholder: 'e.g. Ich bin 25 Jahre haben...',
  },
  {
    id: 'conversation',
    icon: <MessageSquare className="h-4 w-4" />,
    label: 'Practice Conversation',
    desc: 'Have a German conversation with the tutor',
    placeholder: 'e.g. Hallo! Wie geht es Ihnen?',
  },
  {
    id: 'translate',
    icon: <Languages className="h-4 w-4" />,
    label: 'Translate & Explain',
    desc: 'Translate German and learn the usage',
    placeholder: 'e.g. Entschuldigung',
  },
  {
    id: 'quiz',
    icon: <Zap className="h-4 w-4" />,
    label: 'Quiz Me',
    desc: 'Test your knowledge with a question',
    placeholder: 'Type anything to get a quiz question...',
  },
  {
    id: 'ausbildung-interview',
    icon: <Briefcase className="h-4 w-4" />,
    label: 'Ausbildung Interview',
    desc: 'Practice for your German job interview',
    placeholder: 'Start the Ausbildung interview practice...',
  },
  {
    id: 'oral-exam',
    icon: <GraduationCap className="h-4 w-4" />,
    label: 'Oral Exam Practice',
    desc: 'Simulate a speaking exam question',
    placeholder: 'Ready for an oral exam question?',
  },
  {
    id: 'why-wrong',
    icon: <HelpCircle className="h-4 w-4" />,
    label: 'Why Is This Wrong?',
    desc: 'Understand why your answer is incorrect',
    placeholder: 'e.g. Ich habe 25 Jahre...',
  },
];

const QUICK_QUESTIONS = [
  'Explain der/die/das articles',
  'How to conjugate verbs?',
  'What is word order in German?',
  'Correct: Ich bin 25 Jahre haben.',
  'How to say "I would like" politely?',
  'Difference between nicht and kein?',
  'Explain Perfekt tense',
  'What is Konjunktiv II?',
];

function TutorMessage({ msg }: { msg: TutorMessageType }) {
  const isUser = msg.role === 'user';
  const safeContent = msg.content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return (
    <div className={clsx('flex gap-3 animate-slide-up', isUser && 'flex-row-reverse')}>
      {/* Avatar */}
      <div className={clsx(
        'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1',
        isUser
          ? 'bg-brand-600 text-white text-xs font-bold'
          : 'bg-gradient-brand text-white',
      )}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Bubble */}
      <div className={clsx('max-w-[85%]', isUser && 'items-end flex flex-col')}>
        {isUser ? (
          <div className="chat-bubble-user">{msg.content}</div>
        ) : (
          <div className="chat-bubble-tutor">
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-slate-800 dark:text-slate-100"
              dangerouslySetInnerHTML={{
                __html: safeContent
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\n\n/g, '<br/><br/>')
                  .replace(/\n/g, '<br/>'),
              }}
            />
            {/* Audio for German text */}
            {msg.content.includes('**') && (
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center gap-2">
                <AudioButton
                  text={msg.content.replace(/\*\*?(.*?)\*\*?/g, '$1').slice(0, 200)}
                  label="Listen to response"
                  size="sm"
                />
                <span className="text-xs text-slate-400">Listen</span>
              </div>
            )}
          </div>
        )}
        <p className="text-[10px] text-slate-400 mt-1 px-1">
          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}

export function AITutor() {
  const { tutorMessages, tutorMode, sendTutorMessage, setTutorMode, clearTutorHistory, profile, progress } = useAppStore();
  const [input, setInput] = useState('');
  const [showModes, setShowModes] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lang = profile.explanationLanguage;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [tutorMessages]);

  const currentMode = TUTOR_MODES.find(m => m.id === tutorMode) ?? TUTOR_MODES[0];

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    sendTutorMessage(input.trim(), tutorMode);
    setInput('');
    inputRef.current?.focus();
  }, [input, tutorMode, sendTutorMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (q: string) => {
    sendTutorMessage(q, 'explain');
  };

  const handleGrammarTopic = (topic: string) => {
    sendTutorMessage(`Explain ${topic}`, 'explain');
    setShowModes(false);
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-8rem)] lg:h-[calc(100dvh-3rem)] max-w-3xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-brand flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 dark:text-white text-sm">AI German Tutor</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                <span className="text-[10px] text-slate-400">Rule-based tutor • No API key needed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LevelBadge level={progress.currentLevel} size="xs" />
          <button onClick={clearTutorHistory} className="btn-ghost btn-icon" title="Clear history">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="mb-3 relative">
        <button
          onClick={() => setShowModes(s => !s)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
        >
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400">
            {currentMode.icon}
            <span className="font-medium">{currentMode.label}</span>
          </div>
          <ChevronDown className={clsx('h-4 w-4 text-slate-400 transition-transform', showModes && 'rotate-180')} />
        </button>

        {showModes && (
          <div className="absolute top-full left-0 right-0 mt-1 z-20 card shadow-xl overflow-hidden">
            {TUTOR_MODES.map(mode => (
              <button
                key={mode.id}
                onClick={() => { setTutorMode(mode.id); setShowModes(false); }}
                className={clsx(
                  'w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left',
                  tutorMode === mode.id && 'bg-brand-50 dark:bg-brand-950/30',
                )}
              >
                <span className={clsx('flex-shrink-0', tutorMode === mode.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400')}>
                  {mode.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">{mode.label}</p>
                  <p className="text-xs text-slate-500">{mode.desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
        {tutorMessages.length === 0 && (
          <div className="space-y-4">
            {/* Welcome */}
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-brand flex items-center justify-center mx-auto mb-4 shadow-brand-lg">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-bold text-slate-800 dark:text-white mb-1">Your German Tutor</h2>
              <p className="text-slate-500 text-sm max-w-sm mx-auto">
                {lang !== 'English'
                  ? 'Main tumhara personal German tutor hoon! Grammar, vocabulary, pronunciation — sab poochh sakte ho. Bilkul free!'
                  : 'I am your personal German tutor! Ask me anything about grammar, vocabulary, or pronunciation. 100% free, no API key needed.'}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="chip-neutral text-xs">Rule-based AI</span>
                <span className="chip-success text-xs">No API key</span>
                <span className="chip-brand text-xs">Works offline</span>
              </div>
            </div>

            {/* Quick questions */}
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">💬 Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Grammar Topics */}
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">📐 Grammar Topics:</p>
              <div className="flex flex-wrap gap-2">
                {GRAMMAR_TOPICS_QUICK.slice(0, 8).map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleGrammarTopic(t.label)}
                    className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-400 hover:text-brand-600 transition-colors"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {tutorMessages.map(msg => (
                <TutorMessage key={msg.id} msg={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0">
        <div className="card p-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={currentMode.placeholder}
              rows={2}
              className="flex-1 resize-none bg-transparent outline-none text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
              aria-label="Message to tutor"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="btn-brand btn-icon flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Enter to send • Shift+Enter for new line</p>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-400 text-center mt-2 px-4">
          This tutor uses rule-based responses, not a live AI model. Answers are pre-programmed for common German topics.
        </p>
      </div>
    </div>
  );
}
