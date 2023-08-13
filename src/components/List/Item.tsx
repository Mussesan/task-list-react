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
    id,
    selecionaEstudo
  }: Props) {
  console.log('item atual: ', { titulo, tempo, selecionado, completado, id })

const borderColorVariants = {
  selected: 'bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 p-[2px]'
  ,
  unselected: 'bg-gradient-to-tr from-gray-700 via-gray-500 to-slate-700 p-[2px]'
}

const bgColorVariants = {
  selected: `bg-gray-700`,
  unselected: `bg-[#212121]`
}

// ${selecionado ? colorVariants.selected : colorVariants.unselected }
  return (
    <div className={`w-full rounded-md mb-2
    ${selecionado ? borderColorVariants.selected : borderColorVariants.unselected }
    `} >

      <li
        className={`flex justify-around rounded-md py-2 shadow-black
        ${selecionado ? bgColorVariants.selected : bgColorVariants.unselected}
        `} 
        onClick={() => selecionaEstudo(
          {
            titulo,
            tempo,
            selecionado,
            completado,
            id
          })}
        >
        <h3>{titulo}</h3>
        <span>{tempo}</span>
      </li>

    </div>
  )
}