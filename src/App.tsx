import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
