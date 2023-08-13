import { tmpParaSegundos } from "@/common/utils/time";
import { InterfaceEstudo } from "@/types/estudo";
import { useEffect, useState } from "react";

interface Props {
  selecionado: InterfaceEstudo | undefined 
}

export default function Cronometro({selecionado} : Props){

  const [tempo = 0, setTempo] = useState<number>();

  useEffect(()=>{
    if (selecionado?.tempo){
      setTempo(tmpParaSegundos(selecionado.tempo))
    }
  },[selecionado])

  const horas = Math.floor(tempo / 3600)
  const minutos = Math.floor(tempo / 60) - Math.floor(tempo / 3600)
  const segundos = tempo % 60

  const [horaDezena, horaUnidade] = String(horas).padStart(2,'0')
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0')
  const [segundoDezena, segundosUnidade] = String(segundos).padStart(2,'0')

  console.log(`Minutos dezena: ${minutoDezena}`)
  console.log(`Minutos unidade: ${minutoUnidade}`)

  console.log(tempo)
  console.log(horas) 
  console.log(minutos)
  
    return (<>
        <div
              className={`sm:w-80 w-52 h-24 md:h-32 bg-slate-500 rounded-lg
              mx-auto flex justify-center items-center
              `}>
              <div className="flex items-center">
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}>{horaDezena}{horaUnidade}
                </span>
                <span className="text-[3rem] md:font-bold">:</span>
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}>{minutoDezena}{minutoUnidade}
                </span>
                <span className="text-[3rem] md:font-bold sm:font-thin">:</span>
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}>{segundoDezena}{segundosUnidade}
                </span>
                
              </div>
            </div>
    </>)
}