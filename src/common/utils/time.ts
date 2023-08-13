import Cronometro from "@/components/Cronometro";
import Form from "@/components/form/Form";

export function tmpParaSegundos(tempo: string){

    const [horas = '00', minutos = '00', segundos = '00'] = tempo.split(':')

    const horasParaSegundos = Number(horas) * 3600
    const minutosParaSegundos = Number(minutos) * 60
    
    return horasParaSegundos + minutosParaSegundos + Number(segundos)
}