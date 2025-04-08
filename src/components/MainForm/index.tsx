import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('deu certo!');
  }

  return (
    <form onSubmit={handleCreateNewTask} action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='Task'
          title='TITULO'
          placeholder='Digite algo'
          value={taskName}
          onChange={event => setTaskName(event.target.value)}
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
