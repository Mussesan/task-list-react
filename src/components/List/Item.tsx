import { InterfaceEstudo } from '../../types/estudo';

interface Props extends InterfaceEstudo {
  selecionaEstudo: (selecionaEstudo: InterfaceEstudo) => void
}

export default function Item(
  {
    estudo,
    tempo,
    selecionado,
    completado,
    id,
    selecionaEstudo
  }: Props) {
  console.log('item atual: ', { estudo, tempo, selecionado, completado, id })
  return (
    <li
      className={``}
      onClick={() => selecionaEstudo(
        {
          estudo,
          tempo,
          selecionado,
          completado,
          id
        }
        )}
      >
      <h3>{estudo}</h3>
      <span>{tempo}</span>
    </li>
  )
}