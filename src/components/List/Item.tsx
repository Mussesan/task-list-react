import { InterfaceEstudo } from '../../types/estudo';

interface Props extends InterfaceEstudo {
  selecionaTarefa: (tarefaSelecionada: InterfaceEstudo) => void
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {
  console.log('item atual: ', { tarefa, tempo, selecionado, completado, id })
  return (
    <li
      className={``}
      onClick={() => selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
        )}
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}