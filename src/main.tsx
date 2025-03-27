import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/theme.css';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1>Olá Mundo!</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ex ipsa
      perferendis sed, dolorum qui officiis sint enim minus ducimus dignissimos
      voluptatum laboriosam? Dicta vel laboriosam libero repellendus odio omnis!
    </p>
  </StrictMode>,
);
