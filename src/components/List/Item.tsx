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
  selected: 'bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 p-[2px] ',
  unselected: 'bg-gradient-to-tl from-gray-700 via-gray-500 to-slate-700 p-[2px] cursor-pointer'
}

const bgColorVariants = {
  selected: `bg-gray-700`,
  unselected: `bg-[#191919]`,
  completed: 'bg-green-500/30 text-gray-700 font-bold border-gray-700 cursor-default'
}

  return (
    <div className={`w-[20rem] md:w-[22rem] lg:w-[28rem] rounded-md mb-2 
    ${selecionado ? borderColorVariants.selected : borderColorVariants.unselected }
    `} >

      <li
        className={` justify-center rounded-md py-2 text-center shadow-black 
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
        <div className={`w-[30%] mx-auto border-b-[1px] border-dotted shadow-lg shadow-rose-100 my-1 
        ${completado ? bgColorVariants.completed : ''}
        `}></div>
        <span>{tempo}</span>
      </li>

    </div>
  )
}