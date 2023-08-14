import React from 'react';
import { InterfaceEstudo } from '../../types/estudo';
import Item from './Item';

interface Props {
  estudos: InterfaceEstudo[],
  selecionaEstudo: (estudoSelecionado: InterfaceEstudo) => void 
}

function Lista({ estudos, selecionaEstudo }: Props) {
  return (
    <aside className='flex justify-center'>
      <ul>
        {estudos.map(item => (
          <Item
            selecionaEstudo={selecionaEstudo}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;