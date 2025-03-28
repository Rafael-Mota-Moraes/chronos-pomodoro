import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={1 + 1} attr2='String'>
        Olá Mundo 1
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
