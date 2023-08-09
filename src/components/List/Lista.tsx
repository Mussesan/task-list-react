import React from 'react';
import { InterfaceEstudo } from '../../types/estudo';
import Item from './Item';

interface Props {
  estudos: InterfaceEstudo[],
  selecionaTarefa: (tarefaSelecionada: InterfaceEstudo) => void 
}

function Lista({ estudos, selecionaTarefa }: Props) {
  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        {estudos.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;