import { useContext } from 'react';
import { TaskContext } from './TeskContext';

export function useTaskContext() {
  return useContext(TaskContext);
}
