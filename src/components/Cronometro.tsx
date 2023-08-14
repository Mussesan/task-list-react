import { tmpParaSegundos } from "@/common/utils/time";
import { InterfaceEstudo } from "@/types/estudo";
import { useEffect, useState } from "react";
import ComomBtn from "./ComomBtn";

interface Props {
  selecionado: InterfaceEstudo | undefined,
  finalizaEstudo: ()=> void
}

export default function Cronometro({selecionado, finalizaEstudo} : Props){

  const [tempo = 0, setTempo] = useState<number>();

  useEffect(()=>{
    if (selecionado?.tempo){
      setTempo(tmpParaSegundos(selecionado.tempo))
    }
  },[selecionado])

  const horas = Math.floor(tempo / 3600)
  const minutos = Math.floor(tempo % 3600 / 60) 
  const segundos = tempo % 60

  const [horaDezena, horaUnidade] = String(horas).padStart(2,'0')
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0')
  const [segundoDezena, segundosUnidade] = String(segundos).padStart(2,'0')



  function decremenTempo(count: number = 0){

    if (!tempo) {
      window.alert('Selecione ou adicione uma nova tarefa')
    }

    setTimeout(()=>{
      if (count > 0) {
        setTempo(count - 1)
        return decremenTempo(count - 1)
      }
      finalizaEstudo()
      
    },1000)
  }
  
    return (<>
        <div
              className={`sm:w-80 w-52 h-28 md:h-32 bg-slate-500 rounded-lg
              mx-auto justify-center items-center py-3
              `}>
              <div className="flex justify-center items-center">
                <span
                  className={`border-2 rounded-md h-16 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600 py-2 md:py-0
                  `}>{horaDezena}{horaUnidade}
                </span>
                <span className="text-[3rem] md:font-bold">:</span>
                <span
                  className={`border-2 rounded-md h-16 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600 py-2 md:py-0
                  `}>{minutoDezena}{minutoUnidade}
                </span>
                <span className="text-[3rem] md:font-bold sm:font-thin">:</span>
                <span
                  className={`border-2 rounded-md h-16 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600 py-2 md:py-0
                  `}>{segundoDezena}{segundosUnidade}
                </span>
                
              </div>
              <div className="mt-2">
                <ComomBtn onClick={()=> decremenTempo(tempo)}>Começar</ComomBtn>
              </div>
        </div>
    </>)
}