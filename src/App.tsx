import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ex ipsa
        perferendis sed, dolorum qui officiis sint enim minus ducimus
        dignissimos voluptatum laboriosam? Dicta vel laboriosam libero
        repellendus odio omnis!
      </p>
    </>
  );
}
