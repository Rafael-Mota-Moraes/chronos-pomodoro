import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { state, setState } = useTaskContext();

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '10:10',
      };
    });
  }

  return (
    <form action='' className='form'>
      <button onClick={handleClick} type='button'>
        Clicar
      </button>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='Task'
          title='TITULO'
          placeholder='Digite algo'
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
