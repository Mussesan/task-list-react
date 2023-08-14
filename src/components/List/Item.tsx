import { InterfaceEstudo } from '../../types/estudo';

interface Props extends InterfaceEstudo {
  selecionaEstudo: (selecionaEstudo: InterfaceEstudo) => void
}

export default function Item(
  {
    titulo,
    tempo,
    selecionado,
    completado,
    ativo,
    id,
    selecionaEstudo
  }: Props) {
  console.log('item atual: ', { titulo, tempo, selecionado, completado, ativo, id })

const borderColorVariants = {
  selected: 'bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 p-[2px]'
  ,
  unselected: 'bg-gradient-to-tr from-gray-700 via-gray-500 to-slate-700 p-[2px]'
}

const bgColorVariants = {
  selected: `bg-gray-700`,
  unselected: `bg-[#212121]`,
  completed: 'bg-green-400/30 text-gray-700 font-bold text-'
}

// ${selecionado ? colorVariants.selected : colorVariants.unselected }
  return (
    <div className={`w-[20rem] md:w-[28rem] rounded-md mb-2 
    ${selecionado ? borderColorVariants.selected : borderColorVariants.unselected }
    `} >

      <li
        className={`flex justify-around rounded-md py-2 shadow-black 
        ${selecionado ? bgColorVariants.selected : bgColorVariants.unselected}
        ${completado ? bgColorVariants.completed : ''}
        `} 
        onClick={() => !completado && selecionaEstudo(
          {
            titulo,
            tempo,
            selecionado,
            completado,
            ativo: true,
            id
          })}
        >
        <h3>{titulo}</h3>
        <span>{tempo}</span>
      </li>

    </div>
  )
}