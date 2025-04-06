import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { HomeProps } from '../../pages/Home';

type MainFormProps = {} & HomeProps;

export function MainForm({ state, setState }: MainFormProps) {
  function handleClick(event: any) {
    event.preventDefault();
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }

  return (
    <form action='' className='form'>
      <div>
        <button onClick={handleClick}>Clicar</button>
      </div>
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
        <p>Próximo intervalo é de {state.config.workTime}min</p>
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
