import React from 'react';
import { QuizModule, QuizModuleProps } from './QuizModule.tsx';

/**
 * QuizEngine is maintained as a drop-in adapter for backwards compatibility,
 * delegating directly to the enhanced QuizModule.
 */
export const QuizEngine: React.FC<QuizModuleProps> = (props) => {
  return <QuizModule {...props} />;
};

export default QuizEngine;
